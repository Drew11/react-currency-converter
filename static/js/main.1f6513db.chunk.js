(this["webpackJsonpreact-currency-converter"]=this["webpackJsonpreact-currency-converter"]||[]).push([[0],{53:function(e,t,a){e.exports=a(83)},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),u=a.n(c),s=a(51),o=(a(58),a(4)),l=a.n(o),i=a(11),f=a(15),m=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.exchangeratesapi.io/latest?base=".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,r=n.rates[a],e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(e){var t=[];for(var a in e)t.push(a);return t.sort((function(e,t){return e.localeCompare(t)})),t.map((function(e,t){return r.a.createElement("option",{key:t,defaultValue:e},e)}))},v=(a(60),function(){var e=Object(n.useState)({}),t=Object(f.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)("USD"),s=Object(f.a)(u,2),o=s[0],v=s[1],O=Object(n.useState)("RUB"),E=Object(f.a)(O,2),j=E[0],h=E[1],y=Object(n.useState)(0),d=Object(f.a)(y,2),w=d[0],g=d[1],x=Object(n.useState)(1),k=Object(f.a)(x,2),S=k[0],C=k[1];Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(o);case 2:return t=e.sent,e.next=5,p(j,t.base);case 5:a=e.sent,c(t),g(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var N=Object(n.useCallback)(Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(o);case 2:return t=e.sent,c(t),e.next=6,p(j,t.base);case 6:a=e.sent,g(a);case 8:case"end":return e.stop()}}),e)}))),[o]),P=Object(n.useCallback)(Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j,a.base);case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)}))),[j]);Object(n.useEffect)((function(){N()}),[o]),Object(n.useEffect)((function(){P()}),[j]);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"converter"},r.a.createElement("span",null,"from"),r.a.createElement("select",{name:"currency-selected",id:"from",value:j,onChange:function(e){h(e.target.value)}},b(a.rates)),r.a.createElement("span",null,"to"),r.a.createElement("select",{name:"currency-base",id:"to",value:o,onChange:function(e){v(e.target.value)}},b(a.rates)),r.a.createElement("div",{className:"amount"},r.a.createElement("input",{type:"number",defaultValue:S,min:1,onChange:function(e){return C(e.target.value)}})),r.a.createElement("div",{className:"result"},r.a.createElement("h2",null,"Result value:"),r.a.createElement("span",null,"".concat(Math.floor(S*w*1e5)/1e5,": ").concat(a.base)))))}),O=a(52),E=a(44),j=a(85),h=(a(61),function(e){var t=e.favorites;return r.a.createElement(j.a,null,r.a.createElement(j.a.Toggle,{variant:"success",id:"dropdown-basic"},"Favorites: ",Object.entries(t).length),r.a.createElement(j.a.Menu,null,Object.entries(t).map((function(e){return r.a.createElement(j.a.Item,null,"".concat(e[0],": ").concat(e[1]))}))))}),y=a(87),d=a(48);a(76);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var g=function(){var e=Object(n.useState)({}),t=Object(f.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)("USD"),s=Object(f.a)(u,2),o=s[0],p=s[1],v=Object(n.useState)({}),j=Object(f.a)(v,2),g=j[0],x=j[1];Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(o);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){for(var e in g)g[e]=a.rates[e];x(g)}),[a]);var k=function(e,t){if(!g.hasOwnProperty(e)){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},g);a[e]=t,x(a)}},S=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.target.value);case 2:a=e.sent,c(a),p(a.base);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container__currency-rates"},r.a.createElement("div",{className:"currency-rates"},r.a.createElement("span",{className:"base"},r.a.createElement("span",null,"Base:"),r.a.createElement("select",{name:"base",value:o,onChange:S},b(a.rates))),r.a.createElement(y.a,{variant:"flush",className:"list__group",size:4},function(){if(a.rates){var e=Object.entries(a.rates),t=Object(O.a)(e);return t.sort((function(e,t){return e[0].localeCompare(t[0])})),t.map((function(e,t){return r.a.createElement(y.a.Item,{key:t,className:"list__group-item"},"".concat(e[0],": ").concat(e[1]),r.a.createElement(d.a,{onClick:function(){k(e[0],e[1])}},"+"))}))}}())),r.a.createElement(h,{favorites:g}))},x=(a(77),a(86)),k=a(10),S=(a(78),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(x.a,{variant:"tabs",defaultActiveKey:"/home"},r.a.createElement(x.a.Item,null,r.a.createElement(x.a.Link,{href:"/converter"},"Converter")),r.a.createElement(x.a.Item,null,r.a.createElement(x.a.Link,{href:"/currency_rates"},"Currency Rates")))),r.a.createElement("main",null,r.a.createElement(k.d,null,r.a.createElement(k.a,{exact:!0,from:"/",to:"/converter"}),r.a.createElement(k.b,{exact:!0,path:"/converter",component:v}),r.a.createElement(k.b,{exact:!0,path:"/currency_rates"},r.a.createElement(g,null)))),r.a.createElement("footer",null))});u.a.render(r.a.createElement(s.a,{basename:"/react-currency-converter"},r.a.createElement(S,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.1f6513db.chunk.js.map