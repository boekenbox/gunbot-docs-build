"use strict";(self.webpackChunkgunbot_docs=self.webpackChunkgunbot_docs||[]).push([[9870],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"trading-logic",title:"Trading logic",sidebar_position:1},s={unversionedId:"how-to-work-with-gunbot/learning-the-basics/trading-logic",id:"how-to-work-with-gunbot/learning-the-basics/trading-logic",isDocsHomePage:!1,title:"Trading logic",description:"Essential info about what to expect when working with Gunbot.",source:"@site/docs/how-to-work-with-gunbot/learning-the-basics/trading-logic.md",sourceDirName:"how-to-work-with-gunbot/learning-the-basics",slug:"/how-to-work-with-gunbot/learning-the-basics/trading-logic",permalink:"/how-to-work-with-gunbot/learning-the-basics/trading-logic",version:"current",sidebarPosition:1,frontMatter:{id:"trading-logic",title:"Trading logic",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tournament",permalink:"/setup-and-general-settings/profile-settings/tournament"},next:{title:"Balance settings",permalink:"/how-to-work-with-gunbot/learning-the-basics/balance-settings"}},u=[{value:"Gunbot does what you tell it to do",id:"gunbot-does-what-you-tell-it-to-do",children:[]},{value:"General principle: buy once, sell once",id:"general-principle-buy-once-sell-once",children:[]},{value:"Some settings have strategy specific behavior",id:"some-settings-have-strategy-specific-behavior",children:[]},{value:"Changing settings on a running trading pair",id:"changing-settings-on-a-running-trading-pair",children:[]},{value:"Manual trading",id:"manual-trading",children:[]}],c={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Essential info about what to expect when working with Gunbot."),(0,a.kt)("h2",{id:"gunbot-does-what-you-tell-it-to-do"},"Gunbot does what you tell it to do"),(0,a.kt)("p",null,"There is very little magic involved in this product, Gunbot tries to execute exactly the settings you feed it."),(0,a.kt)("p",null,"This means that you pick the trading pairs the bot should trade and assign a trading strategy to these pairs. Once you've done that, all it takes is starting the bot core to begin automatic trading."),(0,a.kt)("p",null,"A trading strategy can be very simple, based on one of many presets - or you can create one from scratch using more than 120 different settings options."),(0,a.kt)("h2",{id:"general-principle-buy-once-sell-once"},"General principle: buy once, sell once"),(0,a.kt)("p",null,"A strategy in Gunbot always consists of settings that control when it should buy, and when to sell."),(0,a.kt)("p",null,"Most strategies will buy one time once the buying criteria occur, then sell everything it bought as soon as selling conditions happen."),(0,a.kt)("p",null,"While true as a general principle, know that there are many exceptions to this - allowing for a whole lot of flexibility for traders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some strategies can buy multiple times in a row"),(0,a.kt)("li",{parentName:"ul"},"Some strategies can do partial sell orders"),(0,a.kt)("li",{parentName:"ul"},"Dollar Cost Avg (DCA) relies on buying at least twice"),(0,a.kt)("li",{parentName:"ul"},"Sell orders can sometimes be executed in multiple parts"),(0,a.kt)("li",{parentName:"ul"},"Sell orders can be configured to not sell all available funds"),(0,a.kt)("li",{parentName:"ul"},"Etc. This list is not meant as a complete overview of exceptions.")),(0,a.kt)("h2",{id:"some-settings-have-strategy-specific-behavior"},"Some settings have strategy specific behavior"),(0,a.kt)("p",null,"Although many settings have exactly the same name across different buy & sell methods, they can still behave slightly different."),(0,a.kt)("p",null,"For every strategy there is full documentation on what every parameter does, read the strategy documentation if you are unsure about something."),(0,a.kt)("h2",{id:"changing-settings-on-a-running-trading-pair"},"Changing settings on a running trading pair"),(0,a.kt)("p",null,"You can change settings anytime, they take effect as soon as you save them."),(0,a.kt)("p",null,"If a trading pair placed a buy order with strategy A, it's perfectly fine to change a setting in strategy A or assign a different strategy to this pair."),(0,a.kt)("h2",{id:"manual-trading"},"Manual trading"),(0,a.kt)("p",null,"It's generally not a problem at all if you trade manually on the same exchange account, or even the same pairs that Gunbot trades. Do make sure your settings for cancelling orders don't end up cancelling your manual orders though."),(0,a.kt)("p",null,"Gunbot will read from the trade history at the exchange and act accordingly. If you have multiple buy orders for a pair, it will work out the average bought price and use that as reference price for selling."),(0,a.kt)("p",null,"During Reversal Trading it is recommended to not manually trade the same pair."))}g.isMDXComponent=!0}}]);