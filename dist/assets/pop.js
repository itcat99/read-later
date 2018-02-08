webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

window.onload = function () {
  var info = void 0;

  var $header = document.querySelector('header');
  var $main = document.querySelector('main');
  var $listWrap = document.querySelector('#list');
  var $list = $listWrap.querySelector('#list ul');
  var $clear = document.getElementById('clear');
  var $scroll = void 0,
      $handlebar = void 0;

  var postList = [];

  /*
   * initializtion
   */

  // ==== get post list data ==== //
  chrome.runtime.sendMessage({
    type: 'get_data'
  }, function (data) {
    console.log('popup get  data', data);
  });

  // ==== create post list item on HTML ==== //
  chrome.runtime.onMessage.addListener(function (details) {
    var type = details.type,
        data = details.data;


    if (type === 'return_data') {
      updateList(data);
    }
  });

  // ==== listenning Event ==== //
  listener();

  /*
   * Core
   */
  function updateList(data) {
    console.log(data);
    if (!Object.keys(data).length) {
      addClass($main, 'is-empty');
      return;
    }

    chrome.bookmarks.getChildren(data.id, function (result) {
      if (!result.length) {
        addClass($main, 'is-empty');
        return;
      }

      result.forEach(function (bk) {
        addPost(bk);
      });
    });
  }

  function removePost($target) {
    var $parent = $target.parentNode;
    var id = $parent.dataset.id;

    chrome.runtime.sendMessage({
      type: 'remove',
      data: id
    }, function () {
      $parent.remove();
    });
  }

  function addPost(details) {
    var url = details.url,
        id = details.id,
        title = details.title;


    var $item = createEl('li', {
      'data-id': id,
      'class': 'item'
    });
    var $link = createEl('a', {
      'href': url,
      'class': 'link',
      'target': '_blank'
    });
    var $remove = createEl('span', {
      'class': 'remove'
    });
    // const $num = createEl('span', {
    //   'class': 'num'
    // })
    // const $icon = getIcon(info);

    // set modules attribute
    $link.innerHTML = title;
    // $num.innerHTML = `${index}.`;

    // append modules to post item
    // append($item, [$icon, $link, $remove]);
    append($item, [$link, $remove]);

    // append post item to post list
    append($list, $item);

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
      title: title,
      id: id,
      url: url,
      el: $item
    });
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
    $list.addEventListener('click', function (e) {
      var $target = e.target;
      var className = $target.getAttribute('class');
      if (!className) {
        return false;
      }

      // remove a post
      if (className.indexOf('remove') > -1) {
        removePost($target);
      }
    });
  }

  function bindClear() {
    // clear all post
    $clear.addEventListener('click', function () {
      chrome.runtime.sendMessage({
        type: 'clear'
      }, function () {
        $list.innerHTML = '';
      });
    });
  }

  function bindSearch() {
    // setTimeout val
    var input = null;
    $header.querySelector('.search').addEventListener('input', function (e) {
      clearTimeout(input);

      input = setTimeout(function () {
        var $target = e.target;
        var val = $target.value;

        searching(val);
      }, 300);
    });

    // clear input
    $header.querySelector('.search .remove').addEventListener('click', function () {
      $header.querySelector('.search input').value = '';
      searching('');
    });
  }

  // ==== searching ==== //
  function searching(val) {
    var $posts = $list.querySelectorAll('.item');
    if (!$posts.length) {
      return false;
    }

    if (!val) {
      $posts.forEach(function ($post) {
        removeClass($post, 'hidden');
      });
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = postList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var post = _step.value;

        var id = post.id;
        var title = post.title.toLowerCase();
        var $post = post.el;
        var className = $post.className;

        if (title.indexOf(val.toLowerCase()) < 0) {
          if (className.indexOf('hidden') >= 0) {
            continue;
          }

          addClass($post, 'hidden');
        } else {
          removeClass($post, 'hidden');
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
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
    var _this = this;

    var ratio = $listWrap.clientHeight / $list.clientHeight;
    var handlebarHeight = ratio * $listWrap.clientHeight;
    var moveSize = $listWrap.clientHeight - handlebarHeight;

    $handlebar.style.height = handlebarHeight + 'px';
    // $handlebar.removeEventListener('mousedown');

    $handlebar.addEventListener('mousedown', function (e) {
      return mouseDown.apply(_this, [e, moveSize]);
    });
  }

  function mouseDown(e, moveSize) {
    // const {e, moveSize} = props;
    console.log('mouse down');

    var oldY = parseFloat($handlebar.style.transform.split(',')[1], 10) || 0;
    var startY = e.clientY;

    function mousemove(e) {
      var size = oldY + e.clientY - startY;
      size = Math.max(0, Math.min(size, moveSize));
      $handlebar.style.transform = 'translate3d(0, ' + size + 'px, 0)';

      var scrollTop = size / moveSize * ($list.clientHeight - $listWrap.clientHeight);
      $scroll.style.transform = 'translate3d(0, ' + scrollTop + 'px, 0)';
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
    var favIconUrl = info.favIconUrl;

    var $img = createEl('img');

    if (favIconUrl && favIconUrl !== '') {
      $img.setAttribute('src', favIconUrl);
      return $img;
    };

    var url = info.url;


    $img.setAttribute('src', 'http://www.google.com/s2/favicons?domain=' + url.replace(/^(https|http):\/\//, ''));
    return $img;
  }
};

/*
 * utils
 */
function append(target, children) {
  if (!Array.isArray(children)) {
    target.appendChild(children);
  } else {
    children.forEach(function (child) {
      target.appendChild(child);
    });
  }
}

function createEl(target, attrs) {
  var $target = document.createElement(target);
  if (attrs) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = Object.keys(attrs)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;

        $target.setAttribute(key, attrs[key]);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return $target;
}

function addClass(el, className) {
  className = className.trim().split(' ');
  var oldClassName = el.className.trim().split(' ');
  var newClassName = [].concat(oldClassName, className);

  el.setAttribute('class', newClassName.toString().replace(',', ' '));
}

function removeClass(el, className) {
  className = className.trim().split(' ');

  className.forEach(function (item) {
    el.setAttribute('class', el.className.replace(item, '').trim());
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);