(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(e){e.exports=[{id:1,img:"assets/img/prods-sm/1.png",name:"Eco Pack",qty:4,price:154.99,flavours:["14 Inches","Extra Cheese","Cheese Crust"]}]},153:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),s=a(0),o=a.n(s),m=a(6),u=a(287),d=a.n(u),h=a(146),E=h.reduce(function(e,t){return e+t.price*t.qty},0),b=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement("div",{className:"cart-sidebar-body"},o.a.createElement(d.a,{className:"cart-sidebar-scroll",style:{height:"100vh"}},h.map(function(e,t){return o.a.createElement("div",{key:t,className:"cart-sidebar-item"},o.a.createElement("div",{className:"media"},o.a.createElement(m.c,{to:"/menu-item-v1/1"},o.a.createElement("img",{src:"./"+e.img,alt:e.name})),o.a.createElement("div",{className:"media-body"},o.a.createElement("h5",null," ",o.a.createElement(m.c,{to:"/menu-item-v1/1",title:e.name},e.name)," "),o.a.createElement("span",null,e.qty,"x ",(new Intl.NumberFormat).format(e.price.toFixed(2)),"$"))),o.a.createElement("div",{className:"cart-sidebar-item-meta"},e.flavours.map(function(e,t){return o.a.createElement("span",{key:t},e)})),o.a.createElement("div",{className:"cart-sidebar-price"},(new Intl.NumberFormat).format((e.price*e.qty).toFixed(2)),"$"),o.a.createElement("div",{className:"close-btn"},o.a.createElement("span",null),o.a.createElement("span",null)))}))),o.a.createElement("div",{className:"cart-sidebar-footer"},o.a.createElement("h4",null,"Total: ",o.a.createElement("span",null,(new Intl.NumberFormat).format(E.toFixed(2)),"$")," "),o.a.createElement("button",{type:"button",className:"btn-custom"},"Checkout")))}}]),t}(s.Component);t.a=b},154:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),s=a(0),o=a.n(s),m=a(6),u=a(68),d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth<=767;return o.a.createElement(s.Fragment,null,o.a.createElement(m.c,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),o.a.createElement("div",{className:"aside-scroll"},o.a.createElement("ul",null,u.length>0?u.map(function(a,n){return t&&"Blog"===a.linkText?null:o.a.createElement("li",{key:n,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?o.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):o.a.createElement(m.c,{to:a.link}," ",a.linkText," "),a.child?o.a.createElement("ul",{className:"submenu ".concat(a.child?"menu-item-has-children":"")},a.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)))}}]),t}(a(57).a);t.a=d},155:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),s=a(0),o=a.n(s),m=a(6),u=a(57),d=a(153),h=a(74),E=a(154),b=a(88),f=a(54),p=a.n(f),g=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement("div",{className:"cart-sidebar-wrapper"},o.a.createElement("aside",{className:p()("cart-sidebar",{"cart-open":this.state.cartmethod})},o.a.createElement("div",{className:"cart-sidebar-header"},o.a.createElement("h3",null,"Your Cart"),o.a.createElement("div",{className:"close-btn cart-trigger close-dark",onClick:this.cartToggle},o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement(d.a,null)),o.a.createElement("div",{className:"cart-sidebar-overlay cart-trigger",onClick:this.cartToggle})),o.a.createElement("div",{className:p()("search-form-wrapper",{open:this.state.searchmethod})},o.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement(h.a,null)),o.a.createElement("aside",{className:p()("main-aside",{open:this.state.navmethod})},o.a.createElement(E.a,null)),o.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),o.a.createElement("header",{className:"main-header header-1 header-absolute header-light"},o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar"},o.a.createElement(m.c,{className:"navbar-brand",to:"/"}," ",o.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-250x73.png",alt:"logo"})," "),o.a.createElement(b.a,null),o.a.createElement("div",{className:"header-controls"},o.a.createElement("ul",{className:"header-controls-inner"},o.a.createElement("div",{className:"floating-container"},o.a.createElement("div",{className:"floating-button share-icon"}," ",o.a.createElement("img",{src:"./assets/img/header/network-connection.png",alt:"topicon"})),o.a.createElement("div",{className:"element-container"},o.a.createElement("span",{className:"float-element tooltip-left"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse"},o.a.createElement("i",{class:"fab fa-facebook-f"}))),o.a.createElement("span",{className:"float-element"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/i/flow/login?redirect_after_login=%2Ftnldoublehorse"},o.a.createElement("i",{class:"fab fa-twitter"}))),o.a.createElement("span",{className:"float-element"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/"},o.a.createElement("i",{class:"fab fa-instagram"}))),o.a.createElement("span",{className:"float-element"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/tenalidoublehorse/?originalSubdomain=in"},o.a.createElement("i",{class:"fab fa-linkedin-in"}))),o.a.createElement("span",{className:"float-element"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse"},o.a.createElement("i",{class:"fab fa-youtube"})))))),o.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)))))))}}]),t}(u.a);t.a=g},57:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),s=a(56),o=a(0),m=a.n(o),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).getNextSibling=function(e,t){var a=e.nextElementSibling;if(!t)return a;for(;a;){if(a.matches(t))return a;a=a.nextElementSibling}},a.triggerChild=function(e){var t="";null!==(t=void 0!==a.getNextSibling(e.target,".submenu")?a.getNextSibling(e.target,".submenu"):null)&&void 0!==t&&""!==t&&(t.classList=t.classList.contains("d-block")?"submenu":"submenu d-block")},a.state={navmethod:!1,cartmethod:!1,searchmethod:!1},a.toggleNav=a.toggleNav.bind(Object(s.a)(Object(s.a)(a))),a.cartToggle=a.cartToggle.bind(Object(s.a)(Object(s.a)(a))),a.searchToggle=a.searchToggle.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return m.a.createElement(o.Fragment,null)}}]),t}(o.Component);t.a=u},59:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),s=a(0),o=a.n(s),m=a(6),u=a(72),d=a.n(u),h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return o.a.createElement("footer",{id:"footer-bg section section-padding",className:this.props.footer.style,style:{position:"relative"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"footer-top"},o.a.createElement("div",{className:"footer-buttons ",style:{position:"absolute",top:"-22px",right:"-1%"}},o.a.createElement("img",{src:"./assets/img/redesgin-great-place-work.png",style:{height:"100%",width:"100%"},className:"img-responsive",alt:"logo"})))),o.a.createElement("div",{className:"footer-middle "},o.a.createElement("div",{className:"container "},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 link-2"},o.a.createElement("h5",{className:"widget-title"},"Quick Links"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/about"},"Our Company")," "),o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/tenali-double-horse-products"},"Tdh Products")," "),o.a.createElement("li",null," ",o.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"},"Tdh Food Products")," "),o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/usa-shops"},"Usa")," "),o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/Contactus"},"Contact")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 link-2"},o.a.createElement("h5",{className:"widget-title"},"Legal Links"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/terms-and-condation"},"Terms of Use")," "),o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/privacy-policy"},"Privacy Policy")," "),o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/shipping-policy"},"Shipping Policy")," "),o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/refund-policy"},"Refund Policy")," "),o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/payment-ploicy"},"Payment Services")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 "},o.a.createElement("h5",{className:"widget-title"},"Reach out to us"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"tel:1800 270 567567",target:"_blank"},"Call Us")),o.a.createElement("li",null," ",o.a.createElement("a",{href:"mailto:info@tenalidoublehorse.com",target:"_blank"},"Email")," "),o.a.createElement("li",null," ",o.a.createElement(m.c,{to:"/Contactus",target:"_blank"},"Locate")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Follow us on Social Media"),o.a.createElement("ul",{className:"social-media"},o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},o.a.createElement("i",{className:"fab fa-facebook-f"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},o.a.createElement("i",{className:"fab fa-youtube"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},o.a.createElement("i",{className:"fab fa-instagram"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/tnldoublehorse",className:"twitter"},o.a.createElement("i",{className:"fab fa-twitter"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/tenalidoublehorse/",className:"linkedin"},o.a.createElement("i",{className:"fab fa-linkedin"})))),o.a.createElement("div",{className:"footer-offer"},o.a.createElement("p",{className:"text-dark"},"Know More Information!"),o.a.createElement("a",{href:d.a,download:"tdh-brouchure.pdf",className:"btn-custom btn-sm shadow-none",target:"_blank",type:"application/pdf"},"Download Brochure")))))),o.a.createElement("div",{className:"footer-bottom"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"footer-copyright"},o.a.createElement("p",null," Copyright \xa9 2023 ",o.a.createElement(m.c,{to:"/"},"Tenali Double Horse ")," All Rights Reserved. "),o.a.createElement(m.c,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},o.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),t}(s.Component);t.a=h},68:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"About",link:"/about",child:!0,submenu:[{id:21,linkText:"Our Company",link:"/about"},{id:23,link:"/Where-we-are",linkText:"Where We Are"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",child:!0,submenu:[{id:41,link:"/tenali-double-horse-products",linkText:"TDH Products"},{id:42,link:"https://tdhfoodproducts.com/",linkText:"TDHF Products"}]},{id:5,linkText:"Contact",link:"/Contactus"}]},72:function(e,t,a){e.exports=a.p+"static/media/tdh-brouchure.ac86b663.pdf"},74:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),s=a(0),o=a.n(s),m=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"search-form",method:"post"},o.a.createElement("input",{type:"text",placeholder:"Search..."}),o.a.createElement("button",{type:"submit",className:"search-btn"},o.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),t}(s.Component);t.a=m},88:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),s=a(0),o=a.n(s),m=a(6),u=a(68),d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"navbar-nav "},u.length>0?u.slice(0,2).map(function(t,a){return o.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?o.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):o.a.createElement(m.c,{to:t.link}," ",t.linkText," "),t.child?o.a.createElement("ul",{className:"submenu",role:"menu"},t.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null,o.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},o.a.createElement(m.c,null,"Products"),o.a.createElement("ul",{className:"submenu"},o.a.createElement("li",{className:"d-flex"},o.a.createElement("div",{className:"container-small"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12 product-hover-sec"},o.a.createElement("h5",{className:"text-center"},"Explore Our Products Range "),o.a.createElement("div",{className:"mega-menu-item d-flex justify-content-center align-items-center"},o.a.createElement("div",{className:"col-lg-6 d-flex flex-column justify-content-center align-items-center"},o.a.createElement(m.c,{to:"/tenali-double-horse-products"}," ",o.a.createElement("img",{src:"./assets/img/prods/tenali-double-horse-icon.png",alt:"pizza"})),o.a.createElement(m.c,{to:"/tenali-double-horse-products"},o.a.createElement("a",{className:"btn-custom  shadow-none btn-sm"},"View More"))),o.a.createElement("div",{className:"col-lg-6 d-flex flex-column justify-content-center align-items-center"},o.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"}," ",o.a.createElement("img",{src:"./assets/img/prods/tdh-icon-instant-foods.png",alt:"pizza"})),o.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"},o.a.createElement("button",{className:"btn-custom  shadow-none btn-sm"},"View More")))))))))),u.length>0?u.slice(4,10).map(function(t,a){return o.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?o.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):o.a.createElement(m.c,{to:t.link}," ",t.linkText," "),t.child?o.a.createElement("ul",{className:"sub-menu",role:"menu"},t.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),t}(s.Component);t.a=d}}]);
//# sourceMappingURL=3.efc99935.chunk.js.map