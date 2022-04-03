"use strict";(self.webpackChunksibe_docs=self.webpackChunksibe_docs||[]).push([[457],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3050:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,p={unversionedId:"Developers/Tokenomics",id:"Developers/Tokenomics",title:"Tokenomics",description:"Sibe token",source:"@site/docs/6_Developers/1_Tokenomics.md",sourceDirName:"6_Developers",slug:"/Developers/Tokenomics",permalink:"/sibe-docs/Developers/Tokenomics",editUrl:"https://github.com/sibe-finance/docs/6_Developers/1_Tokenomics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Developers",permalink:"/sibe-docs/Developers/"},next:{title:"Delegation strategy",permalink:"/sibe-docs/Developers/Delegation strategy"}},u=[{value:"Sibe token",id:"sibe-token",children:[],level:2},{value:"Staking pool",id:"staking-pool",children:[{value:"Step by step",id:"step-by-step",children:[],level:4}],level:2},{value:"AMM Order pool",id:"amm-order-pool",children:[{value:"Order matching",id:"order-matching",children:[],level:3},{value:"Pairs: SOL / SIBE",id:"pairs-sol--sibe",children:[],level:3}],level:2},{value:"Sibeswap V1",id:"sibeswap-v1",children:[],level:2},{value:"Sibe bot system",id:"sibe-bot-system",children:[],level:2},{value:"NFT",id:"nft",children:[],level:2},{value:"Finance tokenomic plan",id:"finance-tokenomic-plan",children:[{value:"Example:",id:"example",children:[],level:4}],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"sibe-token"},"Sibe token"),(0,i.kt)("p",null,"Sibe is a wrapped SOL spl token, which gives any person the ability to own the amount of spl token Sibe equivalent to the price. It\u2019s price can be calculated with the next formula:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"SIBE price = total staked / tokens minted"))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagram",src:n(2929).Z,width:"1076",height:"760"})),(0,i.kt)("h2",{id:"staking-pool"},"Staking pool"),(0,i.kt)("p",null,"Staking pool is a deposit back that exchanges stake ",(0,i.kt)("a",{parentName:"p",href:"/FAQ/Glossary#liquidity"},"liquidity")," amount of SOL for rewards to all owners by percent."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sibe protocol has an ongoing management fee of (~0.14% p.a.) to support further product development. It is automatically taken from your staking rewards and equal to 2% of your rewards."))),(0,i.kt)("h4",{id:"step-by-step"},"Step by step"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stake your SOl and receive Sibe")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create your stake account and add liquidity equal to SOL")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can create 2 orders:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"market order")," \u2014 unstake your liquidity straightaway and pay the fee(0,3-3%)"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"market fee = max fee - (max fee - min fee) * amount after / target")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"limit order")," \u2014 generate NFT order, that gives your stake rewards later"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Deposit fee"),(0,i.kt)("td",{parentName:"tr",align:null},"0%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Limit order"),(0,i.kt)("td",{parentName:"tr",align:null},"0%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LMarket order"),(0,i.kt)("td",{parentName:"tr",align:null},"0,3 \u2014 3%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Commission"),(0,i.kt)("td",{parentName:"tr",align:null},"2% on rewards (~0,14 on staked SOL)")))),(0,i.kt)("h2",{id:"amm-order-pool"},"AMM Order pool"),(0,i.kt)("p",null,"The main characteristics of the Sibe protocol Sibe/SOL ",(0,i.kt)("a",{parentName:"p",href:"/FAQ/Glossary#liquidity-pool"},"liquidity pool"),"  (as an internal  Sibe-SOL pool) are that it\u2019s unbalanced on purpose and operates more efficiently when 100% liquidity is filled with SOL from liquidity providers."),(0,i.kt)("p",null,"There is a possibility to receive rewards from every market order accept for providing SOL liquidity pool."),(0,i.kt)("h3",{id:"order-matching"},"Order matching"),(0,i.kt)("p",null,"Sibe protocol continuously regulates the liquidity pool to be 100% SOL, so all unnecessary operations are reduced and the liquidity pool reaches significant results on efficiency.\nThe process looks like this:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A")," "),(0,i.kt)("p",null,"As soon as the immediate unstake operation is complete, Sibe sent by the user unstaking and original SOL liquidity are included in the liquidity pool."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"B")," "),(0,i.kt)("p",null,"The Sibe is provided from the liquidity pool just as the call of another stake operation happens."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"F")),(0,i.kt)("p",null,"To complete the adjustment and full liquidity for immediate unstaking, user deposited SOL at no cost are used to refill the liquidity pool."),(0,i.kt)("h3",{id:"pairs-sol--sibe"},"Pairs: SOL / SIBE"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The pool has a linear swap fee decreasing until the target liquidity is reached to cover operation costs and incentivize liquidity providers. 75% of the fees go to liquidity providers and 25% to the SIBE treasury."))),(0,i.kt)("p",null,"Here are the 3 different situations that can happen when you use \u2018Delayed unstake\u2019 during epoch N."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"You start unstaking during Z"),", which is the very beginning of ",(0,i.kt)("a",{parentName:"p",href:"/FAQ/Glossary#epoch"},"epoch")," n (like a few minutes into epoch n).\nYou will receive your SOL at the beginning of epoch n+1. The amount of SOL you receive when the unstaking starts is computed as "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"SOL = SIBE to burn * SIBE price ")),(0,i.kt)("p",{parentName:"li"}," but SIBE price may not be updated as the SIBE protocol bot needs to be run to update the price at the beginning of each epoch. We suggest waiting a few hours into the epoch before using 'Delayed unstake' and starting it before the last 4 hours of the epoch.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"You start unstaking during A."),"\nYou will receive SOL at the beginning of epoch n+1. The amount computed when the unstaking starts is "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"SIBE to burn * SIBE price"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"You start unstaking during B"),", which is the last 4 hours of epoch n.\nYou will receive SOL at the beginning of epoch n+2. The amount computed when the unstaking starts is "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"SIBE to burn * SIBE price")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Current parameters are:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"max fee: 3%"),(0,i.kt)("li",{parentName:"ul"},"min fee: 0.3%"),(0,i.kt)("li",{parentName:"ul"},"liquidity target 100,000 SOL")),(0,i.kt)("h2",{id:"sibeswap-v1"},"Sibeswap V1"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Coming soon"))),(0,i.kt)("h2",{id:"sibe-bot-system"},"Sibe bot system"),(0,i.kt)("p",null,"The bot takes care of multiple operations, mainly updating SIBE price, delegation strategy, and matching staking with unstaking orders."),(0,i.kt)("h2",{id:"nft"},"NFT"),(0,i.kt)("p",null,"We will create a simple marketplace. At first, we are going to release only our collections, limit order snapshots and skins. Later there will be an ability to create and trade nft and also usage of nft along with DeFi will be integrated."),(0,i.kt)("h2",{id:"finance-tokenomic-plan"},"Finance tokenomic plan"),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Let's take a scenario where the parameters of the pool are close to the current situation: ",(0,i.kt)("br",null))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/FAQ/Glossary#unstake-liquidity"},"Unstake liquidity"),": 581,250 SOL ",(0,i.kt)("br",null),"\nAmount you want to unstake immediately: 90 SOL ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Calculated:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"581,250 - 90 = 581,140 ")),(0,i.kt)("p",null,"Is 581,140 above 'liquidity target'? ",(0,i.kt)("br",null),"\nYes, the fees are 0.3%. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"90 SOL - 0.3% = 89.73 SOL")),(0,i.kt)("p",null,"You receive 89.73 SOL after your transaction and you pay 0.27 SOL in fees for unstaking without delay. "),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Now, let's take a (fictive) scenario where the parameters of the pool are very different: ",(0,i.kt)("br",null))),(0,i.kt)("p",null,"Unstake liquidity: 100,030 SOL ",(0,i.kt)("br",null),"\nThe amount you want to unstake immediately: 9030 SOL ",(0,i.kt)("br",null),"\nYour fees would be calculated as such: "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"100,030 - 9030 = 91,000")),(0,i.kt)("p",null,"Is 91,000 above 'liquidity target'?\nNo. We calculate the fees with the following formula:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"market fee = max fee - (max fee - min fee) ",(0,i.kt)("em",{parentName:"p"}," amount after / target ",(0,i.kt)("br",null),"\nmarket fee = 3 - (3 - 0.3) ")," 91,000 / 100,000 ",(0,i.kt)("br",null),"\nmarket fee = 3 - 2.457 = 0.543 ",(0,i.kt)("br",null),"\n9030 - 0.543% = 8980.9671 SOL ",(0,i.kt)("br",null))))}d.isMDXComponent=!0},2929:function(e,t,n){t.Z=n.p+"assets/images/diagram-610ca2cf8a19c45640616c9d2a9cb844.svg"}}]);