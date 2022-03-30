"use strict";(self.webpackChunkgunbot_docs=self.webpackChunkgunbot_docs||[]).push([[1664],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1455:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],s={id:"create-wallet",title:"How to create a wallet"},i={unversionedId:"about/system-requirements/create-wallet",id:"about/system-requirements/create-wallet",isDocsHomePage:!1,title:"How to create a wallet",description:"To create a GUNTHY wallet, you must add a custom token to an Ethereum wallet and enter this contract address: 0x3684b581db1f94b721ee0022624329feb16ab653.",source:"@site/docs/about/system-requirements/how-to-create-a-wallet.md",sourceDirName:"about/system-requirements",slug:"/about/system-requirements/create-wallet",permalink:"/about/system-requirements/create-wallet",version:"current",frontMatter:{id:"create-wallet",title:"How to create a wallet"},sidebar:"tutorialSidebar",previous:{title:"License info & system specs",permalink:"/about/system-requirements/license-info"},next:{title:"Download",permalink:"/setup-and-general-settings/installation-and-startup/download"}},p=[{value:"MyEtherWallet",id:"myetherwallet",children:[]},{value:"Metamask",id:"metamask",children:[]},{value:"MyCrypto",id:"mycrypto",children:[]}],c={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To create a GUNTHY wallet, you must add a custom token to an Ethereum wallet and enter this contract address: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x3684b581db1f94b721ee0022624329feb16ab653"),"."),(0,o.kt)("p",null,"It's possible to use an ERC-20 compatible wallet without adding the contract address, but then you usually won't be able to see the tokens in your wallet software."),(0,o.kt)("p",null,"Below you'll find short descriptions on how to do that with a few of the most used Ethereum wallet clients."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you already have an Ethereum wallet, only the steps for adding a custom contract apply.")),(0,o.kt)("p",null,":::alert\nDo not use an exchange wallet."),(0,o.kt)("p",null,"Gunbot won't run when you have your tokens stored on an exchange.\n:::"),(0,o.kt)("h2",{id:"myetherwallet"},"MyEtherWallet"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Link ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://www.myetherwallet.com/"},"https://www.myetherwallet.com/")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: create a wallet")),(0,o.kt)("p",null,"Create a new wallet and follow all the security advice given."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1892).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: copy address")),(0,o.kt)("p",null,"Go to the account details page to view and copy your wallet address."),(0,o.kt)("h2",{id:"metamask"},"Metamask"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Link")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"https://metamask.io/")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: install browser add-on and create a wallet")),(0,o.kt)("p",null,"Follow the steps shown to be able to use Metamask. Create a new wallet and follow all the security advice given."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5721).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: add custom token")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Add Token")," to add a new token."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2253).Z})),(0,o.kt)("p",null,"Enter the GUNTHY token contract address and confirm."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3220).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: copy address")),(0,o.kt)("p",null,"Copy the account address shown on top left side of the page. Use this address in Gunbot."),(0,o.kt)("h2",{id:"mycrypto"},"MyCrypto"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Link")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://mycrypto.com/"},"https://mycrypto.com/")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: create a wallet")),(0,o.kt)("p",null,"Follow the wizard and all the security advice given."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3040).Z})),(0,o.kt)("p",null,"Create a new wallet and follow all the security advice given."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3394).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: add custom token")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("strong",{parentName:"p"},"View & Send")," and then to ",(0,o.kt)("strong",{parentName:"p"},"Token Balances")," to add a custom token."),(0,o.kt)("p",null,"Enter the GUNTHY token contract address and confirm it."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6448).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: copy address")),(0,o.kt)("p",null,"Copy the account address shown on top of the page. Use this address in Gunbot."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8438).Z})))}m.isMDXComponent=!0},5721:function(e,t,a){t.Z=a.p+"assets/images/metamask-1-499a2605c9a968e0d8ce49aabf6cf3ec.png"},2253:function(e,t,a){t.Z=a.p+"assets/images/metamask-2-8fe3686d8725b01cc65a326f689a0bae.png"},3220:function(e,t,a){t.Z=a.p+"assets/images/metamask-3-98905f79b1f9dfcf7f9e7ca3d7a91d39.png"},1892:function(e,t,a){t.Z=a.p+"assets/images/mew-1-4efb6ea7f59ca39f30ceea9cdc1a8de7.png"},3040:function(e,t,a){t.Z=a.p+"assets/images/mycrypto-1-76beba3700d2dcb174da4b09f1cc5fc4.png"},3394:function(e,t,a){t.Z=a.p+"assets/images/mycrypto-2-0eb5205f1faf2ec50e4141b4ee2b09dd.png"},6448:function(e,t,a){t.Z=a.p+"assets/images/mycrypto-3-fff1e1218a46ccebb71836e9f065ee2b.png"},8438:function(e,t,a){t.Z=a.p+"assets/images/mycrypto-4-1d517001909120e64d5996352b4ae590.png"}}]);