webpackJsonp([0],{37:function(e,t,n){"use strict";var r=i(n(21)),a=i(n(22));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){Array.isArray(t)?t.forEach(function(t){e.appendChild(t)}):e.appendChild(t)}function o(e,t){var n=document.createElement(e);if(t){var r=!0,a=!1,i=void 0;try{for(var c,o,u=Object.keys(t)[Symbol.iterator]();!(r=(c=u.next()).done);r=!0)o=c.value,n.setAttribute(o,t[o])}catch(e){a=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}}return n}function u(e,t){t=t.trim().split(" ");var n=e.className.trim().split(" "),r=[].concat(n,t);e.setAttribute("class",r.toString().replace(","," "))}function s(e,t){(t=t.trim().split(" ")).forEach(function(t){e.setAttribute("class",e.className.replace(t,"").trim())})}n(75),window.onload=function(){var e=function(){var e=(0,a.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(e,t){var n=[];chrome.storage.sync.get(null,function(r){r.readLaterList&&Array.isArray(r.readLaterList)&&r.readLaterList.length||t(),n=[].concat(r.readLaterList),e(n)})});case 3:f=e.sent,0<=n.className.indexOf("is-empty")&&s(n,"is-empty"),f.forEach(function(e){!function(e){var t=e.url,n=e.index,r=e.info,a=o("li",{"data-index":n,class:"item"}),u=o("a",{href:t,class:"link",target:"_blank"}),s=o("span",{class:"remove"}),l=o("span",{class:"num"}),f=function(e){var t=e.favIconUrl,n=o("img");if(t&&""!==t)return n.setAttribute("src",t),n;var r=e.url;return n.setAttribute("src","http://www.google.com/s2/favicons?domain="+r.replace(/^(https|http):\/\//,"")),n}(r);u.innerHTML=r.title,l.innerHTML=n+".",c(a,[f,u,s]),c(i,a)}(e)}),d(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u(n,"is-empty");case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),t=document.querySelector("header"),n=document.querySelector("main"),i=document.getElementById("list"),l=document.getElementById("clear"),f=[];function d(){i.addEventListener("click",function(e){var t=e.target,n=t.getAttribute("class");return!!n&&void(-1<n.indexOf("remove")&&function(e){var t=e.parentNode,n=t.dataset.index;chrome.runtime.sendMessage({type:"remove",data:n},function(){t.remove()})}(t))}),l.addEventListener("click",function(){chrome.runtime.sendMessage({type:"clear"},function(){i.innerHTML=""})});var e=null;t.querySelector(".search").addEventListener("input",function(t){clearTimeout(e),e=setTimeout(function(){m(t.target.value)},300)}),t.querySelector(".search .remove").addEventListener("click",function(){t.querySelector(".search input").value="",m("")})}function m(e){var t=i.querySelectorAll(".item");if(!t.length)return!1;e||t.forEach(function(e){s(e,"hidden")});var n=!0,r=!1,a=void 0;try{for(var c,o=f[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var l=c.value,d=l.index,m=l.info.title.toLowerCase(),v=t[d],p=v.className;if(0>m.indexOf(e.toLowerCase())){if(0<=p.indexOf("hidden"))continue;u(v,"hidden")}else s(v,"hidden")}}catch(e){r=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}}e()}},75:function(e,t){}},[37]);