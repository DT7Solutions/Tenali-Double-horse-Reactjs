(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,a=[],o=[];return e.forEach(function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?n=e:"meta"===r?a.push(e):o.push(e)}),[t].concat((c=function(e){var t={};l.forEach(function(e){t[e]=[]});for(var n=[],a=function(a){var o=e[a],c=o.props.id;(c?!t.id[c]:0===r.filter(function(e){var n=o.props[e],a=t[e][n];return a&&!a.props.id}).length)&&(n.unshift(o),l.forEach(function(e){var n=o.props[e];n&&(t[e][n]=o)}))},o=e.length-1;o>=0;o--)a(o);return n}(a),function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(c)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),[n],o);var c},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return a.reduce(function(n,a){var r,l=e.getAttribute(a);return l?n.concat((r=t.querySelectorAll("[".concat(a,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter(function(e){return!e.id}))):n},[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),a=0,r=t.length;a<r;a++)n.appendChild(t[a]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,a=t.length;n<a;n++)e.removeChild(t[n])};var a=["property","name","itemprop"],r=a.concat(["itemProp"]),l=r.concat(["id"])},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),l=(a=n(81))&&a.__esModule?a:{default:a};function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,u(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.Component),n=t,(a=[{key:"render",value:function(){return r.default.createElement(l.default,null,r.default.createElement("title",null,this.props.title))}}])&&c(n.prototype,a),o&&c(n,o),t}();t.default=m,e.exports=t.default},414:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(50),l=n(53),o=n(51),c=n(52),i=n(0),u=n.n(i),s=n(65),m=n.n(s),f=n(4),p=n(55),d=n(87),h=n(58),b=n(88),y=n(62),g=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("ul",{className:"navbar-nav "},y.length>0?y.slice(0,2).map(function(t,n){return u.a.createElement("li",{key:n,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?u.a.createElement(f.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):u.a.createElement(f.c,{to:t.link}," ",t.linkText," "),t.child?u.a.createElement("ul",{className:"submenu",role:"menu"},t.submenu.map(function(e,t){return u.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?u.a.createElement(f.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):u.a.createElement(f.c,{to:e.link}," ",e.linkText," "),e.submenu?u.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return u.a.createElement("li",{className:"menu-item",key:t},u.a.createElement(f.c,{to:e.link},e.linkText))})):null)})):null)}):null,u.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},u.a.createElement(f.c,{to:"/menu-v1"},"Products")),y.length>0?y.slice(4,10).map(function(t,n){return u.a.createElement("li",{key:n,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?u.a.createElement(f.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):u.a.createElement(f.c,{to:t.link}," ",t.linkText," "),t.child?u.a.createElement("ul",{className:"sub-menu",role:"menu"},t.submenu.map(function(e,t){return u.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?u.a.createElement(f.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):u.a.createElement(f.c,{to:e.link}," ",e.linkText," "),e.submenu?u.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,t){return u.a.createElement("li",{className:"menu-item",key:t},u.a.createElement(f.c,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),t}(i.Component),E=n(54),v=n.n(E),k=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(i.Fragment,null,u.a.createElement("div",{className:"cart-sidebar-wrapper"},u.a.createElement("aside",{className:v()("cart-sidebar",{"cart-open":this.state.cartmethod})},u.a.createElement("div",{className:"cart-sidebar-header"},u.a.createElement("h3",null,"Your Cart"),u.a.createElement("div",{className:"close-btn cart-trigger close-dark",onClick:this.cartToggle},u.a.createElement("span",null),u.a.createElement("span",null))),u.a.createElement(d.a,null)),u.a.createElement("div",{className:"cart-sidebar-overlay cart-trigger",onClick:this.cartToggle})),u.a.createElement("div",{className:v()("search-form-wrapper",{open:this.state.searchmethod})},u.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},u.a.createElement("span",null),u.a.createElement("span",null)),u.a.createElement(h.a,null)),u.a.createElement("aside",{className:v()("main-aside",{open:this.state.navmethod})},u.a.createElement(b.a,null)),u.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),u.a.createElement("header",{className:"main-header header-1"},u.a.createElement("div",{className:"container"},u.a.createElement("nav",{className:"navbar"},u.a.createElement(f.c,{className:"navbar-brand",to:"/"}," ",u.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})," "),u.a.createElement(g,null),u.a.createElement("div",{className:"header-controls"},u.a.createElement("ul",{className:"header-controls-inner"}),u.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},u.a.createElement("span",null),u.a.createElement("span",null),u.a.createElement("span",null)))))))}}]),t}(p.a),O=n(57),j=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"page-404-wrapper"},u.a.createElement("div",{className:"page-404-text"},u.a.createElement("h1",null,"Page Not Found"),u.a.createElement("p",null,"Sorry, the page you're looking for does not exist"),u.a.createElement(f.c,{to:"/",className:"btn-custom"},"Go Back Home")),u.a.createElement("div",{className:"banner-bottom-img"},u.a.createElement("img",{src:"./assets/img/veg/2.png",alt:"veg"}),u.a.createElement("img",{src:"./assets/img/prods/3.png",alt:"pizza"}),u.a.createElement("img",{src:"./assets/img/veg/12.png",alt:"veg"})))}}]),t}(i.Component),N=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(i.Fragment,null,u.a.createElement(m.a,null,u.a.createElement("title",null,"Slices - React Template | ","Error 404"),u.a.createElement("meta",{name:"description",content:"#"})),u.a.createElement("div",{style:{backgroundImage:"url(./assets/img/bg/pattern.jpg)"}},u.a.createElement(k,null),u.a.createElement(j,null),u.a.createElement(O.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}})))}}]),t}(i.Component);t.default=N},49:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},50:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",function(){return r})},51:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return a})},52:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(98);function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(a.a)(e,t)}},53:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var l=n(59);function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(l.a)(e):t}n.d(t,"a",function(){return o})},54:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===l)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}"undefined"!==typeof e&&e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},55:function(e,t,n){"use strict";var a=n(49),r=n(50),l=n(53),o=n(51),c=n(52),i=n(59),u=n(0),s=n.n(u),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).getNextSibling=function(e,t){var n=e.nextElementSibling;if(!t)return n;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}},n.triggerChild=function(e){var t="";null!==(t=void 0!==n.getNextSibling(e.target,".submenu")?n.getNextSibling(e.target,".submenu"):null)&&void 0!==t&&""!==t&&(t.classList=t.classList.contains("d-block")?"submenu":"submenu d-block")},n.state={navmethod:!1,cartmethod:!1,searchmethod:!1},n.toggleNav=n.toggleNav.bind(Object(i.a)(Object(i.a)(n))),n.cartToggle=n.cartToggle.bind(Object(i.a)(Object(i.a)(n))),n.searchToggle=n.searchToggle.bind(Object(i.a)(Object(i.a)(n))),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return s.a.createElement(u.Fragment,null)}}]),t}(u.Component);t.a=m},57:function(e,t,n){"use strict";var a=n(49),r=n(50),l=n(53),o=n(51),c=n(52),i=n(0),u=n.n(i),s=n(4),m=n(67),f=n.n(m),p=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return u.a.createElement("footer",{id:"footer-bg section section-padding",className:this.props.footer.style,style:{position:"relative"}},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"footer-top"},u.a.createElement("div",{className:"footer-buttons ",style:{position:"absolute",top:"-22px",right:"-1%"}},u.a.createElement("img",{src:"./assets/img/redesgin-great-place-work.png",style:{height:"100%",width:"100%"},className:"img-responsive",alt:"logo"})))),u.a.createElement("div",{className:"footer-middle "},u.a.createElement("div",{className:"container "},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 link-2"},u.a.createElement("h5",{className:"widget-title"},"Quick Links"),u.a.createElement("ul",null,u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/about"},"Our Legacy")," "),u.a.createElement("li",null," ",u.a.createElement("a",{href:"https://phirseudaan.com/",target:"_blank"},"CSR Initiatives")),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/tenali-double-horse-products"},"Tdh Products")," "),u.a.createElement("li",null," ",u.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"},"Tdh Food Products")," "),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/awards-recognitions"},"Awards & Recognitions")," "),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/usa-shops"},"Usa")," "),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/Contactus"},"Contact")," "))),u.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 link-2"},u.a.createElement("h5",{className:"widget-title"},"Legal Links"),u.a.createElement("ul",null,u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/terms-and-condation"},"Terms of Use")," "),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/privacy-policy"},"Privacy Policy")," "),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/shipping-policy"},"Shipping Policy")," "),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/refund-policy"},"Refund Policy")," "),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/payment-ploicy"},"Payment Services")," "))),u.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 "},u.a.createElement("h5",{className:"widget-title"},"Reach out to us"),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("a",{href:"tel:1800 270 567567",target:"_blank"},"Call Us")),u.a.createElement("li",null," ",u.a.createElement("a",{href:"mailto:info@tenalidoublehorse.com",target:"_blank"},"Email")," "),u.a.createElement("li",null," ",u.a.createElement(s.c,{to:"/Contactus",target:"_blank"},"Locate")," "))),u.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},u.a.createElement("h5",{className:"widget-title"},"Follow us on Social Media"),u.a.createElement("ul",{className:"social-media"},u.a.createElement("li",null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},u.a.createElement("i",{className:"fab fa-facebook-f"}))),u.a.createElement("li",null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},u.a.createElement("i",{className:"fab fa-youtube"}))),u.a.createElement("li",null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},u.a.createElement("i",{className:"fab fa-instagram"}))),u.a.createElement("li",null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/tnldoublehorse",className:"twitter"},u.a.createElement("i",{className:"fab fa-twitter"}))),u.a.createElement("li",null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/tenalidoublehorse/",className:"linkedin"},u.a.createElement("i",{className:"fab fa-linkedin"})))),u.a.createElement("div",{className:"footer-offer"},u.a.createElement("p",{className:"text-dark"},"Know More Information!"),u.a.createElement("a",{href:f.a,download:"tdh-brouchure.pdf",className:"btn-custom btn-sm shadow-none",target:"_blank",type:"application/pdf"},"Download Brochure")))))),u.a.createElement("div",{className:"footer-bottom"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"footer-copyright"},u.a.createElement("p",null," Copyright \xa9 2023 ",u.a.createElement(s.c,{to:"/"},"Tenali Double Horse ")," All Rights Reserved. "),u.a.createElement(s.c,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},u.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),t}(i.Component);t.a=p},58:function(e,t,n){"use strict";var a=n(49),r=n(50),l=n(53),o=n(51),c=n(52),i=n(0),u=n.n(i),s=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("form",{className:"search-form",method:"post"},u.a.createElement("input",{type:"text",placeholder:"Search..."}),u.a.createElement("button",{type:"submit",className:"search-btn"},u.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),t}(i.Component);t.a=s},59:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},62:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"Our Legacy",link:"/about",child:!0,submenu:[{id:21,linkText:"The Journey",link:"/about",type:"p"},{id:22,link:"/Where-we-are",linkText:"Where We Are",type:"p"},{id:44,link:"/awards-recognitions",linkText:"Awards & Recognitions",type:"p"},{id:43,link:"/csr-activities",linkText:"CSR Initiatives",type:"p"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",child:!0,submenu:[{id:41,link:"/tenali-double-horse-products",linkText:"TDH Products"},{id:42,link:"https://tdhfoodproducts.com/",linkText:"TDHF Products"}]},{id:5,linkText:"News Events",link:"/news-events"},{id:6,linkText:"Contact",link:"/Contactus"}]},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var a=o(n(80)),r=o(n(81)),l=o(n(103));function o(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},67:function(e,t,n){e.exports=n.p+"static/media/tdh-brouchure.ac86b663.pdf"},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0));function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=(0,a.createContext)({});t.MetaContext=u;var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,c(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,a.Component),n=t,(r=[{key:"render",value:function(){return a.default.createElement(u.Provider,{value:{extract:this.props.extract}},a.Children.only(this.props.children))}}])&&l(n.prototype,r),s&&l(n,s),t}();t.default=s},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),l=(a=n(12))&&a.__esModule?a:{default:a},o=n(102),c=n(80);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,m(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);l.default.render(n,this.temporaryElement,function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var a=Array.prototype.slice.call(n.children),r=document.head,l=r.innerHTML;(a=(a=a.filter(function(e){return-1===l.indexOf(e.outerHTML)})).map(function(e){return e.cloneNode(!0)})).forEach(function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,o.getDuplicateTitle)();n&&(0,o.removeChild)(r,n)}else if(e.id){var a=(0,o.getDuplicateElementById)(e);a&&(0,o.removeChild)(r,a)}else if("meta"===t){var l=(0,o.getDuplicateMeta)(e);l&&(0,o.removeChild)(r,l)}else if("link"===t&&"canonical"===e.rel){var c=(0,o.getDuplicateCanonical)(e);c&&(0,o.removeChild)(r,c)}}),(0,o.appendChild)(document.head,a)}}})}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(n.prototype,a),c&&u(n,c),t}();!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"contextType",c.MetaContext);var d=p;t.default=d,e.exports=t.default},86:function(e){e.exports=[{id:1,img:"assets/img/prods-sm/1.png",name:"Eco Pack",qty:4,price:154.99,flavours:["14 Inches","Extra Cheese","Cheese Crust"]}]},87:function(e,t,n){"use strict";var a=n(49),r=n(50),l=n(53),o=n(51),c=n(52),i=n(0),u=n.n(i),s=n(4),m=n(129),f=n.n(m),p=n(86),d=p.reduce(function(e,t){return e+t.price*t.qty},0),h=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(i.Fragment,null,u.a.createElement("div",{className:"cart-sidebar-body"},u.a.createElement(f.a,{className:"cart-sidebar-scroll",style:{height:"100vh"}},p.map(function(e,t){return u.a.createElement("div",{key:t,className:"cart-sidebar-item"},u.a.createElement("div",{className:"media"},u.a.createElement(s.c,{to:"/menu-item-v1/1"},u.a.createElement("img",{src:"./"+e.img,alt:e.name})),u.a.createElement("div",{className:"media-body"},u.a.createElement("h5",null," ",u.a.createElement(s.c,{to:"/menu-item-v1/1",title:e.name},e.name)," "),u.a.createElement("span",null,e.qty,"x ",(new Intl.NumberFormat).format(e.price.toFixed(2)),"$"))),u.a.createElement("div",{className:"cart-sidebar-item-meta"},e.flavours.map(function(e,t){return u.a.createElement("span",{key:t},e)})),u.a.createElement("div",{className:"cart-sidebar-price"},(new Intl.NumberFormat).format((e.price*e.qty).toFixed(2)),"$"),u.a.createElement("div",{className:"close-btn"},u.a.createElement("span",null),u.a.createElement("span",null)))}))),u.a.createElement("div",{className:"cart-sidebar-footer"},u.a.createElement("h4",null,"Total: ",u.a.createElement("span",null,(new Intl.NumberFormat).format(d.toFixed(2)),"$")," "),u.a.createElement("button",{type:"button",className:"btn-custom"},"Checkout")))}}]),t}(i.Component);t.a=h},88:function(e,t,n){"use strict";var a=n(49),r=n(50),l=n(53),o=n(51),c=n(52),i=n(0),u=n.n(i),s=n(4),m=n(62),f=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth<=767;return u.a.createElement(i.Fragment,null,u.a.createElement(s.c,{className:"navbar-brand",to:"/"},u.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),u.a.createElement("div",{className:"aside-scroll"},u.a.createElement("ul",null,m.length>0?m.map(function(n,a){return t&&"Blog"===n.linkText?null:u.a.createElement("li",{key:a,className:"menu-item ".concat(n.child?"menu-item-has-children":""," "),onClick:e.triggerChild},n.child?u.a.createElement(s.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",n.linkText," "):u.a.createElement(s.c,{to:n.link}," ",n.linkText," "),n.child?u.a.createElement("ul",{className:"submenu ".concat(n.child?"menu-item-has-children":"")},n.submenu.map(function(e,t){return u.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?u.a.createElement(s.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):u.a.createElement(s.c,{to:e.link}," ",e.linkText," "),e.submenu?u.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return u.a.createElement("li",{className:"menu-item",key:t},u.a.createElement(s.c,{to:e.link},e.linkText))})):null)})):null)}):null)))}}]),t}(n(55).a);t.a=f},98:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return a})}}]);
//# sourceMappingURL=25.387d2b4a.chunk.js.map