(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39f85c94"],{"5fed":function(t,e,n){"use strict";n("6e79")},"6e79":function(t,e,n){},"7cf4":function(t,e,n){},beb0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"farms"},[n("div",{staticClass:"main"},[n("div",{staticClass:"farms-banner center"},[n("div",{staticClass:"farms-banner-cont"},[n("h5",[t._v(t._s(t.$t("XMP 兑换")))]),n("p")])]),n("div",{staticClass:"farms-info"},[n("div",{staticClass:"farms-bet"},[n("span",[t._v(t._s(t.$t("XMP 余额")))]),n("b",[t._v(t._s(t._f("toFixed")(t.balance,8)))])])]),n("div",{staticClass:"farms-cont"},[n("div",{staticClass:"farms-current"},[n("div",{staticClass:"farms-main"},[n("div",{staticClass:"farms-form"},[n("input",{attrs:{type:"text"},domProps:{value:t.inputAmount},on:{input:t.inputHander}}),n("a",{staticClass:"btn btn-empty",on:{click:function(e){t.inputAmount=t.balance,t.updateInput()}}},[t._v(t._s(t.$t("全部")))])]),n("div",{staticClass:"farms-balance"},[n("span",[t._v(t._s(t.$t("兑换新币可提额度")))]),n("b",[n("em",[t._v(t._s(t._f("toFixed")(t.newToken,8)))]),t._v(t._s(t.$store.state.tokenName))])]),t.showApprove?n("a",{staticClass:"btn",on:{click:t.convert}},[t._v(t._s(t.$t("授权"))+" "),n("shadow")]):t._e(),t.showApprove?t._e():n("a",{staticClass:"btn",on:{click:t.convert}},[t._v(t._s(t.$t("兑换"))+" "),n("shadow")])])])])])])},s=[],o=n("c7eb"),i=n("1da1"),c=n("ade3"),r=(n("d9e2"),n("b680"),n("ee7a")),u=n("901e"),l=n.n(u),p=n("ed08"),f=(n("99e5"),{name:"lock",components:{Notify:r["a"]},data:function(){return{balance:"0",newToken:"0",showApprove:!0,inputAmount:"",xmpToToken:"0"}},watch:Object(c["a"])({},"$store.state.walletAddress",(function(){this.init()})),methods:{convert:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function e(){var n;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.$loading.show(),!t.showApprove){e.next=8;break}return e.next=5,t.$api.getConnect().erc20().approve(t.$api.getConnect().addressInfo.recommend,t.$api.getConnect().addressInfo.staking);case 5:n=e.sent,e.next=13;break;case 8:if(Object(p["b"])(t.inputAmount)){e.next=10;break}throw new Error(t.$t("请输入金额"));case 10:return e.next=12,t.$api.getConnect().tradeApi().burn(new l.a(t.inputAmount).multipliedBy(1e18).toFixed(0,l.a.ROUND_DOWN));case 12:n=e.sent;case 13:return e.next=15,n.confirm();case 15:return t.$toast(t.$t("操作成功")),e.next=18,t.init(!1);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](0),t.$toast(e.t0.message);case 23:return e.prev=23,t.$loading.hide(),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[0,20,23,26]])})))()},inputHander:function(t){this.inputAmount=t.target.value,this.updateInput()},updateInput:function(){Object(p["b"])(this.inputAmount)&&(this.newToken=new l.a(this.inputAmount).multipliedBy(this.xmpToToken).div(100).toFixed(18,l.a.ROUND_DOWN))},init:function(){var t=arguments,e=this;return Object(i["a"])(Object(o["a"])().mark((function n(){var a,s;return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=!(t.length>0&&void 0!==t[0])||t[0],!e.$store.state.walletConnect){n.next=20;break}return n.prev=2,a&&e.$loading.show(),n.next=6,e.$api.getConnect().tradeApi().convertInfo(e.$store.state.walletAddress);case 6:s=n.sent,e.xmpToToken=s.recommend.xmpToToken,e.balance=s.erc20.amount,e.showApprove=s.erc20.showApprove,n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](2),e.$toast(n.t0.message);case 17:return n.prev=17,a&&e.$loading.hide(),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[2,13,17,20]])})))()}},mounted:function(){this.init()}}),d=f,v=n("2877"),m=Object(v["a"])(d,a,s,!1,null,"576090ad",null);e["default"]=m.exports},ee7a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-notify",{staticStyle:{opacity:"0.8"},attrs:{type:"success",background:"#2464f6"},model:{value:t.notify.show,callback:function(e){t.$set(t.notify,"show",e)},expression:"notify.show"}},[n("div",{staticClass:"flex align-center justify-between notify"},[n("a",{staticClass:"link flex align-center justify-between",attrs:{href:t.etherscan,target:"_blank"}},[n("div",{staticClass:"flex align-center left bbo"},[n("van-icon",{staticClass:"right",attrs:{name:"passed"}}),n("span",{staticClass:"ellipsis"},[t._v(" "+t._s(t.notify.tx))])],1),n("van-icon",{staticClass:"right",attrs:{name:"arrow"}})],1)])])],1)},s=[],o=(n("3cd0"),n("1a44"),n("acc2"),n("ad06")),i=(n("1812"),n("5e5e"),n("7cf4"),n("c31d")),c=n("2b0e"),r=n("2638"),u=n.n(r),l=n("d282"),p=n("ba31"),f=n("6605"),d=n("e41f"),v=Object(l["a"])("notify"),m=v[0],b=v[1];function h(t,e,n,a){var s={color:e.color,background:e.background};return t(d["a"],u()([{attrs:{value:e.value,position:"top",overlay:!1,duration:.2,lockScroll:!1},style:s,class:[b([e.type]),e.className]},Object(p["a"])(a,!0)]),[(null==n.default?void 0:n.default())||e.message])}h.props=Object(i["a"])({},f["b"],{color:String,message:[Number,String],duration:[Number,String],className:null,background:String,getContainer:[String,Function],type:{type:String,default:"danger"}});var w,g,k=m(h),C=n("a142");function x(t){return Object(C["e"])(t)?t:{message:t}}function y(t){if(!C["f"])return g||(g=Object(p["b"])(k,{on:{click:function(t){g.onClick&&g.onClick(t)},close:function(){g.onClose&&g.onClose()},opened:function(){g.onOpened&&g.onOpened()}}})),t=Object(i["a"])({},y.currentOptions,x(t)),Object(i["a"])(g,t),clearTimeout(w),t.duration&&t.duration>0&&(w=setTimeout(y.clear,t.duration)),g}function O(){return{type:"danger",value:!0,message:"",color:void 0,background:void 0,duration:3e3,className:"",onClose:null,onClick:null,onOpened:null}}y.clear=function(){g&&(g.value=!1)},y.currentOptions=O(),y.setDefaultOptions=function(t){Object(i["a"])(y.currentOptions,t)},y.resetDefaultOptions=function(){y.currentOptions=O()},y.install=function(){c["a"].use(k)},y.Component=k,c["a"].prototype.$notify=y;var _=y,$=n("365c"),j={name:"notify",components:{"van-notify":_.Component,"van-icon":o["a"]},computed:{etherscan:function(){return $["a"].goEtherscanTx(this.notify.tx)}},data:function(){return{notify:{show:!1,tx:""}}},methods:{show:function(t){var e=this;this.notify.tx=t,this.notify.show=!0,setTimeout((function(){e.notify.show=!1}),5e3)}}},A=j,T=(n("5fed"),n("2877")),N=Object(T["a"])(A,a,s,!1,null,"7ca36873",null);e["a"]=N.exports}}]);