"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[369],{369:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var r,a,c=n(861),u=n(885),i=n(757),s=n.n(i),o=n(689),p=n(791),f=n(243),d=n(409),h=n(168),l=n(444),v=l.ZP.p(r||(r=(0,h.Z)(["\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),x=l.ZP.p(a||(a=(0,h.Z)(["\n  font-size: 12px;\n  margin-bottom: 20px;\n"]))),m=n(184),w=function(t){var e=t.reviews;return(0,m.jsx)("article",{children:(0,m.jsx)("ul",{children:e.map((function(t){return(0,m.jsxs)("li",{children:[(0,m.jsx)(v,{children:t.author}),(0,m.jsx)(x,{children:t.content})]},t.id)}))})})},k=function(){var t=(0,o.UO)().movieId,e=(0,p.useState)([]),n=(0,u.Z)(e,2),r=n[0],a=n[1],i=(0,p.useState)(!1),h=(0,u.Z)(i,2),l=h[0],v=h[1];(0,p.useEffect)((function(){x(t)}),[t]);var x=function(){var t=(0,c.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,(0,d.tx)(e);case 4:n=t.sent,r=n.data,a(r.results),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:return t.prev=11,v(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,9,11,14]])})));return function(e){return t.apply(this,arguments)}}();return(0,m.jsxs)("div",{children:[l&&(0,m.jsx)("div",{children:(0,m.jsx)(f.p2,{color:"#f07416",arialLabel:"loading-indicator",height:80,width:80})}),0!==r.length?(0,m.jsx)(w,{reviews:r}):(0,m.jsx)("p",{children:"We do not have reviews for this movie"})]})}},409:function(t,e,n){n.d(e,{Df:function(){return s},M1:function(){return l},TP:function(){return d},V0:function(){return p},tx:function(){return x}});var r=n(861),a=n(757),c=n.n(a),u=n(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="e5eae960ae98d2ed197d9dde8e21f3aa";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("search/movie?api_key=".concat(i,"&query=").concat(e,"&include_adult=false"));case 2:return n=t.sent,r=n.data,t.abrupt("return",{data:r});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",{data:r});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",{data:r});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",{data:r});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=369.6611823c.chunk.js.map