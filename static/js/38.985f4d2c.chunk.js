(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{182:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext(null);r.displayName="CardContext",a.a=r},196:function(e,a,t){var n;e.exports=(n=t(0),function(){var e={703:function(e,a,t){"use strict";var n=t(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,a,t,r,i,l){if(l!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},697:function(e,a,t){e.exports=t(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=n}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var i=a[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,{a:a}),a},t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";t.r(r),t.d(r,{default:function(){return k}});var e=t(98),a=t.n(e),n=t(697),i=t.n(n);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=function(e){var t=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,s=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,d=e.href,m=e.extraAriaContext,p=e.pageLabelBuilder,g=e.rel,b=e.ariaLabel||"Page "+r+(m?" "+m:""),f=null;return i&&(f="page",b=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+s:s,void 0!==n?void 0!==o&&(n=n+" "+o):n=o),a().createElement("li",{className:t},a().createElement("a",l({rel:g,role:d?void 0:"button",className:n,href:d,tabIndex:i?"-1":"0","aria-label":b,"aria-current":f,onKeyPress:u},c(u)),p(r)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var o=s;function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=function(e){var t=e.breakLabel,n=e.breakAriaLabel,r=e.breakClassName,i=e.breakLinkClassName,l=e.breakHandler,s=e.getEventListener,o=r||"break";return a().createElement("li",{className:o},a().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":n,onKeyPress:l},s(l)),t))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var d=u;function m(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e})(e,a)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var y=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&b(e,a)}(s,e);var t,n,r,i,l=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=h(r);if(i){var t=h(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return function(e,a){if(a&&("object"===p(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function s(e){var t,n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,s),v(f(t=l.call(this,e)),"handlePreviousPage",function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})}),v(f(t),"handleNextPage",function(e){var a=t.state.selected,n=t.props.pageCount;t.handleClick(e,null,a<n-1?a+1:void 0,{isNext:!0})}),v(f(t),"handlePageSelected",function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)}),v(f(t),"handlePageChange",function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))}),v(f(t),"getEventListener",function(e){return v({},t.props.eventListener,e)}),v(f(t),"handleClick",function(e,a,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,l=void 0!==i&&i,s=r.isNext,o=void 0!==s&&s,c=r.isBreak,u=void 0!==c&&c,d=r.isActive,m=void 0!==d&&d;e.preventDefault?e.preventDefault():e.returnValue=!1;var p=t.state.selected,g=t.props.onClick,b=n;if(g){var f=g({index:a,selected:p,nextSelectedPage:n,event:e,isPrevious:l,isNext:o,isBreak:u,isActive:m});if(!1===f)return;Number.isInteger(f)&&(b=f)}void 0!==b&&t.handlePageChange(b)}),v(f(t),"handleBreakClick",function(e,a){var n=t.state.selected;t.handleClick(a,e,n<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})}),v(f(t),"callCallback",function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})}),v(f(t),"callActiveCallback",function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})}),v(f(t),"getElementPageRel",function(e){var a=t.state.selected,n=t.props,r=n.nextPageRel,i=n.prevPageRel,l=n.selectedPageRel;return a-1===e?i:a===e?l:a+1===e?r:void 0}),v(f(t),"pagination",function(){var e=[],n=t.props,r=n.pageRangeDisplayed,i=n.pageCount,l=n.marginPagesDisplayed,s=n.breakLabel,o=n.breakClassName,c=n.breakLinkClassName,u=n.breakAriaLabels,m=t.state.selected;if(i<=r)for(var p=0;p<i;p++)e.push(t.getPageElement(p));else{var g=r/2,b=r-g;m>i-r/2?g=r-(b=i-m):m<r/2&&(b=r-(g=m));var f,h,v=function(e){return t.getPageElement(e)},y=[];for(f=0;f<i;f++){var k=f+1;if(k<=l)y.push({type:"page",index:f,display:v(f)});else if(k>i-l)y.push({type:"page",index:f,display:v(f)});else if(f>=m-g&&f<=m+(0===m&&r>1?b-1:b))y.push({type:"page",index:f,display:v(f)});else if(s&&y.length>0&&y[y.length-1].display!==h&&(r>0||l>0)){var E=f<m?u.backward:u.forward;h=a().createElement(d,{key:f,breakAriaLabel:E,breakLabel:s,breakClassName:o,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,f),getEventListener:t.getEventListener}),y.push({type:"break",index:f,display:h})}}y.forEach(function(a,t){var n=a;"break"===a.type&&y[t-1]&&"page"===y[t-1].type&&y[t+1]&&"page"===y[t+1].type&&y[t+1].index-y[t-1].index<=2&&(n={type:"page",index:a.index,display:v(a.index)}),e.push(n.display)})}return e}),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return t=s,(n=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==a&&a>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount,r=a.hrefAllControls;if(t)return r||e>=0&&e<n?t(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,l=n.activeClassName,s=n.activeLinkClassName,c=n.extraAriaContext,u=n.pageLabelBuilder;return a().createElement(o,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:l,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,n=t.disabledClassName,r=t.disabledLinkClassName,i=t.pageCount,l=t.className,s=t.containerClassName,o=t.previousLabel,c=t.previousClassName,u=t.previousLinkClassName,d=t.previousAriaLabel,p=t.prevRel,b=t.nextLabel,f=t.nextClassName,h=t.nextLinkClassName,v=t.nextAriaLabel,y=t.nextRel,k=this.state.selected,E=0===k,C=k===i-1,x="".concat(m(c)).concat(E?" ".concat(m(n)):""),N="".concat(m(f)).concat(C?" ".concat(m(n)):""),P="".concat(m(u)).concat(E?" ".concat(m(r)):""),w="".concat(m(h)).concat(C?" ".concat(m(r)):""),O=E?"true":"false",L=C?"true":"false";return a().createElement("ul",{className:l||s,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:x},a().createElement("a",g({className:P,href:this.getElementHref(k-1),tabIndex:E?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":O,"aria-label":d,rel:p},this.getEventListener(this.handlePreviousPage)),o)),this.pagination(),a().createElement("li",{className:N},a().createElement("a",g({className:w,href:this.getElementHref(k+1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":L,"aria-label":v,rel:y},this.getEventListener(this.handleNextPage)),b)))}}])&&function(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(e.Component);v(y,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),v(y,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var k=y}(),r}())},391:function(e){e.exports=[{id:1,imageUrl:"assets/img/newsevents/awards/ek-bharat-shreshta-bharat.png",year:"2023",title:"Ek Bharat Shreshta Bharat",description:"Our MD, Mohan Shyam Prasad Garu, Felicated By The Honourable Governor of Tamil Nadu Thiru R.N.Ravi During EK Bharat Shreshta Bharat Programme."},{id:2,imageUrl:"assets/img/newsevents/awards/yapararatna.png",year:"2023",title:"Vyapararatna",description:"The awarding of the Vyapararatna title to Mr. Shyam Prasad Garu by the  Akkineni Foundation of America is a momentous occasion of great significance. This prestigious recognition highlights Mr. Shyam Prasad Garu's remarkable accomplishments and contributions in the field of business and philanthropy."},{id:3,imageUrl:"assets/img/newsevents/awards/the-best-food-product.png",year:"2023",title:"Best Food Products Company of The Year",description:"Tenali Double Horse, a name synonymous with quality and authenticity in the world of food products, has achieved a remarkable milestone by being honored with the prestigious Best Food Products Company of the Year award at the Hybiz TV Business Excellence Awards. This accolade underscores the brand's unwavering commitment to delivering top-notch food products that have won the hearts of consumers far and wide"}]},422:function(e,a,t){"use strict";t.r(a);var n=t(53),r=t(54),i=t(7),l=t(55),s=t(56),o=t(0),c=t.n(o),u=t(68),d=t.n(u),m=t(8),p=t(59),g=t(60),b=t(9),f=t(391),h=t(196),v=t.n(h),y=t(1),k=t(3),E=t(57),C=t.n(E),x=t(64),N=t(317),P=t(360),w=t(182),O=c.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,r=e.variant,i=e.as,l=void 0===i?"img":i,s=Object(k.a)(e,["bsPrefix","className","variant","as"]),o=Object(x.a)(t,"card-img");return c.a.createElement(l,Object(y.a)({ref:a,className:C()(r?o+"-"+r:o,n)},s))});O.displayName="CardImg",O.defaultProps={variant:null};var L=O,T=Object(P.a)("h5"),j=Object(P.a)("h6"),R=Object(N.a)("card-body"),S=Object(N.a)("card-title",{Component:T}),A=Object(N.a)("card-subtitle",{Component:j}),B=Object(N.a)("card-link",{Component:"a"}),D=Object(N.a)("card-text",{Component:"p"}),_=Object(N.a)("card-header"),H=Object(N.a)("card-footer"),I=Object(N.a)("card-img-overlay"),F=c.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,r=e.bg,i=e.text,l=e.border,s=e.body,u=e.children,d=e.as,m=void 0===d?"div":d,p=Object(k.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(x.a)(t,"card"),b=Object(o.useMemo)(function(){return{cardHeaderBsPrefix:g+"-header"}},[g]);return c.a.createElement(w.a.Provider,{value:b},c.a.createElement(m,Object(y.a)({ref:a},p,{className:C()(n,g,r&&"bg-"+r,i&&"text-"+i,l&&"border-"+l)}),s?c.a.createElement(R,null,u):u))});F.displayName="Card",F.defaultProps={body:!1},F.Img=L,F.Title=S,F.Subtitle=A,F.Body=R,F.Link=B,F.Text=D,F.Header=_,F.Footer=H,F.ImgOverlay=I;var M=F,U=t(403),q=t(409),J=t(73),W=t(74);var V=function(){var e=Object(o.useState)(null),a=Object(b.a)(e,2),t=a[0],n=a[1],r=Object(o.useState)(!1),i=Object(b.a)(r,2),l=i[0],s=i[1],u=function(){return s(!1)},d=Object(o.useState)(0),m=Object(b.a)(d,2),p=m[0],g=m[1],h=Math.ceil(f.length/6),y=6*p,k=y+6,E=f.slice(y,k);return c.a.createElement("div",{className:"ltn__gallery-area mt-5 mb-5"},c.a.createElement("div",{className:"section-title-wrap section-header text-center"},c.a.createElement("h5",{className:"custom-primary text-center"},"Proud Moments"),c.a.createElement("h2",{className:"title text-center"},"Honors and Accolades That Define Us")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row awards "},E.map(function(e){return c.a.createElement("div",{className:"col-sm-12 col-md-4 col-lg-4 mb-5"},c.a.createElement(M,{key:e.id,className:"shadow"},c.a.createElement("img",{src:"./"+e.imageUrl,alt:"img"}),c.a.createElement(M.Body,null,c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement(M.Title,null,e.year),c.a.createElement(U.a,{className:"btn-sm more-btn",onClick:function(){return function(e){n(e),s(!0)}(e)}},"View")),c.a.createElement(M.Text,{className:"c-title"},e.title))))}),c.a.createElement(q.a,{show:l,onHide:u},c.a.createElement(q.a.Body,null,c.a.createElement("div",null,c.a.createElement("div",{className:"row d-flex"},c.a.createElement("div",null,c.a.createElement("img",{src:"./"+(t?t.imageUrl:""),alt:"img"})),c.a.createElement("div",{className:"pop-text"},c.a.createElement("p",{className:"px-2"},t?t.year:""),c.a.createElement("h5",{className:"px-2"},t?t.title:""),c.a.createElement("p",{className:"px-2"},t?t.description:"")),c.a.createElement(U.a,{variant:"secondary",className:"cross-btn",onClick:u},"X")))))),c.a.createElement(v.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:h,onPageChange:function(e){var a=e.selected;g(a)},containerClassName:"pagination",activeClassName:"active"}),c.a.createElement(J.a,null),c.a.createElement(W.a,null)))},Y=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(o.Fragment,null,c.a.createElement(d.a,null,c.a.createElement("title",null,"Tenali Double Horse Awards & Recognitions| ","Awards & Recognitions"),c.a.createElement("meta",{name:"Our unwavering dedication to quality and authenticity has earned us prestigious honors, validating our commitment to delivering exceptional agricultural products",content:"#"})),c.a.createElement(m.a,null),c.a.createElement(p.a,{breadcrumb:{pagename:"Awards & Recognitions",bannerimg:"/assets/img/bg/tenali-double-horse-contact-page-banner.png"}}),c.a.createElement(V,null),c.a.createElement(g.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),a}(o.Component);a.default=Y},59:function(e,a,t){"use strict";var n=t(53),r=t(54),i=t(7),l=t(55),s=t(56),o=t(0),c=t.n(o),u=t(4),d=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"subheader-inner"},c.a.createElement("h1",{className:"text-light breadcrumb-mobile"},this.props.breadcrumb.pagename),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item "},c.a.createElement(u.c,{to:"/"},"Home")),c.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),a}(o.Component);a.a=d},65:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"Our Legacy",link:"/about",child:!0,submenu:[{id:21,linkText:"The Journey",link:"/about",type:"p"},{id:22,link:"/Where-we-are",linkText:"Where We Are",type:"p"},{id:44,link:"/awards-recognitions",linkText:"Awards & Recognitions",type:"p"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",child:!0,submenu:[{id:41,link:"/tenali-double-horse-products",linkText:"TDH Products"}]},{id:5,linkText:"News Room",link:"/news-room"},{id:6,linkText:"Contact",link:"/Contactus"}]},8:function(e,a,t){"use strict";var n=t(53),r=t(54),i=t(7),l=t(55),s=t(56),o=t(0),c=t.n(o),u=t(4),d=t(58),m=t(61),p=t(65),g=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=window.innerWidth<=990;return c.a.createElement(o.Fragment,null,c.a.createElement(u.c,{className:"navbar-brand",to:"/"},c.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),c.a.createElement("div",{className:"aside-scroll"},c.a.createElement("ul",null,p.length>0?p.map(function(t,n){return a&&"Blog"===t.linkText?null:c.a.createElement("li",{key:n,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?c.a.createElement(u.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):c.a.createElement(u.c,{to:t.link}," ",t.linkText," "),t.child?c.a.createElement("ul",{className:"submenu ".concat(t.child?"menu-item-has-children":"")},t.submenu.map(function(e,a){return c.a.createElement("li",{key:a,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?c.a.createElement(u.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):c.a.createElement(u.c,{to:e.link}," ",e.linkText," "),e.submenu?c.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,a){return c.a.createElement("li",{className:"menu-item",key:a},c.a.createElement(u.c,{to:e.link},e.linkText))})):null)}),"About"===t.linkText&&a&&c.a.createElement(o.Fragment,null,c.a.createElement("li",{className:"menu-item"},c.a.createElement("a",{href:"https://phirseudaan.com/",target:"_blank",rel:"noopener noreferrer"},"CSR Initiatives"))),"Products"===t.linkText&&a&&c.a.createElement(o.Fragment,null,c.a.createElement("li",{className:"menu-item"},c.a.createElement("a",{href:"https://tdhfoodproducts.com/",target:"_blank",rel:"noopener noreferrer"},"TDHF Products")))):null)}):null)))}}]),a}(d.a),b=t(66),f=t(57),h=t.n(f),v=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(l.a)(a).call(this,e))).handleScroll=function(){var e=window.scrollY>90,a=window.scrollY>0;t.setState({isSticky:e,isScrolled:a})},t.cartToggle=function(){t.setState(function(e){return{cartmethod:!e.cartmethod}})},t.searchToggle=function(){t.setState(function(e){return{searchmethod:!e.searchmethod}})},t.toggleNav=function(){t.setState(function(e){return{navmethod:!e.navmethod}})},t.state={isSticky:!1,cartmethod:!1,isScrolled:!1,searchmethod:!1,navmethod:!1},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,a=e.isSticky,t=e.isScrolled,n=h()("main-header","header-1","header-absolute",{"header-sticky":a||t});return c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:h()("search-form-wrapper",{open:this.state.searchmethod})},c.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement(m.a,null)),c.a.createElement("aside",{className:h()("main-aside",{open:this.state.navmethod})},c.a.createElement(g,null)),c.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),c.a.createElement("header",{className:n,style:{backgroundColor:a?"white":"transparent",boxShadow:a?"0px 4px 6px rgba(0, 0, 0, 0.1)":"0px 4px 6px rgba(0, 0, 0, 0)"}},c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar"},c.a.createElement(u.c,{className:"navbar-brand",to:"/"},c.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-250x73.png",alt:"logo"})),c.a.createElement(b.a,null),c.a.createElement("div",{className:"header-controls"},c.a.createElement("ul",{className:"header-controls-inner"},c.a.createElement("div",{className:"floating-container"},c.a.createElement("div",{className:"floating-button share-icon"}," ",c.a.createElement("img",{src:"./assets/img/header/network-connection.png",alt:"topicon"})),c.a.createElement("div",{className:"element-container"},c.a.createElement("span",{className:"float-element tooltip-left"}," ",c.a.createElement("a",{href:"https://www.facebook.com/tenalidoublehorse",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-facebook-f"}))),c.a.createElement("span",{className:"float-element"},c.a.createElement("a",{href:"https://twitter.com/tnldoublehorse",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-twitter"}))),c.a.createElement("span",{className:"float-element"},c.a.createElement("a",{href:"https://www.instagram.com/tenalidoublehorse/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-instagram"}))),c.a.createElement("span",{className:"float-element"},c.a.createElement("a",{href:"https://www.linkedin.com/company/tenalidoublehorse/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-linkedin-in"}))),c.a.createElement("span",{className:"float-element"},c.a.createElement("a",{href:"https://www.youtube.com/c/TenaliDoubleHorse",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-youtube"})))))),c.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)))))))}}]),a}(d.a);a.a=v}}]);
//# sourceMappingURL=38.985f4d2c.chunk.js.map