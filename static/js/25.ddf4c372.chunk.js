(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{404:function(e,t,a){"use strict";a.r(t);var n=a(49),l=a(50),r=a(53),c=a(51),m=a(52),o=a(0),s=a.n(o),u=a(62),i=a.n(u),E=a(66),p=a(70),d=a(58),b=a(5),f=a(55),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).IncrementItem=function(e){e.qty=e.qty+1,a.setState({cartitem:a.state.cartitem,priceTotal:f.reduce(function(e,t){return e+t.price*t.qty},0)})},a.DecreaseItem=function(e){e.qty=e.qty-1,a.setState({cartitem:a.state.cartitem,priceTotal:f.reduce(function(e,t){return e+t.price*t.qty},0)})},a.state={priceTotal:f.reduce(function(e,t){return e+t.price*t.qty},0),cartitem:f},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"ct-responsive-table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"remove-item"}),s.a.createElement("th",null,"Product"),s.a.createElement("th",null,"Price"),s.a.createElement("th",null,"Qunantity"),s.a.createElement("th",null,"Total"))),s.a.createElement("tbody",null,f.map(function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",{className:"remove"},s.a.createElement("button",{type:"button",className:"close-btn close-danger remove-from-cart"},s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("td",{"data-title":"Product"},s.a.createElement("div",{className:"cart-product-wrapper"},s.a.createElement("img",{src:"./"+t.img,alt:t.name}),s.a.createElement("div",{className:"cart-product-body"},s.a.createElement("h6",null," ",s.a.createElement(b.c,{to:"/menu-item-v1/1"},t.name)," "),t.flavours.map(function(e,t){return s.a.createElement("p",{key:t},e)})))),s.a.createElement("td",{"data-title":"Price"}," ",s.a.createElement("strong",null,(new Intl.NumberFormat).format(t.price.toFixed(2)),"$")," "),s.a.createElement("td",{className:"quantity","data-title":"Quantity"},s.a.createElement("div",{className:"qty"},s.a.createElement("span",{className:"qty-subtract",onClick:function(){return e.DecreaseItem(t)}},s.a.createElement("i",{className:"fa fa-minus"})),s.a.createElement("input",{type:"text",name:"clicks",value:t.qty,readOnly:!0}),s.a.createElement("span",{className:"qty-add",onClick:function(){return e.IncrementItem(t)}},s.a.createElement("i",{className:"fa fa-plus"})))),s.a.createElement("td",{"data-title":"Total"}," ",s.a.createElement("strong",null,(new Intl.NumberFormat).format((t.price*t.qty).toFixed(2)),"$")," "))}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-5"},s.a.createElement("div",{className:"form-group mb-0"},s.a.createElement("div",{className:"input-group mb-0"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Coupon Code","aria-label":"Coupon Code"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{className:"btn-custom shadow-none",type:"button"},"Apply")))))),s.a.createElement("div",{className:"row ct-cart-form"},s.a.createElement("div",{className:"offset-lg-6 col-lg-6"},s.a.createElement("h4",null,"Cart Total"),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Subtotal"),s.a.createElement("td",null,(new Intl.NumberFormat).format(this.state.priceTotal.toFixed(2)),"$")),s.a.createElement("tr",null,s.a.createElement("th",null,"Tax"),s.a.createElement("td",null," ",9.99,"$ ",s.a.createElement("span",{className:"small"},"(11%)")," ")),s.a.createElement("tr",null,s.a.createElement("th",null,"Total"),s.a.createElement("td",null," ",s.a.createElement("b",null,(new Intl.NumberFormat).format((this.state.priceTotal+9.99).toFixed(2)),"$")," ")))),s.a.createElement("button",{type:"submit",className:"btn-custom primary btn-block"},"Proceeed to Checkout")))))}}]),t}(o.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(o.Fragment,null,s.a.createElement(i.a,null,s.a.createElement("title",null,"Slices - React Template | ","Cart"),s.a.createElement("meta",{name:"description",content:"#"})),s.a.createElement(E.a,null),s.a.createElement(p.a,{breadcrumb:{pagename:"Cart"}}),s.a.createElement(y,null),s.a.createElement(d.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}}))}}]),t}(o.Component);t.default=N}}]);
//# sourceMappingURL=25.ddf4c372.chunk.js.map