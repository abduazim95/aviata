(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{113:function(t,r,e){"use strict";e.r(r);e(54);var o,n=e(9),m=e(20),l=e.n(m),c={head:function(){return{title:this.$t("register")}},data:function(){return{form:new l.a({name:"",email:"",password:"",password_confirmation:""}),mustVerifyEmail:!1}},methods:{register:(o=Object(n.a)(regeneratorRuntime.mark(function t(){var r,data,e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/register");case 2:if(r=t.sent,!(data=r.data).status){t.next=8;break}this.mustVerifyEmail=!0,t.next=16;break;case 8:return t.next=10,this.form.post("/login");case 10:return e=t.sent,o=e.data.token,this.$store.dispatch("auth/saveToken",{token:o}),t.next=15,this.$store.dispatch("auth/updateUser",{user:data});case 15:this.$router.push({name:"home"});case 16:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})}},d=e(4),component=Object(d.a)(c,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 m-auto"},[t.mustVerifyEmail?e("card",{attrs:{title:t.$t("register")}},[e("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.$t("verify_email_address"))+"\n      ")])]):e("card",{attrs:{title:t.$t("register")}},[e("form",{on:{submit:function(r){return r.preventDefault(),t.register(r)},keydown:function(r){return t.form.onKeydown(r)}}},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(r){r.target.composing||t.$set(t.form,"name",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(r){r.target.composing||t.$set(t.form,"email",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(r){r.target.composing||t.$set(t.form,"password",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.form.password_confirmation},on:{input:function(r){r.target.composing||t.$set(t.form,"password_confirmation",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"password_confirmation"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[e("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("register"))+"\n            ")]),t._v(" "),e("login-with-github")],1)])])])],1)])},[],!1,null,null,null);r.default=component.exports}}]);