(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{363:function(e,t,a){"use strict";var n=a(408).a.create({baseURL:"http://127.0.0.1:8000/"});t.a=n},58:function(e,t,a){"use strict";var n=a(53),l=a(54),r=a(7),c=a(55),i=a(56),o=a(63),s=a(0),m=a.n(s),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).getNextSibling=function(e,t){var a=e.nextElementSibling;if(!t)return a;for(;a;){if(a.matches(t))return a;a=a.nextElementSibling}},a.triggerChild=function(e){var t="";null!==(t=void 0!==a.getNextSibling(e.target,".submenu")?a.getNextSibling(e.target,".submenu"):null)&&void 0!==t&&""!==t&&(t.classList=t.classList.contains("d-block")?"submenu":"submenu d-block")},a.state={navmethod:!1,cartmethod:!1,searchmethod:!1},a.toggleNav=a.toggleNav.bind(Object(o.a)(Object(o.a)(a))),a.cartToggle=a.cartToggle.bind(Object(o.a)(Object(o.a)(a))),a.searchToggle=a.searchToggle.bind(Object(o.a)(Object(o.a)(a))),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return m.a.createElement(s.Fragment,null)}}]),t}(s.Component);t.a=u},59:function(e,t,a){"use strict";var n=a(53),l=a(54),r=a(7),c=a(55),i=a(56),o=a(0),s=a.n(o),m=a(4),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"subheader-inner"},s.a.createElement("h1",{className:"text-light breadcrumb-mobile"},this.props.breadcrumb.pagename),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item "},s.a.createElement(m.c,{to:"/"},"Home")),s.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(o.Component);t.a=u},60:function(e,t,a){"use strict";var n=a(53),l=a(54),r=a(7),c=a(55),i=a(56),o=a(0),s=a.n(o),m=a(4),u=a(70),d=a.n(u),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return s.a.createElement("footer",{id:"footer-bg section section-padding",className:this.props.footer.style,style:{position:"relative"}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"footer-top"},s.a.createElement("div",{className:"footer-buttons ",style:{position:"absolute",top:"-22px",right:"-1%"}},s.a.createElement("img",{src:"./assets/img/redesgin-great-place-work.png",style:{height:"100%",width:"100%"},className:"img-responsive",alt:"logo"})))),s.a.createElement("div",{className:"footer-middle "},s.a.createElement("div",{className:"container "},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 link-2"},s.a.createElement("h5",{className:"widget-title"},"Quick Links"),s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/about"},"Our Legacy")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"https://phirseudaan.com/",target:"_blank"},"CSR Initiatives")),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/tenali-double-horse-products"},"Tdh Products")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"},"Tdh Food Products")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/awards-recognitions"},"Awards & Recognitions")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/usa-shops"},"Usa")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/Contactus"},"Contact")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 link-2"},s.a.createElement("h5",{className:"widget-title"},"Legal Links"),s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/terms-and-condation"},"Terms of Use")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/privacy-policy"},"Privacy Policy")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/shipping-policy"},"Shipping Policy")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/refund-policy"},"Refund Policy")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/payment-ploicy"},"Payment Services")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 "},s.a.createElement("h5",{className:"widget-title"},"Reach out to us"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"tel:1800 270 567567",target:"_blank"},"Call Us")),s.a.createElement("li",null," ",s.a.createElement("a",{href:"mailto:info@tenalidoublehorse.com",target:"_blank"},"Email")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/Contactus",target:"_blank"},"Locate")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Follow us on Social Media"),s.a.createElement("ul",{className:"social-media"},s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},s.a.createElement("i",{className:"fab fa-facebook-f"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},s.a.createElement("i",{className:"fab fa-youtube"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},s.a.createElement("i",{className:"fab fa-instagram"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/tnldoublehorse",className:"twitter"},s.a.createElement("i",{className:"fab fa-twitter"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/tenalidoublehorse/",className:"linkedin"},s.a.createElement("i",{className:"fab fa-linkedin"})))),s.a.createElement("div",{className:"footer-offer"},s.a.createElement("p",{className:"text-dark"},"Know More Information!"),s.a.createElement("a",{href:d.a,download:"tdh-brouchure.pdf",className:"btn-custom btn-sm shadow-none",target:"_blank",type:"application/pdf"},"Download Brochure")))))),s.a.createElement("div",{className:"footer-bottom"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"footer-copyright"},s.a.createElement("p",null," Copyright \xa9 2023 ",s.a.createElement(m.c,{to:"/"},"Tenali Double Horse ")," All Rights Reserved. "),s.a.createElement(m.c,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},s.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),t}(o.Component);t.a=h},61:function(e,t,a){"use strict";var n=a(53),l=a(54),r=a(7),c=a(55),i=a(56),o=a(0),s=a.n(o),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"search-form",method:"post"},s.a.createElement("input",{type:"text",placeholder:"Search..."}),s.a.createElement("button",{type:"submit",className:"search-btn"},s.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),t}(o.Component);t.a=m},65:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"Our Legacy",link:"/about",child:!0,submenu:[{id:21,linkText:"The Journey",link:"/about",type:"p"},{id:22,link:"/Where-we-are",linkText:"Where We Are",type:"p"},{id:44,link:"/awards-recognitions",linkText:"Awards & Recognitions",type:"p"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",child:!0,submenu:[{id:41,link:"/tenali-double-horse-products",linkText:"TDH Products"}]},{id:5,linkText:"News Room",link:"/news-room"},{id:6,linkText:"Contact",link:"/Contactus"}]},66:function(e,t,a){"use strict";var n=a(53),l=a(54),r=a(7),c=a(55),i=a(56),o=a(0),s=a.n(o),m=a(4),u=a(67),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"navbar-nav "},u.length>0?u.slice(0,2).map(function(t,a){return s.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):s.a.createElement(m.c,{to:t.link}," ",t.linkText," "),t.child?s.a.createElement("ul",{className:"submenu",role:"menu"},t.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":"")},"a"===e.type?s.a.createElement("a",{href:e.link,target:"_blank"},e.linkText):s.a.createElement(m.c,{to:e.link},e.linkText),e.submenu?s.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null,s.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},s.a.createElement(m.c,null,"Products"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",{className:"d-flex"},s.a.createElement("div",{className:"container-small"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 product-hover-sec"},s.a.createElement("h5",{className:"text-center"},"Explore Our Products Range "),s.a.createElement("div",{className:"mega-menu-item d-flex justify-content-center align-items-center"},s.a.createElement("div",{className:"col-lg-6 d-flex flex-column justify-content-center align-items-center"},s.a.createElement(m.c,{to:"/tenali-double-horse-products"}," ",s.a.createElement("img",{src:"./assets/img/prods/tenali-double-horse-icon.png",alt:"pizza"})),s.a.createElement(m.c,{to:"/tenali-double-horse-products"},s.a.createElement("a",{className:"btn-custom  shadow-none btn-sm"},"View More"))),s.a.createElement("div",{className:"col-lg-6 d-flex flex-column justify-content-center align-items-center"},s.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"}," ",s.a.createElement("img",{src:"./assets/img/prods/tdh-icon-instant-foods.png",alt:"pizza"})),s.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"},s.a.createElement("button",{className:"btn-custom  shadow-none btn-sm"},"View More")))))))))),u.length>0?u.slice(4,10).map(function(t,a){return s.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):s.a.createElement(m.c,{to:t.link}," ",t.linkText," "),t.child?s.a.createElement("ul",{className:"sub-menu",role:"menu"},t.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):s.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?s.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),t}(o.Component);t.a=d},67:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"Our Legacy",link:"/about",child:!0,submenu:[{id:21,linkText:"The Journey",link:"/about",type:"p"},{id:22,link:"/Where-we-are",linkText:"Where We Are",type:"p"},{id:44,link:"/awards-recognitions",linkText:"Awards & Recognitions",type:"p"},{id:43,link:"/csr-activities",linkText:"CSR Initiatives",type:"p"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",child:!0,submenu:[{id:41,link:"/tenali-double-horse-products",linkText:"TDH Products"},{id:42,link:"https://tdhfoodproducts.com/",linkText:"TDHF Products"}]},{id:5,linkText:"News Room",link:"/news-room"},{id:6,linkText:"Contact",link:"/Contactus"}]},70:function(e,t,a){e.exports=a.p+"static/media/tdh-brouchure.ac86b663.pdf"},8:function(e,t,a){"use strict";var n=a(53),l=a(54),r=a(7),c=a(55),i=a(56),o=a(0),s=a.n(o),m=a(4),u=a(58),d=a(61),h=a(65),b=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth<=990;return s.a.createElement(o.Fragment,null,s.a.createElement(m.c,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),s.a.createElement("div",{className:"aside-scroll"},s.a.createElement("ul",null,h.length>0?h.map(function(a,n){return t&&"Blog"===a.linkText?null:s.a.createElement("li",{key:n,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):s.a.createElement(m.c,{to:a.link}," ",a.linkText," "),a.child?s.a.createElement("ul",{className:"submenu ".concat(a.child?"menu-item-has-children":"")},a.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):s.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?s.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(m.c,{to:e.link},e.linkText))})):null)}),"About"===a.linkText&&t&&s.a.createElement(o.Fragment,null,s.a.createElement("li",{className:"menu-item"},s.a.createElement("a",{href:"https://phirseudaan.com/",target:"_blank",rel:"noopener noreferrer"},"CSR Initiatives"))),"Products"===a.linkText&&t&&s.a.createElement(o.Fragment,null,s.a.createElement("li",{className:"menu-item"},s.a.createElement("a",{href:"https://tdhfoodproducts.com/",target:"_blank",rel:"noopener noreferrer"},"TDHF Products")))):null)}):null)))}}]),t}(u.a),E=a(66),k=a(57),p=a.n(k),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleScroll=function(){var e=window.scrollY>90,t=window.scrollY>0;a.setState({isSticky:e,isScrolled:t})},a.cartToggle=function(){a.setState(function(e){return{cartmethod:!e.cartmethod}})},a.searchToggle=function(){a.setState(function(e){return{searchmethod:!e.searchmethod}})},a.toggleNav=function(){a.setState(function(e){return{navmethod:!e.navmethod}})},a.state={isSticky:!1,cartmethod:!1,isScrolled:!1,searchmethod:!1,navmethod:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,t=e.isSticky,a=e.isScrolled,n=p()("main-header","header-1","header-absolute",{"header-sticky":t||a});return s.a.createElement(o.Fragment,null,s.a.createElement("div",{className:p()("search-form-wrapper",{open:this.state.searchmethod})},s.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement(d.a,null)),s.a.createElement("aside",{className:p()("main-aside",{open:this.state.navmethod})},s.a.createElement(b,null)),s.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),s.a.createElement("header",{className:n,style:{backgroundColor:t?"white":"transparent",boxShadow:t?"0px 4px 6px rgba(0, 0, 0, 0.1)":"0px 4px 6px rgba(0, 0, 0, 0)"}},s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar"},s.a.createElement(m.c,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-250x73.png",alt:"logo"})),s.a.createElement(E.a,null),s.a.createElement("div",{className:"header-controls"},s.a.createElement("ul",{className:"header-controls-inner"},s.a.createElement("div",{className:"floating-container"},s.a.createElement("div",{className:"floating-button share-icon"}," ",s.a.createElement("img",{src:"./assets/img/header/network-connection.png",alt:"topicon"})),s.a.createElement("div",{className:"element-container"},s.a.createElement("span",{className:"float-element tooltip-left"}," ",s.a.createElement("a",{href:"https://www.facebook.com/tenalidoublehorse",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-facebook-f"}))),s.a.createElement("span",{className:"float-element"},s.a.createElement("a",{href:"https://twitter.com/tnldoublehorse",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-twitter"}))),s.a.createElement("span",{className:"float-element"},s.a.createElement("a",{href:"https://www.instagram.com/tenalidoublehorse/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-instagram"}))),s.a.createElement("span",{className:"float-element"},s.a.createElement("a",{href:"https://www.linkedin.com/company/tenalidoublehorse/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-linkedin-in"}))),s.a.createElement("span",{className:"float-element"},s.a.createElement("a",{href:"https://www.youtube.com/c/TenaliDoubleHorse",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-youtube"})))))),s.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)))))))}}]),t}(u.a);t.a=g}}]);
//# sourceMappingURL=14.877d5368.chunk.js.map