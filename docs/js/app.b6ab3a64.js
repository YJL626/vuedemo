(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-110b37e5":"5dbd17a0","chunk-2cb70870":"21ff5d6a","chunk-74537ae0":"ecb25fcf","chunk-a08f0852":"9b761409"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-110b37e5":1,"chunk-2cb70870":1,"chunk-74537ae0":1,"chunk-a08f0852":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-110b37e5":"77e5a365","chunk-2cb70870":"df83b8c0","chunk-74537ae0":"e6db3ae1","chunk-a08f0852":"4c52f9d3"}[t]+".css",i=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],d.parentNode.removeChild(d),n(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0578":function(t,e,n){"use strict";n("58c6")},"13ee":function(t,e,n){},"1bab":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i(t){var e=o.a.create({baseURL:"http://152.136.185.210:7878/api/m5"});return e.interceptors.request.use((function(t){return console.log("request,success"),t}),(function(t){console.log(t)})),e(t)}},"1eb0":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"GoodsListItem",on:{click:function(e){return t.skipToDetail(t.goodsId)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgSrc,expression:"imgSrc"}],ref:"img",attrs:{alt:""},on:{load:function(e){return t.$bus.$emit("img-load")}}}),n("div",{staticClass:"detail"},[n("p",{staticClass:"title"},[t._v(t._s(t.goods.title))]),n("span",{staticClass:"price"},[t._v(t._s(t.goods.price))]),n("span",{staticClass:"cfav"},[t._v(t._s(t.goods.cfav))])])])},i=[],a=n("ade3"),s=(r={name:"GoodsListItem",created:function(){},data:function(){return{}}},Object(a["a"])(r,"created",(function(){})),Object(a["a"])(r,"props",{goods:{reqiured:!0}}),Object(a["a"])(r,"computed",{imgSrc:function(){return this.goods.img||this.goods.image||this.goods.show.img},goodsId:function(){return this.goods.iid||this.goods.item_id}}),Object(a["a"])(r,"methods",{skipToDetail:function(t){this.goods.item_id||this.$router.push("/detail/"+t)}}),r),c=s,u=(n("349c"),n("2877")),l=Object(u["a"])(c,o,i,!1,null,"b76f5f7e",null);e["a"]=l.exports},"1edf":function(t,e,n){"use strict";n("d11a")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.fbc81098.svg"},"2c9d":function(t,e,n){"use strict";n("71b4")},"319e":function(t,e,n){},"349c":function(t,e,n){"use strict";n("a290")},"39d0":function(t,e,n){"use strict";n("7ede")},5160:function(t,e,n){t.exports=n.p+"img/loading.d4eeb02d.png"},"56ae":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:["Detail"]}},[n("router-view")],1),n("MainTabBar")],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{attrs:{id:"MainTabBar"}},[r("TabBar",[r("TabBarItem",{attrs:{path:"home"},scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{attrs:{src:n("9443")}})]},proxy:!0},{key:"imgActive",fn:function(){return[r("img",{attrs:{src:n("b508")}})]},proxy:!0},{key:"itemName",fn:function(){return[r("span",[t._v("主页")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"category"},scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{attrs:{src:n("57cd")}})]},proxy:!0},{key:"imgActive",fn:function(){return[r("img",{attrs:{src:n("a5ef")}})]},proxy:!0},{key:"itemName",fn:function(){return[r("span",[t._v("分类")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"shopcart"},scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{attrs:{src:n("2872")}})]},proxy:!0},{key:"imgActive",fn:function(){return[r("img",{attrs:{src:n("c3f8")}})]},proxy:!0},{key:"itemName",fn:function(){return[r("span",[t._v("购物车")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"profile"},scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{attrs:{src:n("e55d")}})]},proxy:!0},{key:"imgActive",fn:function(){return[r("img",{attrs:{src:n("d151")}})]},proxy:!0},{key:"itemName",fn:function(){return[r("span",[t._v("我的")])]},proxy:!0}])})],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"tabBar"},[t._t("default")],2)},u=[],l={name:"TabBar",components:{}},f=l,d=(n("b3c1"),n("2877")),h=Object(d["a"])(f,c,u,!1,null,null,null),m=h.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"tabBarItem",on:{click:t.skipPath}},[t.isActive?n("div",[t._t("imgActive")],2):n("div",[t._t("img")],2),n("div",{class:{active:t.isActive}},[t._t("itemName")],2)])},v=[],g=(n("caad"),n("ac1f"),n("2532"),n("5319"),{props:{path:{type:String}},data:function(){return{}},computed:{isActive:function(){return this.$route.fullPath.includes(this.path)}},methods:{skipPath:function(){this.$route.fullPath!=="/"+this.path&&this.$router.replace({path:"/"+this.path})}}}),b=g,A=(n("1edf"),Object(d["a"])(b,p,v,!1,null,null,null)),C=A.exports,T={components:{TabBar:m,TabBarItem:C}},O=T,y=Object(d["a"])(O,a,s,!1,null,null,null),k=y.exports,x={name:"App",components:{MainTabBar:k}},w=x,P=(n("5c0b"),Object(d["a"])(w,o,i,!1,null,null,null)),j=P.exports,D=(n("d3b7"),n("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("BackTop",{directives:[{name:"show",rawName:"v-show",value:t.showBack,expression:"showBack"}],nativeOn:{click:function(e){return t.back(e)}}}),n("HomeNavBar"),n("TabControl",{directives:[{name:"show",rawName:"v-show",value:t.isShowtopTabControl,expression:"isShowtopTabControl"}],ref:"HomeTabControlTop",staticClass:"tab-control",attrs:{tabArr:["流行","新款","精选"]},on:{"tab-change":t.tabChange}}),n("Scroll",{ref:"scrollCPN",staticClass:"scroll",attrs:{config:t.scrollConfig},on:{scroll:t.checkScroll,pullingUp:t.loadMore}},[n("HomeCarousel",{attrs:{bannerArr:t.bannerArr}}),n("HomeRecommend",{attrs:{recommendArr:t.recommendArr}}),n("HomeFeature"),n("TabControl",{ref:"HomeTabControl",staticClass:"tab-control",attrs:{tabArr:["流行","新款","精选"]},on:{"tab-change":t.tabChange}}),n("GoodsList",{attrs:{goodsList:t.goodsData[t.currentTab].list}}),n("LoadingTip",{directives:[{name:"show",rawName:"v-show",value:t.tabControlOffsetTop,expression:"tabControlOffsetTop"}]})],1)],1)},E=[],N=n("2909"),L=(n("96cf"),n("1da1")),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("navBar",{staticClass:"homeNavBar",attrs:{background:"#FF8198"},scopedSlots:t._u([{key:"center",fn:function(){return[n("h3",[t._v("购物街")])]},proxy:!0}])})},I=[],H=n("a7ac"),B={components:{NavBar:H["a"]}},W=B,M=(n("e0ec"),Object(d["a"])(W,S,I,!1,null,null,null)),$=M.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"HomeCarousel"}},[n("Carousel",t._l(t.bannerArr,(function(e){return n("CarouselItem",{key:e.link},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image},on:{"~load":function(e){return t.$bus.$emit("home-carousel-load")}}})])])})),1)],1)},q=[],G=n("a017"),U={props:{bannerArr:{type:Array}},components:{Carousel:G["a"],CarouselItem:G["b"]}},F=U,R=Object(d["a"])(F,z,q,!1,null,null,null),Y=R.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommendArr,(function(e){return n("div",{key:e.link},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("p",[t._v(t._s(e.title))])])])})),0)},J=[],V={props:{recommendArr:{required:!0}}},Z=V,K=(n("d8d9"),Object(d["a"])(Z,X,J,!1,null,"670b870f",null)),Q=K.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:n("5cbe"),alt:""}})])])}],nt={},rt=nt,ot=(n("6f0d"),Object(d["a"])(rt,tt,et,!1,null,null,null)),it=ot.exports,at=n("642b"),st=n("5d17"),ct=n("9287"),ut=(n("1eb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[t._v("pullingup to loading")])}),lt=[],ft={name:"LoadingTip",created:function(){},data:function(){return{}},props:{},methods:{}},dt=ft,ht=(n("bc0d"),Object(d["a"])(dt,ut,lt,!1,null,"0d613306",null)),mt=ht.exports,pt=n("1bab");function vt(){return Object(pt["a"])({url:"/home/multidata"}).then((function(t){if(t.status>199&&t.status<300)return t.data.data;console.log("home.js////getHomeData")})).catch((function(t){throw t}))}function gt(t,e){return Object(pt["a"])({url:"home/data",params:{type:t,page:e}}).then((function(t){if(t.status>199&&t.status<300)return t.data.data;console.log("home.js////getHomePopNewCell")})).catch((function(t){throw t}))}var bt=n("e486"),At=n("dd76"),Ct={name:"home",mixins:[bt["a"],At["a"]],data:function(){return{scrollConfig:{bounce:{top:!1},pullUpLoad:!0,probeType:2,click:!0,mouseWheel:{speed:20,invert:!1,easeTime:300},scrollY:!0,scrollbar:!0,interactive:!0},showBack:!1,isShowtopTabControl:!1,tabControlOffsetTop:null,imgFreshDebounce:null,scrollY:null,bannerArr:null,recommendArr:null,goodsData:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentTab:"pop"}},components:{HomeNavBar:$,Scroll:st["a"],HomeCarousel:Y,HomeRecommend:Q,HomeFeature:it,TabControl:at["a"],GoodsList:ct["a"],LoadingTip:mt},methods:{checkScroll:function(t){var e=t.y;this.checkBackShow(e,1.368*this.$el.offsetHeight),this.tabControlOffsetTop&&(this.isShowtopTabControl=-e>this.tabControlOffsetTop)},loadMore:function(){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPopNewSellWrap(t.currentTab);case 2:setTimeout((function(){t.$refs.scrollCPN.finishPullUp()}),500);case 3:case"end":return e.stop()}}),e)})))()},getScrollY:function(){return this.$refs.scrollCPN.getScrollY()},tabChange:function(t){var e=this.currentTab;switch(t){case 0:this.currentTab="pop";break;case 1:this.currentTab="new";break;case 2:this.currentTab="sell";break}if(this.isShowtopTabControl&&e!==this.currentTab){var n=this.$refs.HomeTabControl.$el;this.$refs.scrollCPN.scrollToElement(n)}this.$refs.HomeTabControlTop.currentIndex=this.$refs.HomeTabControl.currentIndex=t},getDataWrap:function(){var t=this;vt().then((function(e){t.bannerArr=e.banner.list,t.recommendArr=e.recommend.list}))},getPopNewSellWrap:function(t){var e=this,n=++this.goodsData[t].page;return gt(t,n).then((function(n){var r,o=n.list;(r=e.goodsData[t].list).push.apply(r,Object(N["a"])(o))}))}},created:function(){this.getDataWrap(),this.getPopNewSellWrap("pop"),this.getPopNewSellWrap("new"),this.getPopNewSellWrap("sell")},mounted:function(){var t=this;this.$bus.$once("home-carousel-load",(function(){t.tabControlOffsetTop=t.$refs.HomeTabControl.$el.offsetTop}))},activated:function(){this.$refs.scrollCPN.refresh(),this.$refs.scrollCPN.scrollTo(0,this.scrollY,0)},deactivated:function(){this.scrollY=this.getScrollY()}},Tt=Ct,Ot=(n("db56"),Object(d["a"])(Tt,_,E,!1,null,"912a5758",null)),yt=Ot.exports,kt=function(){return n.e("chunk-74537ae0").then(n.bind(null,"bb51"))},xt=function(){return n.e("chunk-a08f0852").then(n.bind(null,"712d"))},wt=function(){return n.e("chunk-2cb70870").then(n.bind(null,"3b42"))},Pt=function(){return n.e("chunk-110b37e5").then(n.bind(null,"6ab7"))};r["a"].use(D["a"]);var jt=[{path:"/",redirect:"/home"},{path:"/home",component:yt},{path:"/category",component:kt},{path:"/shopcart",component:xt},{path:"/profile",component:wt},{path:"/detail/:iid",component:Pt}],Dt=new D["a"]({mode:"hash",routes:jt}),_t=Dt,Et=n("53ca"),Nt=n("2f62"),Lt=(n("4160"),n("4fad"),n("07ac"),n("159b"),n("3835")),St={countChange:function(t,e){t.cart[e.id].count+=+e.count,It("cart",t.cart)},setCountChange:function(t,e){t.cart[e.id].count=+e.count,It("cart",t.cart)},addGoods:function(t,e){e.cTime=Date.now(),r["a"].set(t.cart,e.id,e),It("cart",t.cart)},removeGoods:function(t,e){r["a"].delete(t.cart,cart[e.id]),It("cart",t.cart)},checkedChange:function(t,e){t.cart[e.id].checked=!t.cart[e.id].checked,It("cart",t.cart)},cartCheckedAllChange:function(t){var e=t.cart,n=this.getters.isAllChecked;Object.values(e).forEach((function(t){return t.checked=!n})),It("cart",e)},cartCheckGoodsRemove:function(t){var e=t.cart;Object.entries(e).forEach((function(t){var n=Object(Lt["a"])(t,2),o=n[0],i=n[1];return i.checked?r["a"].delete(e,o):null})),It("cart",e)}};function It(t,e){localStorage.setItem(t,JSON.stringify(e))}var Ht={receiveGoods:function(t,e){var n=t.state,r=t.commit;return n.cart.hasOwnProperty(e.id)?(r("countChange",e),Promise.resolve("count-change")):(r("addGoods",e),Promise.resolve("add-goods"))},cartCountChange:function(t,e){t.state;var n=t.commit;n("countChange",e)}},Bt=(n("a623"),n("4de4"),n("13d5"),n("b680"),{cartGoodsArr:function(t){return Object.values(t.cart).sort((function(t,e){var n=t.cTime,r=e.cTime;return n>r}))},isAllChecked:function(t){var e=t.cart;return Object.entries(e).every((function(t){var e=Object(Lt["a"])(t,2),n=(e[0],e[1]);return n.checked}))},cartCheckedTotalPrice:function(t){var e=t.cart;return Object.values(e).reduce((function(t,e){var n=e.count,r=e.price,o=e.checked;return o?t+n*r:t}),0).toFixed(2)},cartCheckedGoodsArr:function(t){var e=t.cart;return Object.values(e).filter((function(t){return t.checked}))}});r["a"].use(Nt["a"]);var Wt=null;try{Wt=JSON.parse(localStorage.getItem("cart")),"object"!==Object(Et["a"])(Wt)&&(Wt=null)}catch(Kt){console.log("err"),Wt=null}var Mt={cart:Wt||{}},$t=new Nt["a"].Store({state:Mt,mutations:St,actions:Ht,getters:Bt}),zt=n("fe3c"),qt=n.n(zt),Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("transition",{attrs:{name:"toast"}},[t.isShow?n("div",{staticClass:"toast"},[t._v(" "+t._s(t.tipData)+" ")]):t._e()])],1)},Ut=[],Ft={name:"Toast",created:function(){},data:function(){return{isShow:!1,tipData:"???"}},props:{},methods:{show:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;this.tipData=t,this.isShow=!0,setTimeout((function(){e.isShow=!1}),n)}}},Rt=Ft,Yt=(n("39d0"),Object(d["a"])(Rt,Gt,Ut,!1,null,"6c2b84f4",null)),Xt=Yt.exports,Jt={install:function(t){var e=t.extend(Xt),n=(new e).$mount(document.createElement("div"));console.log(n),document.body.append(n.$el),t.prototype.$toast=n}},Vt=Jt,Zt=n("caf9");r["a"].config.devtools=!0,"addEventListener"in document&&document.addEventListener("DOMContentLoaded",(function(){qt.a.attach(document.body)}),!1),r["a"].use(Vt),r["a"].use(Zt["a"],{loading:n("5160")}),r["a"].prototype.$bus=new r["a"]({}),new r["a"]({render:function(t){return t(j)},router:_t,store:$t,methods:{getRandom:function(){return Math.random()}}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.11368804.svg"},"58c6":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"5d17":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"wrapper"},[n("div",{staticClass:"content"},[t._t("default")],2)])},i=[],a=n("ade3"),s=n("f40f"),c={props:{config:{type:Object,default:function(){return{}}}},data:function(){return{control:null,imgFreshDebounce:null}},computed:{},mounted:function(){var t=this;this.control=new s["a"](this.$refs.wrapper,this.config),this.config.probeType&&this.control.on("scroll",(function(e){return t.$emit("scroll",e)})),this.config.mouseWheel&&this.control.on("mousewheelMove",(function(e){return t.$emit("scroll",e)})),this.config.pullUpLoad&&this.control.on("pullingUp",(function(){t.$emit("pullingUp")}))},methods:(r={scrollTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.control.scrollTo(t,e,n)},finishPullUp:function(){this.control.finishPullUp()}},Object(a["a"])(r,"scrollTo",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.control.scrollTo(t,e,n)})),Object(a["a"])(r,"refresh",(function(){this.control.refresh()})),Object(a["a"])(r,"scrollToElement",(function(){var t;(t=this.control).scrollToElement.apply(t,arguments)})),Object(a["a"])(r,"getScrollY",(function(){return this.control.y})),Object(a["a"])(r,"scrollToElement",(function(){var t;(t=this.control).scrollToElement.apply(t,arguments)})),Object(a["a"])(r,"disable",(function(){console.log(1),this.control.disable()})),Object(a["a"])(r,"enable",(function(){this.control.enable()})),r)},u=c,l=(n("c846"),n("2877")),f=Object(l["a"])(u,o,i,!1,null,"1822137a",null);e["a"]=f.exports},"5fbb":function(t,e,n){},6346:function(t,e,n){"use strict";n("319e")},"642b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabControl"},t._l(t.tabArr,(function(e,r){return n("p",{key:e,class:{active:r===t.currentIndex},on:{click:function(e){return t.changeCurrentIndex(r)}}},[t._v(" "+t._s(e)+" ")])})),0)},o=[],i={props:{tabArr:{type:Array,required:!0}},mounted:function(){},data:function(){return{currentIndex:0}},methods:{changeCurrentIndex:function(t){this.currentIndex=t,this.$emit("tab-change",t)}}},a=i,s=(n("d61c"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,null,null);e["a"]=c.exports},"643f":function(t,e,n){},"684a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAMAAABiiJHFAAAC91BMVEUAAAD///8AAAAAAAAAAACqqqrz8/P6+vr8/Pz+/v7+/v7////////////t7e37+/v+/v7////R0dH6+vr+/v7q6ur////8/Pzb29v8/Pz////c3NxVVVX4+Pj///////9tbW0AAADj4+P29vb29vZJSUn6+vr6+vpgYGCLi4v8/Py4uLj8/Pz8/Pz8/Pyqqqr8/Pz8/PwAAAD6+vr09PT09PTb29vc3NxAQED8/PwAAADz8/O/v7/+/v4AAAD4+PjLy8v////4+Pizs7P/vLz/Q0P/QkL/dXX/jo7/9PTx8fH/w8P/W1v/9/fy8vIAAAD7+/v/0dH/Nzf/ZWX/+vrV1dX/2dn/PDz/b2///f3z8/P/4eH/Rkb/e3v//v77+/v/7e3/TEz/iIgAAABra2v/8vL/U1P/fX3/Skr/lZXd3d3/YGD/bW3/4OD/o6Pd3d3v7+//+/v/ZGT/Pj7/sLAAAAD19fX/d3f/WVn/ODj6+vr/hYX/x8cAAAD7+/v/l5f/5+f/vb37+/sAAAD9/f3/rKz/QED/3Nz/sbH/PT39/f0AAAD+/v7/Pz//Ojr/pKT/cXH+/v7/lpb/bGwAAAD/OTn/UFD/19f39/f39/fy8vLn5+fPz8/Ly8tSUlL+/v4AAAD5+fn5+fkAAADq6urq6uoAAAC0tLT/wMD/RUWzs7MAAAD5+fn5+fnk5OSAgID+/v7/wcEAAADt7e3u7u6SkpKVlZUAAADv7++AgID9/f39/f3f398UFBT4+PikpKT+/v4AAADY2Nja2toAAADs7Ozs7OwAAAAbGxvx8fHy8vIxMTH29vZcXFz29vZHR0fz8/Pz8/MaGhrq6uoAAADQ0ND9/f39/f3Q0NAAAACUlJT29vYRERHZ2dnZ2dkAAABtbW3s7OwAAACEhITo6OhpaWnc3Nz4+PgAAACdnZ3h4eH19fX+/v48PDy4uLja2trr6+vz8/P5+fn8/Pz+/v79/f36+vr4+Pj/NTX/MDD/MTH/MjL///87KGVYAAAA+HRSTlMAAAECAwk7ZpCvydvn8ilzsOgVaL8i6ZEbk+0cBmzj5QcEI1BSB4qLCAqhEbS1uQ6fqgWMW1wpKgi/BmYb4QeSIOyMGvb+/vv582v2/PNsCcH1/vzyLvT++/J59P768rvz/fkIEvP9+v34Qfz79PhAbfL8/vcKlPr8/rH59QvL+PP2zAzd9/709/7eDef+/vj76Pj7Dv799LK0lnFHRRjtEb2+EH59Dzf2/jYSxMNzJOr2E5KSLS4UmCji43AYwzjpFmhoF5WWFRupqR26Jb4isbMclRpi5eZjGTbDHHJzGC2cGzOVLHfFHD6Cv+wkT3ects7e7uTWzQFWDGgAAAABYktHRAH/Ai3eAAAGGElEQVRYw63ZZ5gTRRgH8OMudIbOKShosN0BtmCBAKHGjgEEFESKCyqKiiWoSFRuEZS1obGBctHViK5SYglIu9VoUJpCLAH0ILQDpFk5+OK8M9ty2ZJs8n7Y23ue2d/z3n9nNpu5oqK0qpdZxVKV4JLP6xlVkX7pkeA5lFJ02ywlHfUbNGzUuEnTZgg1a9qkcaOGDeo7KG2HJabD0bxFy1aoTrVq2aI5tK0jW7AUbd2mLTKotm1a68GmLEXbNSpFJlV6WrtM2Iwl6OntOyCL6tD+DAJnxUKrjjM7drJCoc7qeLYjrWFDFlBn57bZoCTjzk6HpmEjlqjnZNUqrU7nal19lQRw3vnZo1AXlKlBGKglJc7yLrmpCHUpd8p3zkB1OLt2y1VFqFtXOQgjtfzC3FWELrpYcvVYrJZdYkdF6NIycPVY3KzT1d2eilB3lxPa1Vcvs6sidDlx9YJ1XdHMPtvqSpcj0wW1R0/7KkI9e4Bbt1mH090rHxWhXm6nI71dEmzvPvmxfXrXjRci8PTNT0Woryc9BmjW3a9/vmz/fu60dkmzA/JVERqQ1i5pdmCpxTWDvFddfc21pkNKB2rbJc1eZ6Fef6IW1w2DTQfdqG0XmvUNMVeHDqslddNws1FDfNCuptkR5urIm2ulumWU2bgRaruk2dGm6q1japW6bazJwNFKu7DAPL5xZur4CbWaut1k5DifR1pqkAEz0WzSTroDtDvhcBccJhsP7T+RkVIgGdxtog6+B6wpo+B4rxeO9xkPvl9OgWQw1XjgA1NAenA4gh9o5EP4ePJhw9FTSQokWpfHP81w3NhHgHt0EqIsGvoY/nFqkNHwaX48F3C4OFo3459uyD4O2oTxSGbRDFgXJ2YYDJ/uZ9wQLok28ISR+iRgY55CKotmnsInw4bqj68I0HAJy84yUJ8Ga/YcpGXRMyfx2bNzdC+Yy0os3DHuOQP2eQy8IDWmsOhFOH1J94J5HL1ncMd8nFEGszUxqix6GZ++on8FZl2UZfxBI3aQ1zsTZbJo8quvva5/RdDPqKxRCNrSsoY1T2JLCDurUOxcwpZIbEWh2Io09o1CsW+msfMLxc6XWHrLFhSKXZA2E94qFPu2yuLlsLCyMGzlQmU5wOINvVMY9t2QvHjJo4Z/z5rFHwxeqzHv86zmCRYIf2DNLvJ+uMhqzEdh5cEIj/Gg8LG1a12fCEH5MU4+dLjQ4kKwi0Oc9KFD7xnLL1lqdc0yr3eZ+YilS3C09CNSDjfyqRVrfcs+i8jRSq8fONzPraauJVv5hUCXbrHyssTy0eUWrOVMWB6VMiguUlMQVnxpFYN5rVwhqBlIL6J4oUVX5ceuiobIylVfcOlNW70mH3XN6oi2WaldPHWja+fZV6vWRumkVVk5XfEr++zXopxscdoXKB/HR2Pf2FW/jUX5tGTldvHcDcXXfWdP/X5dPASPg/Rvp7RdFsewfoMddcN6HAFbp1npqzSDY4iIGzflrm7aKEZwBEzGTgX54s/AbIht/iFX9cfNMZgFTMYXfxoDng1B7G7Zmpu6dQtWg3gWZG5T0E0VD3UTP/2cPfrLrwmqevQ2VWi8kpvctj1bdfu2pKzqbQGluWJyx28rs0FX/r4jKWpUo+016kbE6sTOXZavDpW7diaqxYikGmyv0c1AcDleiMeSqd17qszQqj27U8lYXOA5WS022brErp8L4yCqk6m9+/Ybofv37U0lq3EAYc6vqiYbrS4342ODvEDgmgMHD/2R8ccfOnighqACH2R9jNtlutEqbQuDCw1HAE6kag4fOXrs+J9/VaG///n3v+PHjh45XJNKABohrTJkvpptC8ub2C4PgxMOh4RoPAZyqkZTKTBj8aiA0YCPUQMwYeWA3ThhDPNCJBoXMZ1M0EomMSnGoxGBxyhO1U3VIssqVmBfgA2G+RDQcVEUYzF8iAMZ4sNBNuBT0CxU6c5JsD/AckCHBKlCQHIsblRCs2pVbZjCDJaB5oJScUBik1HQrFUVBhlowGnBOeMBM3dUhYnsxraHIYVP8K9g2kK1MqadLqWcQNo3ZZj+h0/nn4a2UQ1NeeXU8qL/AUU4yqlUFwIYAAAAAElFTkSuQmCC"},"6f0d":function(t,e,n){"use strict";n("8641")},"71b4":function(t,e,n){},"783f":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));n("13d5"),n("fb6a"),n("4fad"),n("3410"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("5319"),n("ddb0");var r=n("3835"),o=n("53ca");function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3,r=null,o=null;return function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];o||(o=Date.now()),r&&clearTimeout(r),o&&r&&Date.now()-o>n&&(t.apply(null,a),o=r=null),r=setTimeout((function(){t.apply(null,a),o=r=null}),e)}}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy年MM月dd日";if(t="object"===Object(o["a"])(t)?t:new Date(t),Object.getPrototypeOf(t).constructor===Date){var n={"y+":"00"+t.getFullYear(),"M+":"00"+(t.getMonth()+1),"d+":"00"+t.getDate(),"h+":"00"+t.getHours(),"m+":"00"+t.getHours(),"s+":"00"+t.getSeconds()};return Object.entries(n).reduce((function(t,e){var n=Object(r["a"])(e,2),o=n[0],a=n[1];return t.replace(new RegExp(o),(function(t){return i(a,t.length)}))}),e)}function i(t,e){return t.substring(t.length-e,t.length)}}},"7ede":function(t,e,n){},8641:function(t,e,n){},8876:function(t,e,n){},9287:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"GoodsList"},t._l(t.goodsList,(function(t){return n("GoodsListItem",{key:t+Math.random(),attrs:{goods:t}})})),1)},o=[],i=n("1eb0"),a={name:"GoodsList",created:function(){},data:function(){return{}},props:{goodsList:{type:Array}},methods:{},components:{GoodsListItem:i["a"]}},s=a,c=(n("b58b"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,"76eb5c99",null);e["a"]=u.exports},"929e":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.43fd8010.svg"},"9c0c":function(t,e,n){},a017:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"carousel",staticClass:"carousel",on:{pointerdown:t.pointerDown,pointermove:t.pointerMove,pointerup:t.pointerUp,dragstart:function(t){t.preventDefault()}}},[n("div",{ref:"container",staticClass:"slider-container"},[t._t("default")],2),t.imgCount>1?n("div",{staticClass:"pointerContainer"},t._l(Array.from({length:t.imgCount}),(function(e,r){return n("div",{key:"pointer"+r,staticClass:"pointer",class:{active:t.currentIndex===r+1}})})),0):t._e()])},o=[],i={name:"Carousel",mounted:function(){setTimeout(this.carouselInit,100)},props:{dragRatio:{default:.3},frameInterval:{default:1e3/60},animationTime:{default:500},carouselInterval:{default:3e3}},data:function(){return{initTimer:null,autoNextPageTimer:null,isMovingTimer:null,nextInitInterval:300,imgWidth:null,imgCount:null,currentOffset:null,currentIndex:1,poninterDownEvent:null}},computed:{moveCount:function(){return this.animationTime/this.frameInterval}},methods:{carouselInit:function(){this.initTimer=setTimeout(this.carouselInit,this.nextInitInterval+=1e3);var t=this.$refs.carousel;if(t){var e=t.querySelectorAll(".slider");e[0]&&(this.imgWidth=e[0].offsetWidth||0,this.imgCount=e.length,this.imgWidth&&(clearTimeout(this.initTimer),1!==this.imgCount&&(this.$refs.container.append(e[0].cloneNode(!0)),this.$refs.container.prepend(e[e.length-1].cloneNode(!0)),this.currentOffset=-this.imgWidth,this.freshIndex(),this.setOffset(this.currentOffset),this.initTimer="success",this.carouselAutoNextPage())))}},move:function(t){var e=this;if(!this.isMovingTimer){var n=t<this.currentOffset,r=t-this.currentOffset,o=r/this.moveCount;this.isMovingTimer=setTimeout((function(){return i.call(e)}),this.frameInterval)}function i(){var e=this;if(this.currentOffset+=o,this.currentOffset=n?Math.max(t,this.currentOffset):Math.min(t,this.currentOffset),0!==this.currentOffset&&this.currentOffset!==-this.imgWidth*(this.imgCount+1)||(this.currentOffset=t=n?-this.imgWidth:-this.imgCount*this.imgWidth),this.setOffset(),this.freshIndex(),t===this.currentOffset)return this.carouselAutoNextPage(),void(this.isMovingTimer=null);this.isMovingTimer=setTimeout((function(){return i.call(e)}),this.frameInterval)}},setOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOffset;this.$refs.container&&(this.$refs.container.style.transform="translateX(".concat(t,"px)"))},freshIndex:function(){var t=this.currentOffset/-this.imgWidth+this.dragRatio;t=Math.floor(t),t<1&&(t=this.imgCount),t>this.imgCount&&(t=1),this.currentIndex=t},carouselAutoNextPage:function(){var t=this;this.autoNextPageTimer||(this.autoNextPageTimer=setTimeout((function(){var e=t.currentOffset+-t.imgWidth;t.move(e),t.autoNextPageTimer=null}),this.carouselInterval))},pointerDown:function(t){this.isMovingTimer||this.poninterDownEvent||"success"!==this.initTimer||(clearInterval(this.autoNextPageTimer),this.autoNextPageTimer=null,t.currentOffset=this.currentOffset,this.poninterDownEvent=t)},pointerMove:function(){if(this.poninterDownEvent){var t=this.poninterDownEvent,e=t.x,n=t.pointerId,r=t.currentOffset,o=event,i=o.x,a=o.pointerId,s=r>this.currentOffset;if(n===a){var c=i-e;Math.abs(c)>this.imgWidth&&(c=s?1-this.imgWidth:this.imgWidth-1),this.currentOffset=r+c,this.setOffset(),this.freshIndex()}}},pointerUp:function(){if(this.poninterDownEvent){var t=this.poninterDownEvent.currentOffset,e=t-this.currentOffset;if(Math.abs(e%this.imgWidth)<this.dragRatio*this.imgWidth)this.move(t);else{var n=t<this.currentOffset?t+this.imgWidth:t-this.imgWidth;this.move(n)}this.poninterDownEvent=null}}}},a=i,s=(n("b97a"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,"1fee6d49",null),u=c.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[t._t("default")],2)},f=[],d={},h=d,m=(n("2c9d"),Object(s["a"])(h,l,f,!1,null,"5b785cba",null)),p=m.exports},a290:function(t,e,n){},a575:function(t,e,n){},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.e3dac1fb.svg"},a7ac:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"navBar"}},[n("div",{staticClass:"navBar"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"center"},[t._t("center")],2),n("div",{staticClass:"right"},[t._t("right")],2)])])},o=[],i={props:["background"],mounted:function(){document.querySelector("#navBar>.navBar").style.background=this.background}},a=i,s=(n("0578"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,null,null);e["a"]=c.exports},af62:function(t,e,n){},b3c1:function(t,e,n){"use strict";n("643f")},b508:function(t,e,n){t.exports=n.p+"img/home_active.74d1cc4d.svg"},b58b:function(t,e,n){"use strict";n("929e")},b97a:function(t,e,n){"use strict";n("56ae")},bc0d:function(t,e,n){"use strict";n("5fbb")},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3857810e.svg"},c846:function(t,e,n){"use strict";n("e39b")},d11a:function(t,e,n){},d151:function(t,e,n){t.exports=n.p+"img/profile_active.3ba58f85.svg"},d61c:function(t,e,n){"use strict";n("8876")},d8d9:function(t,e,n){"use strict";n("a575")},db56:function(t,e,n){"use strict";n("13ee")},dd76:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"backTop"},[r("img",{staticClass:"img",attrs:{src:n("684a"),alt:""}})])}],i={name:"BackTop",created:function(){},data:function(){return{}},props:{},methods:{}},a=i,s=(n("6346"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,"5da7c1cb",null),u=c.exports,l={data:function(){return{showBack:!1}},components:{BackTop:u},methods:{back:function(){this.$refs.scrollCPN.scrollTo()},checkBackShow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.368*this.$el.offsetHeight;this.showBack=Math.abs(t)>e}}}},e0ec:function(t,e,n){"use strict";n("af62")},e39b:function(t,e,n){},e486:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("783f"),o={data:function(){return{imgLoadListener:null}},mounted:function(){if(this.$refs.scrollCPN.refresh)return console.log(),this.imgLoadListener=Object(r["a"])(this.$refs.scrollCPN.refresh,100,3e3),void this.$bus.$on("img-load",this.imgLoadListener)},activated:function(){this.$bus.$off("img-load",this.imgLoadListener),this.$bus.$on("img-load",this.imgLoadListener)},deactivated:function(){this.$bus.$off("img-load",this.imgLoadListener),console.log("deactivated")},beforeDestroy:function(){this.$bus.$off("img-load",this.imgLoadListener),console.log("销毁")}}},e55d:function(t,e,n){t.exports=n.p+"img/profile.c2b75dfe.svg"}});
//# sourceMappingURL=app.b6ab3a64.js.map