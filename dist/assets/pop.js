!function(e){function t(t){for(var o,i,l=t[0],u=t[1],s=t[2],c=0,f=[];c<l.length;c++)i=l[c],r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=u;a.push([79,0]),n()}({141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=f(n(16)),r=f(n(5)),a=f(n(6)),i=f(n(7)),l=f(n(8)),u=n(142),s=n(0),d=f(s),c=f(n(156));function f(e){return e&&e.__esModule?e:{default:e}}var p=f(n(15)).default.Consumer,g=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,a.default)(t,[{key:"getVersion",value:function(){return chrome.runtime.getManifest().version}},{key:"openSettingsPanel",value:function(){this.props.openSettingsPanel()}},{key:"render",value:function(){var e=this,t=this.props.title;return d.default.createElement(u.StyledRoot,null,d.default.createElement(u.Info,null,d.default.createElement(u.InfoTitle,null,t),d.default.createElement("span",null,this.getVersion())),d.default.createElement(u.SettingsIcon,{title:"settings",onClick:function(){return e.openSettingsPanel()}}),d.default.createElement(u.Contact,null,d.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/itcat99/read-later"},d.default.createElement(u.GitIcon,null)),d.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:boiping2010@gmail.com"},d.default.createElement(u.EmailIcon,null))),d.default.createElement(c.default,null))}}]),t}(s.PureComponent);t.default=function(e){return d.default.createElement(p,null,function(t){var n=t.toggleSettingsPanel;return d.default.createElement(g,(0,o.default)({openSettingsPanel:n},e))})}},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Contact=t.SettingsIcon=t.EmailIcon=t.GitIcon=t.InfoTitle=t.Info=t.StyledRoot=void 0;var o=g(n(9)),r=(0,o.default)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 6px 12px;\n  border-bottom: ",";\n"],["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 6px 12px;\n  border-bottom: ",";\n"]),a=(0,o.default)(["\n  display: flex;\n  align-items: baseline;\n  flex-grow: 1;\n  width: 100%;\n  flex-basis: calc(100% - 20px);\n"],["\n  display: flex;\n  align-items: baseline;\n  flex-grow: 1;\n  width: 100%;\n  flex-basis: calc(100% - 20px);\n"]),i=(0,o.default)(["\n  margin: 0;\n  margin-right: 6px;\n  font-size: 20px;\n  line-height: 30px;\n  color: #4d4d4d;\n"],["\n  margin: 0;\n  margin-right: 6px;\n  font-size: 20px;\n  line-height: 30px;\n  color: #4d4d4d;\n"]),l=(0,o.default)(["\n  display: inline-block;\n  min-width: 16px;\n  height: 16px;\n  background-repeat: no-repeat !important;\n  background-size: 100% !important;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 300ms;\n  }\n"],["\n  display: inline-block;\n  min-width: 16px;\n  height: 16px;\n  background-repeat: no-repeat !important;\n  background-size: 100% !important;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 300ms;\n  }\n"]),u=(0,o.default)(["\n  background: url('../icons/github.svg');\n"],["\n  background: url('../icons/github.svg');\n"]),s=(0,o.default)(["\n  background: url('../icons/email.svg');\n"],["\n  background: url('../icons/email.svg');\n"]),d=(0,o.default)(["\n  background: url('../icons/settings.svg');\n"],["\n  background: url('../icons/settings.svg');\n"]),c=(0,o.default)(["\n  flex-grow: 1;\n  margin-top: 10px;\n  > a {\n    text-decoration: none;\n    margin-right: 4px;\n    &:focus {\n      outline: none;\n    }\n  }\n"],["\n  flex-grow: 1;\n  margin-top: 10px;\n  > a {\n    text-decoration: none;\n    margin-right: 4px;\n    &:focus {\n      outline: none;\n    }\n  }\n"]),f=g(n(10)),p=n(32);function g(e){return e&&e.__esModule?e:{default:e}}t.StyledRoot=f.default.header(r,p.global.border),t.Info=f.default.div(a),t.InfoTitle=f.default.h1(i);var h=f.default.span(l);t.GitIcon=h.extend(u),t.EmailIcon=h.extend(s),t.SettingsIcon=h.extend(d),t.Contact=f.default.div(c)},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=(0,o.createContext)()},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(16)),r=c(n(5)),a=c(n(6)),i=c(n(7)),l=c(n(8)),u=n(157),s=n(0),d=c(s);function c(e){return e&&e.__esModule?e:{default:e}}var f=c(n(15)).default.Consumer,p=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,a.default)(t,[{key:"search",value:function(){var e=this,t=null;clearTimeout(t),t=setTimeout(function(){var t=e.input.value;e.searching(t)},300)}},{key:"searching",value:function(e){this.props.search(e)}},{key:"clear",value:function(){this.input.value="",this.props.search("")}},{key:"render",value:function(){var e=this;return d.default.createElement(u.StyleRoot,null,d.default.createElement("input",{type:"text",placeholder:"please search...",onInput:function(){return e.search()},ref:function(t){e.input=t}}),d.default.createElement(u.RemoveBtn,{onClick:function(){return e.clear()}}))}}]),t}(s.Component);t.default=function(e){return d.default.createElement(f,null,function(t){var n=t.search;return d.default.createElement(p,(0,o.default)({search:n},e))})}},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StyleRoot=t.RemoveBtn=void 0;var o=u(n(9)),r=(0,o.default)(["\n  position: absolute;\n  min-width: 14px;\n  height: 14px;\n  opacity: 0;\n  top: 50%;\n  right: 6px;\n  transform: translateY(-50%);\n  transition: opacity 400ms;\n  background: url('../../icons/close.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n"],["\n  position: absolute;\n  min-width: 14px;\n  height: 14px;\n  opacity: 0;\n  top: 50%;\n  right: 6px;\n  transform: translateY(-50%);\n  transition: opacity 400ms;\n  background: url('../../icons/close.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n"]),a=(0,o.default)(["\n  position: relative;\n  width: 120px;\n  height: 24px;\n  box-sizing: border-box;\n  padding: 2px 6px;\n  border: ",";\n  border-radius: 3px;\n  > input {\n    width: 100%;\n    height: 100%;\n    border: none;\n    padding: 0;\n    &:focus {\n      outline: none;\n    }\n  }\n\n  &:hover "," {\n    opacity: 0.5;\n    transition: opacity 400ms;\n  }\n"],["\n  position: relative;\n  width: 120px;\n  height: 24px;\n  box-sizing: border-box;\n  padding: 2px 6px;\n  border: ",";\n  border-radius: 3px;\n  > input {\n    width: 100%;\n    height: 100%;\n    border: none;\n    padding: 0;\n    &:focus {\n      outline: none;\n    }\n  }\n\n  &:hover "," {\n    opacity: 0.5;\n    transition: opacity 400ms;\n  }\n"]),i=n(32),l=u(n(10));function u(e){return e&&e.__esModule?e:{default:e}}var s=t.RemoveBtn=l.default.span(r);t.StyleRoot=l.default.div(a,i.global.border,s)},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=b(n(16)),r=b(n(5)),a=b(n(6)),i=b(n(7)),l=b(n(8)),u=n(159),s=b(u),d=n(0),c=b(d),f=b(n(15)),p=b(n(74)),g=b(n(160)),h=b(n(164)),m=b(n(166)),v=b(n(168)),y=b(n(170));function b(e){return e&&e.__esModule?e:{default:e}}var x=f.default.Consumer,_=p.default.Provider,k=function(e){function t(){var e,n,o,a;(0,r.default)(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=o=(0,i.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.removePost=function(e){o.posts.forEach(function(t,n){t.id===e&&o.posts.splice(n,1)}),chrome.runtime.sendMessage({type:"remove",data:e},function(){o.props.updateState(o.posts)})},a=n,(0,i.default)(o,a)}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props.posts;return e&&e.length?(this.posts=e,c.default.createElement(s.default,null,c.default.createElement(v.default,null),c.default.createElement(_,{value:{removePost:this.removePost}},c.default.createElement(g.default,{posts:e})),c.default.createElement(u.ControlBar,null,c.default.createElement(h.default,null),c.default.createElement(y.default,null)))):c.default.createElement(m.default,null)}}]),t}(d.Component);t.default=function(e){return c.default.createElement(x,null,function(t){return c.default.createElement(k,(0,o.default)({},t,e))})}},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ControlBar=void 0;var o=l(n(9)),r=(0,o.default)(["\n  display: flex;\n  flex-wrap: nowrap;\n  height: 26px;\n  width: 100%;\n"],["\n  display: flex;\n  flex-wrap: nowrap;\n  height: 26px;\n  width: 100%;\n"]),a=(0,o.default)(["\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n  padding: 0;\n  position: relative;\n  flex-grow: 1;\n  max-height: 300px;\n  overflow: hidden;\n"],["\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n  padding: 0;\n  position: relative;\n  flex-grow: 1;\n  max-height: 300px;\n  overflow: hidden;\n"]),i=l(n(10));function l(e){return e&&e.__esModule?e:{default:e}}t.ControlBar=i.default.section(r);t.default=i.default.section(a)},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=f(n(16)),r=f(n(5)),a=f(n(6)),i=f(n(7)),l=f(n(8)),u=n(161),s=n(0),d=f(s),c=f(n(162));function f(e){return e&&e.__esModule?e:{default:e}}var p=f(n(15)).default.Consumer,g=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,a.default)(t,[{key:"getPosts",value:function(){return this.props.posts.map(function(e){var t=e.imgsrc,n=e.title,o=e.url,r=e.id,a=e.show;return d.default.createElement(c.default,{imgsrc:t,url:o,title:n,key:r,id:r,show:a})})}},{key:"render",value:function(){var e=this.getPosts();return d.default.createElement(u.StyledRoot,null,d.default.createElement(u.List,null,e))}}]),t}(s.Component);t.default=function(e){return d.default.createElement(p,null,function(t){var n=t.settings;return d.default.createElement(g,(0,o.default)({},e,{settings:n}))})}},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.StyledRoot=void 0;var o=l(n(9)),r=(0,o.default)(["\n  flex-grow: 1;\n  overflow-x: hidden;\n  height: 300px;\n"],["\n  flex-grow: 1;\n  overflow-x: hidden;\n  height: 300px;\n"]),a=(0,o.default)(["\n  display: flex;\n  padding: 0;\n  list-style: none;\n  flex-flow: column;\n  margin: 0;\n"],["\n  display: flex;\n  padding: 0;\n  list-style: none;\n  flex-flow: column;\n  margin: 0;\n"]),i=l(n(10));function l(e){return e&&e.__esModule?e:{default:e}}t.StyledRoot=i.default.div(r),t.List=i.default.ul(a)},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=p(n(16)),r=p(n(5)),a=p(n(6)),i=p(n(7)),l=p(n(8)),u=n(163),s=p(n(4)),d=n(0),c=p(d),f=p(n(15));function p(e){return e&&e.__esModule?e:{default:e}}var g=p(n(74)).default.Consumer,h=f.default.Consumer,m=function(e){function t(){var e,n,o,a;(0,r.default)(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=o=(0,i.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.setIcon=function(){setTimeout(function(){o.complete||o.$icon.setAttribute("src",o.props.settings.img_default)},o.props.settings.img_timeout)},o.initLoad=function(e){if(!e)return!1;o.$icon=e,o.complete=o.$icon.complete},o.loadImg=function(){o.complete=!0},a=n,(0,i.default)(o,a)}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.setIcon()}},{key:"render",value:function(){var e=this.props,t=e.imgsrc,n=e.title,o=e.url,r=e.remove,a=e.id,i=e.show;return c.default.createElement(u.StyledRoot,{show:i},c.default.createElement(u.Icon,{src:t,alt:n,innerRef:this.initLoad,onLoad:this.loadImg}),c.default.createElement(u.Link,{href:o,target:"_blank",rel:"noopener noreferrer"},n),c.default.createElement(u.RemoveBtn,{onClick:function(){return r(a)},onKeyDown:this.onKeyDown,role:"remove-button"}))}}]),t}(d.PureComponent);m.PropTypes={imgsrc:s.default.string.isRequired};t.default=function(e){return c.default.createElement(h,null,function(t){var n=t.settings;return c.default.createElement(g,null,function(t){var r=t.removePost;return c.default.createElement(m,(0,o.default)({remove:r,settings:n},e))})})}},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StyledRoot=t.RemoveBtn=t.Link=t.Icon=void 0;var o=d(n(9)),r=(0,o.default)(["\n  height: 100%;\n  margin-right: 4px;\n  min-width: 20px;\n"],["\n  height: 100%;\n  margin-right: 4px;\n  min-width: 20px;\n"]),a=(0,o.default)(["\n  flex-grow: 1;\n  margin-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-decoration: none;\n  color: ",";\n  font-size: 13px;\n  &:focus {\n    outline: none;\n    color: #4d4d4d;\n  }\n  &:active {\n    color: #9e9e9e;\n  }\n"],["\n  flex-grow: 1;\n  margin-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-decoration: none;\n  color: ",";\n  font-size: 13px;\n  &:focus {\n    outline: none;\n    color: #4d4d4d;\n  }\n  &:active {\n    color: #9e9e9e;\n  }\n"]),i=(0,o.default)(["\n  min-width: 14px;\n  height: 14px;\n  background: url('../icons/close.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 500ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 500ms;\n  }\n"],["\n  min-width: 14px;\n  height: 14px;\n  background: url('../icons/close.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 500ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 500ms;\n  }\n"]),l=(0,o.default)(["\n  position: relative;\n  display: ",";\n  height: 20px;\n  align-items: center;\n  font-size: ",";\n  background: ",";\n  opacity: 1;\n  padding: 6px 12px;\n  transition: background 200ms;\n  &::before {\n    position: absolute;\n    content: '';\n    display: block;\n    height: 100%;\n    width: 6px;\n    top: 0;\n    left: 0;\n    background-color: rgb(206, 75, 52);\n    opacity: 0;\n    transition: opacity 400ms;\n  }\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    transition: background 400ms;\n    &::before {\n      opacity: 1;\n      transition: opacity 400ms;\n    }\n    "," {\n      transition: opacity 500ms;\n      opacity: 0.5;\n    }\n  }\n"],["\n  position: relative;\n  display: ",";\n  height: 20px;\n  align-items: center;\n  font-size: ",";\n  background: ",";\n  opacity: 1;\n  padding: 6px 12px;\n  transition: background 200ms;\n  &::before {\n    position: absolute;\n    content: '';\n    display: block;\n    height: 100%;\n    width: 6px;\n    top: 0;\n    left: 0;\n    background-color: rgb(206, 75, 52);\n    opacity: 0;\n    transition: opacity 400ms;\n  }\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    transition: background 400ms;\n    &::before {\n      opacity: 1;\n      transition: opacity 400ms;\n    }\n    "," {\n      transition: opacity 500ms;\n      opacity: 0.5;\n    }\n  }\n"]),u=n(32),s=d(n(10));function d(e){return e&&e.__esModule?e:{default:e}}t.Icon=s.default.img(r),t.Link=s.default.a(a,u.global.fontColor);var c=t.RemoveBtn=s.default.span(i);t.StyledRoot=s.default.li(l,function(e){return e.show?"flex":"none"},u.global.fontSize,u.global.bgColor,c)},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n(5)),r=d(n(6)),a=d(n(7)),i=d(n(8)),l=d(n(165)),u=n(0),s=d(u);function d(e){return e&&e.__esModule?e:{default:e}}var c=d(n(15)).default.Consumer,f=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement(c,null,function(e){var t=e.preClear;return s.default.createElement(l.default,{onClick:t},"Clear")})}}]),t}(u.PureComponent);t.default=f},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(0,r(n(9)).default)(["\n  flex-grow: 5;\n  border: none;\n  background: rgb(206, 75, 52);\n  color: #fff;\n  padding: 4px;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 300ms;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"],["\n  flex-grow: 5;\n  border: none;\n  background: rgb(206, 75, 52);\n  color: #fff;\n  padding: 4px;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 300ms;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"]);function r(e){return e&&e.__esModule?e:{default:e}}var a=r(n(10)).default.button(o);t.default=a},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n(5)),r=d(n(6)),a=d(n(7)),i=d(n(8)),l=d(n(167)),u=n(0),s=d(u);function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement(l.default,null,s.default.createElement("p",null," ","Empty list."," "),s.default.createElement("p",null,"you have 2 ways to add post."," "),s.default.createElement("p",null,"1. click context menu 'read later'."," "),s.default.createElement("p",null,"2. 'Ctrl + Shift + M'."," "))}}]),t}(u.PureComponent);t.default=c},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(0,r(n(9)).default)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"],["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]);function r(e){return e&&e.__esModule?e:{default:e}}var a=r(n(10)).default.div(o);t.default=a},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(16)),r=c(n(5)),a=c(n(6)),i=c(n(7)),l=c(n(8)),u=n(0),s=c(u),d=n(169);function c(e){return e&&e.__esModule?e:{default:e}}var f=c(n(15)).default.Consumer,p=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.maskShow,n=e.clear,o=e.cancelClear;return s.default.createElement(d.StyleRoot,{show:t},s.default.createElement(d.Alert,null,s.default.createElement(d.Choose,null,"Are you sure?"),s.default.createElement(d.Submit,{onClick:n},"Sure"),s.default.createElement(d.Cancel,{onClick:o},"Cancel")))}}]),t}(u.PureComponent);t.default=function(e){return s.default.createElement(f,null,function(t){return s.default.createElement(p,(0,o.default)({},e,t))})}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=t.Cancel=t.Submit=t.Choose=t.StyleRoot=void 0;var o=c(n(9)),r=(0,o.default)(["\n  display: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  text-align: center;\n"],["\n  display: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  text-align: center;\n"]),a=(0,o.default)(["\n  width: 100%;\n  height: 100px;\n  line-height: 100px;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n"],["\n  width: 100%;\n  height: 100px;\n  line-height: 100px;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n"]),i=(0,o.default)(["\n  height: 26px;\n  border-radius: 0;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"],["\n  height: 26px;\n  border-radius: 0;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"]),l=(0,o.default)(["\n  background-color: rgb(206, 75, 52);\n"],["\n  background-color: rgb(206, 75, 52);\n"]),u=(0,o.default)(["\n  background-color: #515151;\n"],["\n  background-color: #515151;\n"]),s=(0,o.default)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n"],["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n"]),d=c(n(10));function c(e){return e&&e.__esModule?e:{default:e}}t.StyleRoot=d.default.div(r,function(e){return e.show?"block":"none"}),t.Choose=d.default.div(a);var f=d.default.button(i);t.Submit=f.extend(l),t.Cancel=f.extend(u),t.Alert=d.default.div(s)},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=f(n(16)),r=f(n(5)),a=f(n(6)),i=f(n(7)),l=f(n(8)),u=n(0),s=f(u),d=f(n(15)),c=n(171);function f(e){return e&&e.__esModule?e:{default:e}}var p=d.default.Consumer,g=function(e){function t(){var e,n,o,a;(0,r.default)(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=o=(0,i.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.getNetscapeBookmarkFormat=function(){var e=o.props,t=e.posts,n=e.settings,r="";return t.forEach(function(e){var t=e.url,n=e.title,o=e.dateAdded;r+='<DT><A HREF="'+t+'" ADD_DATE="'+o+'">'+n+"</A>"}),"\n    <!DOCTYPE NETSCAPE-Bookmark-file-1>\n    \x3c!--This is an automatically generated file.\n    It will be read and overwritten.\n    Do Not Edit! --\x3e\n    <Title>Bookmarks</Title>\n    <H1>Bookmarks</H1>\n    <DT><H3 FOLDED>"+n.title+"</H3>\n    <DL><p>\n    "+r+"\n    </DL><p>\n    "},a=n,(0,i.default)(o,a)}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e="data:text/html;charset=utf-8,"+this.getNetscapeBookmarkFormat(),t=new Date;return s.default.createElement(c.StyleRoot,{data:e,download:"readLater_"+t.getFullYear()+"_"+t.getMonth()+"_"+t.getDate()+"_"+t.getHours()+t.getMinutes()+t.getSeconds()+".html"},"export")}}]),t}(u.Component);t.default=function(e){return s.default.createElement(p,null,function(t){return s.default.createElement(g,(0,o.default)({},e,t))})}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StyleRoot=void 0;var o=(0,a(n(9)).default)(["\n  text-align: center;\n  flex-grow: 1;\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  text-decoration: none;\n  padding: 4px;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"],["\n  text-align: center;\n  flex-grow: 1;\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  text-decoration: none;\n  padding: 4px;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"]),r=a(n(10));function a(e){return e&&e.__esModule?e:{default:e}}t.StyleRoot=r.default.a.attrs({href:function(e){return e.data},download:function(e){return e.download}})(o)},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=f(n(5)),r=f(n(6)),a=f(n(7)),i=f(n(8)),l=n(173),u=n(0),s=f(u),d=f(n(75)),c=f(n(174));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,o.default)(this,t);var n=(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.folderName=d.default.title,n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"save",value:function(){this.props.updateSetting("save",this.tempSettings),this.props.closeSettingsPanel()}},{key:"reset",value:function(){this.tempSettings=Object.assign({},d.default),this.props.updateSetting("reset",this.tempSettings)}},{key:"cancel",value:function(){this.tempSettings=Object.assign({},this.props.settings),this.props.updateSetting("cancel"),this.props.closeSettingsPanel()}},{key:"getItems",value:function(){var e=[],t=!0,n=!1,o=void 0;try{for(var r,a=Object.keys(this.tempSettings)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var i=r.value;e.push(s.default.createElement(c.default,{key:i,name:i,value:this.tempSettings[i],title:i.replace("_"," ").trim(),change:this.change.bind(this)}))}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}return e}},{key:"change",value:function(e){this.tempSettings=Object.assign({},this.tempSettings,e)}},{key:"render",value:function(){var e=this;return this.tempSettings=Object.assign({},this.props.settings),this.items=this.getItems(),s.default.createElement(l.StyleRoot,{isOpen:this.props.isOpen},s.default.createElement("header",null,"Settings"),s.default.createElement(l.List,null,this.items),s.default.createElement(l.Actions,null,s.default.createElement(l.ResetBtn,{onClick:function(){return e.reset()}},"reset"),s.default.createElement(l.SaveBtn,{onClick:function(){return e.save()}},"save"),s.default.createElement(l.Btn,{onClick:function(){return e.cancel()}},"cancel")))}}]),t}(u.Component);t.default=p},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SaveBtn=t.ResetBtn=t.Actions=t.Btn=t.List=t.StyleRoot=void 0;var o=c(n(9)),r=(0,o.default)(["\n  display: ",";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #eee;\n  flex-direction: column;\n  z-index: 9;\n  header {\n    font-size: 20px;\n    margin-bottom: 10px;\n    padding: 10px;\n  }\n"],["\n  display: ",";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #eee;\n  flex-direction: column;\n  z-index: 9;\n  header {\n    font-size: 20px;\n    margin-bottom: 10px;\n    padding: 10px;\n  }\n"]),a=(0,o.default)(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]),i=(0,o.default)(["\n  flex-grow: 1;\n  height: 26px;\n  border-radius: 0;\n  border: none;\n  background-color: rgba(44, 44, 44, 0.5);\n  color: #fff;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 0.5;\n    transition: opacity 300ms;\n  }\n"],["\n  flex-grow: 1;\n  height: 26px;\n  border-radius: 0;\n  border: none;\n  background-color: rgba(44, 44, 44, 0.5);\n  color: #fff;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 0.5;\n    transition: opacity 300ms;\n  }\n"]),l=(0,o.default)(["\n  display: flex;\n  ",";\n"],["\n  display: flex;\n  ",";\n"]),u=(0,o.default)(["\n  background-color: rgb(75, 52, 206);\n"],["\n  background-color: rgb(75, 52, 206);\n"]),s=(0,o.default)(["\n  background-color: rgb(206, 75, 52);\n"],["\n  background-color: rgb(206, 75, 52);\n"]),d=c(n(10));function c(e){return e&&e.__esModule?e:{default:e}}t.StyleRoot=d.default.section(r,function(e){return e.isOpen?"flex":"none"}),t.List=d.default.ul(a);var f=t.Btn=d.default.button(i);t.Actions=d.default.div(l,f),t.ResetBtn=f.extend(u),t.SaveBtn=f.extend(s)},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n(5)),r=d(n(6)),a=d(n(7)),i=d(n(8)),l=n(175),u=n(0),s=d(u);function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"input",value:function(){var e={};e[this.props.name]=this.$input.value,this.props.change(e)}},{key:"componentDidMount",value:function(){this.$input.value=this.props.value}},{key:"componentDidUpdate",value:function(){this.$input.value=this.props.value}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,o=t.name;return s.default.createElement(l.StyleRoot,null,s.default.createElement("label",{htmlFor:o},n,": "),s.default.createElement("input",{type:"text",name:o,id:o,ref:function(t){return e.$input=t},onInput:function(){return e.input()}}))}}]),t}(u.PureComponent);t.default=c},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StyleRoot=void 0;var o=(0,a(n(9)).default)(["\n  display: flex;\n  margin-bottom: 6px;\n  padding: 2px 10px;\n  align-items: center;\n  height: 18px;\n\n  label {\n    margin-right: 12px;\n    flex-basis: 30%;\n  }\n\n  input {\n    height: 100%;\n    border: none;\n    border-bottom: 1px solid #ccc;\n    background-color: #eee;\n    flex-grow: 1;\n    padding: 4px 10px;\n\n    &:focus {\n      outline: none;\n      border-bottom-color: rgba(75, 52, 206, 0.5);\n    }\n  }\n"],["\n  display: flex;\n  margin-bottom: 6px;\n  padding: 2px 10px;\n  align-items: center;\n  height: 18px;\n\n  label {\n    margin-right: 12px;\n    flex-basis: 30%;\n  }\n\n  input {\n    height: 100%;\n    border: none;\n    border-bottom: 1px solid #ccc;\n    background-color: #eee;\n    flex-grow: 1;\n    padding: 4px 10px;\n\n    &:focus {\n      outline: none;\n      border-bottom-color: rgba(75, 52, 206, 0.5);\n    }\n  }\n"]),r=a(n(10));function a(e){return e&&e.__esModule?e:{default:e}}t.StyleRoot=r.default.li(o)},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(0,i(n(9)).default)(["\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  padding: ",";\n  min-height: ",";\n  max-height: ",";\n  width: ",";\n"],["\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  padding: ",";\n  min-height: ",";\n  max-height: ",";\n  width: ",";\n"]),r=n(32),a=i(n(10));function i(e){return e&&e.__esModule?e:{default:e}}var l=r.panel.padding,u=r.panel.heightMin,s=r.panel.heightMax,d=r.panel.width,c=a.default.div(o,l,u,s,d);t.default=c},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={fontSize:"14px",fontColor:"#6e6e6e",borderSize:"1px",borderColor:"#9e9e9e",borderStyle:"solid",bgColor:"#fff"};o.border=o.borderSize+" "+o.borderStyle+" "+o.borderColor;t.global=o,t.panel={width:"320px",heightMin:"300px",heightMax:"500px",margin:0,padding:0},t.header={padding:"6px 12px",info:{margin:0,marginRigth:"6px",fontSize:"20px",lineHeight:"30px",fontColor:"#4d4d4d"}}},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=(0,o.createContext)()},79:function(e,t,n){"use strict";var o=i(n(0)),r=i(n(81)),a=i(n(89));function i(e){return e&&e.__esModule?e:{default:e}}r.default.render(o.default.createElement(a.default,null),document.getElementById("main"))},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=v(n(16)),r=v(n(96)),a=v(n(56)),i=v(n(57)),l=v(n(5)),u=v(n(6)),s=v(n(7)),d=v(n(8)),c=n(0),f=v(c),p=v(n(141)),g=v(n(158)),h=v(n(172)),m=v(n(176));function v(e){return e&&e.__esModule?e:{default:e}}var y=v(n(15)).default.Provider,b=function(e){function t(e){(0,l.default)(this,t);var n=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updateState=function(e){n.setState({posts:e})},n.search=function(e){var t=n.state.posts;t.forEach(function(t){t.title.toLowerCase().indexOf(e.toLowerCase())<0?t.show=!1:t.show=!0}),n.setState(Object.assign({},n.state,{posts:t}))},n.preClear=function(){n.setState({maskShow:!0})},n.cancelClear=function(){n.setState({maskShow:!1})},n.clear=function(){chrome.runtime.sendMessage({type:"clear"},function(){n.setState({posts:[],maskShow:!1})})},n.updateSetting=function(e,t){switch(e){case"reset":chrome.runtime.sendMessage({type:"reset_settings"}),n.setState({settings:t});break;case"save":chrome.runtime.sendMessage({type:"save_settings",data:t}),n.setState({settings:t})}},n.toggleSettingsPanel=function(){n.setState({settingsPanelOpen:!n.state.settingsPanelOpen})},n.name="Read Later",n.state={posts:[],settings:{},settingsPanelOpen:!1,maskShow:!1},n.init(),n}return(0,d.default)(t,e),(0,u.default)(t,[{key:"init",value:function(){var e=this;chrome.runtime.sendMessage({type:"get_settings"}),chrome.runtime.onMessage.addListener(function(t){var n=t.type,o=t.data;"return_settings"===n&&e.setState({settings:o})})}},{key:"componentDidMount",value:function(){var e=this,t=[],n=this;chrome.runtime.sendMessage({type:"get_data"}),chrome.runtime.onMessage.addListener(function(){var o=(0,i.default)(a.default.mark(function o(r){var i,l;return a.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(i=r.type,l=r.data,"return_data"!==i){o.next=6;break}return o.next=4,e.getList(l);case 4:t=o.sent,n.setState({posts:t});case 6:case"end":return o.stop()}},o,e)}));return function(e){return o.apply(this,arguments)}}())}},{key:"getList",value:function(e){var t=this;return new Promise(function(n,o){chrome.bookmarks.getChildren(e.id,function(e){e.length||o();var r=[];e.forEach(function(e){t.addPost(e,r)}),n(r)})})}},{key:"getIcon",value:function(e){return this.state.settings.favicon_api?""+this.state.settings.favicon_api+e.replace(/^(https|http):\/\//,""):e.match(/(^[a-zA-z]+:\/\/).*?\//)[0]+"/favicon.ico"}},{key:"addPost",value:function(e,t){var n=e.url,a=e.id,i=e.title,l=(0,r.default)(e,["url","id","title"]),u=this.getIcon(n);t.push((0,o.default)({url:n,id:a,title:i,imgsrc:u,show:!0},l))}},{key:"render",value:function(){var e={posts:this.state.posts,preClear:this.preClear,clear:this.clear,cancelClear:this.cancelClear,settings:this.state.settings,search:this.search,toggleSettingsPanel:this.toggleSettingsPanel,maskShow:this.state.maskShow};return f.default.createElement(y,{value:e},f.default.createElement(m.default,null,f.default.createElement(p.default,{title:this.name}),f.default.createElement(g.default,{updateState:this.updateState}),f.default.createElement(h.default,{updateSetting:this.updateSetting,settings:this.state.settings,isOpen:this.state.settingsPanelOpen,closeSettingsPanel:this.toggleSettingsPanel})))}}]),t}(c.Component);t.default=b}});