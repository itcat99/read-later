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
        $main.setAttribute('class', $main.className.replace('is-empty').trim());
      }

      buildList();
      buildSearch();

      listener();
    } catch (error) {
      $main.setAttribute('class', 'is-empty');
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

    $main.querySelector('.search').addEventListener('input', e => {
      clearTimeout(input);
      const input = setTimeout(() => {
        const $target = e.target;
        const val = $target.value;

        searching(val);
      }, 100);
    })

    $main.querySelector('.search .remove').addEventListener('click', () => {
      $main.querySelector('.search input').value = '';
      searching('');
    })
  }


  /*
   * utils
   */
  function searching(val) {
    for (let post of postList) {
      const index = post.index;
      const title = post.info.title.toLowerCase();
      const $post = $list.querySelectorAll('.item')[index];
      const className = $post.className;

      if (title.indexOf(val.toLowerCase()) < 0) {
        if (className.indexOf('hidden') >= 0) {
          continue;
        }

        $post.setAttribute('class', `${className} hidden`)
      } else {
        $post.setAttribute('class', className.replace('hidden', '').trim());
      }
    }
  }

  function buildList() {
    postList.forEach((post, index) => {
      addPost(post)
    })
  }

  function buildSearch() {
    const $search = document.createElement('div');
    const $input = document.createElement('input');
    const $remove = document.createElement('span');

    $input.setAttribute('type', 'input');
    $input.setAttribute('placeholder', 'please search...');
    $search.setAttribute('class', 'search');
    $remove.setAttribute('class', 'remove');

    $search.appendChild($input);
    $search.appendChild($remove);
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

    // build post item modules
    const $item = document.createElement('li');
    const $link = document.createElement('a');
    const $remove = document.createElement('span');
    const $num = document.createElement('span');
    const $icon = getIcon(info);

    // set modules attribute
    $link.setAttribute('href', url);
    $link.innerHTML = info.title;
    $num.innerHTML = `${index}.`;

    $item.setAttribute('data-index', index);
    $item.setAttribute('class', 'item');
    $link.setAttribute('class', 'link');
    $link.setAttribute('target', '_blank');
    $remove.setAttribute('class', 'remove');
    $num.setAttribute('class', 'num');

    // append modules to post item
    $item.appendChild($num);
    $item.appendChild($icon);
    $item.appendChild($link);
    $item.appendChild($remove);

    // append post item to post list
    $list.appendChild($item);
  }

  // create && return $img element
  function getIcon(info) {
    const {
      favIconUrl
    } = info;
    const $img = document.createElement('img');

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