webpackJsonp([1],{"+DvV":function(e,n){},"7Otq":function(e,n,t){e.exports=t.p+"static/img/logo.f29b365.png"},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{src:t("7Otq")}}),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var s=t("VU/8")({name:"App"},r,!1,function(e){t("+DvV")},null,null).exports,i=t("/ocq"),o=t("yGkR"),u={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",name:o.a.auth().currentUser.email}},methods:{signOut:function(){var e=this;o.a.auth().signOut().then(function(){e.$router.push("/signin")})}}},p={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v("Hello "+e._s(e.name)+"!!")]),e._v(" "),t("h1",[e._v(e._s(e.msg))]),e._v(" "),t("h2",[e._v("My page")]),e._v(" "),t("button",{on:{click:e.signOut}},[e._v("Sign out")])])},staticRenderFns:[]},l=t("VU/8")(u,p,!1,null,null,null).exports,c={name:"Signup",data:function(){return{username:"",password:""}},methods:{signUp:function(){var e=this;o.a.auth().createUserWithEmailAndPassword(this.username,this.password).then(function(n){e.$router.push("/")}).catch(function(e){alert(e.message)})}}},m={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"signup"},[t("h2",[e._v("Sign up")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(n){n.target.composing||(e.password=n.target.value)}}}),e._v(" "),t("button",{on:{click:e.signUp}},[e._v("Sign up")]),e._v(" "),t("p",[e._v("\n    Are you a member?\n    "),t("router-link",{attrs:{to:"/signin"}},[e._v("Sign in")])],1)])},staticRenderFns:[]},d=t("VU/8")(c,m,!1,null,null,null).exports,v={name:"Signin",data:function(){return{username:"",password:""}},methods:{signIn:function(){var e=this;o.a.auth().signInWithEmailAndPassword(this.username,this.password).then(function(n){e.$router.push("/")},function(e){alert(e.message)})}}},h={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"signin"},[t("h2",[e._v("Sign in")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(n){n.target.composing||(e.password=n.target.value)}}}),e._v(" "),t("button",{on:{click:e.signIn}},[e._v("Sign in")]),e._v(" "),t("p",[e._v("\n    You are not a member?\n    "),t("router-link",{attrs:{to:"/signup"}},[e._v("Sign up")])],1)])},staticRenderFns:[]},g=t("VU/8")(v,h,!1,null,null,null).exports;a.a.use(i.a);var f=new i.a({routes:[{path:"*",redirect:"signin"},{path:"/",name:"HelloWorld",component:l,meta:{requiresAuth:!0}},{path:"/signup",name:"Signup",component:d},{path:"/signin",name:"Signin",component:g}]});f.beforeEach(function(e,n,t){e.matched.some(function(e){return e.meta.requiresAuth})?o.a.auth().onAuthStateChanged(function(n){n?t():t({path:"/signin",query:{redirect:e.fullPath}})}):t()});var _=f;a.a.config.productionTip=!1;o.a.initializeApp({apiKey:"AIzaSyC6oO7vrdthtrrBEQYnQAb4TdjJ82Wp-AI",authDomain:"vue-fire-auth-9593e.firebaseapp.com",projectId:"vue-fire-auth-9593e",storageBucket:"vue-fire-auth-9593e.appspot.com",messagingSenderId:"917524753494",appId:"1:917524753494:web:18303a126e2e2c315d9ff7",measurementId:"G-C7L0GY0Q3D"}),new a.a({el:"#app",router:_,components:{App:s},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.3194d0059d78a27e9d57.js.map