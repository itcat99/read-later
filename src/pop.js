import './style.scss';

window.onload = () => {
  const $main = document.querySelector('main');
  const $list = document.getElementById('list');
  const $clear = document.getElementById('clear');

  let postList = [];

  build();

  /*
   * methods
   */
  async function build() {
    try {
      postList = await getPostList();
      if ($main.className.indexOf('is-empty') >= 0) {
        removeClass($main, 'is-empty')
      }

      buildList();
      buildSearch();

      listener();
    } catch (error) {
      // console.error('ERR => ', error)
      addClass($main, 'is-empty')
    }
  }

  function listener() {
    // list click post
    $list.addEventListener('click', e => {
      const $target = e.target;
      const className = $target.getAttribute('class')
      if (!className) {
        return false;
      }

      // remove a post
      if (className.indexOf('remove') > -1) {
        remove($target);
      }
    })

    // clear all post
    $clear.addEventListener('click', () => {
      chrome.runtime.sendMessage({
        type: 'clear'
      }, () => {
        $list.innerHTML = '';
      })
    })

    // setTimeout val
    let input = null;
    $main.querySelector('.search').addEventListener('input', e => {
      clearTimeout(input);

      input = setTimeout(() => {
        const $target = e.target;
        const val = $target.value;

        searching(val);
      }, 300);
    })

    $main.querySelector('.search .remove').addEventListener('click', () => {
      $main.querySelector('.search input').value = '';
      searching('');
    })
  }


  /*
   * methods
   */
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
      const index = post.index;
      const title = post.info.title.toLowerCase();
      const $post = $posts[index];
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

  function buildList() {
    postList.forEach((post, index) => {
      addPost(post)
    })
  }

  function buildSearch() {
    const $search = createEl('div', {
      class: 'search'
    })
    const $input = createEl('input', {
      type: 'input',
      placeholder: 'please search...'
    })
    const $remove = createEl('span', {
      class: 'remove'
    })

    append($search, [$input, $remove]);
    $main.querySelector('#list').before($search);
  }

  function getPostList() {
    return new Promise((resolve, reject) => {
      let list = [];

      chrome.storage.sync.get(null, data => {
        if (!data.readLaterList) {
          // return false;
          reject();
        };

        list = [].concat(data.readLaterList);

        resolve(list);
      })
    })
  }

  function remove($target) {
    const $parent = $target.parentNode;
    const index = $parent.dataset.index;

    chrome.runtime.sendMessage({
      type: 'remove',
      data: index
    }, () => {
      $parent.remove()
    });
  }

  function addPost(details) {
    const {
      url,
      index,
      info
    } = details;

    const $item = createEl('li', {
      'data-index': index,
      'class': 'item'
    })
    const $link = createEl('a', {
      'href': url,
      'class': 'link',
      'target': '_blank'
    })
    const $remove = createEl('span', {
      'class': 'remove'
    })
    const $num = createEl('span', {
      'class': 'num'
    })
    const $icon = getIcon(info);

    // set modules attribute
    $link.innerHTML = info.title;
    $num.innerHTML = `${index}.`;

    // append modules to post item
    append($item, [$num, $icon, $link, $remove]);

    // append post item to post list
    append($list, $item);
  }

  // create && return $img element
  function getIcon(info) {
    const {
      favIconUrl
    } = info;
    const $img = createEl('img');

    if (favIconUrl && favIconUrl !== '') {
      $img.setAttribute('src', favIconUrl);
      return $img;
    };

    const {
      url
    } = info;

    $img.setAttribute('src', `http://www.google.com/s2/favicons?domain=${url.replace(/^(https|http):\/\//, '')}`);
    return $img;
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