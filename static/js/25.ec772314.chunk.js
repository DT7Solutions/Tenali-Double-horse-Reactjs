(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StickyContainer=t.Sticky=void 0;var r=o(n(75)),a=o(n(76));function o(e){return e&&e.__esModule?e:{default:e}}t.Sticky=r.default,t.StickyContainer=a.default,t.default=r.default},424:function(e,t,n){"use strict";n.r(t);var r=n(49),a=n(50),o=n(53),c=n(51),i=n(52),l=n(0),u=n.n(l),s=n(71),f=n.n(s),m=n(117),p=n(61),d=n(59),b=n(10),h=n(56),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).IncrementItem=function(e){e.qty=e.qty+1,n.setState({cartitem:n.state.cartitem,priceTotal:h.reduce(function(e,t){return e+t.price*t.qty},0)})},n.DecreaseItem=function(e){e.qty=e.qty-1,n.setState({cartitem:n.state.cartitem,priceTotal:h.reduce(function(e,t){return e+t.price*t.qty},0)})},n.state={priceTotal:h.reduce(function(e,t){return e+t.price*t.qty},0),cartitem:h},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("section",{className:"section"},u.a.createElement("div",{className:"container"},u.a.createElement("table",{className:"ct-responsive-table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:"remove-item"}),u.a.createElement("th",null,"Product"),u.a.createElement("th",null,"Price"),u.a.createElement("th",null,"Qunantity"),u.a.createElement("th",null,"Total"))),u.a.createElement("tbody",null,h.map(function(t,n){return u.a.createElement("tr",{key:n},u.a.createElement("td",{className:"remove"},u.a.createElement("button",{type:"button",className:"close-btn close-danger remove-from-cart"},u.a.createElement("span",null),u.a.createElement("span",null))),u.a.createElement("td",{"data-title":"Product"},u.a.createElement("div",{className:"cart-product-wrapper"},u.a.createElement("img",{src:"./"+t.img,alt:t.name}),u.a.createElement("div",{className:"cart-product-body"},u.a.createElement("h6",null," ",u.a.createElement(b.c,{to:"/menu-item-v1/1"},t.name)," "),t.flavours.map(function(e,t){return u.a.createElement("p",{key:t},e)})))),u.a.createElement("td",{"data-title":"Price"}," ",u.a.createElement("strong",null,(new Intl.NumberFormat).format(t.price.toFixed(2)),"$")," "),u.a.createElement("td",{className:"quantity","data-title":"Quantity"},u.a.createElement("div",{className:"qty"},u.a.createElement("span",{className:"qty-subtract",onClick:function(){return e.DecreaseItem(t)}},u.a.createElement("i",{className:"fa fa-minus"})),u.a.createElement("input",{type:"text",name:"clicks",value:t.qty,readOnly:!0}),u.a.createElement("span",{className:"qty-add",onClick:function(){return e.IncrementItem(t)}},u.a.createElement("i",{className:"fa fa-plus"})))),u.a.createElement("td",{"data-title":"Total"}," ",u.a.createElement("strong",null,(new Intl.NumberFormat).format((t.price*t.qty).toFixed(2)),"$")," "))}))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-5"},u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement("div",{className:"input-group mb-0"},u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Coupon Code","aria-label":"Coupon Code"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn-custom shadow-none",type:"button"},"Apply")))))),u.a.createElement("div",{className:"row ct-cart-form"},u.a.createElement("div",{className:"offset-lg-6 col-lg-6"},u.a.createElement("h4",null,"Cart Total"),u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Subtotal"),u.a.createElement("td",null,(new Intl.NumberFormat).format(this.state.priceTotal.toFixed(2)),"$")),u.a.createElement("tr",null,u.a.createElement("th",null,"Tax"),u.a.createElement("td",null," ",9.99,"$ ",u.a.createElement("span",{className:"small"},"(11%)")," ")),u.a.createElement("tr",null,u.a.createElement("th",null,"Total"),u.a.createElement("td",null," ",u.a.createElement("b",null,(new Intl.NumberFormat).format((this.state.priceTotal+9.99).toFixed(2)),"$")," ")))),u.a.createElement("button",{type:"submit",className:"btn-custom primary btn-block"},"Proceeed to Checkout")))))}}]),t}(l.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement(l.Fragment,null,u.a.createElement(f.a,null,u.a.createElement("title",null,"Slices - React Template | ","Cart"),u.a.createElement("meta",{name:"description",content:"#"})),u.a.createElement(m.a,null),u.a.createElement(p.a,{breadcrumb:{pagename:"Cart"}}),u.a.createElement(y,null),u.a.createElement(d.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}}))}}]),t}(l.Component);t.default=v},61:function(e,t,n){"use strict";var r=n(49),a=n(50),o=n(53),c=n(51),i=n(52),l=n(0),u=n.n(l),s=n(10),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"subheader-inner"},u.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ol",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item "},u.a.createElement(s.c,{to:"/"},"Home")),u.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(l.Component);t.a=f},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=l(a),c=l(n(7)),i=l(n(5));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={isSticky:!1,wasSticky:!1,style:{}},r.handleContainerEvent=function(e){var t=e.distanceFromTop,n=e.distanceFromBottom,a=e.eventSource,o=r.context.getParent(),c=!1;r.props.relative&&(c=a!==o,t=-(a.scrollTop+a.offsetTop)+r.placeholder.offsetTop);var i=r.placeholder.getBoundingClientRect(),l=r.content.getBoundingClientRect().height,u=n-r.props.bottomOffset-l,s=!!r.state.isSticky,f=c?s:t<=-r.props.topOffset&&n>-r.props.bottomOffset;n=(r.props.relative?o.scrollHeight-o.scrollTop:n)-l;var m=f?{position:"fixed",top:u>0?r.props.relative?o.offsetTop-o.offsetParent.scrollTop:0:u,left:i.left,width:i.width}:{};r.props.disableHardwareAcceleration||(m.transform="translateZ(0)"),r.setState({isSticky:f,wasSticky:s,distanceFromTop:t,distanceFromBottom:n,calculatedHeight:l,style:m})},u(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentWillMount",value:function(){if(!this.context.subscribe)throw new TypeError("Expected Sticky to be mounted within StickyContainer");this.context.subscribe(this.handleContainerEvent)}},{key:"componentWillUnmount",value:function(){this.context.unsubscribe(this.handleContainerEvent)}},{key:"componentDidUpdate",value:function(){this.placeholder.style.paddingBottom=this.props.disableCompensation?0:(this.state.isSticky?this.state.calculatedHeight:0)+"px"}},{key:"render",value:function(){var e=this,t=o.default.cloneElement(this.props.children({isSticky:this.state.isSticky,wasSticky:this.state.wasSticky,distanceFromTop:this.state.distanceFromTop,distanceFromBottom:this.state.distanceFromBottom,calculatedHeight:this.state.calculatedHeight,style:this.state.style}),{ref:function(t){e.content=c.default.findDOMNode(t)}});return o.default.createElement("div",null,o.default.createElement("div",{ref:function(t){return e.placeholder=t}}),t)}}]),t}();s.propTypes={topOffset:i.default.number,bottomOffset:i.default.number,relative:i.default.bool,children:i.default.func.isRequired},s.defaultProps={relative:!1,topOffset:0,bottomOffset:0,disableCompensation:!1,disableHardwareAcceleration:!1},s.contextTypes={subscribe:i.default.func,unsubscribe:i.default.func,getParent:i.default.func},t.default=s},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),c=u(o),i=u(n(5)),l=u(n(77));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],r.subscribers=[],r.rafHandle=null,r.subscribe=function(e){r.subscribers=r.subscribers.concat(e)},r.unsubscribe=function(e){r.subscribers=r.subscribers.filter(function(t){return t!==e})},r.notifySubscribers=function(e){if(!r.framePending){var t=e.currentTarget;r.rafHandle=(0,l.default)(function(){r.framePending=!1;var e=r.node.getBoundingClientRect(),n=e.top,a=e.bottom;r.subscribers.forEach(function(e){return e({distanceFromTop:n,distanceFromBottom:a,eventSource:t===window?document.body:r.node})})}),r.framePending=!0}},r.getParent=function(){return r.node},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),a(t,[{key:"getChildContext",value:function(){return{subscribe:this.subscribe,unsubscribe:this.unsubscribe,getParent:this.getParent}}},{key:"componentDidMount",value:function(){var e=this;this.events.forEach(function(t){return window.addEventListener(t,e.notifySubscribers)})}},{key:"componentWillUnmount",value:function(){var e=this;this.rafHandle&&(l.default.cancel(this.rafHandle),this.rafHandle=null),this.events.forEach(function(t){return window.removeEventListener(t,e.notifySubscribers)})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",r({},this.props,{ref:function(t){return e.node=t},onScroll:this.notifySubscribers,onTouchStart:this.notifySubscribers,onTouchMove:this.notifySubscribers,onTouchEnd:this.notifySubscribers}))}}]),t}();f.childContextTypes={subscribe:i.default.func,unsubscribe:i.default.func,getParent:i.default.func},t.default=f},77:function(e,t,n){(function(t){for(var r=n(78),a="undefined"===typeof window?t:window,o=["moz","webkit"],c="AnimationFrame",i=a["request"+c],l=a["cancel"+c]||a["cancelRequest"+c],u=0;!i&&u<o.length;u++)i=a[o[u]+"Request"+c],l=a[o[u]+"Cancel"+c]||a[o[u]+"CancelRequest"+c];if(!i||!l){var s=0,f=0,m=[];i=function(e){if(0===m.length){var t=r(),n=Math.max(0,1e3/60-(t-s));s=n+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=function(){if(!e[n].cancelled)try{e[n].callback(s)}catch(t){setTimeout(function(){throw t},0)}},n=0;n<e.length;n++)t()},Math.round(n))}return m.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return i.call(a,e)},e.exports.cancel=function(){l.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=i,e.cancelAnimationFrame=l}}).call(this,n(16))},78:function(e,t,n){(function(t){(function(){var n,r,a,o,c,i;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-c)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),i=1e9*t.uptime(),c=o-i):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n(79))},79:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var l,u=[],s=!1,f=-1;function m(){s&&l&&(s=!1,l.length?u=l.concat(u):f=-1,u.length&&p())}function p(){if(!s){var e=i(m);s=!0;for(var t=u.length;t;){for(l=u,u=[];++f<t;)l&&l[f].run();f=-1,t=u.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||s||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}}]);
//# sourceMappingURL=25.ec772314.chunk.js.map