import './style.scss';

window.onload = () => {
  const $list = document.getElementById('list');
  const $clear = document.getElementById('clear');

  let postList = [];

  // get postList
  chrome.storage.local.get(null, data => {
    console.dir(data);

    if (!data.readLaterList) {
      return false;
    };

    postList = [].concat(data.readLaterList);
    console.log('post list', data)
    if (!postList) {
      return false;
    };

    postList.forEach(post => {
      addPost(post)
    })
  })

  listener();

  /*
   * utils
   */
  function listener() {
    // remove a post
    $list.addEventListener('click', e => {
      const $target = e.target;
      const className = $target.getAttribute('class')
      if (!className || className.indexOf('remove') < 0) {
        return false;
      }

      const $parent = $target.parentNode;
      const index = $parent.dataset.index;

      chrome.runtime.sendMessage({
        type: 'remove',
        data: index
      }, () => {
        console.log('remove one.')
        $parent.remove()
      });
    })

    // clear all post
    $clear.addEventListener('click', () => {
      chrome.runtime.sendMessage({
        type: 'clear'
      }, () => {
        $list.innerHTML = '';
      })
    })
  }


  /*
   * utils
   */
  function addPost(details) {
    const {url, index, info} = details;
    // const info = await getTabInfo();

    const $item = document.createElement('li');
    const $link = document.createElement('a');
    const $remove = document.createElement('span');
    const $num = document.createElement('span');
    const $icon = getIcon(info);
    console.log('$icon => ', $icon)
    $link.setAttribute('href', url);
    $link.innerHTML = info.title;
    // $remove.innerHTML = 'X';
    $num.innerHTML = `${index}.`;

    $item.setAttribute('data-index', index);
    $item.setAttribute('class', 'item');
    $link.setAttribute('class', 'link');
    $remove.setAttribute('class', 'remove');
    $num.setAttribute('class', 'num');

    $item.appendChild($num);
    $item.appendChild($icon);
    $item.appendChild($link);
    $item.appendChild($remove);

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