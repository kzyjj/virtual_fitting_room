(this["webpackJsonpdressing-room"]=this["webpackJsonpdressing-room"]||[]).push([[0],{65:function(e,t,i){},66:function(e,t,i){},74:function(e,t,i){},78:function(e,t,i){"use strict";i.r(t);i(0);var s=i(16),c=i.n(s),a=(i(65),i(66),i(89)),o=(i(23),i(1));function n(){return Object(o.jsx)(a.a,{className:"text-center",children:Object(o.jsx)(a.a,{style:{color:"#000"},children:Object(o.jsx)(a.a.Img,{src:"https://picsum.photos/673/180"})})})}var l=i(19),g=i(90);function r(e){var t=Object(l.c)((function(e){return e.NavTabReducer.navPills}));return Object(o.jsx)("div",{children:Object(o.jsx)(g.a.Item,{as:"ul",className:"nav nav-tabs justify-content-center",children:t.map((function(e,t){return Object(o.jsx)(g.a.Item,{as:"li",children:Object(o.jsx)(g.a.Link,{as:"a","btn-default":!0,"data-toggle":"pill",href:"#".concat(e.tabName),children:e.showName})},t)}))})})}var d="CHOOSE_CLOTHES",m=i(58);function p(e){var t=e.item,i=Object(l.b)();return Object(o.jsxs)(a.a,{className:"text-center",children:[Object(o.jsx)("img",{src:t.imgSrc_jpg,alt:"123"}),Object(o.jsx)(m.a,{variant:"secondary",size:"sm",onClick:function(){i({type:d,clothes:t})},children:"\u8a66\u8863"})]})}function h(){var e=Object(l.c)((function(e){return e.ProductListReducer})),t=e.topcloth,i=e.botcloth,s=e.shoes,c=e.handbags;return Object(o.jsx)("div",{className:"well",children:Object(o.jsxs)("div",{className:"tab-content",children:[Object(o.jsx)("div",{className:"tab-pane container active",id:"tabTopClothes",children:Object(o.jsx)("div",{className:"row w-100",children:t.map((function(e,t){return Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)(p,{item:e})},t)}))})}),Object(o.jsx)("div",{className:"tab-pane container fade",id:"tabBotClothes",children:Object(o.jsx)("div",{className:"row w-100",children:i.map((function(e,t){return Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)(p,{item:e})},t)}))})}),Object(o.jsx)("div",{className:"tab-pane container fade",id:"tabShoes",children:Object(o.jsx)("div",{className:"row w-100",children:s.map((function(e,t){return Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)(p,{item:e})},t)}))})}),Object(o.jsx)("div",{className:"tab-pane container fade",id:"tabHandBags",children:Object(o.jsx)("div",{className:"row w-100",children:c.map((function(e,t){return Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)(p,{item:e})},t)}))})})]})})}var u=i(84);function b(){return Object(o.jsx)(u.a,{children:Object(o.jsx)("div",{className:"row",style:{padding:"10px"},children:Object(o.jsx)(r,{})})})}var j=i(85);function _(){var e=Object(l.c)((function(e){return e.ModelReducer}));return Object(o.jsx)(j.a,{children:Object(o.jsx)(u.a,{children:Object(o.jsxs)("div",{className:"contain",children:[Object(o.jsx)("div",{className:"bikinitop",style:{width:500,height:500,background:'url("'.concat(e.topclothes,'")'),backgroundRepeat:"no-repeat",position:"absolute",top:"-9%",left:"-5%",zIndex:3,transform:"scale(0.5)"}}),Object(o.jsx)("div",{className:"bikinibottom",style:{width:500,height:500,background:'url("'.concat(e.botclothes,'")'),backgroundRepeat:"no-repeat",position:"absolute",top:"30%",left:"-5%",zIndex:2,transform:"scale(0.5)"}}),Object(o.jsx)("div",{className:"handbag",style:{width:300,height:300,background:'url("'.concat(e.handbags,'")'),backgroundRepeat:"no-repeat",position:"absolute",bottom:"30%",right:"35%",transform:"scale(0.5)",zIndex:4}}),Object(o.jsx)("div",{className:"feet",style:{width:300,height:300,background:'url("'.concat(e.shoes,'")'),backgroundRepeat:"no-repeat",position:"absolute",top:"55%",right:"35%",transform:"scale(0.5)",zIndex:1}})]})})})}i(74);var y=i(86);function S(){return Object(o.jsxs)(j.a,{children:[Object(o.jsx)(u.a,{children:Object(o.jsx)(y.a,{className:"col-12",children:Object(o.jsx)(n,{})})}),Object(o.jsxs)(u.a,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"row",style:{padding:"10px 10px"},children:Object(o.jsx)(h,{})})]})]})}i(88),i(87),i(56),i(7);var O=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(S,{})})},k=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,91)).then((function(t){var i=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),s(e),c(e),a(e),o(e)}))},x=i(51),w=i(2),v={topclothes:"",botclothes:"",shoes:"",handbags:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return e[t.clothes.type]=t.clothes.imgSrc_png,Object(w.a)({},e);default:return Object(w.a)({},e)}},f={navPills:[{tabName:"tabTopClothes",showName:"\u4e0a\u8eab",type:"topclothes"},{tabName:"tabBotClothes",showName:"\u4e0b\u8eab",type:"botclothes"},{tabName:"tabShoes",showName:"\u978b\u5b50",type:"shoes"},{tabName:"tabHandBags",showName:"\u5305\u5305",type:"handbags"},{tabName:"tabHandBags",showName:"\u6211\u7684\u8863\u6ac3-\u4e0a\u3001\u4e0b\u8eab",type:"handbags"},{tabName:"tabHandBags",showName:"\u6211\u7684\u8863\u6ac3-\u978b\u5b50\u3001\u5305\u5305",type:"handbags"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return Object(w.a)({},e)},A={topcloth:[{id:"topcloth_1",type:"topclothes",name:"\u4e0a\u88631",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth1_show.jpg",imgSrc_png:"./images/clothes/topcloth1.png"},{id:"topcloth_2",type:"topclothes",name:"\u4e0a\u88632",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth2_show.jpg",imgSrc_png:"./images/clothes/topcloth2.png"},{id:"topcloth_3",type:"topclothes",name:"\u4e0a\u88633",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth3_show.jpg",imgSrc_png:"./images/clothes/topcloth3.png"},{id:"topcloth_4",type:"topclothes",name:"\u4e0a\u88634",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth4_show.jpg",imgSrc_png:"./images/clothes/topcloth4.png"},{id:"topcloth_5",type:"topclothes",name:"\u4e0a\u88635",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth5_show.jpg",imgSrc_png:"./images/clothes/topcloth5.png"},{id:"topcloth_6",type:"topclothes",name:"\u4e0a\u88636 ",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth6_show.jpg",imgSrc_png:"./images/clothes/topcloth6.png"}],botcloth:[{id:"botcloth_1",type:"botclothes",name:"\u4e0b\u8eab1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth1_show.jpg",imgSrc_png:"./images/clothes/botcloth1.png"},{id:"botcloth_2",type:"botclothes",name:"\u4e0b\u8eab2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth2_show.jpg",imgSrc_png:"./images/clothes/botcloth2.png"},{id:"botcloth_3",type:"botclothes",name:"\u4e0b\u8eab3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth3_show.jpg",imgSrc_png:"./images/clothes/botcloth3.png"},{id:"botcloth_4",type:"botclothes",name:"\u4e0b\u8eab4",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth4_show.jpg",imgSrc_png:"./images/clothes/botcloth4.png"},{id:"botcloth_5",type:"botclothes",name:"\u4e0b\u8eab5",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth5_show.jpg",imgSrc_png:"./images/clothes/botcloth5.png"}],shoes:[{id:"shoes_1",type:"shoes",name:"\u978b\u5b501",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes1_show.jpg",imgSrc_png:"./images/shoes/shoes1.png"},{id:"shoes_2",type:"shoes",name:"\u978b\u5b502",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes2_show.jpg",imgSrc_png:"./images/shoes/shoes2.png"},{id:"shoes_3",type:"shoes",name:"\u978b\u5b503",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes3_show.jpg",imgSrc_png:"./images/shoes/shoes3.png"},{id:"shoes_4",type:"shoes",name:"\u978b\u5b504",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes4_show.jpg",imgSrc_png:"./images/shoes/shoes4.png"},{id:"shoes_5",type:"shoes",name:"\u978b\u5b505",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes5_show.jpg",imgSrc_png:"./images/shoes/shoes5.png"}],handbags:[{id:"handbag_1",type:"handbags",name:"\u5305\u53051",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag1_show.jpg",imgSrc_png:"./images/handbags/handbag1.png"},{id:"handbag_2",type:"handbags",name:"\u5305\u53052",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag2_show.jpg",imgSrc_png:"./images/handbags/handbag2.png"},{id:"handbag_3",type:"handbags",name:"\u5305\u53053",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag3_show.jpg",imgSrc_png:"./images/handbags/handbag3.png"}],necklaces:[{id:"necklace_1",type:"necklaces",name:"\u9805\u934a1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/necklaces/necklace1_show.jpg",imgSrc_png:"./images/necklaces/necklace1.png"},{id:"necklace_2",type:"necklaces",name:"\u9805\u934a2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/necklaces/necklace2_show.jpg",imgSrc_png:"./images/necklaces/necklace2.png"},{id:"necklace_3",type:"necklaces",name:"\u9805\u934a3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/necklaces/necklace3_show.jpg",imgSrc_png:"./images/necklaces/necklace3.png"}],hairstyle:[{id:"hairstyle_1",type:"hairstyle",name:"\u9aee\u578b1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/hairstyle/hairstyle1_show.jpg",imgSrc_png:"./images/hairstyle/hairstyle1.png"},{id:"hairstyle_2",type:"hairstyle",name:"Hairstyle 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/hairstyle/hairstyle2_show.jpg",imgSrc_png:"./images/hairstyle/hairstyle2.png"},{id:"hairstyle_3",type:"hairstyle",name:"Hairstyle 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/hairstyle/hairstyle3_show.jpg",imgSrc_png:"./images/hairstyle/hairstyle3.png"}],background:[{id:"background_1",type:"background",name:"Background 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background1_show.jpg",imgSrc_png:"./images/background/background1.jpg"},{id:"background_2",type:"background",name:"Background 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background2_show.jpg",imgSrc_png:"./images/background/background2.jpg"},{id:"background_3",type:"background",name:"Background 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background3_show.jpg",imgSrc_png:"./images/background/background3.jpg"},{id:"background_4",type:"background",name:"Background 4",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background4_show.jpg",imgSrc_png:"./images/background/background4.jpg"}],abc:[{id:"test_1",type:"test",name:"test 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth1_show.jpg",imgSrc_png:"./images/clothes/botcloth1.png"}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return Object(w.a)({},e)},B=Object(x.a)({NavTabReducer:L,ProductListReducer:q,ModelReducer:N}),C=Object(x.b)(B);c.a.render(Object(o.jsx)(l.a,{store:C,children:Object(o.jsx)(O,{})}),document.getElementById("root")),k()}},[[78,1,2]]]);
//# sourceMappingURL=main.42a4fb63.chunk.js.map