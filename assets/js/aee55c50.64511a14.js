"use strict";(self.webpackChunkgunbot_docs=self.webpackChunkgunbot_docs||[]).push([[2093],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(944),l=a(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var m=function(e){var t=e.lazy,a=e.block,m=e.defaultValue,d=e.values,u=e.groupId,c=e.className,k=(0,r.Z)(),v=k.tabGroupChoices,b=k.setTabGroupChoices,f=(0,n.useState)(m),g=f[0],N=f[1],h=n.Children.toArray(e.children),y=[];if(null!=u){var T=v[u];null!=T&&T!==g&&d.some((function(e){return e.value===T}))&&N(T)}var w=function(e){var t=e.currentTarget,a=y.indexOf(t),n=d[a].value;N(n),null!=u&&(b(u,n),setTimeout((function(){var e,a,n,r,l,i,s,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,p=i.innerWidth,a>=0&&l<=p&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},c)},d.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4148:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(1395),o=a(8215),s=["components"],p={id:"balance-settings",title:"Balance settings"},m={unversionedId:"trading-strategy-options/balance-settings",id:"trading-strategy-options/balance-settings",isDocsHomePage:!1,title:"Balance settings",description:"Balance settings define important options like how much Gunbot is allowed to invest per trade.",source:"@site/docs/trading-strategy-options/balance-settings.md",sourceDirName:"trading-strategy-options",slug:"/trading-strategy-options/balance-settings",permalink:"/trading-strategy-options/balance-settings",version:"current",frontMatter:{id:"balance-settings",title:"Balance settings"},sidebar:"tutorialSidebar",previous:{title:"Custom strategies",permalink:"/trading-strategy-options/custom-strategies"},next:{title:"Confirming indicators",permalink:"/trading-strategy-options/confirming-indicators"}},d=[{value:"Balance settings parameters",id:"balance-settings-parameters",children:[{value:"Trading Limit",id:"trading-limit",children:[]},{value:"Trading Limit Percentage",id:"trading-limit-percentage",children:[]},{value:"Trading Limit All-In",id:"trading-limit-all-in",children:[]},{value:"Keep Quote",id:"keep-quote",children:[]},{value:"Funds Reserve",id:"funds-reserve",children:[]},{value:"Min Volume To Buy",id:"min-volume-to-buy",children:[]},{value:"Min Volume To Sell",id:"min-volume-to-sell",children:[]}]}],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Balance settings define important options like how much Gunbot is allowed to invest per trade."),(0,l.kt)("p",null,"These settings are part of a trading strategy, this way you have the flexibility to run different strategies with different balance settings."),(0,l.kt)("h2",{id:"balance-settings-parameters"},"Balance settings parameters"),(0,l.kt)("h3",{id:"trading-limit"},"Trading Limit"),(0,l.kt)(i.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Order types",value:"order-types"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,l.kt)("p",null,"This value defines the trading limit for each buy order. Make sure to always set this higher than ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_BUY")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_SELL"),"."),(0,l.kt)("p",null,"When you set this to 0.1 and trade BTC-x pairs, Gunbot will place a buy order worth 0.1 BTC each time it buys."),(0,l.kt)("p",null,"When trading a fiat pair like USD-x, set a whole number like 100 as trading limit."),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"futures: enter the desired number of contracts."))),(0,l.kt)("br",null)),(0,l.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Values:")," numerical \u2013 represents an amount in base currency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default value:")," 0.002")),(0,l.kt)(o.Z,{value:"order-types",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Affects"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Does not affect"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy buy"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy sell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buyback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT sell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Close")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"DCA buy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stop limit"))))),(0,l.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,l.kt)("p",null,"Parameter name in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"TRADING_LIMIT")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trading-limit-percentage"},"Trading Limit Percentage"),(0,l.kt)(i.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Order types",value:"order-types"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,l.kt)("p",null,"Alternative method for setting the investment per buy order as a percentage of the available base currency at the time the trade takes place."),(0,l.kt)("p",null,"Any value above 0 makes Gunbot ignore ",(0,l.kt)("inlineCode",{parentName:"p"},"TRADING_LIMIT")," and uses the set percentage instead. For example: when set to 10, trading BTC-ALT and you have 1 BTC available at the time Gunbot places a buy order, an order of 0.1 BTC is placed."),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This parameter is irrelevant for futures trading."))),(0,l.kt)("br",null)),(0,l.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Values:")," numerical \u2013 represent a percentage of available base currency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default value:")," 0")),(0,l.kt)(o.Z,{value:"order-types",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Affects"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Does not affect"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy buy"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy sell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buyback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT sell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Close")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"DCA buy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stop limit"))))),(0,l.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,l.kt)("p",null,"Parameter name in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"TL_PERC")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trading-limit-all-in"},"Trading Limit All-In"),(0,l.kt)(i.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Order types",value:"order-types"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,l.kt)("p",null,"Alternative method for setting the investment per buy order to use all available base currency at the time the trade takes place.")),(0,l.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Values:")," true or false"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default value:")," false")),(0,l.kt)(o.Z,{value:"order-types",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Affects"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Does not affect"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy buy"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy sell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buyback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT sell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Close")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"DCA buy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stop limit"))))),(0,l.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,l.kt)("p",null,"Parameter name in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"TL_ALLIN")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"keep-quote"},"Keep Quote"),(0,l.kt)(i.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Order types",value:"order-types"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,l.kt)("p",null,"Sets an amount of quote currency that will not be sold. For a BTC-ALT pair, a set amount of ALT will not be sold."),(0,l.kt)("p",null,"For example: when ",(0,l.kt)("inlineCode",{parentName:"p"},"KEEP_QUOTE")," is set to 10 for trading BTC-BNB, then Gunbot will leave 10 BNB in your account when placing a sell order, any balance above 10 will get sold as long as it is worth more than ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_SELL"),"."),(0,l.kt)("p",null,"To make sure trading continues after a sell order where an amount of quote is kept, make sure to set ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_SELL")," at least higher than the assumed value of the kept quote (expressed in base currency). "),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This parameter is irrelevant for futures trading."))),(0,l.kt)("br",null)),(0,l.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Values:")," numerical - represents an amount in quote currency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default value:")," 0")),(0,l.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,l.kt)("p",null,"Parameter name in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"KEEP_QUOTE")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"funds-reserve"},"Funds Reserve"),(0,l.kt)(i.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Order types",value:"order-types"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,l.kt)("p",null,"Sets an amount of base currency that will not be traded. For a BTC-x pair, funds in BTC would be reserved according to this setting. For ETH- pairs ETH would be reserved, etc. It is recommended to use the same value for all pairs of the same base currency you run."),(0,l.kt)("p",null,"For example: when funds reserve is set to 0.5 for trading BTC-x pairs then 0.5 BTC will not be used by Gunbot."),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This parameter is irrelevant for futures trading."))),(0,l.kt)("br",null)),(0,l.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Values:")," numerical \u2013 represents an amount in base currency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default value:")," 0.0001")),(0,l.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,l.kt)("p",null,"Parameter name in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"FUNDS_RESERVE")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"min-volume-to-buy"},"Min Volume To Buy"),(0,l.kt)(i.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Order types",value:"order-types"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,l.kt)("p",null,"Sets a threshold for buy orders. Prevents orders below the exchange minimum trade size from being placed."),(0,l.kt)("p",null,"Set this at least to the minimum trade size of your exchange."),(0,l.kt)("p",null,"When trading a fiat pair like USD-x, set a whole number like 10 as ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_BUY"),"."),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This parameter is irrelevant for trading at Bitmex."))),(0,l.kt)("br",null)),(0,l.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Values:")," numerical, represents volume in base currency"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default value:")," 0.001")),(0,l.kt)(o.Z,{value:"order-types",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Affects"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Does not affect"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy buy"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy sell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DCA buy"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT sell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buy"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buyback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buyback"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Close")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stop limit"))))),(0,l.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,l.kt)("p",null,"Parameter name in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_BUY")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"min-volume-to-sell"},"Min Volume To Sell"),(0,l.kt)(i.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Order types",value:"order-types"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,l.kt)("p",null,"Sets a threshold for sell orders lower than the exchange minimum trade size."),(0,l.kt)("p",null,"If you own less than the set amount, sell orders will not be placed and Gunbot goes into buying mode. Set this at least to the minimum trade size of your exchange."),(0,l.kt)("p",null,"When trading a fiat pair like USDT-x, set a whole number like 10 as ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_SELL"),"."),(0,l.kt)("p",null,"When you hold 0.006 (in base currency) of a coin and have set ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_SELL")," to 0.01, Gunbot will not try to sell your current 0.006 balance because it is below the set threshold of 0.01, instead it will place another buy order first as soon as buying are met."),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This parameter is irrelevant for trading at Bitmex."))),(0,l.kt)("br",null)),(0,l.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Values:")," numerical, represents volume in base currency"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default value:")," 0.001")),(0,l.kt)(o.Z,{value:"order-types",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Affects"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Does not affect"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy sell"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Strategy buy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Stop limit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"RT sell"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RT buyback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Close")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"DCA buy"))))),(0,l.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,l.kt)("p",null,"Parameter name in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN_VOLUME_TO_SELL")))),(0,l.kt)("hr",null))}c.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);