!function(e){function t(t){for(var r,i,l=t[0],u=t[1],s=t[2],f=0,d=[];f<l.length;f++)i=l[f],a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;o.push([97,0]),n()}({107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=h(n(61)),a=h(n(62)),o=h(n(6)),i=h(n(7)),l=h(n(8)),u=h(n(9)),s=n(0),c=h(s),f=h(n(154)),d=h(n(188)),p=h(n(198));n(204);var g=h(n(206));function h(e){return e&&e.__esModule?e:{default:e}}var m=h(n(19)).default.Provider,v=function(e){function t(e){(0,o.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updateState=function(e){n.setState({posts:e})},n.search=function(e){var t=n.state.posts;t.forEach(function(t){t.title.toLowerCase().indexOf(e.toLowerCase())<0?t.show=!1:t.show=!0}),n.setState(Object.assign({},n.state,{posts:t}))},n.updateSetting=function(e,t){switch(e){case"reset":chrome.runtime.sendMessage({type:"reset_settings"}),n.setState({settings:t});break;case"save":chrome.runtime.sendMessage({type:"save_settings",data:t}),n.setState({settings:t})}},n.toggleSettingsPanel=function(){n.setState({settingsPanelOpen:!n.state.settingsPanelOpen})},n.name="Read Later",n.state={posts:[],settings:{},settingsPanelOpen:!1},n.init(),n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"init",value:function(){var e=this;chrome.runtime.sendMessage({type:"get_settings"}),chrome.runtime.onMessage.addListener(function(t){var n=t.type,r=t.data;"return_settings"===n&&e.setState({settings:r})})}},{key:"componentDidMount",value:function(){var e=this,t=[],n=this;chrome.runtime.sendMessage({type:"get_data"}),chrome.runtime.onMessage.addListener(function(){var o=(0,a.default)(r.default.mark(function a(o){var i,l;return r.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(i=o.type,l=o.data,"return_data"!==i){r.next=6;break}return r.next=4,e.getList(l);case 4:t=r.sent,n.setState({posts:t});case 6:case"end":return r.stop()}},a,e)}));return function(e){return o.apply(this,arguments)}}())}},{key:"getList",value:function(e){var t=this;return new Promise(function(n,r){chrome.bookmarks.getChildren(e.id,function(e){e.length||r();var a=[];e.forEach(function(e){t.addPost(e,a)}),n(a)})})}},{key:"getIcon",value:function(e){return this.state.settings.favicon_api?""+this.state.settings.favicon_api+e.replace(/^(https|http):\/\//,""):e.match(/(^[a-zA-z]+:\/\/).*?\//)[0]+"/favicon.ico"}},{key:"addPost",value:function(e,t){var n=e.url,r=e.id,a=e.title,o=this.getIcon(n);t.push({url:n,id:r,title:a,imgsrc:o,show:!0})}},{key:"clear",value:function(){var e=this;chrome.runtime.sendMessage({type:"clear"},function(){e.setState({posts:[]})})}},{key:"render",value:function(){var e={posts:this.state.posts,clear:this.clear.bind(this),settings:this.state.settings,search:this.search,toggleSettingsPanel:this.toggleSettingsPanel};return c.default.createElement(m,{value:e},c.default.createElement(g.default,null,c.default.createElement(f.default,{title:this.name}),c.default.createElement(d.default,{updateState:this.updateState}),c.default.createElement(p.default,{updateSetting:this.updateSetting,settings:this.state.settings,isOpen:this.state.settingsPanelOpen,closeSettingsPanel:this.toggleSettingsPanel})))}}]),t}(s.Component);t.default=v},154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(28)),a=d(n(6)),o=d(n(7)),i=d(n(8)),l=d(n(9)),u=n(159),s=n(0),c=d(s),f=d(n(185));function d(e){return e&&e.__esModule?e:{default:e}}var p=d(n(19)).default.Consumer,g=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,o.default)(t,[{key:"getVersion",value:function(){return chrome.runtime.getManifest().version}},{key:"openSettingsPanel",value:function(){this.props.openSettingsPanel()}},{key:"render",value:function(){var e=this,t=this.props.title;return c.default.createElement(u.StyledRoot,null,c.default.createElement(u.Info,null,c.default.createElement(u.InfoTitle,null,t),c.default.createElement("span",null,this.getVersion())),c.default.createElement(u.SettingsIcon,{title:"settings",onClick:function(){return e.openSettingsPanel()}}),c.default.createElement(u.Contact,null,c.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/itcat99/read-later"},c.default.createElement(u.GitIcon,null)),c.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:boiping2010@gmail.com"},c.default.createElement(u.EmailIcon,null))),c.default.createElement(f.default,null))}}]),t}(s.PureComponent);t.default=function(e){return c.default.createElement(p,null,function(t){var n=t.toggleSettingsPanel;return c.default.createElement(g,(0,r.default)({openSettingsPanel:n},e))})}},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Contact=t.SettingsIcon=t.EmailIcon=t.GitIcon=t.InfoTitle=t.Info=t.StyledRoot=void 0;var r=g(n(16)),a=(0,r.default)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 6px 12px;\n  border-bottom: ",";\n"],["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 6px 12px;\n  border-bottom: ",";\n"]),o=(0,r.default)(["\n  display: flex;\n  align-items: baseline;\n  flex-grow: 1;\n  width: 100%;\n  flex-basis: calc(100% - 20px);\n"],["\n  display: flex;\n  align-items: baseline;\n  flex-grow: 1;\n  width: 100%;\n  flex-basis: calc(100% - 20px);\n"]),i=(0,r.default)(["\n  margin: 0;\n  margin-right: 6px;\n  font-size: 20px;\n  line-height: 30px;\n  color: #4d4d4d;\n"],["\n  margin: 0;\n  margin-right: 6px;\n  font-size: 20px;\n  line-height: 30px;\n  color: #4d4d4d;\n"]),l=(0,r.default)(["\n  display: inline-block;\n  min-width: 16px;\n  height: 16px;\n  background-repeat: no-repeat !important;\n  background-size: 100% !important;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 300ms;\n  }\n"],["\n  display: inline-block;\n  min-width: 16px;\n  height: 16px;\n  background-repeat: no-repeat !important;\n  background-size: 100% !important;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 300ms;\n  }\n"]),u=(0,r.default)(["\n  background: url('../icons/github.svg');\n"],["\n  background: url('../icons/github.svg');\n"]),s=(0,r.default)(["\n  background: url('../icons/email.svg');\n"],["\n  background: url('../icons/email.svg');\n"]),c=(0,r.default)(["\n  background: url('../icons/settings.svg');\n"],["\n  background: url('../icons/settings.svg');\n"]),f=(0,r.default)(["\n  flex-grow: 1;\n  margin-top: 10px;\n  > a {\n    text-decoration: none;\n    margin-right: 4px;\n    &:focus {\n      outline: none;\n    }\n  }\n"],["\n  flex-grow: 1;\n  margin-top: 10px;\n  > a {\n    text-decoration: none;\n    margin-right: 4px;\n    &:focus {\n      outline: none;\n    }\n  }\n"]),d=g(n(17)),p=n(54);function g(e){return e&&e.__esModule?e:{default:e}}t.StyledRoot=d.default.header(a,p.global.border),t.Info=d.default.div(o),t.InfoTitle=d.default.h1(i);var h=d.default.span(l);t.GitIcon=h.extend(u),t.EmailIcon=h.extend(s),t.SettingsIcon=h.extend(c),t.Contact=d.default.div(f)},173:function(e,t){},175:function(e,t){},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(28)),a=f(n(6)),o=f(n(7)),i=f(n(8)),l=f(n(9)),u=f(n(186)),s=n(0),c=f(s);function f(e){return e&&e.__esModule?e:{default:e}}var d=f(n(19)).default.Consumer,p=function(e){function t(e){(0,a.default)(this,t);var n=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.style=u.default,n}return(0,l.default)(t,e),(0,o.default)(t,[{key:"search",value:function(){var e=this,t=null;clearTimeout(t),t=setTimeout(function(){var t=e.input.value;e.searching(t)},300)}},{key:"searching",value:function(e){this.props.search(e)}},{key:"clear",value:function(){this.input.value="",this.props.search("")}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:this.style.core},c.default.createElement("input",{type:"text",placeholder:"please search...",onInput:function(){return e.search()},ref:function(t){e.input=t}}),c.default.createElement("span",{className:this.style.coreRemove,onClick:function(){return e.clear()}}))}}]),t}(s.Component);t.default=function(e){return c.default.createElement(d,null,function(t){var n=t.search;return c.default.createElement(p,(0,r.default)({search:n},e))})}},186:function(e,t,n){"use strict"},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(n(28)),a=m(n(6)),o=m(n(7)),i=m(n(8)),l=m(n(9)),u=m(n(189)),s=n(0),c=m(s),f=m(n(19)),d=m(n(91)),p=m(n(190)),g=m(n(194)),h=m(n(196));function m(e){return e&&e.__esModule?e:{default:e}}var v=f.default.Consumer,y=d.default.Provider,b=function(e){function t(){var e,n,r,o;(0,a.default)(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=(0,i.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.removePost=function(e){r.posts.forEach(function(t,n){t.id===e&&r.posts.splice(n,1)}),chrome.runtime.sendMessage({type:"remove",data:e},function(){r.props.updateState(r.posts)})},o=n,(0,i.default)(r,o)}return(0,l.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.posts;return e&&e.length?(this.posts=e,c.default.createElement(u.default,null,c.default.createElement(y,{value:{removePost:this.removePost}},c.default.createElement(p.default,{posts:e})),c.default.createElement(g.default,null))):c.default.createElement(h.default,null)}}]),t}(s.Component);t.default=function(e){return c.default.createElement(v,null,function(t){return c.default.createElement(b,(0,r.default)({},t,e))})}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,o(n(16)).default)(["\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n  padding: 0;\n  position: relative;\n  flex-grow: 1;\n  max-height: 300px;\n  overflow: hidden;\n"],["\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n  padding: 0;\n  position: relative;\n  flex-grow: 1;\n  max-height: 300px;\n  overflow: hidden;\n"]),a=o(n(17));function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.section(r)},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=(0,r.createContext)()},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(28)),a=d(n(6)),o=d(n(7)),i=d(n(8)),l=d(n(9)),u=n(191),s=n(0),c=d(s),f=d(n(192));function d(e){return e&&e.__esModule?e:{default:e}}var p=d(n(19)).default.Consumer,g=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,o.default)(t,[{key:"getPosts",value:function(){return this.props.posts.map(function(e){var t=e.imgsrc,n=e.title,r=e.url,a=e.id,o=e.show;return c.default.createElement(f.default,{imgsrc:t,url:r,title:n,key:a,id:a,show:o})})}},{key:"render",value:function(){return this.posts=this.getPosts(),c.default.createElement(u.StyledRoot,null,c.default.createElement(u.List,null,this.posts))}}]),t}(s.PureComponent);t.default=function(e){return c.default.createElement(p,null,function(t){var n=t.settings;return c.default.createElement(g,(0,r.default)({},e,{settings:n}))})}},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.StyledRoot=void 0;var r=l(n(16)),a=(0,r.default)(["\n  flex-grow: 1;\n  overflow-x: hidden;\n  height: 300px;\n"],["\n  flex-grow: 1;\n  overflow-x: hidden;\n  height: 300px;\n"]),o=(0,r.default)(["\n  display: flex;\n  padding: 0;\n  list-style: none;\n  flex-flow: column;\n  margin: 0;\n"],["\n  display: flex;\n  padding: 0;\n  list-style: none;\n  flex-flow: column;\n  margin: 0;\n"]),i=l(n(17));function l(e){return e&&e.__esModule?e:{default:e}}t.StyledRoot=i.default.div(a),t.List=i.default.ul(o)},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(28)),a=p(n(6)),o=p(n(7)),i=p(n(8)),l=p(n(9)),u=n(193),s=p(n(4)),c=n(0),f=p(c),d=p(n(19));function p(e){return e&&e.__esModule?e:{default:e}}var g=p(n(91)).default.Consumer,h=d.default.Consumer,m=function(e){function t(e){(0,a.default)(this,t);var n=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setIcon=function(){setTimeout(function(){n.complete||n.el.setAttribute("src",n.props.settings.img_default)},n.props.settings.img_timeout)},n.initLoad=function(e){e&&(n.el=e),n.complete=n.el.complete},n.setIcon(),n}return(0,l.default)(t,e),(0,o.default)(t,[{key:"loadImg",value:function(){this.complete=!0}},{key:"render",value:function(){var e=this.props,t=e.imgsrc,n=e.title,r=e.url,a=e.remove,o=e.id,i=e.show;return f.default.createElement(u.StyledRoot,{show:i},f.default.createElement(u.Icon,{src:t,alt:n,ref:this.initLoad,onLoad:this.loadImg}),f.default.createElement(u.Link,{href:r,target:"_blank",rel:"noopener noreferrer"},n),f.default.createElement(u.RemoveBtn,{onClick:function(){return a(o)},onKeyDown:this.onKeyDown,role:"remove-button"}))}}]),t}(c.Component);m.PropTypes={imgsrc:s.default.string.isRequired};t.default=function(e){return f.default.createElement(h,null,function(t){var n=t.settings;return f.default.createElement(g,null,function(t){var a=t.removePost;return f.default.createElement(m,(0,r.default)({remove:a,settings:n},e))})})}},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StyledRoot=t.RemoveBtn=t.Link=t.Icon=void 0;var r=c(n(16)),a=(0,r.default)(["\n  height: 100%;\n  margin-right: 4px;\n  min-width: 20px;\n"],["\n  height: 100%;\n  margin-right: 4px;\n  min-width: 20px;\n"]),o=(0,r.default)(["\n  flex-grow: 1;\n  margin-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-decoration: none;\n  color: ",";\n  font-size: 13px;\n  &:focus {\n    outline: none;\n    color: #4d4d4d;\n  }\n  &:active {\n    color: #9e9e9e;\n  }\n"],["\n  flex-grow: 1;\n  margin-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-decoration: none;\n  color: ",";\n  font-size: 13px;\n  &:focus {\n    outline: none;\n    color: #4d4d4d;\n  }\n  &:active {\n    color: #9e9e9e;\n  }\n"]),i=(0,r.default)(["\n  min-width: 14px;\n  height: 14px;\n  background: url('../icons/close.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 500ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 500ms;\n  }\n"],["\n  min-width: 14px;\n  height: 14px;\n  background: url('../icons/close.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 500ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 500ms;\n  }\n"]),l=(0,r.default)(["\n  position: relative;\n  display: ",";\n  height: 20px;\n  align-items: center;\n  font-size: ",";\n  background: ",";\n  opacity: 1;\n  padding: 6px 12px;\n  transition: background 200ms;\n  &::before {\n    position: absolute;\n    content: '';\n    display: block;\n    height: 100%;\n    width: 6px;\n    top: 0;\n    left: 0;\n    background-color: rgb(206, 75, 52);\n    opacity: 0;\n    transition: opacity 400ms;\n  }\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    transition: background 400ms;\n    &::before {\n      opacity: 1;\n      transition: opacity 400ms;\n    }\n    "," {\n      transition: opacity 500ms;\n      opacity: 0.5;\n    }\n  }\n"],["\n  position: relative;\n  display: ",";\n  height: 20px;\n  align-items: center;\n  font-size: ",";\n  background: ",";\n  opacity: 1;\n  padding: 6px 12px;\n  transition: background 200ms;\n  &::before {\n    position: absolute;\n    content: '';\n    display: block;\n    height: 100%;\n    width: 6px;\n    top: 0;\n    left: 0;\n    background-color: rgb(206, 75, 52);\n    opacity: 0;\n    transition: opacity 400ms;\n  }\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    transition: background 400ms;\n    &::before {\n      opacity: 1;\n      transition: opacity 400ms;\n    }\n    "," {\n      transition: opacity 500ms;\n      opacity: 0.5;\n    }\n  }\n"]),u=n(54),s=c(n(17));function c(e){return e&&e.__esModule?e:{default:e}}t.Icon=s.default.img(a),t.Link=s.default.a(o,u.global.fontColor);var f=t.RemoveBtn=s.default.span(i);t.StyledRoot=s.default.li(l,function(e){return e.show?"flex":"none"},u.global.fontSize,u.global.bgColor,f)},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(6)),a=c(n(7)),o=c(n(8)),i=c(n(9)),l=c(n(195)),u=n(0),s=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var f=c(n(19)).default.Consumer,d=function(e){function t(e){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,i.default)(t,e),(0,a.default)(t,[{key:"clear",value:function(){this.props.clear()}},{key:"render",value:function(){return s.default.createElement(f,null,function(e){var t=e.clear;return s.default.createElement(l.default,{onClick:t},"Clear")})}}]),t}(u.Component);t.default=d},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,a(n(16)).default)(["\n  border: none;\n  background: rgb(206, 75, 52);\n  color: #fff;\n  padding: 6px;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 300ms;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"],["\n  border: none;\n  background: rgb(206, 75, 52);\n  color: #fff;\n  padding: 6px;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 300ms;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"]);function a(e){return e&&e.__esModule?e:{default:e}}var o=a(n(17)).default.button(r);t.default=o},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(6)),a=c(n(7)),o=c(n(8)),i=c(n(9)),l=c(n(197)),u=n(0),s=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return s.default.createElement(l.default,null,s.default.createElement("p",null," ","Empty list."," "),s.default.createElement("p",null,"you have 2 ways to add post."," "),s.default.createElement("p",null,"1. click context menu 'read later'."," "),s.default.createElement("p",null,"2. 'Ctrl + Shift + M'."," "))}}]),t}(u.PureComponent);t.default=f},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,a(n(16)).default)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"],["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]);function a(e){return e&&e.__esModule?e:{default:e}}var o=a(n(17)).default.div(r);t.default=o},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(6)),a=d(n(7)),o=d(n(8)),i=d(n(9)),l=d(n(199)),u=n(0),s=d(u),c=d(n(92)),f=d(n(201));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,r.default)(this,t);var n=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.folderName=c.default.title,n.style=l.default,n}return(0,i.default)(t,e),(0,a.default)(t,[{key:"save",value:function(){this.props.updateSetting("save",this.tempSettings),this.props.closeSettingsPanel()}},{key:"reset",value:function(){this.tempSettings=Object.assign({},c.default),this.props.updateSetting("reset",this.tempSettings)}},{key:"cancel",value:function(){this.tempSettings=Object.assign({},this.props.settings),this.props.updateSetting("cancel"),this.props.closeSettingsPanel()}},{key:"getItems",value:function(){var e=[],t=!0,n=!1,r=void 0;try{for(var a,o=Object.keys(this.tempSettings)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;e.push(s.default.createElement(f.default,{key:i,name:i,value:this.tempSettings[i],title:i.replace("_"," ").trim(),change:this.change.bind(this)}))}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}return e}},{key:"change",value:function(e){this.tempSettings=Object.assign({},this.tempSettings,e)}},{key:"render",value:function(){var e=this;return this.tempSettings=Object.assign({},this.props.settings),this.items=this.getItems(),s.default.createElement("section",{className:this.props.isOpen?this.style.settings+" "+this.style.open:this.style.settings},s.default.createElement("header",null,"Settings"),s.default.createElement("ul",{className:this.style.list},this.items),s.default.createElement("div",{className:this.style.actions},s.default.createElement("button",{className:this.style.reset,onClick:function(){return e.reset()}},"reset"),s.default.createElement("button",{className:this.style.save,onClick:function(){return e.save()}},"save"),s.default.createElement("button",{onClick:function(){return e.cancel()}},"cancel")))}}]),t}(u.Component);t.default=p},199:function(e,t,n){"use strict"},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(6)),a=c(n(7)),o=c(n(8)),i=c(n(9)),l=c(n(202)),u=n(0),s=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,r.default)(this,t);var n=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.style=l.default,n}return(0,i.default)(t,e),(0,a.default)(t,[{key:"input",value:function(){var e={};e[this.props.name]=this.$input.value,this.props.change(e)}},{key:"componentDidMount",value:function(){this.$input.value=this.props.value}},{key:"componentDidUpdate",value:function(){this.$input.value=this.props.value}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.name;return s.default.createElement("li",{className:this.style.settingsItem},s.default.createElement("label",{htmlFor:r},n,": "),s.default.createElement("input",{type:"text",name:r,id:r,ref:function(t){return e.$input=t},onInput:function(){return e.input()}}))}}]),t}(u.Component);t.default=f},202:function(e,t,n){"use strict"},204:function(e,t,n){"use strict"},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,i(n(16)).default)(["\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  padding: ",";\n  min-height: ",";\n  max-height: ",";\n  width: ",";\n"],["\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  padding: ",";\n  min-height: ",";\n  max-height: ",";\n  width: ",";\n"]),a=n(54),o=i(n(17));function i(e){return e&&e.__esModule?e:{default:e}}var l=a.panel.padding,u=a.panel.heightMin,s=a.panel.heightMax,c=a.panel.width,f=o.default.div(r,l,u,s,c);t.default=f},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={fontSize:"14px",fontColor:"#6e6e6e",borderSize:"1px",borderColor:"#9e9e9e",borderStyle:"solid",bgColor:"#fff"};r.border=r.borderSize+" "+r.borderStyle+" "+r.borderColor;t.global=r,t.panel={width:"320px",heightMin:"300px",heightMax:"500px",margin:0,padding:0},t.header={padding:"6px 12px",info:{margin:0,marginRigth:"6px",fontSize:"20px",lineHeight:"30px",fontColor:"#4d4d4d"}}},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=(0,r.createContext)()},97:function(e,t,n){"use strict";var r=i(n(0)),a=i(n(99)),o=i(n(107));function i(e){return e&&e.__esModule?e:{default:e}}a.default.render(r.default.createElement(o.default,null),document.getElementById("main"))}});