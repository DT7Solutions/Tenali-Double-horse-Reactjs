(window.webpackJsonp=window.webpackJsonp||[]).push([[33,5],{413:function(e,a,t){"use strict";t.r(a);var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(75),u=t.n(m),d=t(96),N=t(59),h=(t(350),t(78)),b=t(352),p=[{Header:"Sl No",accessor:"slNo"},{Header:"State Name",accessor:"stateName"},{Header:"City",accessor:"city"},{Header:"Store Name",accessor:"storeName"}],E=function(){var e=Object(o.useState)([{slNo:1,stateName:"Connecticut",city:"Weathersfield",storeName:"Annpurna Indian Grocery"},{slNo:2,stateName:"Connecticut",city:"Hartford",storeName:"Godavari"},{slNo:3,stateName:"Massachusetts",city:"Acton",storeName:"Shivas super Bazar"},{slNo:4,stateName:"Massachusetts",city:"Lowell",storeName:"Maruthi Indian Grocery"},{slNo:5,stateName:"Massachusetts",city:"Burlington",storeName:"Towne Plaza"},{slNo:6,stateName:"Massachusetts",city:"Burlington",storeName:"Spiceland"},{slNo:7,stateName:"Massachusetts",city:"Shrewsbury",storeName:"Spiceh ut Bawarchi"},{slNo:8,stateName:"Massachusetts",city:"Quincy",storeName:"India Mart"},{slNo:9,stateName:"Massachusetts",city:"Weymouth",storeName:"Aha India"},{slNo:10,stateName:"Massachusetts",city:"Tewksbury",storeName:"Spicindya Grocery"},{slNo:11,stateName:"Washington",city:"Seattle",storeName:"ApnaBazar"},{slNo:12,stateName:"Washington",city:"Redwood",storeName:"ApnaBazar"},{slNo:13,stateName:"Washington",city:"Bohell",storeName:"ApnaBazar"},{slNo:14,stateName:"Virginia",city:"Chantilly",storeName:"Lotte Plaza"},{slNo:15,stateName:"Virginia",city:"Springfield",storeName:"Lotte Plaza"},{slNo:16,stateName:"Virginia",city:"Herndon",storeName:"Lotte Plaza"},{slNo:17,stateName:"New Jersey",city:"Hillsborough",storeName:"Patidar"},{slNo:18,stateName:"New Jersey",city:" Finnegan",storeName:"Patidar"},{slNo:19,stateName:"New Jersey",city:"Hightstown",storeName:"Patidar"},{slNo:20,stateName:"New Jersey",city:"Franklin Park",storeName:"Apna Bazar Farmers Market"},{slNo:21,stateName:"New Jersey",city:"Centennial Ave",storeName:"Asian Food Market"},{slNo:22,stateName:"New Jersey",city:"Lawrence Township",storeName:"Star Big Bazaar"},{slNo:23,stateName:"New Jersey",city:"Old Bridge Township",storeName:"Bhavani Food Farmer\u2019s Market"},{slNo:24,stateName:"New Jerseys",city:"East Windsor",storeName:"Patel Brothers"},{slNo:25,stateName:"New Jersey",city:"Oak Tree Rd Edison",storeName:"Apna Bazar Cash & Carry"},{slNo:26,stateName:"New Jersey",city:"Easton Ave",storeName:"Star Bazaar"},{slNo:27,stateName:"New Jersey",city:"Gaston Ave Somerville",storeName:"Desi Bazaar"},{slNo:28,stateName:"New Jersey",city:"Centennial Ave",storeName:"Asian Food Market"},{slNo:29,stateName:"New Jersey",city:"Plainsboro",storeName:"Big Bazaar"},{slNo:30,stateName:"New Jersey",city:"Bound Brook",storeName:"Bhavani Cash And Carry"},{slNo:31,stateName:"New Jersey",city:"Talmadge Rd",storeName:"Indian Grocery Outlet"}]),a=Object(h.a)(e,2),t=a[0],n=(a[1],Object(o.useState)(t)),r=Object(h.a)(n,2),l=r[0],s=r[1],c=Object(b.useTable)({columns:p,data:l},b.useFilters),m=c.getTableProps,u=c.getTableBodyProps,d=c.headerGroups,N=c.rows,E=c.prepareRow;return i.a.createElement("div",{className:"mt-5",style:{backgroundColor:"#f9f9f9"}},i.a.createElement("div",{className:"search-section shadow-sm p-3 bg-rounded"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("h3",null,"Find Your Store")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(e){var a=e.target.value;""===a.trim()?s(t):s(t.filter(function(e){return e.storeName.toLowerCase().includes(a.toLowerCase())||e.slNo.toString().includes(a)||e.stateName.toLowerCase().includes(a.toLowerCase())||e.city.toLowerCase().includes(a.toLowerCase())}))},style:{borderColor:"black",border:"3px solid #66676A"}}))),l.length>0?i.a.createElement("table",Object.assign({},m(),{className:"table"}),i.a.createElement("thead",null,d.map(function(e){return i.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return i.a.createElement("th",e.getHeaderProps(),e.render("Header"))}))})),i.a.createElement("tbody",u(),N.map(function(e){return E(e),i.a.createElement("tr",Object.assign({},e.getRowProps(),{className:e.index%2===0?"odd-row":"even-row"}),e.cells.map(function(e){return i.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))):i.a.createElement("p",null,"No results found."))},g=[{Header:"Sl No",accessor:"slNo"},{Header:"State Name",accessor:"stateName"},{Header:"City",accessor:"city"},{Header:"Store Name",accessor:"storeName"}],f=function(){var e=Object(o.useState)([{slNo:1,stateName:"Arizona",city:"AZ",storeName:"Cloves Indian grocery"},{slNo:2,stateName:"Arizona",city:"AZ",storeName:"Turmeric"},{slNo:3,stateName:"Arizona",city:"AZ",storeName:"Turmeric cash & Carry"},{slNo:4,stateName:"Arizona",city:"AZ",storeName:"Lotus / Urban Chilli"},{slNo:5,stateName:"Arizona",city:"AZ",storeName:"Apana bazar"},{slNo:6,stateName:"Arizona",city:"AZ",storeName:"Lee lee International market"},{slNo:7,stateName:"Arizona",city:"AZ",storeName:"Safron"},{slNo:8,stateName:"Arizona",city:"AZ",storeName:"Turmeric"},{slNo:9,stateName:"Arizona",city:"AZ",storeName:"Lee lee International market (2stores)"},{slNo:10,stateName:"California",city:"Diamond Bar",storeName:"International india bazar"},{slNo:11,stateName:"California",city:"Fullerton",storeName:"International india bazar"},{slNo:12,stateName:"California",city:"Irvine",storeName:"Namaste plaza"},{slNo:13,stateName:"California",city:"Pasadena",storeName:"Namaste spice land"},{slNo:14,stateName:"California",city:"Portland",storeName:"Apana bazar"},{slNo:15,stateName:"California",city:"San Diego",storeName:"Namaste plaza"},{slNo:16,stateName:"California",city:"Tustin",storeName:"International india bazar /lakshmi"},{slNo:17,stateName:"California",city:"Valley side",storeName:"Namaste spice land"},{slNo:18,stateName:"California",city:"River side",storeName:"International india bazar"},{slNo:19,stateName:"California",city:"Santa Clarita",storeName:"Namaste spice land"},{slNo:20,stateName:"Los Angeles",city:"LA",storeName:"Suva spice mart"},{slNo:21,stateName:"Los Angeles",city:"LA",storeName:"Sunshine Indian grocery"},{slNo:22,stateName:"Los Angeles",city:"LA",storeName:"Shresta Indian grocery"},{slNo:23,stateName:"Los Angeles",city:"LA",storeName:"India sweet & spices"},{slNo:24,stateName:"Los Angeles",city:"LA",storeName:"Bombay market"},{slNo:25,stateName:"Los Angeles",city:"LA",storeName:"New india bazar"},{slNo:26,stateName:"Los Angeles",city:"LA",storeName:"New Bombay market"},{slNo:27,stateName:"Los Angeles",city:"LA",storeName:"Europa /india spice &Sweets"},{slNo:28,stateName:"Los Angeles",city:"LA",storeName:"New Delhi spice land"},{slNo:29,stateName:"Los Angeles",city:"LA",storeName:"Bhanus Indian grocery"},{slNo:30,stateName:"Los Angeles",city:"LA",storeName:"Punjabi Indian grocery"},{slNo:31,stateName:"Los Angeles",city:"LA",storeName:"Spencers mart"},{slNo:32,stateName:"Los Angeles",city:"LA",storeName:"JH Bazar"},{slNo:33,stateName:"Seattle",city:"Seattle",storeName:"Mayuri"},{slNo:34,stateName:"Seattle",city:"Seattle",storeName:"Mayuri"},{slNo:35,stateName:"Seattle",city:"Seattle",storeName:"Mayuri"},{slNo:36,stateName:"Seattle",city:"Seattle",storeName:"Mayuri"},{slNo:37,stateName:"Seattle",city:"Seattle",storeName:"Swagath foods grocery"},{slNo:38,stateName:"Seattle",city:"Seattle",storeName:"Swagath"},{slNo:39,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:40,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:41,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:42,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:43,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:44,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:45,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:46,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:47,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:48,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:49,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:50,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:51,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:52,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"}]),a=Object(h.a)(e,2),t=a[0],n=(a[1],Object(o.useState)(t)),r=Object(h.a)(n,2),l=r[0],s=r[1],c=Object(b.useTable)({columns:g,data:l},b.useFilters),m=c.getTableProps,u=c.getTableBodyProps,d=c.headerGroups,N=c.rows,p=c.prepareRow;return i.a.createElement("div",{className:"mt-5",style:{backgroundColor:"#f9f9f9"}},i.a.createElement("div",{className:"search-section shadow-sm p-3 bg-rounded"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("h3",null,"Find Your Store")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(e){var a=e.target.value;""===a.trim()?s(t):s(t.filter(function(e){return e.storeName.toLowerCase().includes(a.toLowerCase())||e.slNo.toString().includes(a)||e.stateName.toLowerCase().includes(a.toLowerCase())||e.city.toLowerCase().includes(a.toLowerCase())}))},style:{borderColor:"black",border:"3px solid #66676A"}}))),l.length>0?i.a.createElement("table",Object.assign({},m(),{className:"table"}),i.a.createElement("thead",null,d.map(function(e){return i.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return i.a.createElement("th",e.getHeaderProps(),e.render("Header"))}))})),i.a.createElement("tbody",u(),N.map(function(e){return p(e),i.a.createElement("tr",Object.assign({},e.getRowProps(),{className:e.index%2===0?"odd-row":"even-row"}),e.cells.map(function(e){return i.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))):i.a.createElement("p",null,"No results found."))},y=t(67),v=t(65),k=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).handleOptionChange=function(e){t.setState({selectedOption:e.target.value})},t.state={selectedOption:"match_1"},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state.selectedOption;return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"section-title-wrap section-header text-center"},i.a.createElement("h5",{className:"custom-primary"},"Discover Our USA Stores"),i.a.createElement("h2",{className:"title "},"Locate Tenali Double Horse Near You"),i.a.createElement("p",{className:"subtitle "},"Find convenient addresses of our stores across the USA. Experience the essence of quality and taste as you explore our products in a store near you.")),i.a.createElement("div",{className:"section text-center cta-2 cta bg-cover bg-center dark-overlay dark-overlay-2 bg-parallax",style:{backgroundImage:"url(./assets/img/bg/usa-locations.png)"}},i.a.createElement("div",{className:"form"},i.a.createElement("form",null,i.a.createElement("fieldset",{className:"form__options"},i.a.createElement("p",{className:"form__answer"},i.a.createElement("input",{type:"radio",name:"match",id:"match_1",value:"match_1",checked:"match_1"===e,onChange:this.handleOptionChange}),i.a.createElement("label",{htmlFor:"match_1",className:"text-white"},i.a.createElement("img",{src:"./assets/img/ig/1.png",alt:"img"}),"East Coast")),i.a.createElement("p",{className:"form__answer"},i.a.createElement("input",{type:"radio",name:"match",id:"match_2",value:"match_2",checked:"match_2"===e,onChange:this.handleOptionChange}),i.a.createElement("label",{htmlFor:"match_2",className:"text-white"},i.a.createElement("img",{src:"./assets/img/ig/2.png",alt:"img"}),"West Coast")))))),"match_1"===e&&i.a.createElement(E,null),"match_2"===e&&i.a.createElement(f,null))),i.a.createElement(y.a,null),i.a.createElement(v.a,null))}}]),a}(o.Component),w=t(61),S=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Slices - React Template | ","Contact Us"),i.a.createElement("meta",{name:"description",content:"#"})),i.a.createElement(d.a,null),i.a.createElement(w.a,{breadcrumb:{pagename:"Contact Us",bannerimg:"/assets/img/banner/contact-header-banner.jpeg"}}),i.a.createElement(k,null),i.a.createElement(N.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),a}(o.Component);a.default=S},56:function(e){e.exports=[{id:1,img:"assets/img/prods-sm/1.png",name:"Eco Pack",qty:4,price:154.99,flavours:["14 Inches","Extra Cheese","Cheese Crust"]}]},57:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(71),i=t(0),m=t.n(i),u=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).getNextSibling=function(e,a){var t=e.nextElementSibling;if(!a)return t;for(;t;){if(t.matches(a))return t;t=t.nextElementSibling}},t.triggerChild=function(e){var a="";null!==(a=void 0!==t.getNextSibling(e.target,".submenu")?t.getNextSibling(e.target,".submenu"):null)&&void 0!==a&&""!==a&&(a.classList=a.classList.contains("d-block")?"submenu":"submenu d-block")},t.state={navmethod:!1,cartmethod:!1,searchmethod:!1},t.toggleNav=t.toggleNav.bind(Object(o.a)(Object(o.a)(t))),t.cartToggle=t.cartToggle.bind(Object(o.a)(Object(o.a)(t))),t.searchToggle=t.searchToggle.bind(Object(o.a)(Object(o.a)(t))),t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return m.a.createElement(i.Fragment,null)}}]),a}(i.Component);a.a=u},58:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"About",link:"/about",child:!0,submenu:[{id:21,linkText:"Our Company",link:"/about"},{id:23,link:"/Where-we-are",linkText:"Where We Are"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",child:!0,submenu:[{id:41,link:"/tenali-double-horse-products",linkText:"TDH Products"},{id:42,link:"/tenali-double-hosre-food-products",linkText:"TDHF Products"}]},{id:5,linkText:"Contact",link:"/Contactus"}]},59:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(10),u=t(64),d=t.n(u),N=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return i.a.createElement("footer",{id:"footer-bg",className:this.props.footer.style,style:{position:"relative"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer-top"},i.a.createElement("div",{className:"footer-buttons",style:{position:"absolute",top:"-22px",right:"-1%",zIndex:"9999"}},i.a.createElement("img",{src:"./assets/img/redesgin-great-place-work.png",style:{height:"100%",width:"100%"},className:"img-responsive",alt:"logo"})))),i.a.createElement("div",{className:"footer-middle "},i.a.createElement("div",{className:"container "},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},i.a.createElement("h5",{className:"widget-title"},"Quick Links"),i.a.createElement("ul",null,i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/about",target:"_blank"},"Our Company")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/tenali-double-horse-products",target:"_blank"},"Tdh Products")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/tenali-double-hosre-food-products",target:"_blank"},"Tdh Food Products")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/usa-shops",target:"_blank"},"Usa")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/Contactus",target:"_blank"},"Contact")," "))),i.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},i.a.createElement("h5",{className:"widget-title"},"Legal Links"),i.a.createElement("ul",null,i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/terms-and-condation",target:"_blank"},"Terms of Use")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/privacy-policy",target:"_blank"},"Privacy Policy")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/shipping-policy",target:"_blank"},"Shipping Policy")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/refund-policy",target:"_blank"},"Refund Policy")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/payment-ploicy",target:"_blank"},"Payment Services")," "))),i.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},i.a.createElement("h5",{className:"widget-title"},"Contact"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"tel:1800 270 567567",target:"_blank"},"Call Us")),i.a.createElement("li",null," ",i.a.createElement("a",{href:"mailto:info@tenalidoublehorse.com",target:"_blank"},"Email")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/Contactus",target:"_blank"},"Locate")," "))),i.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},i.a.createElement("h5",{className:"widget-title"},"Follow us on Social Media"),i.a.createElement("ul",{className:"social-media"},i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},i.a.createElement("i",{className:"fab fa-facebook-f"}))),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},i.a.createElement("i",{className:"fab fa-youtube"}))),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},i.a.createElement("i",{className:"fab fa-instagram"}))),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/tnldoublehorse",className:"twitter"},i.a.createElement("i",{className:"fab fa-twitter"})))),i.a.createElement("div",{className:"footer-offer"},i.a.createElement("p",{className:"text-dark"},"Know More Information!"),i.a.createElement("a",{href:d.a,download:"tdh-brouchure.pdf",className:"btn-custom btn-sm shadow-none",target:"_blank",type:"application/pdf"},"Download Brochure")))))),i.a.createElement("div",{className:"footer-bottom"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer-copyright"},i.a.createElement("p",null," Copyright \xa9 2022 ",i.a.createElement(m.c,{to:" "},"Tenali Double Horse ")," All Rights Reserved. "),i.a.createElement(m.c,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},i.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),a}(o.Component);a.a=N},61:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(10),u=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"subheader-inner"},i.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item "},i.a.createElement(m.c,{to:"/"},"Home")),i.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),a}(o.Component);a.a=u},62:function(e,a,t){e.exports=t.p+"static/media/trial-notable.ea726d66.png"},63:function(e,a,t){e.exports=t.p+"static/media/aha.cc12d466.png"},64:function(e,a,t){e.exports=t.p+"static/media/tdh-brouchure.ac86b663.pdf"},65:function(e,a,t){"use strict";var n=t(78),r=t(0),l=t.n(r),s=t(97);a.a=function(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),t=a[0],c=a[1],o=Object(r.useState)(""),i=Object(n.a)(o,2),m=i[0],u=i[1],d=Object(r.useState)(""),N=Object(n.a)(d,2),h=N[0],b=N[1],p=Object(r.useState)(""),E=Object(n.a)(p,2),g=E[0],f=E[1],y=function(){c(!t)};return l.a.createElement("div",null,l.a.createElement("style",null,"\n          /* Your CSS styles go here */\n        "),l.a.createElement("div",{id:"feedbackDrawer",className:t?"showDrawer":""},l.a.createElement("div",{id:"feedbackForm"},l.a.createElement(s.a,{onSubmit:function(e){e.preventDefault();var a={fullName:m,email:h,message:g};console.log(a),u(""),b(""),f(""),c(!1)}},l.a.createElement("h2",null,"Submit Feedback"),l.a.createElement(s.a.Group,{controlId:"fullName",style:{marginBottom:"5px"}},l.a.createElement(s.a.Control,{type:"text",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Full Name",required:!0})),l.a.createElement(s.a.Group,{controlId:"email",style:{marginBottom:"5px"}},l.a.createElement(s.a.Control,{type:"email",value:h,onChange:function(e){return b(e.target.value)},placeholder:"Email",required:!0})),l.a.createElement(s.a.Group,{controlId:"message",style:{marginBottom:"5px"}},l.a.createElement(s.a.Control,{as:"textarea",value:g,onChange:function(e){return f(e.target.value)},placeholder:"Message",rows:"5",required:!0})),l.a.createElement("button",{type:"submit",className:"btn-custom btn-sm primary",name:"button"},"Send Message"))),l.a.createElement("div",{id:"feedbackSuccess"},l.a.createElement("h2",null,"Thank You"),l.a.createElement("p",null,"Your feedback was successfully submitted"),l.a.createElement("button",{onClick:y},"Submit More Feedback")),l.a.createElement("div",{id:"feedbackError"},l.a.createElement("h2",null,"Aw, Snap!"),l.a.createElement("p",null,"There was an error submitting your feedback"),l.a.createElement("button",{onClick:y},"Try Again")),l.a.createElement("div",{id:"feedbackTrigger",onClick:y},"Feedback",l.a.createElement("span",{id:"close"},"\xbb"))))}},67:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=(t(62),t(63),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).handleAccordionClick=function(e){t.setState(function(a){return{openIndex:a.openIndex===e?-1:e}})},t.state={openIndex:-1},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"womensdayawrap "},i.a.createElement("div",{className:"accordion"},[{heading:"Exports Enquiries ?"}].map(function(a,t){return i.a.createElement("div",{key:t,className:"accordion-item ".concat(t===e.state.openIndex?"open":"")},i.a.createElement("div",{className:"womensdayawrapsec",onClick:function(){return e.handleAccordionClick(t)}},i.a.createElement("span",null,i.a.createElement("img",{src:"./assets/img/bg/horses-icon2.png",className:"img-responsive",alt:""})),i.a.createElement("span",null,i.a.createElement("h5",{className:"text-white mb-0",style:{fontWeight:"700"}},a.heading)),i.a.createElement("div",{className:"plusicon ".concat(t===e.state.openIndex?"minusicon":"plusicon")})),t===e.state.openIndex&&i.a.createElement("div",{className:"accordion-content bg-white"},i.a.createElement("p",{className:"p-1 mb-1 text-center"}," Call us on ",i.a.createElement("a",{href:"tel:1800270567567"},"1800 270 567567")),i.a.createElement("p",{className:"p-1 text-center"},"mail us ",i.a.createElement("a",{href:"mailto:exports@tenalidoublehorse.com"},"exports@tenalidoublehorse.com"))))})))}}]),a}(o.Component));a.a=m},72:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(10),u=t(100),d=t.n(u),N=t(56),h=N.reduce(function(e,a){return e+a.price*a.qty},0),b=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"cart-sidebar-body"},i.a.createElement(d.a,{className:"cart-sidebar-scroll",style:{height:"100vh"}},N.map(function(e,a){return i.a.createElement("div",{key:a,className:"cart-sidebar-item"},i.a.createElement("div",{className:"media"},i.a.createElement(m.c,{to:"/menu-item-v1/1"},i.a.createElement("img",{src:"./"+e.img,alt:e.name})),i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",null," ",i.a.createElement(m.c,{to:"/menu-item-v1/1",title:e.name},e.name)," "),i.a.createElement("span",null,e.qty,"x ",(new Intl.NumberFormat).format(e.price.toFixed(2)),"$"))),i.a.createElement("div",{className:"cart-sidebar-item-meta"},e.flavours.map(function(e,a){return i.a.createElement("span",{key:a},e)})),i.a.createElement("div",{className:"cart-sidebar-price"},(new Intl.NumberFormat).format((e.price*e.qty).toFixed(2)),"$"),i.a.createElement("div",{className:"close-btn"},i.a.createElement("span",null),i.a.createElement("span",null)))}))),i.a.createElement("div",{className:"cart-sidebar-footer"},i.a.createElement("h4",null,"Total: ",i.a.createElement("span",null,(new Intl.NumberFormat).format(h.toFixed(2)),"$")," "),i.a.createElement("button",{type:"button",className:"btn-custom"},"Checkout")))}}]),a}(o.Component);a.a=b},73:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{className:"search-form",method:"post"},i.a.createElement("input",{type:"text",placeholder:"Search..."}),i.a.createElement("button",{type:"submit",className:"search-btn"},i.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),a}(o.Component);a.a=m},74:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(10),u=t(58),d=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=window.innerWidth<=767;return i.a.createElement(o.Fragment,null,i.a.createElement(m.c,{className:"navbar-brand",to:"/"},i.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),i.a.createElement("div",{className:"aside-scroll"},i.a.createElement("ul",null,u.length>0?u.map(function(t,n){return a&&"Blog"===t.linkText?null:i.a.createElement("li",{key:n,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):i.a.createElement(m.c,{to:t.link}," ",t.linkText," "),t.child?i.a.createElement("ul",{className:"submenu ".concat(t.child?"menu-item-has-children":"")},t.submenu.map(function(e,a){return i.a.createElement("li",{key:a,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):i.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?i.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,a){return i.a.createElement("li",{className:"menu-item",key:a},i.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)))}}]),a}(t(57).a);a.a=d},86:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(10),u=t(58),d=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"navbar-nav "},u.length>0?u.slice(0,2).map(function(a,t){return i.a.createElement("li",{key:t,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):i.a.createElement(m.c,{to:a.link}," ",a.linkText," "),a.child?i.a.createElement("ul",{className:"submenu",role:"menu"},a.submenu.map(function(e,a){return i.a.createElement("li",{key:a,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):i.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?i.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,a){return i.a.createElement("li",{className:"menu-item",key:a},i.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null,i.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},i.a.createElement(m.c,null,"Products"),i.a.createElement("ul",{className:"submenu"},i.a.createElement("li",{className:"d-flex"},i.a.createElement("div",{className:"container-small"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 product-hover-sec"},i.a.createElement("h5",{className:"text-center"},"Explore Our Products Range "),i.a.createElement("div",{className:"mega-menu-item d-flex justify-content-center align-items-center"},i.a.createElement("div",{className:"col-lg-6 d-flex flex-column justify-content-center align-items-center"},i.a.createElement("a",{href:"/tenali-double-horse-products"}," ",i.a.createElement("img",{src:"./assets/img/prods/tenali-double-horse-icon.png",alt:"pizza"})),i.a.createElement(m.c,{to:"/tenali-double-horse-products"},i.a.createElement("a",{className:"btn-custom  shadow-none btn-sm"},"View More"))),i.a.createElement("div",{className:"col-lg-6 d-flex flex-column justify-content-center align-items-center"},i.a.createElement("a",{href:"/tenali-double-hosre-food-products"}," ",i.a.createElement("img",{src:"./assets/img/prods/tdh-icon.png",alt:"pizza"})),i.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"},i.a.createElement("button",{className:"btn-custom  shadow-none btn-sm"},"View More")))))))))),u.length>0?u.slice(4,10).map(function(a,t){return i.a.createElement("li",{key:t,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):i.a.createElement(m.c,{to:a.link}," ",a.linkText," "),a.child?i.a.createElement("ul",{className:"sub-menu",role:"menu"},a.submenu.map(function(e,a){return i.a.createElement("li",{key:a,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):i.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?i.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,a){return i.a.createElement("li",{className:"menu-item",key:a},i.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),a}(o.Component);a.a=d},96:function(e,a,t){"use strict";var n=t(49),r=t(50),l=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(10),u=t(57),d=(t(72),t(73)),N=t(74),h=t(86),b=t(54),p=t.n(b),E=(t(56),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).handleScroll=function(){var e=window.scrollY>90,a=window.scrollY>0;t.setState({isSticky:e,isScrolled:a})},t.cartToggle=function(){t.setState(function(e){return{cartmethod:!e.cartmethod}})},t.searchToggle=function(){t.setState(function(e){return{searchmethod:!e.searchmethod}})},t.toggleNav=function(){t.setState(function(e){return{navmethod:!e.navmethod}})},t.state={isSticky:!1,cartmethod:!1,isScrolled:!1,searchmethod:!1,navmethod:!1},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,a=e.isSticky,t=e.isScrolled,n=p()("main-header","header-1","header-absolute",{"header-sticky":a||t});return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:p()("search-form-wrapper",{open:this.state.searchmethod})},i.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement(d.a,null)),i.a.createElement("aside",{className:p()("main-aside",{open:this.state.navmethod})},i.a.createElement(N.a,null)),i.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),i.a.createElement("header",{className:n,style:{backgroundColor:a?"white":"transparent"}},i.a.createElement("div",{className:"container"},i.a.createElement("nav",{className:"navbar"},i.a.createElement(m.c,{className:"navbar-brand",to:"/"},i.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-250x73.png",alt:"logo"})),i.a.createElement(h.a,null),i.a.createElement("div",{className:"header-controls"},i.a.createElement("ul",{className:"header-controls-inner"},i.a.createElement("div",{className:"floating-container"},i.a.createElement("div",{className:"floating-button share-icon"}," ",i.a.createElement("img",{src:"./assets/img/header/network-connection.png",alt:"topicon"})),i.a.createElement("div",{className:"element-container"},i.a.createElement("span",{className:"float-element tooltip-left"}," ",i.a.createElement("a",{href:"https://www.facebook.com/tenalidoublehorse",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{class:"fab fa-facebook-f"}))),i.a.createElement("span",{className:"float-element"},i.a.createElement("a",{href:"https://twitter.com/tnldoublehorse",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{class:"fab fa-twitter"}))),i.a.createElement("span",{className:"float-element"},i.a.createElement("a",{href:"https://www.instagram.com/tenalidoublehorse/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{class:"fab fa-instagram"}))),i.a.createElement("span",{className:"float-element"},i.a.createElement("a",{href:"https://www.linkedin.com/company/tenalidoublehorse/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{class:"fab fa-linkedin-in"}))),i.a.createElement("span",{className:"float-element"},i.a.createElement("a",{href:"https://www.youtube.com/c/TenaliDoubleHorse",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{class:"fab fa-youtube"})))))),i.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)))))))}}]),a}(u.a));a.a=E}}]);
//# sourceMappingURL=33.238a5e94.chunk.js.map