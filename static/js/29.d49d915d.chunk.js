(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{357:function(e,a,t){"use strict";t.r(a);var n=t(49),c=t(50),l=t(52),r=t(51),s=t(53),m=t(0),i=t.n(m),o=t(66),u=t.n(o),d=t(69),E=t(84),p=t(58),h=t(63),v=t(5),b=t(334),g=t(81),N=t(67),f=t(78),k=t(82),y=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(r.a)(a).call(this,e))).state={modalshow:!1,lastActiveBox:-1},t.modalShow=t.modalShow.bind(Object(h.a)(Object(h.a)(t))),t.modalClose=t.modalClose.bind(Object(h.a)(Object(h.a)(t))),t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"modalShow",value:function(e){this.setState({modalshow:!0,lastActiveBox:e})}},{key:"modalClose",value:function(){this.setState({modalshow:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"section section-padding menu-v2"},i.a.createElement("div",{className:"container"},f.map(function(a,t){return i.a.createElement(m.Fragment,{key:t},i.a.createElement("div",{className:"menu-category dark-overlay dark-overlay-2",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/"+a.lgimg+")"}},i.a.createElement("h3",null,a.title),i.a.createElement("p",null,a.shortdesc)),i.a.createElement("div",{className:"row"},N.filter(function(e){return e.category.includes(a.id)}).map(function(a,t){return i.a.createElement("div",{className:"col-lg-4 col-md-6",key:t},i.a.createElement("div",{className:"product"},i.a.createElement("div",{className:"favorite"},i.a.createElement("i",{className:"far fa-heart"})),i.a.createElement(v.b,{className:"product-thumb",to:"/menu-item-v1/"+a.id},i.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/"+a.img,alt:a.name})),i.a.createElement("div",{className:"product-body"},i.a.createElement("div",{className:"product-desc"},i.a.createElement("h4",null," ",i.a.createElement(v.b,{to:"/menu-item-v1/"+a.id},a.name)),i.a.createElement("div",{className:"ct-rating-wrapper"},i.a.createElement("div",{className:"ct-rating"},Object(k.a)(a.rating))),i.a.createElement("p",null,a.shortdesc),i.a.createElement(v.b,{to:"#",className:"btn-custom light btn-sm shadow-none",onClick:function(t){return e.modalShow(a.id)}}," Customize ",i.a.createElement("i",{className:"fas fa-plus"})," ")),i.a.createElement("div",{className:"product-controls"},i.a.createElement("p",{className:"product-price"},(new Intl.NumberFormat).format(a.price.toFixed(2)),"$"),i.a.createElement(v.b,{to:"/menu-item-v1/"+a.id,className:"order-item btn-custom btn-sm shadow-none"},"Order ",i.a.createElement("i",{className:"fas fa-shopping-cart"})," ")))))})))})),i.a.createElement(b.a,{show:this.state.modalshow,id:"customizeModal",onHide:this.modalClose,"aria-labelledby":"contained-modal-title-vcenter",size:"lg",centered:!0},i.a.createElement(g.a,{productId:this.state.lastActiveBox})))}}]),a}(m.Component),w=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(m.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Slices - React Template | ","Menu v2"),i.a.createElement("meta",{name:"description",content:"#"})),i.a.createElement(d.a,null),i.a.createElement(E.a,{breadcrumb:{pagename:"Menu v2"}}),i.a.createElement(y,null),i.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}}))}}]),a}(m.Component);a.default=w},69:function(e,a,t){"use strict";var n=t(49),c=t(50),l=t(52),r=t(51),s=t(53),m=t(0),i=t.n(m),o=t(5),u=t(57),d=t(59),E=t(60),p=t(61),h=t(62),v=t(54),b=t.n(v),g=t(56),N=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(m.Fragment,null,i.a.createElement("div",{className:"cart-sidebar-wrapper"},i.a.createElement("aside",{className:b()("cart-sidebar",{"cart-open":this.state.cartmethod})},i.a.createElement("div",{className:"cart-sidebar-header"},i.a.createElement("h3",null,"Your Cart"),i.a.createElement("div",{className:"close-btn cart-trigger close-dark",onClick:this.cartToggle},i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement(d.a,null)),i.a.createElement("div",{className:"cart-sidebar-overlay cart-trigger",onClick:this.cartToggle})),i.a.createElement("div",{className:b()("search-form-wrapper",{open:this.state.searchmethod})},i.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement(E.a,null)),i.a.createElement("aside",{className:b()("main-aside",{open:this.state.navmethod})},i.a.createElement(p.a,null)),i.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),i.a.createElement("header",{className:"main-header header-1 header-absolute header-light"},i.a.createElement("div",{className:"container"},i.a.createElement("nav",{className:"navbar"},i.a.createElement(o.b,{className:"navbar-brand",to:"/"}," ",i.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/transparent-logo.png",alt:"logo"})," "),i.a.createElement(h.a,null),i.a.createElement("div",{className:"header-controls"},i.a.createElement("ul",{className:"header-controls-inner"},i.a.createElement("li",{className:"cart-dropdown-wrapper cart-trigger",onClick:this.cartToggle},i.a.createElement("span",{className:"cart-item-count"},g.length),i.a.createElement("i",{className:"flaticon-shopping-bag"})),i.a.createElement("li",{className:"search-dropdown-wrapper search-trigger",onClick:this.searchToggle},i.a.createElement("i",{className:"flaticon-search"}))),i.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)))))))}}]),a}(u.a);a.a=N},75:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(67);function c(e){return n.filter(function(a){return a.id===parseInt(e)})[0]}},81:function(e,a,t){"use strict";var n=t(49),c=t(50),l=t(52),r=t(51),s=t(53),m=t(0),i=t.n(m),o=t(334),u=t(75),d=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(r.a)(a).call(this,e))).IncrementItem=function(){t.setState({clicks:t.state.clicks+1})},t.DecreaseItem=function(){t.state.clicks<1?t.setState({clicks:0}):t.setState({clicks:t.state.clicks-1})},t.state={clicks:1},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({clicks:e.target.value})}},{key:"render",value:function(){var e=this.props.productId,a=Object(u.a)(e);return i.a.createElement(m.Fragment,null,i.a.createElement(o.a.Header,{className:"modal-bg mt-5",closeButton:!0,style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/"+a.img+")"}}),i.a.createElement(o.a.Body,null,i.a.createElement("div",{className:"customize-meta"},i.a.createElement("h4",{className:"customize-title"},a.name," ",i.a.createElement("span",{className:"custom-primary"},(new Intl.NumberFormat).format(a.price.toFixed(2)),"\u20b9")," "),i.a.createElement("p",null,a.shortdesc)),i.a.createElement("div",{className:"customize-variations"},i.a.createElement("div",{className:"customize-size-wrapper"},i.a.createElement("h5",null,"Size: "),a.sizes.map(function(e,a){return i.a.createElement("div",{key:a,className:e.state?"customize-size active":"customize-size"},e.size)})),i.a.createElement("div",{className:"row"},a.attributes.slice(0,3).map(function(e,a){return i.a.createElement("div",{key:a,className:"col-lg-4 col-12"},i.a.createElement("div",{className:"customize-variation-wrapper"},i.a.createElement("i",{className:e.icon}),i.a.createElement("h5",null,e.name),e.items.map(function(a,t){return i.a.createElement("div",{key:t,className:"customize-variation-item"},i.a.createElement("div",{className:"custom-control custom-"+e.type},i.a.createElement("input",{type:e.type,id:a.title+t,name:e.name,className:"custom-control-input"}),i.a.createElement("label",{className:"custom-control-label",htmlFor:a.title+t},a.title)),i.a.createElement("span",null,"+",(new Intl.NumberFormat).format(a.addprice.toFixed(2)),"$"))})))}))),i.a.createElement("div",{className:"customize-controls"},i.a.createElement("div",{className:"qty"},i.a.createElement("span",{className:"qty-subtract",onClick:this.DecreaseItem},i.a.createElement("i",{className:"fa fa-minus"})),i.a.createElement("input",{type:"text",name:"clicks",value:this.state.clicks,onChange:this.handleChange.bind(this)}),i.a.createElement("span",{className:"qty-add",onClick:this.IncrementItem},i.a.createElement("i",{className:"fa fa-plus"}))),i.a.createElement("div",{className:"customize-total","data-price":(new Intl.NumberFormat).format(a.price.toFixed(2))},i.a.createElement("h5",null,"Total Price: ",i.a.createElement("span",{className:"final-price custom-primary"},(new Intl.NumberFormat).format(a.price.toFixed(2))," ",i.a.createElement("span",null,"\u20b9")," ")," "))),i.a.createElement("button",{type:"button",className:"btn-custom btn-block"},"Order Now")))}}]),a}(m.Component);a.a=d},82:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(0),c=t.n(n);function l(e){for(var a=[],t=0;t<5;t++)a.push(c.a.createElement("i",{className:"fa fa-star",key:t}));if(e&&e>0)for(var n=0;n<=e;n++)a[n]=c.a.createElement("i",{className:"fa fa-star active",key:n});return a}}}]);
//# sourceMappingURL=29.d49d915d.chunk.js.map