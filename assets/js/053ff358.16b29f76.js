"use strict";(self.webpackChunkgunbot_docs=self.webpackChunkgunbot_docs||[]).push([[4725],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(944),i=n(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,p=e.groupId,f=e.className,m=(0,a.Z)(),g=m.tabGroupChoices,v=m.setTabGroupChoices,b=(0,r.useState)(c),y=b[0],h=b[1],k=r.Children.toArray(e.children),O=[];if(null!=p){var w=g[p];null!=w&&w!==y&&d.some((function(e){return e.value===w}))&&h(w)}var T=function(e){var t=e.currentTarget,n=O.indexOf(t),r=d[n].value;h(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,i,l,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case s:var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(1395),o=n(8215),s=["components"],u={id:"advanced",title:"Advanced",sidebar_position:5},c={unversionedId:"setup-and-general-settings/global-settings/advanced",id:"setup-and-general-settings/global-settings/advanced",isDocsHomePage:!1,title:"Advanced",description:"Advanced settings are global, they affect all trading pairs.",source:"@site/docs/setup-and-general-settings/global-settings/advanced.md",sourceDirName:"setup-and-general-settings/global-settings",slug:"/setup-and-general-settings/global-settings/advanced",permalink:"/setup-and-general-settings/global-settings/advanced",version:"current",sidebarPosition:5,frontMatter:{id:"advanced",title:"Advanced",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cancel orders",permalink:"/setup-and-general-settings/global-settings/cancel-orders"},next:{title:"What are profile settings",permalink:"/setup-and-general-settings/profile-settings/what-are-profile-settings"}},d=[{value:"Settings descriptions",id:"settings-descriptions",children:[{value:"Debug",id:"debug",children:[]},{value:"Verbose",id:"verbose",children:[]}]}],p={toc:d};function f(e){var t=e.components,u=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Advanced settings are global, they affect all trading pairs."),(0,i.kt)("p",null,"To change them, go to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5000/globalsettings"},(0,i.kt)("strong",{parentName:"a"},"Global settings"))," > ",(0,i.kt)("strong",{parentName:"p"},"Advanced")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8864).Z})),(0,i.kt)("h2",{id:"settings-descriptions"},"Settings descriptions"),(0,i.kt)("p",null,"Below you'll find detailed descriptions for the settings on this page."),(0,i.kt)("h3",{id:"debug"},"Debug"),(0,i.kt)(l.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,i.kt)("p",null,"Used to show debug messages in the bot, when set to true. Only use this if you really need to debug something.")),(0,i.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Values:")," true or false"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default value:")," false")),(0,i.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,i.kt)("p",null,"Parameter name in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbose"},"Verbose"),(0,i.kt)(l.Z,{defaultValue:"description",values:[{label:"Description",value:"description"},{label:"Values",value:"values"},{label:"Name",value:"name"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"description",mdxType:"TabItem"},(0,i.kt)("p",null,"Setting this to true will lead to more detailed information being shown in the console.")),(0,i.kt)(o.Z,{value:"values",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Values:")," true or false"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default value:")," false")),(0,i.kt)(o.Z,{value:"name",mdxType:"TabItem"},(0,i.kt)("p",null,"Parameter name in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.js"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"VERBOSE")))),(0,i.kt)("hr",null))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},8864:function(e,t,n){t.Z=n.p+"assets/images/advanced-1b35082fc624dcb0239499f548041f7a.png"}}]);