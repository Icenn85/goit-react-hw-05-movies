"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[946],{946:function(t,n,e){e.r(n),e.d(n,{default:function(){return x}});var r,a=e(861),c=e(885),u=e(757),i=e.n(u),s=e(791),o=e(243),p=e(168),f=e(444),d=e(731),l=(0,f.ZP)(d.rU)(r||(r=(0,p.Z)(["\n  /* color: blue; */\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n  &:hover,\n  &:focus {\n    color: #2196f3;\n  }\n"]))),h=e(409),v=e(184),x=function(){var t=(0,s.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],u=(0,s.useState)(!1),p=(0,c.Z)(u,2),f=p[0],d=p[1];(0,s.useEffect)((function(){x()}),[]);var x=function(){var t=(0,a.Z)(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.prev=1,t.next=4,(0,h.Df)();case 4:n=t.sent,e=n.data,r(e.results),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:return t.prev=11,d(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,9,11,14]])})));return function(){return t.apply(this,arguments)}}();return(0,v.jsxs)("main",{children:[f&&(0,v.jsx)("div",{children:(0,v.jsx)(o.p2,{color:"#f07416",arialLabel:"loading-indicator",height:80,width:80})}),(0,v.jsx)("h1",{children:"Today's trending"}),(0,v.jsx)("ul",{children:e.map((function(t){return(0,v.jsx)("li",{children:(0,v.jsx)(l,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}},409:function(t,n,e){e.d(n,{Df:function(){return s},M1:function(){return h},TP:function(){return d},V0:function(){return p},tx:function(){return x}});var r=e(861),a=e(757),c=e.n(a),u=e(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="e5eae960ae98d2ed197d9dde8e21f3aa";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&include_adult=false"));case 2:return e=t.sent,r=e.data,t.abrupt("return",{data:r});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",{data:r});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",{data:r});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",{data:r});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=946.4f374ca5.chunk.js.map