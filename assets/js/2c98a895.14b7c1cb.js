"use strict";(self.webpackChunkgunbot_docs=self.webpackChunkgunbot_docs||[]).push([[9142],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(n),g=r,h=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return n?a.createElement(h,l(l({ref:e},d),{},{components:n})):a.createElement(h,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},1395:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(7294),r=n(944),i=n(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var d=function(t){var e=t.lazy,n=t.block,d=t.defaultValue,c=t.values,p=t.groupId,g=t.className,h=(0,r.Z)(),m=h.tabGroupChoices,k=h.setTabGroupChoices,f=(0,a.useState)(d),b=f[0],v=f[1],y=a.Children.toArray(t.children),w=[];if(null!=p){var N=m[p];null!=N&&N!==b&&c.some((function(t){return t.value===N}))&&v(N)}var T=function(t){var e=t.currentTarget,n=w.indexOf(e),a=c[n].value;v(a),null!=p&&(k(p,a),setTimeout((function(){var t,n,a,r,i,l,s,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,i=t.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=s&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},x=function(t){var e,n;switch(t.keyCode){case u:var a=w.indexOf(t.target)+1;n=w[a]||w[0];break;case s:var r=w.indexOf(t.target)-1;n=w[r]||w[w.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},g)},c.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:x,onFocus:T,onClick:T},n)}))),e?(0,a.cloneElement)(y.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},944:function(t,e,n){var a=n(7294),r=n(9443);e.Z=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},6760:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=(n(1395),n(8215),["components"]),o={id:"spotgrid",title:"spotgrid"},s={unversionedId:"trading-strategy-options/spot/spotgrid",id:"trading-strategy-options/spot/spotgrid",isDocsHomePage:!1,title:"spotgrid",description:"A grid like strategy with dynamic trading targets and integrated trailing for both buying and selling.",source:"@site/docs/trading-strategy-options/spot/spotgrid.md",sourceDirName:"trading-strategy-options/spot",slug:"/trading-strategy-options/spot/spotgrid",permalink:"/trading-strategy-options/spot/spotgrid",version:"current",frontMatter:{id:"spotgrid",title:"spotgrid"},sidebar:"tutorialSidebar",previous:{title:"spotgridadvanced",permalink:"/trading-strategy-options/spot/spotgridadvanced"},next:{title:"stepgain",permalink:"/trading-strategy-options/spot/stepgain"}},u=[{value:"Trading behavior",id:"trading-behavior",children:[]},{value:"How to create a spotgrid strategy",id:"how-to-create-a-spotgrid-strategy",children:[]},{value:"Essential settings",id:"essential-settings",children:[]},{value:"Additional settings",id:"additional-settings",children:[]}],d={toc:u};function c(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A grid like strategy with dynamic trading targets and integrated trailing for both buying and selling."),(0,i.kt)("p",null,"The idea of this strategy is to always be in a position, use market orders only, average down when prices goes down, take profit when price exceeds break even. And do so with an absolute minimum number of settings."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'This strategy is a bit different than all other Gunbot strategies: there are just a handful configurable options and it\'s "always in position": instead of waiting for the perfect entry it is always looking for chances to average down.  '),(0,i.kt)("p",{parentName:"div"},"If you want to customize settings a lot, this strategy is not for you."))),(0,i.kt)("h2",{id:"trading-behavior"},"Trading behavior"),(0,i.kt)("p",null,"When you run spotgrid on a pair in an uptrend, this is the kind of trading behavior to expect:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Typical spotgrid trades. Green arrows are buys, orange arrows are sells.",src:n(9781).Z})),(0,i.kt)("p",null,"Let's break down what actually happens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the strategy first runs and there is no balance to sell, it immediately places a market buy order"),(0,i.kt)("li",{parentName:"ul"},"If price goes down and it exceeds the spotgrid line in the chart, buy trailing is activated. As soon as trailing finishes, a buy order is placed. The break even price is now lower."),(0,i.kt)("li",{parentName:"ul"},"If price reaches the Sell target on the chart, sell trailing is activated and the complete position is sold at profit when trailing finishes."),(0,i.kt)("li",{parentName:"ul"},"After having sold, the strategy immediately starts buy trailing. If price goes up it will quickly open a new position, if price goes down it will place a buy order below the last sell rate.")),(0,i.kt)("p",null,"You will see that the first few buy orders happen fairly quickly when price starts going down. After a few trades, the price distance between buy orders gets much bigger. All targets are set automatically."),(0,i.kt)("p",null,"When the market goes down, the strategy starts to accumulate units at ever lower prices:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Slowly accumulating with same sized orders",src:n(1).Z})),(0,i.kt)("p",null,"The bot will continue to accumulate until max buy count is hit, or when it run out of available funds. Every new buy order will lower the break even price. As soon as price hits the sell target and finishes trailing above break even, a sell order is placed."),(0,i.kt)("p",null,"Balance management is very important, make sure you can afford the planned number of buy orders."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The next trading targets are always visible on the chart. "),(0,i.kt)("p",{parentName:"div"},"Keep in mind the targets lines are moving over time, they represent the current targets."))),(0,i.kt)("h2",{id:"how-to-create-a-spotgrid-strategy"},"How to create a spotgrid strategy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the advanced strategy editor: create a new strategy and select spotgrid as buy and sell method"),(0,i.kt)("li",{parentName:"ul"},"Using Easy Edit: create a new strategy and select spotgrid as buy method")),(0,i.kt)("h2",{id:"essential-settings"},"Essential settings"),(0,i.kt)("p",null,"To use spotgrid, there are just three essential settings:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Setting"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Trading limit                           ")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"The amount to invest per buy order.")),(0,i.kt)("p",null),(0,i.kt)("p",null,"On an USDT-BTC pair, a trading limit of 20 means that every buy order is for 20 USDT. Always make sure that trading limit is set higher than min volume to sell."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Max buy count")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"Limits how many buy orders are allowed.")),(0,i.kt)("p",null),(0,i.kt)("p",null,"Setting a max buy count of 10 means that the bot may do up to 10 buy orders in a row, to average down in ever increasing price distance."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Min volume to sell")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"To ignore tiny balances. ")),(0,i.kt)("p",null),(0,i.kt)("p",null,"Set this to the minimum order size of the pair, to make the bot ignore small balances that cannot be sold."))))),(0,i.kt)("p",null,"There are a few more settings that can optionally be used with this strategy, described below"),(0,i.kt)("h2",{id:"additional-settings"},"Additional settings"),(0,i.kt)("p",null,"There are a few additional settings you can use with this strategy."),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Setting"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Stop after next sell                              ")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"To stop trading a pair after the position closes")),(0,i.kt)("p",null),(0,i.kt)("p",null,"When enabled, no buy orders are placed when there is no balance left to sell."),(0,i.kt)("p",null,"Averaging down of the current position continues."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Auto gain ")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"Activates dynamic sell target ")),(0,i.kt)("p",null),(0,i.kt)("p",null,"Enabled by default. The dynamic target is based on the distance between support and resistance, capped at a minimum profit of 2x trading fees. The target decreases when position size increases. Overrules a manually set target."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Gain")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"Manual sell target value")),(0,i.kt)("p",null),(0,i.kt)("p",null,"Set a manual sell target, as a percentage above the break even price. The sell target is where trailing starts. With 0.5 as value, the sell target is 0.5% above break even."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Grid multiplier")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"Controls the distances between buy orders ")),(0,i.kt)("p",null),(0,i.kt)("p",null,"Can be used to increase or decrease the distance between buy orders."),(0,i.kt)("p",null),(0,i.kt)("p",null,"The default value 1 means that the hardcoded levels are used."),(0,i.kt)("p",null,"1.5 would increase the levels with a factor 1.5x, a value of 0.5 would halve the default levels."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Period")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"Sets the chart interval")),(0,i.kt)("p",null),(0,i.kt)("p",null,"The default period is 15. Make sure to only use ",(0,i.kt)("a",{href:"/how-to-work-with-gunbot/learning-the-basics/period"},"supported period values.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"SMA period")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"How many candles are used for calculating support and resistance levels ")),(0,i.kt)("p",null),(0,i.kt)("p",null,"By default 50 candles are used to calculate support and resistance."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Keep quote")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("b",null,"Keep a number of units when selling ")),(0,i.kt)("p",null),(0,i.kt)("p",null,"By setting keep quote at any number above 0, this number of units will be held back when the next sell order happens."))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Other parameters")),(0,i.kt)("p",{parentName:"div"}," Buy and Sell enabled options can be set as pair overrides. Watch mode is respected."),(0,i.kt)("p",{parentName:"div"},"Besides settings mentioned on this page, no other strategy setting has any effect on spotgrid."))),(0,i.kt)("h3",{id:""}))}c.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})},9781:function(t,e,n){e.Z=n.p+"assets/images/spot-spotgrid-1-ea6e45a40729bdda0e0fdc51094ada2e.png"},1:function(t,e,n){e.Z=n.p+"assets/images/spot-spotgrid-2-966c54e817af974d456cbf9f9d6377b8.png"}}]);