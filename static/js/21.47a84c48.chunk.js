(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{164:function(e,t,a){"use strict";var n=a(49),r=a(50),i=a(52),c=a(51),s=a(53),l=a(0),o=a.n(l),m=[{icon:"flaticon-employee",count:24934,title:"Happy Customers"},{icon:"fas fa-box-open",count:20,title:"Products"},{icon:"fas fa-truck",count:67335,title:"orders delivered"}],u=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section section-padding  bg-cover bg-center mt-5 ",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/categories/stats-banner.png)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-title-wrap section-header text-center"},o.a.createElement("h2",{className:"title text-white"},"Our success Story"),o.a.createElement("p",{className:"subtitle text-white"},"Tenali Double Horse team is committed to provide the highest quality products and services to our customers to satisfy their needs and expectations of quality, reliability, and timely delivery.")),o.a.createElement("div",{className:"row "},m.map(function(e,t){return o.a.createElement("div",{key:t,className:"col-lg-4 col-md-6 col-sm-6"},o.a.createElement("div",{className:"ct-infographic-item"},o.a.createElement("i",{className:e.icon}),o.a.createElement("h4",null,(new Intl.NumberFormat).format(e.count)),o.a.createElement("p",null,e.title)))}))))}}]),t}(l.Component);t.a=u},166:function(e,t,a){"use strict";var n=a(49),r=a(50),i=a(52),c=a(51),s=a(53),l=a(0),o=a.n(l),m=a(5),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).handleIntersection=function(e){e.forEach(function(e){e.isIntersecting&&a.setState({isVisible:!0})})},a.state={isVisible:!1},a.sectionRef=o.a.createRef(),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:.3});this.sectionRef.current&&e.observe(this.sectionRef.current)}},{key:"render",value:function(){var e=this.state.isVisible;return o.a.createElement("div",{ref:this.sectionRef,className:"subheader gap-section pt-5 fade-in-section ".concat(e?"visible":""),style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/bg/one-about.png)",paddingTop:"30px!important"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"subheader-inner"},o.a.createElement("nav",{"aria-label":"breadcrumb breadcrumb-two"},o.a.createElement("ol",{className:"breadcrumb breadcrumb-two "},o.a.createElement("li",{className:"breadcrumb-item "},o.a.createElement("h5",{className:"custom-primary",style:{marginBottom:"10px"}},"About")),o.a.createElement("li",{className:"breadcrumb-item "},o.a.createElement("h2",{className:"title",style:{marginBottom:"10px"}},"Tenali Double Horse")),o.a.createElement("li",{className:"breadcrumb-item active text-dark","aria-current":"page"},"Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse\u2019s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you."),o.a.createElement(m.b,{to:"/about",className:"btn-custom primary mt-4"},"Read More  "))))))}}]),t}(l.Component);t.a=u},170:function(e,t,a){"use strict";var n=a(49),r=a(50),i=a(52),c=a(51),s=a(53),l=a(0),o=a.n(l),m=[{icon:"flaticon-employee",count:24934,title:"Happy Customers"},{icon:"fas fa-box-open",count:20,title:"Products"},{icon:"fas fa-truck",count:67335,title:"orders delivered"}],u=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/tenali-double-horse-about-1920x980.jpg)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-title-wrap section-header text-center"},o.a.createElement("h2",{className:"title text-white"},"Our success Story"),o.a.createElement("p",{className:"subtitle text-white"},"Tenali Double Horse team is committed to provide the highest quality products and services to our customers to satisfy their needs and expectations of quality, reliability, and timely delivery.")),o.a.createElement("div",{className:"row"},m.map(function(e,t){return o.a.createElement("div",{key:t,className:"col-lg-4 col-md-6 col-sm-6"},o.a.createElement("div",{className:"ct-infographic-item"},o.a.createElement("i",{className:e.icon}),o.a.createElement("h4",null,(new Intl.NumberFormat).format(e.count)),o.a.createElement("p",null,e.title)))}))))}}]),t}(l.Component);t.a=u},288:function(e,t,a){"use strict";var n=a(49),r=a(50),i=a(52),c=a(51),s=a(53),l=a(0),o=a.n(l),m=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section  mb-5 mt-5",style:{backgroundColor:"#f9f9f9"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("div",{className:"col-lg-6 mb-lg-30 ct-single-img-wrapper"},o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/Tenali-Double-Horse-about-1280x1560.png",alt:"img"}),o.a.createElement("div",{className:"ct-dots"})),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"section-title-wrap mr-lg-30 mt-4"},o.a.createElement("h5",{className:"custom-primary"},"About"),o.a.createElement("h2",{className:"title"}," Tenali Double Horse "),o.a.createElement("p",{className:"subtitle",style:{textAlign:"justify"}},"Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse\u2019s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you."),o.a.createElement("a",{href:"/about",className:"btn-custom"},"Read more"))))))}}]),t}(l.Component);t.a=m},344:function(e,t,a){"use strict";a.r(t);var n=a(49),r=a(50),i=a(52),c=a(51),s=a(53),l=a(0),o=a.n(l),m=a(63),u=a.n(m),d=a(83),b=a(62),p=a(56),h=(a(288),a(166)),f=(a(170),a(86)),y=a(164),v=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"rules-container"},o.a.createElement("div",{className:"Legacy-Container mr-lg-3"},o.a.createElement("h5",{className:"custom-primary"},"Our Legacy"),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"From the very start, the entire Tenali Double Horse team has always been focused on fanatically serving our consumers. We believe the only way to be successful is to truly understand the market requirements and provide the products our consumers need and cherish."),o.a.createElement("br",null),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"Now we have grown to a huge team of service personnel working out of our headquarters in Tenali. By staying humble and focused on bringing the heart to quality, we are encouraging more online business owners to make their impact every day.")),o.a.createElement("div",{className:"principles-Container ml-lg-3"},o.a.createElement("h5",{className:"custom-primary"},"Our Principles"),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"We strongly believe in commitment and loyalty being primary work ethics. And in its decades of service, these are what brought the Tenali Double Horse success without fail. As a reason, Tenali Double Horse stands committed to serve its consumers with products of the highest quality and keeps striving to exceed their expectations and remain their favorite choice forever. "),o.a.createElement("br",null),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"A higher amount of dedication and commitment is shown towards our team consisting of hundreds of employees because of whom we are who we are today."))))}}]),t}(l.Component),g=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"main-timeline"},this.props.timelineData.map(function(e,t){return o.a.createElement("div",{className:"timeline",key:t},o.a.createElement("div",{className:"timeline-icon"},o.a.createElement("span",{className:"year"},e.year)),o.a.createElement("div",{className:"timeline-content"},o.a.createElement("h3",{className:"title"},e.title),o.a.createElement("p",{className:"description"},e.description)))})))))}}]),t}(o.a.Component),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).timelineData=[{year:"2005",title:"India",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat."},{year:"2010",title:"Hyderabad",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat."},{year:"2015",title:"USA",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat."},{year:"2020",title:"UAE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat."}],a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mt-5 mb-5"},o.a.createElement("h5",{className:"custom-primary text-center"},"Unraveling Our Story"),o.a.createElement("h2",{className:"title text-center"},"A Timeline of Growth, Innovation, and Impact"),o.a.createElement(g,{timelineData:this.timelineData}))}}]),t}(o.a.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(l.Fragment,null,o.a.createElement(h.a,null),o.a.createElement(v,null),o.a.createElement(y.a,null),o.a.createElement("div",{className:"enquires"},o.a.createElement("h1",{className:"heading"},"For export enquires mail us"),o.a.createElement("button",{className:"button-gmail"},"exports@tenalidoublehorse.com")),o.a.createElement(E,null),o.a.createElement(f.a,null))}}]),t}(l.Component),j=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(l.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,"Tenali  doublehorse | ","About Us"),o.a.createElement("meta",{name:"description",content:"#"})),o.a.createElement(d.a,null),o.a.createElement(b.a,{breadcrumb:{pagename:"About Us"}}),o.a.createElement(N,null),o.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),t}(l.Component);t.default=j},62:function(e,t,a){"use strict";var n=a(49),r=a(50),i=a(52),c=a(51),s=a(53),l=a(0),o=a.n(l),m=a(5),u=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"subheader dark-overlay dark-overlay-2",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/Tenali-Double-Horse-About-1920x800.jpg)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"subheader-inner"},o.a.createElement("h1",null,this.props.breadcrumb.pagename),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement(m.b,{to:"/"},"Home")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(l.Component);t.a=u},86:function(e,t,a){"use strict";var n=a(49),r=a(50),i=a(52),c=a(51),s=a(53),l=a(0),o=a.n(l),m=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"section bg-center bg-cover dark-overlay",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/bg/Tenali-Double-Horse-NewsLetter.png)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"ct-newsletter"},o.a.createElement("div",{className:"section-title-wrap section-header"},o.a.createElement("h2",{className:"title"},"Join Our Newsletter"),o.a.createElement("p",{className:"subtitle"},"At Tenali Double Horse we're creating a world where accessibility of quality and health in return for trust is a norm.")),o.a.createElement("form",{method:"post"},o.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter your email address"}),o.a.createElement("button",{type:"submit",className:"btn-custom primary",name:"button"}," Submit ",o.a.createElement("i",{className:"far fa-paper-plane"})," ")))))}}]),t}(l.Component);t.a=m}}]);
//# sourceMappingURL=21.47a84c48.chunk.js.map