(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(t,e,r){"use strict";r.r(e);r(54);var n,c=r(9),l=(r(22),r(16),r(39),r(108)),o=r.n(l),v=function(t){return Object.keys(t).map(function(e){return"".concat(e,"=").concat(t[e])}).join("&")},f={middleware:"guest",metaInfo:function(){return{title:this.$t("verify_email")}},asyncData:(n=Object(c.a)(regeneratorRuntime.mark(function t(e){var r,n,c,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=e.query,t.prev=1,t.next=4,o.a.post("/email/verify/".concat(r.id,"?").concat(v(n)));case 4:return c=t.sent,data=c.data,t.abrupt("return",{success:!0,status:data.status});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{success:!1,status:t.t0.response.data.status});case 12:case"end":return t.stop()}},t,null,[[1,9]])})),function(t){return n.apply(this,arguments)})},_=r(4),component=Object(_.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 m-auto"},[r("card",{attrs:{title:t.$t("verify_email")}},[t.success?[r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n          "+t._s(t.status)+"\n        ")]),t._v(" "),r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"login"}}},[t._v("\n          "+t._s(t.$t("login"))+"\n        ")])]:[r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n          "+t._s(t.status||t.$t("failed_to_verify_email"))+"\n        ")]),t._v(" "),r("router-link",{staticClass:"small float-right",attrs:{to:{name:"verification.resend"}}},[t._v("\n          "+t._s(t.$t("resend_verification_link"))+"\n        ")])]],2)],1)])},[],!1,null,null,null);e.default=component.exports}}]);