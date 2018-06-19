webpackJsonp([1],[,,,,,,function(t,e){},,,function(t,e,s){"use strict";e.a={data:function(){return{tab:this.$router.currentRoute.name}},name:"App",computed:{isBigScreen:function(){return this.$vuetify.breakpoint.mdAndUp}}}},function(t,e,s){"use strict";var a=s(27),n=s.n(a);e.a={name:"FpCode",data:function(){return{mpass:"",seeMpass:!1,key:"",seeGpass:!1,copyResult:""}},methods:{onCliboardSuccess:function(){var t=this;this.copyResult="复制成功",this.seeGpass=!0,setTimeout(function(){t.copyResult="",t.seeGpass=!1},1e3)},onCliboardError:function(){var t=this;this.copyResult="复制失败,可手动选中复制",this.seeGpass=!0,setTimeout(function(){t.copyResult="",t.seeGpass=!1},1e3)}},computed:{gpassText:function(){return this.copyResult||this.gpass},gpass:function(){return n()(this.mpass,this.key,16)||""}}}},,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(8),n=s(20),r=s(22),o=s(32),i=s.n(o),c=s(34),u=s.n(c),l=s(40),p=s.n(l),v=s(49),f=s.n(v),d=s(54),b=s.n(d),_=s(70),m=s.n(_),w=s(15),y=s.n(w),h=s(79),x=s.n(h),g=s(14),k=s.n(g),C=s(86);s.n(C);a.a.use(i.a),a.a.use(u.a,{components:{VApp:p.a,VBottomNav:f.a,VTextField:b.a,VBtn:m.a,VIcon:y.a,VGrid:x.a,transitions:k.a}}),a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,render:function(t){return t(n.a)}})},,,,function(t,e,s){"use strict";var a=s(9),n=s(21),r=s(4),o=r(a.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{dark:""}},[s("v-content",{class:{"mx-auto":t.isBigScreen}},[s("router-view")],1),t._v(" "),s("v-bottom-nav",{attrs:{value:!0,active:t.tab,absolute:"",color:"transparent",app:""},on:{"update:active":function(e){t.tab=e}}},[s("router-link",{attrs:{to:"/"}},[s("v-btn",{attrs:{flat:"",color:"teal",value:"fpcode"}},[s("span",[t._v("生成")]),t._v(" "),s("v-icon",[t._v("history")])],1)],1),t._v(" "),s("router-link",{attrs:{to:"/setting"}},[s("v-btn",{attrs:{flat:"",color:"teal",value:"setting"}},[s("span",[t._v("关于")]),t._v(" "),s("v-icon",[t._v("settings")])],1)],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},function(t,e,s){"use strict";var a=s(8),n=s(23),r=s(24),o=s(29);a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"fpcode",component:r.a},{path:"/setting",name:"setting",component:o.a}]})},,function(t,e,s){"use strict";function a(t){s(25)}var n=s(10),r=s(28),o=s(4),i=a,c=o(n.a,r.a,!1,i,null,null);e.a=c.exports},function(t,e){},,,function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"fpcode-wrap",attrs:{fluid:""}},[s("h2",[s("span",[t._v("1")]),t._v("输入")]),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{solo:"",label:"记忆密码",type:t.seeMpass?"text":"password","solo-inverted":"","append-icon":t.seeMpass?"visibility":"visibility_off","append-icon-cb":function(){return t.seeMpass=!t.seeMpass}},model:{value:t.mpass,callback:function(e){t.mpass=e},expression:"mpass"}})],1),t._v(" "),s("v-icon",{staticStyle:{width:"100%"},attrs:{color:"blue dark-2",large:""}},[t._v("add")]),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{solo:"",label:"区分代号",type:"text","solo-inverted":""},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1)],1),t._v(" "),s("h2",[s("span",[t._v("2")]),t._v("获取")]),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs10:""}},[s("v-text-field",{class:{"copy-result":!!t.copyResult},attrs:{value:t.gpassText,solo:"",label:"最终密码",type:t.seeGpass?"text":"password","solo-inverted":"","append-icon":t.seeGpass?"visibility":"visibility_off","append-icon-cb":function(){return t.seeGpass=!t.seeGpass},readonly:""}})],1),t._v(" "),s("v-flex",{staticClass:"copy",attrs:{xs2:""}},[s("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.gpass,expression:"gpass",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCliboardSuccess,expression:"onCliboardSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCliboardError,expression:"onCliboardError",arg:"error"}],attrs:{color:"success"}},[t._v("复制")])],1)],1),t._v(" "),s("div",{staticClass:"notice"},[s("ul",[s("li",[t._v("记忆密码：选择一个与个人信息无关的密码，防止社会工程学破解")]),t._v(" "),s("li",[t._v("区分代号：用于区别不同用途密码的简短代号，如淘宝账号可用“taobao”或“tb”等。")])])])],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},function(t,e,s){"use strict";function a(t){s(30)}var n=s(31),r=s(4),o=a,i=r(null,n.a,!1,o,null,null);e.a=i.exports},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"setting-wrap",attrs:{fluid:""}},[t._v("\n  FlowerPassword 的 PWA 版本"),s("br"),t._v("\n  其他版本: "),s("a",{attrs:{href:"http://flowerpassword.com/app/web",target:"_blank"}},[t._v("http://flowerpassword.com/app/web")]),s("br"),t._v("\n  入门指南: "),s("a",{attrs:{href:"http://flowerpassword.com/guide",target:"_blank"}},[t._v("http://flowerpassword.com/guide")]),s("br"),t._v("\n  作者: MwumLi"),s("br"),t._v("\n  联系方式: mwumlli@hotmail.com"),s("br")])},n=[],r={render:a,staticRenderFns:n};e.a=r},,,,,,,,,,,function(t,e){},,,,,,,,,function(t,e){},,,,,function(t,e){},function(t,e){},,,,,function(t,e){},,,,function(t,e){},,,,,,function(t,e){},,,function(t,e){},,,,,,function(t,e){},,,,,function(t,e){}],[16]);
//# sourceMappingURL=app.996348025d8775ff90e0.js.map