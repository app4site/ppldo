webpackJsonp([1],{0:function(e,n,t){e.exports=t("NHnr")},"0FIx":function(e,n){},"3LRq":function(e,n){},"8wyv":function(e,n){},DL9A:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"loadInitial"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"issues"},arguments:[{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"IntValue",value:"10"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"edges"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Issue"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"messages"},arguments:[{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"IntValue",value:"1"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"edges"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RegularMessage"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:556}};t.loc.source={body:"query loadInitial {\n    issues(last: 10) {\n        edges {\n            node {\n                id\n                ...on Issue {\n                    title\n                    messages(last: 1) {\n                        edges {\n                            node {\n                                id\n                                ...on RegularMessage {\n                                    message\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function s(e,n){return e.definitions.find(function(e){return!!e.name&&e.name.value==n})}function o(e,n){var t=Object.assign({},e),i=s(e,n);t.definitions=[i];var o=a[n]||new Set,r=new Set,c=new Set(o);while(c.size>0){var u=c;c=new Set,u.forEach(function(e){if(!r.has(e)){r.add(e);var n=a[e]||new Set;n.forEach(function(e){c.add(e)})}})}return r.forEach(function(n){var i=s(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["loadInitial"]=o(t,"loadInitial")},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("/5sW"),a=t("j5iW"),s=t("8OAG");t("wj+B");i["a"].use(s["a"],a["a"]);var o={},r=t("NYxO"),c=t("Biqn"),u=t.n(c),l=t("u1/p"),d=t("rRT0"),f=t("uekS"),m=t("SR+g"),p=t("rp1p"),v=t("Z6Fn"),g=t("+zi7"),k=function(e,n){var t="https://ppldo-graphql-test.herokuapp.com/graphql",i=new p["a"]({uri:t}),a=Object(m["a"])(function(n,t){var i=t.headers;return{headers:u()({},i,{Authorization:e.getters["auth/token"]})}}).concat(i),s=new v["a"]({uri:t.replace("https","wss"),options:{reconnect:!0,connectionParams:{Authorization:e.getters["auth/token"]}}}),o=Object(f["e"])(function(e){var n=e.query,t=Object(g["i"])(n),i=t.kind,a=t.operation;return"OperationDefinition"===i&&"subscription"===a},s,a);return new l["a"]({link:f["a"].from([Object(d["a"])(function(e){var n=e.graphQLErrors,t=e.networkError;n&&n.map(function(e){var n=e.message,t=e.locations,i=e.path;return console.error("[GraphQL error]: Message: ".concat(n,", Path: ").concat(i," ").concat(JSON.stringify(t)))}),t&&console.log("[Network error]: ".concat(t))}),o]),cache:n})},b=(t("gbyG"),t("Gh7F"),t("mJx5"),t("Z60a")),h=t.n(b),S=t("C9uT"),j=t.n(S),y=t("+dIz"),w=t("UOVo"),I=t.n(w),O=function(){function e(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=t.mapModules,a=void 0===i?{}:i;h()(this,e),Object.defineProperty(this,"store",{configurable:!0,enumerable:!0,writable:!0,value:null}),Object.defineProperty(this,"map",{configurable:!0,enumerable:!0,writable:!0,value:null}),this.store=n,this.map=a}return j()(e,[{key:"toObject",value:function(){return this.store.state.apollo.objects}},{key:"get",value:function(e){var n=e.split(":");return n.length>1&&Object.keys(this.map).includes(n[0])?this.store.state[this.map[n[0]]].objects[n[1]]:this.store.state.apollo.objects[e]}},{key:"set",value:function(e,n){var t=e.split(":");t.length>1&&Object.keys(this.map).includes(t[0])?this.store.commit("apolloSet",{obj:this.store.state[this.map[t[0]]].objects,property:t[1],value:n}):this.store.commit("apolloSet",{obj:this.store.state.apollo.objects,property:e,value:n})}},{key:"delete",value:function(e){this.set(e,void 0)}},{key:"clear",value:function(){}},{key:"replace",value:function(e){}}]),e}(),N=new y["b"]({introspectionQueryResultData:I.a}),_=function(e,n){return new y["a"]({storeFactory:function(t){return new O(t,e,n)},fragmentMatcher:N})},F=(t("SldL"),t("7hDC")),E=t.n(F),x=(t("YVn/"),t("luJg")),D={namespaced:!0,state:{basic:"",objects:{}},getters:{token:function(e){var n=Object.keys(e.objects).length;if(0===n)return e.basic?"Basic ".concat(e.basic):void 0;if(n>1)throw new Error("Too many tokens!");return"Bearer ".concat(Object.values(e.objects)[0].token)},ok:function(e,n){return!!n.token}},mutations:{setBasic:function(e,n){var t=n.email,i=n.password;e.basic=btoa(unescape(encodeURIComponent("".concat(t,":").concat(i))))},unsetBasic:function(e){e.basic=""}},actions:{login:function(){var e=E()(regeneratorRuntime.mark(function e(n,t){var i,a,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=n.commit,a=n.dispatch,s=t.email,o=t.password,i("setBasic",{email:s,password:o}),e.next=5,a("mutate",x["login"],{root:!0});case 5:i("unsetBasic");case 6:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()}},M=t("NM/j"),R=t.n(M),T=(t("FKfb"),t("DL9A")),q={namespaced:!0,state:{objects:{}},getters:{byId:function(e){return function(n){return e.objects[n]}},objects:function(e){return Object.entries(e.objects).map(function(e){var n=R()(e,2),t=n[0],i=n[1];return u()({id:t},i)})}},mutations:{},actions:{loadInitial:function(){var e=E()(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.dispatch,e.next=3,t("load",T["loadInitial"],{root:!0});case 3:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}},A={namespaced:!0,state:{objects:{}},getters:{byId:function(e){return function(n){return e.objects[n]}},objects:function(e){return Object.entries(e.objects).map(function(e){var n=R()(e,2),t=n[0],i=n[1];return u()({id:t},i)})}},mutations:{},actions:{}};i["a"].use(r["a"]);var C=function(e,n){return function(t){t.registerModule("apollo",{state:{client:null,objects:{}},mutations:{apolloSet:function(e,n){var t=n.obj,a=n.property,s=n.value;i["a"].set(t,a,s)},apolloClient:function(i){i.client=e(t,_(t,n))}},actions:{load:function(e,n){var t=e.state,i=e.commit;return t.client||i("apolloClient"),t.client.query({query:n})},mutate:function(e,n){var t=e.state,i=e.commit;return t.client||i("apolloClient"),t.client.mutate({mutation:n})}}})}},L=new r["a"].Store({state:{selected_issue:""},getters:{},mutations:{selectIssue:function(e,n){return e.selected_issue=n}},actions:{},modules:{auth:D,issues:q,messages:A},plugins:[C(k,{mapModules:{AuthToken:"auth",Issue:"issues",DefaultIssue:"issues",RegularMessage:"messages"}})]}),B=t("ydGU");Object(B["a"])("".concat("/ppldo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var P={props:{id:String},computed:u()({},Object(r["c"])({byId:"issues/byId"}),{issue:function(){return this.byId(this.id)}})},G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(e._s(e.issue.title))])},V=[],z=t("XyMi");function $(e){t("SM7f")}var J=!1,Q=$,U="data-v-9c48c85a",H=null,W=Object(z["a"])(P,G,V,J,Q,U,H),Y=W.exports,Z={props:{id:String},computed:u()({},Object(r["c"])({byId:"issues/byId",messages:"messages/objects"}),{issue:function(){return this.byId(this.id)}}),methods:u()({},Object(r["d"])(["selectIssue"]))},K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("f7-page",[t("f7-navbar",{attrs:{title:e.issue.title}}),t("f7-toolbar",[t("p",{on:{click:function(n){e.selectIssue(null)}}},[e._v("back")])]),t("f7-messages",e._l(e.messages,function(e){return t("f7-message",{key:e.id,attrs:{text:e.message}})}))],1)},X=[];function ee(e){t("0FIx")}var ne=!1,te=ee,ie="data-v-01dc7c75",ae=null,se=Object(z["a"])(Z,K,X,ne,te,ie,ae),oe=se.exports,re={components:{ListIssue:Y,IssuePage:oe},created:function(){this.loadIssues()},computed:u()({},Object(r["c"])({issues:"issues/objects"}),Object(r["e"])({selectedIssue:"selected_issue"})),methods:u()({},Object(r["b"])({loadIssues:"issues/loadInitial"}),Object(r["d"])(["selectIssue"]))},ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.selectedIssue?t("issue-page",{attrs:{id:e.selectedIssue}}):t("f7-page",[t("f7-navbar",{attrs:{title:"Чаты"}}),t("f7-list",e._l(e.issues,function(n){return n.title?t("f7-list-item",{key:n.id,on:{click:function(t){e.selectIssue(n.id)}}},[t("list-issue",{attrs:{id:n.id}})],1):e._e()}))],1)},ue=[];function le(e){t("8wyv")}var de=!1,fe=le,me="data-v-314dd22c",pe=null,ve=Object(z["a"])(re,ce,ue,de,fe,me,pe),ge=ve.exports,ke={data:function(){return{email:"",password:""}},methods:u()({},Object(r["b"])({login:"auth/login"}))},be=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("f7-page",{attrs:{"login-screen":""}},[t("f7-login-screen-title",[e._v("Вход в систему")]),t("f7-list",{attrs:{form:""}},[t("f7-list-item",[t("f7-label",{attrs:{floating:""}},[e._v("Ваш email")]),t("f7-input",{attrs:{type:"text",value:e.email},on:{input:function(n){e.email=n.target.value}}})],1),t("f7-list-item",[t("f7-label",{attrs:{floating:""}},[e._v("Пароль")]),t("f7-input",{attrs:{type:"password",value:e.password},on:{input:function(n){e.password=n.target.value}}})],1)],1),t("f7-list",[t("f7-list-button",{on:{click:function(n){e.login({email:e.email,password:e.password})}}},[e._v("Готово")])],1)],1)},he=[];function Se(e){t("3LRq")}var je=!1,ye=Se,we="data-v-5df068e6",Ie=null,Oe=Object(z["a"])(ke,be,he,je,ye,we,Ie),Ne=Oe.exports,_e={components:{MainPage:ge,LoginPage:Ne},computed:u()({},Object(r["c"])({authOk:"auth/ok"}))},Fe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e.authOk?t("f7-view",{attrs:{main:""}},[t("main-page")],1):e._e(),t("f7-login-screen",{attrs:{opened:!e.authOk}},[t("f7-view",[t("login-page")],1)],1)],1)},Ee=[];function xe(e){t("i61e")}var De=!1,Me=xe,Re=null,Te=null,qe=Object(z["a"])(_e,Fe,Ee,De,Me,Re,Te),Ae=qe.exports;i["a"].config.productionTip=!1,new i["a"]({framework7:o,store:L,render:function(e){return e(Ae)}}).$mount("#app")},SM7f:function(e,n){},UOVo:function(e,n){e.exports={__schema:{types:[{kind:"INTERFACE",name:"IMessage",possibleTypes:[{name:"RegularMessage"},{name:"NotificationMessage"}]},{kind:"INTERFACE",name:"IIssue",possibleTypes:[{name:"Issue"},{name:"DefaultIssue"}]}]}}},i61e:function(e,n){},luJg:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"login"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"makeToken"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"id"},name:{kind:"Name",value:"token"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"token"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"expiration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"expiration_date"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:116}};t.loc.source={body:"mutation login {\n    makeToken {\n        id: token\n        token\n        expiration\n        expiration_date\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function s(e,n){return e.definitions.find(function(e){return!!e.name&&e.name.value==n})}function o(e,n){var t=Object.assign({},e),i=s(e,n);t.definitions=[i];var o=a[n]||new Set,r=new Set,c=new Set(o);while(c.size>0){var u=c;c=new Set,u.forEach(function(e){if(!r.has(e)){r.add(e);var n=a[e]||new Set;n.forEach(function(e){c.add(e)})}})}return r.forEach(function(n){var i=s(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["login"]=o(t,"login")},"wj+B":function(e,n){}},[0]);
//# sourceMappingURL=app.1b1dc99c.js.map