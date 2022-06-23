"use strict";(self.webpackChunkgunbot_docs=self.webpackChunkgunbot_docs||[]).push([[3365],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=u(n),h=r,k=p["".concat(o,".").concat(h)]||p[h]||c[h]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},1395:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(7294),r=n(944),l=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var o=37,u=39;var d=function(t){var e=t.lazy,n=t.block,d=t.defaultValue,c=t.values,p=t.groupId,h=t.className,k=(0,r.Z)(),g=k.tabGroupChoices,m=k.setTabGroupChoices,f=(0,a.useState)(d),b=f[0],v=f[1],y=a.Children.toArray(t.children),w=[];if(null!=p){var N=g[p];null!=N&&N!==b&&c.some((function(t){return t.value===N}))&&v(N)}var T=function(t){var e=t.currentTarget,n=w.indexOf(e),a=c[n].value;v(a),null!=p&&(m(p,a),setTimeout((function(){var t,n,a,r,l,i,o,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,l=t.right,i=window,o=i.innerHeight,u=i.innerWidth,n>=0&&l<=u&&r<=o&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},x=function(t){var e,n;switch(t.keyCode){case u:var a=w.indexOf(t.target)+1;n=w[a]||w[0];break;case o:var r=w.indexOf(t.target)-1;n=w[r]||w[w.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},h)},c.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:x,onFocus:T,onClick:T},n)}))),e?(0,a.cloneElement)(y.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},944:function(t,e,n){var a=n(7294),r=n(9443);e.Z=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},8519:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=(n(1395),n(8215),["components"]),s={id:"futuresgrid",title:"futuresgrid"},o={unversionedId:"trading-strategy-options/futures/futuresgrid",id:"trading-strategy-options/futures/futuresgrid",isDocsHomePage:!1,title:"futuresgrid",description:"A grid like strategy with dynamic trading targets and integrated trailing for both buying and selling.",source:"@site/docs/trading-strategy-options/futures/futures-grid.md",sourceDirName:"trading-strategy-options/futures",slug:"/trading-strategy-options/futures/futuresgrid",permalink:"/trading-strategy-options/futures/futuresgrid",version:"current",frontMatter:{id:"futuresgrid",title:"futuresgrid"},sidebar:"tutorialSidebar",previous:{title:"emaspread",permalink:"/trading-strategy-options/futures/emaspread"},next:{title:"gain",permalink:"/trading-strategy-options/futures/gain"}},u=[{value:"Trading behavior",id:"trading-behavior",children:[]},{value:"How to create a futuresgrid strategy",id:"how-to-create-a-futuresgrid-strategy",children:[]},{value:"Essential settings",id:"essential-settings",children:[]},{value:"Additional settings",id:"additional-settings",children:[]}],d={toc:u};function c(t){var e=t.components,s=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A grid like strategy with dynamic trading targets and integrated trailing for both buying and selling."),(0,l.kt)("p",null,"The idea of this strategy is to always be in a position, use market orders only, average down when prices goes down, take profit when price exceeds break even. And do so with an absolute minimum ****number of settings."),(0,l.kt)("p",null,'This strategy is basically the same as "spotgrid", it\'s just made for futures and additionally offers the option to trade shorts.'),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'This strategy is a bit different than all other Gunbot strategies: there are just a handful configurable options and it\'s "always in position": instead of waiting for the perfect entry it is always looking for chances to average down.  '),(0,l.kt)("p",{parentName:"div"},"If you want to customize settings a lot, this strategy is not for you."))),(0,l.kt)("h2",{id:"trading-behavior"},"Trading behavior"),(0,l.kt)("p",null,"When you run futuresgrid on a pair in an uptrend, this is the kind of trading behavior to expect:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Typical futuresgrid trades. Green arrows are buys, orange arrows are sells.",src:n(8004).Z})),(0,l.kt)("p",null,"Let's break down what actually happens:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When the strategy first runs and there is no balance to sell, it immediately places a market buy order"),(0,l.kt)("li",{parentName:"ul"},"If price goes down and it exceeds the futuresgrid line in the chart, buy trailing is activated. As soon as trailing finishes, a buy order is placed. The break even price is now lower."),(0,l.kt)("li",{parentName:"ul"},"If price reaches the Sell target on the chart, sell trailing is activated and the complete position is sold at profit when trailing finishes."),(0,l.kt)("li",{parentName:"ul"},"After having sold, the strategy immediately starts buy trailing. If price goes up it will quickly open a new position, if price goes down it will place a buy order below the last sell rate.")),(0,l.kt)("p",null,"You will see that the first few buy orders happen fairly quickly when price starts going down. After a few trades, the price distance between buy orders gets much bigger. All targets are set automatically."),(0,l.kt)("p",null,"When the market goes down, the strategy starts to accumulate units at ever lower prices:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Slowly accumulating with same sized orders",src:n(9207).Z})),(0,l.kt)("p",null,"The bot will continue to accumulate until max buy count is hit, or when it run out of available funds. Every new buy order will lower the break even price. As soon as price hits the sell target and finishes trailing above break even, a sell order is placed."),(0,l.kt)("p",null,"Balance management is very important, make sure you can afford the planned number of buy orders."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The next trading targets are always visible on the chart. "),(0,l.kt)("p",{parentName:"div"},"Keep in mind the targets lines are moving over time, they represent the current targets."))),(0,l.kt)("h2",{id:"how-to-create-a-futuresgrid-strategy"},"How to create a futuresgrid strategy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using the advanced strategy editor: create a new strategy and select futuresgrid as buy and sell method")),(0,l.kt)("h2",{id:"essential-settings"},"Essential settings"),(0,l.kt)("p",null,"To use futuresgrid, there are just three essential settings:"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Setting"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Trading limit                           ")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"The amount to invest per buy order")),(0,l.kt)("p",null),(0,l.kt)("p",null,"On an USDT-BTC pair, a trading limit of 20 means that every buy order is for 20 USDT. Always make sure that trading limit is set higher than min volume to sell."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Max buy count")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Limits how many buy orders are allowed")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Setting a max buy count of 10 means that the bot may do up to 10 buy orders in a row, to average down in ever increasing price distance."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Max open contracts                      ")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Limits position size")),(0,l.kt)("p",null,(0,l.kt)("br",null),"On an USDT-BTC pair, setting max open contracts to 0.1 means that no buy order gets fired if it would result in the total position exceeding 0.1 BTC."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Direction")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Sets the direction to trade")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Pick either ",(0,l.kt)("code",null,"LONG"),", ",(0,l.kt)("code",null,"SHORT "),"or ",(0,l.kt)("code",null,"AUTO")),(0,l.kt)("p",null),(0,l.kt)("p",null,"The AUTO mode uses a non configurable trend detection that uses EMA, OBV and ATR data from both 15m and 4h charts, and only opens a long or short if confirmed by the trend definitions."),(0,l.kt)("p",null),(0,l.kt)("p",null,"If in a position already and trend changes, the strategy will first attempt to close at profit before opening a position in the opposite direction."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Trend variant")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Trend source to use when direction is set to 'AUTO'. ")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Legacy mode uses the strategy timeframe, plus 1h and 4h data."),(0,l.kt)("p",null),(0,l.kt)("p",null,"4h uses the same trend module as in stepgridhedge, using 4h data only."),(0,l.kt)("p",null),(0,l.kt)("p",null,"1h_15m uses the same trend module as in stepgridhedge, using data from 1h and 15m charts."))))),(0,l.kt)("p",null,"There are a few more settings that can optionally be used with this strategy, described below"),(0,l.kt)("h2",{id:"additional-settings"},"Additional settings"),(0,l.kt)("p",null,"There are a few additional settings you can use with this strategy."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Setting"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Stop after next sell                              ")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"To stop trading a pair after the position closes")),(0,l.kt)("p",null),(0,l.kt)("p",null,"When enabled, no new position gets opened."),(0,l.kt)("p",null,"Averaging down of the current position continues."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Auto gain ")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Activates dynamic sell target ")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Enabled by default. The dynamic target is based on the distance between support and resistance, capped at a minimum profit of 2x trading fees. The target decreases when position size increases. Overrules a manually set target."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Gain")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Manual sell target value")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Set a manual sell target, as a percentage above the break even price. The sell target is where trailing starts. With 0.5 as value, the sell target is 0.5% above break even."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Grid multiplier")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Controls the distances between buy orders ")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Can be used to increase or decrease the distance between buy orders."),(0,l.kt)("p",null),(0,l.kt)("p",null,"The default value 1 means that the hardcoded levels are used."),(0,l.kt)("p",null,"1.5 would increase the levels with a factor 1.5x, a value of 0.5 would halve the default levels."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Trading limit multiplier")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Can be used to increase or decrease the invested amount with each consecutive buy order. Examples with trading limit 100 USDT and max buy count 3:"),(0,l.kt)("p",null),(0,l.kt)("p",null,"1: each buy order is for 100 USDT"),(0,l.kt)("p",null,"1.5: first buy 100, second buy 150, third buy 225"),(0,l.kt)("p",null,"2: first buy 100, second buy 200, third buy 400"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Period")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Sets the chart interval")),(0,l.kt)("p",null),(0,l.kt)("p",null,"The default period is 15. Make sure to only use ",(0,l.kt)("a",{href:"/how-to-work-with-gunbot/learning-the-basics/period"},"supported period values.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"SMA period")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"How many candles are used for calculating support and resistance levels ")),(0,l.kt)("p",null),(0,l.kt)("p",null,"By default 50 candles are used to calculate support and resistance."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"First order delay")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Additional delay after opening a new trade. Does not apply to DCA orders. Value in seconds.")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Can be used to prevent multiple orders in case the exchange does not update balances fast enough."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Minimum buydown")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Minimum distance between two orders")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Set a minimum distance between two orders that add to a position. Value represents a percentage."),(0,l.kt)("p",null),(0,l.kt)("p",null,"This acts as an override to the built-in buydown levels that increase with each additional dca order."),(0,l.kt)("p",null),(0,l.kt)("p",null,"When set to 0.6, this means that the minimum distance is 0.6%."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Keep 1x TL")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("b",null,"Save fees on first trade")),(0,l.kt)("p",null),(0,l.kt)("p",null,"Instead of reopening a position shortly after closing one, with this setting enabled the bot will keep 1x trading limit open when (partially) closing a position."))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Other parameters")),(0,l.kt)("p",{parentName:"div"}," Buy and Sell enabled options can be set as pair overrides. Watch mode is respected."),(0,l.kt)("p",{parentName:"div"},"Besides settings mentioned on this page, no other strategy setting has any effect on futuresgrid."))))}c.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})},8004:function(t,e,n){e.Z=n.p+"assets/images/futures-fg-1-ea6e45a40729bdda0e0fdc51094ada2e.png"},9207:function(t,e,n){e.Z=n.p+"assets/images/futures-fg-2-966c54e817af974d456cbf9f9d6377b8.png"}}]);