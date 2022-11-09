"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[688],{688:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,o,i=r(861),u=r(885),c=r(757),s=r.n(c),p=r(168),f=r(444),l=f.ZP.input(t||(t=(0,p.Z)(["\n  margin-left: 25px;\n  height: 20px;\n  padding-left: 10px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus {\n    outline: none;\n    border-color: #2196f3;\n  }\n"]))),d=f.ZP.button(a||(a=(0,p.Z)(["\n  height: 25px;\n  color: #000;\n  border: none;\n  border-radius: 5px;\n  padding: 0px 25px;\n  margin-left: 15px;\n  background: #47a8f5;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-block;\n  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),\n    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);\n  outline: none;\n\n  &:not(:last-child) {\n    margin-right: 100px;\n  }\n\n  &:hover {\n    color: #000;\n    background-color: #ecf0f4;\n    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,\n      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;\n  }\n"]))),x=r(184),h=function(n){var e=n.onSubmit;return(0,x.jsxs)("form",{onSubmit:e,autoComplete:"off",children:[(0,x.jsx)(l,{type:"text",name:"query"}),(0,x.jsx)(d,{type:"submit",children:"Search"})]})},v=r(791),b=r(731),m=r(243),y=r(409),g=r(689),Z=(0,f.ZP)(b.rU)(o||(o=(0,p.Z)(["\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  \n  &:hover,\n  &:focus {\n    color: #2196f3;\n  }\n"]))),k=function(n){var e=n.movies,r=(0,g.TH)();return(0,x.jsx)("ul",{children:e.map((function(n){return(0,x.jsx)("li",{children:(0,x.jsx)(Z,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})},w=r(14),j=function(){var n,e=(0,v.useState)([]),r=(0,u.Z)(e,2),t=r[0],a=r[1],o=(0,v.useState)(!1),c=(0,u.Z)(o,2),p=c[0],f=c[1],l=(0,b.lr)(),d=(0,u.Z)(l,2),g=d[0],Z=d[1],j=null!==(n=g.get("query"))&&void 0!==n?n:"";(0,v.useEffect)((function(){if(j){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.prev=1,n.next=4,(0,y.V0)(j);case 4:e=n.sent,r=e.data,a(r.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),w.ZP.error("Enter correct movie title!");case 12:return n.prev=12,f(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[j]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(w.x7,{position:"top-center",reverseOrder:!0}),(0,x.jsx)(h,{onSubmit:function(n,e){n.preventDefault(),Z({searchQuery:""!==e?{query:e}:{}}),a([])}}),p&&(0,x.jsx)("div",{children:(0,x.jsx)(m.p2,{color:"#f07416",arialLabel:"loading-indicator",height:80,width:80})}),(null===t||void 0===t?void 0:t.length)>0&&(0,x.jsx)(k,{movies:t}),0===(null===t||void 0===t?void 0:t.length)&&""!==j&&(0,x.jsx)("p",{children:"Sorry, there is no films for your results! Try to find something else!"})]})}},409:function(n,e,r){r.d(e,{Df:function(){return c},M1:function(){return x},TP:function(){return l},V0:function(){return p},tx:function(){return v}});var t=r(861),a=r(757),o=r.n(a),i=r(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var u="e5eae960ae98d2ed197d9dde8e21f3aa";function c(){return s.apply(this,arguments)}function s(){return(s=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("search/movie?api_key=".concat(u,"&query=").concat(e,"&include_adult=false"));case 2:return r=n.sent,t=r.data,n.abrupt("return",{data:t});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("movie/".concat(e,"?api_key=").concat(u));case 2:return r=n.sent,t=r.data,n.abrupt("return",{data:t});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("movie/".concat(e,"/credits?api_key=").concat(u));case 2:return r=n.sent,t=r.data,n.abrupt("return",{data:t});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return r=n.sent,t=r.data,n.abrupt("return",{data:t});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=688.52bb6fc9.chunk.js.map