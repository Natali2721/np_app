"use strict";(self.webpackChunktest_sameit=self.webpackChunktest_sameit||[]).push([[448],{926:function(e,t,n){n.d(t,{I:function(){return l},J:function(){return i}});var r=n(861),s=n(687),o=n.n(s),u=n(243),a="732dcfaad69fb475455c551db818568b",c=u.Z.create({baseURL:"https://api.novaposhta.ua/v2.0/json/"}),i=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={apiKey:a,modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:t,Phone:"380600000000"}]}},e.next=3,c.post("",n);case 3:return r=e.sent,s=r.data,e.abrupt("return",s.data[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={apiKey:a,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:t,Limit:12,Page:n}},e.next=3,c.post("",r);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},673:function(e,t,n){var r=n(590),s=n(184);t.Z=function(e){var t=e.onSubmit,n=e.children;return(0,s.jsx)(r.l0,{onSubmit:t,children:n})}},448:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(433),s=n(439),o=n(926),u=n(126),a=n(673),c=n(590),i=n(184),l=function(){return(0,i.jsx)(c.II,{type:"text",name:"TTN",pattern:"^[0-9]{14}$",title:"May contain only numbers",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0422\u0422\u041d..."})},f=function(e){var t=e.onSubmit;return(0,i.jsx)(c.Rj,{children:(0,i.jsxs)(a.Z,{onSubmit:t,children:[(0,i.jsx)(l,{}),(0,i.jsx)(c.Ei,{type:"submit","aria-label":"search button",children:(0,i.jsx)(u.dVI,{})})]})})},h=n(820),d=function(e){var t=e.items,n=e.onClick;return console.log(t),console.log(t.length),(0,i.jsxs)(c.Y_,{children:[(0,i.jsx)(c.xv,{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u043f\u043e\u0448\u0443\u043a\u0443..."}),(0,i.jsx)(c.$F,{type:"button",onClick:n,"aria-label":"search button",children:(0,i.jsx)(h.YK6,{})}),t.length>0&&(0,i.jsx)(c.aV,{children:t.map((function(e){return(0,i.jsx)(c.HC,{children:e},e)}))})]})},m=function(e){var t=e.trackingInfo;console.log(t);var n=t.WarehouseRecipient,r=t.WarehouseSender,s=t.Status;return console.log(t.Status),(0,i.jsxs)(c.Y_,{children:[(0,i.jsxs)(c.xv,{children:["\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 : ",(0,i.jsx)(c.DR,{children:s||""})]}),(0,i.jsxs)(c.xv,{children:["\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e : ",(0,i.jsx)(c.DR,{children:r||""})]}),(0,i.jsxs)(c.xv,{children:["\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043e : ",(0,i.jsx)(c.DR,{children:n||""})]})]})},p=n(791),x=function(){var e=(0,p.useState)([]),t=(0,s.Z)(e,2),n=t[0],u=t[1],a=(0,p.useState)(""),l=(0,s.Z)(a,2),h=l[0],x=l[1],j=(0,p.useState)({}),g=(0,s.Z)(j,2),v=g[0],b=g[1];(0,p.useEffect)((function(){var e=JSON.parse(localStorage.getItem("numbers"));e&&u(e)}),[]);return(0,p.useEffect)((function(){if(""===h)return console.log("There is no TTN number");console.log(h),(0,o.J)(h).then((function(e){if(console.log(e),!e)return b({}),console.log("There is no TTN with this request. Please, try again");b(e),n.includes(h)||u((function(e){return[].concat((0,r.Z)(e),[h])}))}))}),[h,n]),(0,p.useEffect)((function(){localStorage.setItem("numbers",JSON.stringify(n))}),[n]),(0,p.useEffect)((function(){n.length<1&&b({})}),[n]),(0,i.jsxs)(c.W2,{children:[(0,i.jsx)(f,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;console.log(t.elements.TTN.value),x(t.elements.TTN.value),localStorage.setItem("numbers",JSON.stringify(n)),t.reset()}}),(0,i.jsxs)(c.kG,{children:[(0,i.jsx)(m,{trackingInfo:v}),(0,i.jsx)(d,{items:n,onClick:function(){u([]),x("")}})]})]})}}}]);
//# sourceMappingURL=448.eedcf62d.chunk.js.map