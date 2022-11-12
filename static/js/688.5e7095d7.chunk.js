"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[688],{688:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,o,i=t(861),u=t(885),c=t(757),s=t.n(c),p=t(791),f=t(168),l=t(444),x=l.ZP.input(r||(r=(0,f.Z)(["\n  margin-left: 25px;\n  height: 20px;\n  padding-left: 10px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus {\n    outline: none;\n    border-color: #2196f3;\n  }\n"]))),d=l.ZP.button(a||(a=(0,f.Z)(["\n  height: 25px;\n  color: #000;\n  border: none;\n  border-radius: 5px;\n  padding: 0px 25px;\n  margin-left: 15px;\n  background: #47a8f5;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-block;\n  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),\n    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);\n  outline: none;\n\n  &:not(:last-child) {\n    margin-right: 100px;\n  }\n\n  &:hover {\n    color: #000;\n    background-color: #ecf0f4;\n    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,\n      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;\n  }\n"]))),h=t(184),v=function(n){var e=n.onSubmit,t=(0,p.useState)(""),r=(0,u.Z)(t,2),a=r[0],o=r[1];return(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=a.toLowerCase().trim();t&&e(t)},autoComplete:"off",children:[(0,h.jsx)(x,{type:"text",name:"query",value:a,onChange:function(n){o(n.currentTarget.value)}}),(0,h.jsx)(d,{type:"submit",children:"Search"})]})},b=t(731),m=t(243),g=t(409),y=t(689),Z=(0,l.ZP)(b.rU)(o||(o=(0,f.Z)(["\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  \n  &:hover,\n  &:focus {\n    color: #2196f3;\n  }\n"]))),k=function(n){var e=n.movies,t=(0,y.TH)();return(0,h.jsx)("ul",{children:e.map((function(n){return(0,h.jsx)("li",{children:(0,h.jsx)(Z,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})},w=function(){var n,e=(0,p.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],o=(0,p.useState)(!1),c=(0,u.Z)(o,2),f=c[0],l=c[1],x=(0,b.lr)(),d=(0,u.Z)(x,2),y=d[0],Z=d[1],w=null!==(n=y.get("query"))&&void 0!==n?n:"";(0,p.useEffect)((function(){if(w){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,(0,g.V0)(w);case 4:e=n.sent,t=e.data,a(t.results),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,9,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[w]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(v,{onSubmit:function(n){Z({query:n}),a([])}}),f&&(0,h.jsx)("div",{children:(0,h.jsx)(m.p2,{color:"#f07416",arialLabel:"loading-indicator",height:80,width:80})}),r.length>0&&(0,h.jsx)(k,{movies:r}),0===r.length&&""!==w&&(0,h.jsx)("p",{children:"Sorry, there is no films for your results! Try to find something else!"})]})}},409:function(n,e,t){t.d(e,{Df:function(){return c},M1:function(){return d},TP:function(){return l},V0:function(){return p},tx:function(){return v}});var r=t(861),a=t(757),o=t.n(a),i=t(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var u="e5eae960ae98d2ed197d9dde8e21f3aa";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("search/movie?api_key=".concat(u,"&query=").concat(e,"&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=688.5e7095d7.chunk.js.map