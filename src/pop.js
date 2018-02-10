import './style.scss';
import config from './config'

const VERSION = chrome.runtime.getManifest().version;
window.onload = () => {
  let info;

  const $header = document.querySelector('header');
  const $main = document.querySelector('main');
  const $listWrap = document.querySelector('#list');
  const $list = $listWrap.querySelector('#list ul');
  const $clear = document.getElementById('clear');
  let $scroll, $handlebar;

  let postList = [];

  /*
   * initializtion
   */
  // ==== set version ==== //
  $header.querySelector('.version').innerHTML = VERSION;
  // ==== get post list data ==== //
  chrome.runtime.sendMessage({
    type: 'get_data'
  });

  // ==== create post list item on HTML ==== //
  chrome.runtime.onMessage.addListener(details => {
    const {
      type,
      data
    } = details;

    if (type === 'return_data') {
      updateList(data);
    }
  })

  // ==== listenning Event ==== //
  listener();

  /*
   * Core
   */
  function updateList(data) {
    if (!Object.keys(data).length) {
      addClass($main, 'is-empty');
      return;
    }

    chrome.bookmarks.getChildren(data.id, result => {
      if (!result.length) {
        addClass($main, 'is-empty');
        return;
      }

      result.forEach(bk => {
        addPost(bk);
      })
    })
  }

  function removePost($target) {
    const $parent = $target.parentNode;
    const id = $parent.dataset.id;

    chrome.runtime.sendMessage({
      type: 'remove',
      data: id
    }, () => {
      $parent.remove()
    });
  }

  function addPost(details) {
    const {
      url,
      id,
      title
    } = details;

    const $item = createEl('li', {
      'data-id': id,
      'class': 'item'
    })
    const $link = createEl('a', {
      'href': url,
      'class': 'item-link',
      'target': '_blank',
      'title': title
    })
    const $remove = createEl('span', {
      'class': 'remove'
    })
    const $icon = getIcon({url});

    // set modules attribute
    $link.innerHTML = title;

    // append modules to post item
    append($item, [$icon, $link, $remove]);

    // append post item to post list
    append($list, $item);

    // load icon, if get icon time out, use config.img_default facicon
    loadIcon($icon);

    // show scroll
    if (!$scroll) {
      if ($list.clientHeight > $listWrap.clientHeight) {
        showScroll();
      } else {
        removeScroll();
      }
    }

    // push to postList
    postList.push({
      title,
      id,
      url,
      el: $item
    })
  }

  function listener() {
    bindRemove();
    bindClear();
    bindSearch();
  }

  /*
   * methods
   */

  // ==== bind event ==== //
  function bindRemove() {
    // list click post
    $list.addEventListener('click', e => {
      const $target = e.target;
      const className = $target.getAttribute('class')
      if (!className) {
        return false;
      }

      // remove a post
      if (className.indexOf('remove') > -1) {
        removePost($target);
      }
    })
  }

  function bindClear() {
    // clear all post
    $clear.addEventListener('click', () => {
      chrome.runtime.sendMessage({
        type: 'clear'
      }, () => {
        $list.innerHTML = '';
      })
    })
  }

  function bindSearch() {
    // setTimeout val
    let input = null;
    $header.querySelector('.search').addEventListener('input', e => {
      clearTimeout(input);

      input = setTimeout(() => {
        const $target = e.target;
        const val = $target.value;

        searching(val);
      }, 300);
    })


    // clear input
    $header.querySelector('.search .remove').addEventListener('click', () => {
      $header.querySelector('.search input').value = '';
      searching('');
    })
  }

  // ==== searching ==== //
  function searching(val) {
    const $posts = $list.querySelectorAll('.item');
    if (!$posts.length) {
      return false;
    }

    if (!val) {
      $posts.forEach($post => {
        removeClass($post, 'hidden');
      })
    }

    for (let post of postList) {
      const id = post.id;
      const title = post.title.toLowerCase();
      const $post = post.el;
      const className = $post.className;

      if (title.indexOf(val.toLowerCase()) < 0) {
        if (className.indexOf('hidden') >= 0) {
          continue;
        }

        addClass($post, 'hidden');
      } else {
        removeClass($post, 'hidden');
      }
    }
  }

  // ==== scrollbar ==== //
  function showScroll() {
    addClass($main, 'scroll-show');
    $scroll = $listWrap.querySelector('.scroll');
    $handlebar = $scroll.querySelector('.scroll-handle');

    updateScroll();
  }

  function removeScroll() {
    removeClass($main, 'scroll-show');
    // $handlebar.removeEventListener('mousedown', e => mouseDown.apply(this, [e, moveSize]));

    $scroll = null;
    $handlebar = null;
  }

  function updateScroll() {
    const ratio = $listWrap.clientHeight / $list.clientHeight;
    const handlebarHeight = ratio * $listWrap.clientHeight;
    const moveSize = $listWrap.clientHeight - handlebarHeight;

    $handlebar.style.height = `${handlebarHeight}px`;
    // $handlebar.removeEventListener('mousedown');

    $handlebar.addEventListener('mousedown', e => mouseDown.apply(this, [e, moveSize]))
  }

  function mouseDown(e, moveSize) {
    const oldY = parseFloat($handlebar.style.transform.split(',')[1], 10) || 0;
    const startY = e.clientY;

    function mousemove(e) {
      let size = oldY + e.clientY - startY;
      size = Math.max(0, Math.min(size, moveSize));
      $handlebar.style.transform = `translate3d(0, ${size}px, 0)`;

      let scrollTop = (size / moveSize) * ($list.clientHeight - $listWrap.clientHeight);
      $scroll.style.transform = `translate3d(0, ${scrollTop}px, 0)`
      $listWrap.scrollTop = scrollTop;
    }

    function mouseup(e) {
      $handlebar.removeEventListener('mousemove', mousemove);
      $handlebar.removeEventListener('mouseup', mouseup);
    }

    $handlebar.addEventListener('mousemove', mousemove);
    $handlebar.addEventListener('mouseup', mouseup);
  }

  // ==== get website favIcon ==== //
  function getIcon(info) {
    const $img = createEl('img',{
      'class': 'item-icon'
    });

    const {
      url
    } = info;

    $img.setAttribute('src', `${config['favicon_api']}${url.replace(/^(https|http):\/\//, '')}`);
    return $img;
  }

  function loadIcon($icon){
    let complete = $icon.complete;
    $icon.addEventListener('load', load);

    function load(){
      complete = true;
    }

    setTimeout(() => {
      if(!complete){
        $icon.setAttribute('src', config['img_default']);
        $icon.removeEventListener('load', load);
      }
    }, config['img_timeout']);
  }
}

/*
 * utils
 */
function append(target, children) {
  if (!Array.isArray(children)) {
    target.appendChild(children)
  } else {
    children.forEach(child => {
      target.appendChild(child);
    })
  }
}

function createEl(target, attrs) {
  const $target = document.createElement(target);
  if (attrs) {
    for (let key of Object.keys(attrs)) {
      $target.setAttribute(key, attrs[key]);
    }
  }

  return $target;
}

function addClass(el, className) {
  className = className.trim().split(' ');
  let oldClassName = el.className.trim().split(' ');
  const newClassName = [].concat(oldClassName, className);

  el.setAttribute('class', newClassName.toString().replace(',', ' '));
}

function removeClass(el, className) {
  className = className.trim().split(' ');

  className.forEach(item => {
    el.setAttribute('class', el.className.replace(item, '').trim());
  })
}