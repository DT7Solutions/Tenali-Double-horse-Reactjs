(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{150:function(e,t,a){"use strict";var n=a(48),l=a(49),r=a(52),c=a(50),i=a(51),m=a(0),o=a.n(m),s=a(5),u=a(57),d=a(67),b=a(68),E=a(69),h=a(98),g=a(53),p=a.n(g),f=(a(56),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.Fragment,null,o.a.createElement("div",{className:"cart-sidebar-wrapper"},o.a.createElement("aside",{className:p()("cart-sidebar",{"cart-open":this.state.cartmethod})},o.a.createElement("div",{className:"cart-sidebar-header"},o.a.createElement("h3",null,"Your Cart"),o.a.createElement("div",{className:"close-btn cart-trigger close-dark",onClick:this.cartToggle},o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement(d.a,null)),o.a.createElement("div",{className:"cart-sidebar-overlay cart-trigger",onClick:this.cartToggle})),o.a.createElement("div",{className:p()("search-form-wrapper",{open:this.state.searchmethod})},o.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement(b.a,null)),o.a.createElement("aside",{className:p()("main-aside",{open:this.state.navmethod})},o.a.createElement(E.a,null)),o.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),o.a.createElement("header",{className:"main-header header-1"},o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar"},o.a.createElement(s.b,{className:"navbar-brand",to:"/"}," ",o.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})," "),o.a.createElement(h.a,null),o.a.createElement("div",{className:"header-controls"},o.a.createElement("ul",{className:"header-controls-inner"}),o.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)))))))}}]),t}(u.a));t.a=f},405:function(e,t,a){"use strict";a.r(t);var n=a(48),l=a(49),r=a(52),c=a(50),i=a(51),m=a(0),o=a.n(m),s=a(71),u=a.n(s),d=a(150),b=a(60),E=a(5),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"imgs-wrapper"},o.a.createElement("img",{src:"./assets/img/veg/11.png",alt:"veg",className:"d-none d-lg-block"}),o.a.createElement("img",{src:"./assets/img/prods/3.png",alt:"veg",className:"d-none d-lg-block"})),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"auth-wrapper"},o.a.createElement("div",{className:"auth-description bg-cover bg-center dark-overlay dark-overlay-2",style:{backgroundImage:"url(./assets/img/auth.jpg)"}},o.a.createElement("div",{className:"auth-description-inner"},o.a.createElement("i",{className:"flaticon-chili"}),o.a.createElement("h2",null,"Welcome Back!"),o.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."))),o.a.createElement("div",{className:"auth-form"},o.a.createElement("h2",null,"Log in"),o.a.createElement("form",{method:"post"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control form-control-light",placeholder:"Username",name:"username"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",className:"form-control form-control-light",placeholder:"Password",name:"password"})),o.a.createElement(E.b,{to:"#"},"Forgot Password?"),o.a.createElement("button",{type:"submit",className:"btn-custom primary"},"Login"),o.a.createElement("div",{className:"auth-seperator"},o.a.createElement("span",null,"OR")),o.a.createElement("div",{className:"social-login"},o.a.createElement("button",{type:"button",className:"ct-social-login facebook"},o.a.createElement("i",{className:"fab fa-facebook-f"})," Continue with Facebook "),o.a.createElement("button",{type:"button",className:"ct-social-login google"},o.a.createElement("i",{className:"fab fa-google"})," Continue with Google")),o.a.createElement("p",null,"Don't have an account? ",o.a.createElement(E.b,{to:"/register"},"Create One")," "))))))}}]),t}(m.Component),g=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,"Slices - React Template | ","Login"),o.a.createElement("meta",{name:"description",content:"#"})),o.a.createElement(d.a,null),o.a.createElement(h,null),o.a.createElement(b.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}}))}}]),t}(m.Component);t.default=g},56:function(e){e.exports=[{id:1,img:"assets/img/prods-sm/1.png",name:"Eco Pack",qty:4,price:154.99,flavours:["14 Inches","Extra Cheese","Cheese Crust"]}]},57:function(e,t,a){"use strict";var n=a(48),l=a(49),r=a(52),c=a(50),i=a(51),m=a(64),o=a(0),s=a.n(o),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).getNextSibling=function(e,t){var a=e.nextElementSibling;if(!t)return a;for(;a;){if(a.matches(t))return a;a=a.nextElementSibling}},a.triggerChild=function(e){var t="";null!==(t=void 0!==a.getNextSibling(e.target,".submenu")?a.getNextSibling(e.target,".submenu"):null)&&void 0!==t&&""!==t&&(t.classList=t.classList.contains("d-block")?"submenu":"submenu d-block")},a.state={navmethod:!1,cartmethod:!1,searchmethod:!1},a.toggleNav=a.toggleNav.bind(Object(m.a)(Object(m.a)(a))),a.cartToggle=a.cartToggle.bind(Object(m.a)(Object(m.a)(a))),a.searchToggle=a.searchToggle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return s.a.createElement(o.Fragment,null)}}]),t}(o.Component);t.a=u},58:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"About",link:"/about",child:!0,submenu:[{id:21,linkText:"Our Company",link:"/about"},{id:23,link:"/Where-we-are",linkText:"Where We Are"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",link:"/menu-v1",child:!0,submenu:[{id:41,link:"/menu-v1",linkText:"TDH Products"},{id:42,link:"/menu-v2",linkText:"TDHF Products"}]},{id:5,linkText:"Contact",link:"/locations"}]},60:function(e,t,a){"use strict";var n=a(48),l=a(49),r=a(52),c=a(50),i=a(51),m=a(0),o=a.n(m),s=a(5),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return o.a.createElement("footer",{id:"footer-bg",className:this.props.footer.style,style:{position:"relative",backgroundImage:"url(./assets/img/footer/footer-bg-image.png)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"footer-top"},o.a.createElement("div",{className:"footer-logo"},o.a.createElement("img",{src:"./"+this.props.footer.logo,alt:"logo"})),o.a.createElement("div",{className:"footer-buttons",style:{position:"absolute",top:"-25px",right:"-1%",zIndex:"9999"}},o.a.createElement("img",{src:"./assets/img/great-place-to-work-image.png",style:{height:"180px",width:"100%"},alt:"logo"})))),o.a.createElement("div",{className:"footer-middle"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Quick Links"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement(s.b,{to:"/menu-v1"},"Products")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Recipes")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Blog")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:"/locations"},"Contact")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Usa")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Legal Links"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Terms of Use")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Privacy Policy")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Shipping Policy")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Refund Policy")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Payment Services")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Contact"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Call Us")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Email")," "),o.a.createElement("li",null," ",o.a.createElement(s.b,{to:" "},"Locate")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Social Media"),o.a.createElement("ul",{className:"social-media"},o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},o.a.createElement("i",{className:"fab fa-facebook-f"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},o.a.createElement("i",{className:"fab fa-youtube"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},o.a.createElement("i",{className:"fab fa-instagram"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/i/flow/login?redirect_after_login=%2Ftnldoublehorse",className:"twitter"},o.a.createElement("i",{className:"fab fa-twitter"})))),o.a.createElement("div",{className:"footer-offer"},o.a.createElement("p",{className:"text-light"},"Download Our Brochure for More Information!"),o.a.createElement(s.b,{to:" ",className:"btn-custom btn-sm shadow-none"},"Download Brochure")))))),o.a.createElement("div",{className:"footer-bottom"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"footer-copyright"},o.a.createElement("p",null," Copyright \xa9 2022 ",o.a.createElement(s.b,{to:" "},"Tenali Double Horse ")," All Rights Reserved. "),o.a.createElement(s.b,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},o.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),t}(m.Component);t.a=u},67:function(e,t,a){"use strict";var n=a(48),l=a(49),r=a(52),c=a(50),i=a(51),m=a(0),o=a.n(m),s=a(5),u=a(116),d=a.n(u),b=a(56),E=b.reduce(function(e,t){return e+t.price*t.qty},0),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.Fragment,null,o.a.createElement("div",{className:"cart-sidebar-body"},o.a.createElement(d.a,{className:"cart-sidebar-scroll",style:{height:"100vh"}},b.map(function(e,t){return o.a.createElement("div",{key:t,className:"cart-sidebar-item"},o.a.createElement("div",{className:"media"},o.a.createElement(s.b,{to:"/menu-item-v1/1"},o.a.createElement("img",{src:"./"+e.img,alt:e.name})),o.a.createElement("div",{className:"media-body"},o.a.createElement("h5",null," ",o.a.createElement(s.b,{to:"/menu-item-v1/1",title:e.name},e.name)," "),o.a.createElement("span",null,e.qty,"x ",(new Intl.NumberFormat).format(e.price.toFixed(2)),"$"))),o.a.createElement("div",{className:"cart-sidebar-item-meta"},e.flavours.map(function(e,t){return o.a.createElement("span",{key:t},e)})),o.a.createElement("div",{className:"cart-sidebar-price"},(new Intl.NumberFormat).format((e.price*e.qty).toFixed(2)),"$"),o.a.createElement("div",{className:"close-btn"},o.a.createElement("span",null),o.a.createElement("span",null)))}))),o.a.createElement("div",{className:"cart-sidebar-footer"},o.a.createElement("h4",null,"Total: ",o.a.createElement("span",null,(new Intl.NumberFormat).format(E.toFixed(2)),"$")," "),o.a.createElement("button",{type:"button",className:"btn-custom"},"Checkout")))}}]),t}(m.Component);t.a=h},68:function(e,t,a){"use strict";var n=a(48),l=a(49),r=a(52),c=a(50),i=a(51),m=a(0),o=a.n(m),s=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"search-form",method:"post"},o.a.createElement("input",{type:"text",placeholder:"Search..."}),o.a.createElement("button",{type:"submit",className:"search-btn"},o.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),t}(m.Component);t.a=s},69:function(e,t,a){"use strict";var n=a(48),l=a(49),r=a(52),c=a(50),i=a(51),m=a(0),o=a.n(m),s=a(5),u=a(58),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth<=767;return o.a.createElement(m.Fragment,null,o.a.createElement(s.b,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),o.a.createElement("div",{className:"aside-scroll"},o.a.createElement("ul",null,u.length>0?u.map(function(a,n){return t&&"Blog"===a.linkText?null:o.a.createElement("li",{key:n,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?o.a.createElement(s.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):o.a.createElement(s.b,{to:a.link}," ",a.linkText," "),a.child?o.a.createElement("ul",{className:"submenu ".concat(a.child?"menu-item-has-children":"")},a.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(s.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(s.b,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(s.b,{to:e.link},e.linkText))})):null)})):null)}):null)))}}]),t}(a(57).a);t.a=d},98:function(e,t,a){"use strict";var n=a(48),l=a(49),r=a(52),c=a(50),i=a(51),m=a(0),o=a.n(m),s=a(5),u=a(58),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"navbar-nav "},u.length>0?u.slice(0,2).map(function(t,a){return o.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?o.a.createElement(s.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):o.a.createElement(s.b,{to:t.link}," ",t.linkText," "),t.child?o.a.createElement("ul",{className:"submenu",role:"menu"},t.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(s.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(s.b,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(s.b,{to:e.link},e.linkText))})):null)})):null)}):null,o.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},o.a.createElement(s.b,{to:"/menu-v1"},"Products")),u.length>0?u.slice(4,10).map(function(t,a){return o.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?o.a.createElement(s.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):o.a.createElement(s.b,{to:t.link}," ",t.linkText," "),t.child?o.a.createElement("ul",{className:"sub-menu",role:"menu"},t.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(s.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(s.b,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(s.b,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),t}(m.Component);t.a=d}}]);
//# sourceMappingURL=21.5ce5f352.chunk.js.map