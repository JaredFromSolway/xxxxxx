(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{61758:function(e,t,r){"use strict";r.d(t,{WJ:function(){return W},ug:function(){return y},Lf:function(){return S},XQ:function(){return H},P1:function(){return Z}});var n=r(84389),a=r(67294),s=r(54306),o=r(44718),l=r(50029),c=r(87794),i=r.n(c),d=r(14358),u=r(2224),m=(0,r(14671).Z)((function(e,t){return{balance:0,getUserSOLBalance:function(){var t=(0,l.Z)(i().mark((function t(r,n){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=0,t.prev=1,t.next=4,n.getBalance(r,"confirmed");case 4:a=t.sent,console.log("balance",a),a/=d.LAMPORTS_PER_SOL,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("error getting balance: ",t.t0);case 12:e((function(e){e.balance=a,console.log("balance updated, ",a)}));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,r){return t.apply(this,arguments)}}()}})),p=r(85893),x=function(){var e=(0,o.R)().connection,t=(0,s.O)().publicKey,r=m().getUserSOLBalance,n=(0,a.useCallback)((0,l.Z)(i().mark((function n(){var a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=4;break}return console.log("error","Wallet not connected!"),(0,u.h)({type:"error",message:"error",description:"Wallet not connected!"}),n.abrupt("return");case 4:return a="",n.prev=5,n.next=8,e.requestAirdrop(t,d.LAMPORTS_PER_SOL);case 8:return a=n.sent,n.next=11,e.confirmTransaction(a,"confirmed");case 11:(0,u.h)({type:"success",message:"Airdrop successful!",txid:a}),r(t,e),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(5),(0,u.h)({type:"error",message:"Airdrop failed!",description:null===n.t0||void 0===n.t0?void 0:n.t0.message,txid:a}),console.log("error","Airdrop failed! ".concat(null===n.t0||void 0===n.t0?void 0:n.t0.message),a);case 19:case"end":return n.stop()}}),n,null,[[5,15]])}))),[t,e,r]);return(0,p.jsx)("div",{children:(0,p.jsx)("button",{className:"px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",onClick:n,children:(0,p.jsx)("span",{children:"Airdrop 1 "})})})},f=r(8490),g=r(95827),h=r(48764).Buffer,b=function(){var e=(0,o.R)().connection,t=(0,s.O)(),r=t.publicKey,n=t.sendTransaction,c=(0,a.useState)(""),u=c[0],m=c[1],x=(0,a.useState)(""),b=x[0],y=x[1],v=(0,a.useState)(""),j=v[0],w=v[1],N=(0,a.useState)(""),k=N[0],F=N[1],S=(0,a.useState)(""),A=S[0],O=S[1],C=(0,a.useCallback)(function(){var t=(0,l.Z)(i().mark((function t(a){var s,o,l,c,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.Mg)(e);case 2:return s=t.sent,o=d.Keypair.generate(),t.next=6,(0,f.Am)(o.publicKey,r);case 6:return l=t.sent,c=(0,g.createCreateMetadataAccountV3Instruction)({metadata:d.PublicKey.findProgramAddressSync([h.from("metadata"),g.PROGRAM_ID.toBuffer(),o.publicKey.toBuffer()],g.PROGRAM_ID)[0],mint:o.publicKey,mintAuthority:r,payer:r,updateAuthority:r},{createMetadataAccountArgsV3:{data:{name:a.tokenName,symbol:a.symbol,uri:a.metadata,creators:null,sellerFeeBasisPoints:0,uses:null,collection:null},isMutable:!1,collectionDetails:null}}),u=(new d.Transaction).add(d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:o.publicKey,space:f.Bl,lamports:s,programId:f.H_}),(0,f.I0)(o.publicKey,a.decimals,r,r,f.H_),(0,f.Ek)(r,l,r,o.publicKey),(0,f.G7)(o.publicKey,l,r,a.amount*Math.pow(10,a.decimals)),c),t.next=11,n(u,e,{signers:[o]});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[r,e,n]);return(0,p.jsxs)("div",{className:"my-6",children:[(0,p.jsx)("input",{type:"text",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Token Name",onChange:function(e){return m(e.target.value)}}),(0,p.jsx)("input",{type:"text",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Symbol",onChange:function(e){return y(e.target.value)}}),(0,p.jsx)("input",{type:"text",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Metadata Url",onChange:function(e){return w(e.target.value)}}),(0,p.jsx)("input",{type:"number",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Amount",onChange:function(e){return F(e.target.value)}}),(0,p.jsx)("input",{type:"number",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Decimals",onChange:function(e){return O(e.target.value)}}),(0,p.jsx)("button",{className:"px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",onClick:function(){return C({decimals:Number(A),amount:Number(k),metadata:j,symbol:b,tokenName:u})},children:(0,p.jsx)("span",{children:"Create Token"})})]})},y=function(e){(0,n.Z)(e);var t=(0,s.O)(),r=(0,o.R)().connection,l=m((function(e){return e.balance})),c=m().getUserSOLBalance;return(0,a.useEffect)((function(){t.publicKey&&(console.log(t.publicKey.toBase58()),c(t.publicKey,r))}),[t.publicKey,r,c]),(0,p.jsx)("div",{className:"md:hero mx-auto p-4",children:(0,p.jsxs)("div",{className:"md:hero-content flex flex-col",children:[(0,p.jsx)("h1",{className:"text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",children:"Token Creator"}),(0,p.jsxs)("div",{className:"text-center",children:[(0,p.jsx)(x,{"my-2":!0}),t&&(0,p.jsxs)("p",{children:["SOL Balance: ",(l||0).toLocaleString()]}),(0,p.jsx)(b,{})]})]})})},v=r(59499),j=r(16835),w=r(48764).Buffer;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,v.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=function(){var e=(0,o.R)().connection,t=(0,a.useState)(""),r=t[0],n=t[1],s=(0,a.useState)(null),c=s[0],u=s[1],m=(0,a.useState)(null),x=m[0],f=m[1],h=(0,a.useState)(!1),b=h[0],y=h[1],v=(0,a.useCallback)(function(){var t=(0,l.Z)(i().mark((function t(r){var a,s,o,l,m,p,x,h,b;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new d.PublicKey(r.tokenAddress),s=d.PublicKey.findProgramAddressSync([w.from("metadata"),g.PROGRAM_ID.toBuffer(),a.toBuffer()],g.PROGRAM_ID)[0],console.log(s.toBase58()),t.next=5,e.getAccountInfo(s);case 5:return o=t.sent,console.log(o),t.next=9,g.Metadata.deserialize(o.data);case 9:return l=t.sent,m=(0,j.Z)(l,2),p=m[0],m[1],console.log(p),t.next=16,fetch(p.data.uri);case 16:return x=t.sent,t.next=19,x.json();case 19:h=t.sent,b=h.image,u(k({tokenMetadata:c},p.data)),f(b),y(!0),n("");case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[r]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"my-6",children:[(0,p.jsx)("input",{type:"text",value:r,className:"form-control block mb-2 ml-auto mr-auto max-w-800 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Token Address",onChange:function(e){return n(e.target.value)}}),(0,p.jsx)("button",{className:"px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",onClick:function(){return v({tokenAddress:r})},children:(0,p.jsx)("span",{children:"Get Metadata"})})]}),(0,p.jsx)("div",{className:"my-6",children:b?(0,p.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[(0,p.jsx)("div",{className:"px-4 py-5 sm:px-6",children:(0,p.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Token Metadata"})}),(0,p.jsx)("div",{className:"border-t border-gray-200",children:(0,p.jsx)("dl",{className:"divide-y divide-gray-200",children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,p.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"logo"}),(0,p.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:(0,p.jsx)("img",{src:x,alt:"token",className:"w-1/4 h-full inline-block object-center object-cover lg:w-1/4 lg:h-full"})})]}),(0,p.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,p.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"name"}),(0,p.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:c.name})]}),(0,p.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,p.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"symbol"}),(0,p.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:c.symbol||"undefined"})]}),(0,p.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,p.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"uri"}),(0,p.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:(0,p.jsx)("a",{href:c.uri,target:"_blank",rel:"noreferrer",children:c.uri})})]})]})})})]}):void 0})]})},S=function(e){return(0,n.Z)(e),(0,p.jsx)("div",{className:"md:hero mx-auto p-4",children:(0,p.jsxs)("div",{className:"md:hero-content flex flex-col",children:[(0,p.jsx)("h1",{className:"text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",children:"Token Metadata"}),(0,p.jsx)("div",{className:"text-center",children:(0,p.jsx)(F,{})})]})})},A=r(79597),O=r(17106),C=r(91013),M=r(58057),P=r(82921),R=r(48764).Buffer,B=[{id:1,network:"mainnet-beta",name:"https://node1.bundlr.network"},{id:2,network:"devnet",name:"https://devnet.bundlr.network"}],T=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")},L=function(e){(0,n.Z)(e);var t=(0,s.O)(),r=(0,a.useState)(null),o=r[0],c=r[1],m=(0,a.useState)(null),x=(m[0],m[1]),f=(0,a.useState)(null),g=f[0],h=f[1],b=(0,a.useState)(null),y=b[0],v=b[1],j=(0,a.useState)(null),w=j[0],N=j[1],k=(0,a.useState)(null),F=k[0],S=k[1],L=(0,a.useState)(null),Z=L[0],K=(L[1],(0,a.useState)(null)),_=K[0],U=K[1],E=(0,a.useState)(null),I=E[0],W=E[1],D=(0,a.useState)(null),G=D[0],H=D[1];(0,a.useEffect)((function(){t&&t.connected&&function(){var e=(0,l.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,t.connect();case 3:return r=t.wallet.adapter,e.next=6,r.connect();case 6:c(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()})),(0,a.useEffect)((function(){}));var V=function(){var e=(0,l.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://devnet.bundlr.network"===y.name?new P.WebBundlr("".concat(y.name),"solana",o,{providerUrl:"https://api.devnet.solana.com"}):new P.WebBundlr("".concat(y.name),"solana",o),console.log(r),e.prev=2,e.next=5,r.utils.getBundlerAddress("solana");case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(2),(0,u.h)({type:"error",message:"".concat(e.t0)}),e.abrupt("return");case 11:return e.prev=11,e.next=14,r.ready();case 14:e.next=20;break;case 16:return e.prev=16,e.t1=e.catch(11),(0,u.h)({type:"error",message:"".concat(e.t1)}),e.abrupt("return");case 20:r.address||(0,u.h)({type:"error",message:"Unexpected error: bundlr address not found"}),(0,u.h)({type:"success",message:"Connected to ".concat(y.network)}),x(null===(t=r)||void 0===t?void 0:t.address),h(r);case 24:case"end":return e.stop()}}),e,null,[[2,7],[11,16]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,l.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.utils.getPrice("solana",F.length);case 2:t=e.sent,r=(r=g.utils.unitConverter(t)).toNumber(),console.log("price-amount",t,r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,l.Z)(i().mark((function e(){var t,r,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.utils.getPrice("solana",I.length);case 2:return t=e.sent,r=(r=g.utils.unitConverter(t)).toNumber(),e.next=7,g.getLoadedBalance();case 7:if(n=e.sent,!(g.utils.unitConverter(n.toNumber()).toNumber()<r)){e.next=13;break}return e.next=13,g.fund(d.LAMPORTS_PER_SOL);case 13:return e.next=15,g.uploader.upload(I,[{name:"Content-Type",value:"application/json"}]);case 15:a=e.sent,s="https://arweave.net/".concat(a.data.id),H(s);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsx)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:(0,p.jsxs)("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0",children:[(0,p.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,p.jsx)("div",{className:"md:col-span-1",children:(0,p.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,p.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Bundler"}),(0,p.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"This is the bundler you will be using to upload your files to Arweave."})]})}),(0,p.jsx)("div",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",children:(0,p.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,p.jsx)(A.R,{value:y,onChange:v,children:function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"mt-1 relative",children:[(0,p.jsxs)(A.R.Button,{className:"bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[(0,p.jsx)("span",{className:"block truncate",children:y?y.network:"Select Network"}),(0,p.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,p.jsx)(C.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,p.jsx)(O.u,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,p.jsx)(A.R.Options,{className:"absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",children:B.map((function(e){return(0,p.jsx)(A.R.Option,{className:function(e){var t=e.active;return T(t?"text-white bg-purple-500":"text-gray-900","cursor-default select-none relative py-2 pl-3 pr-9")},value:e,children:function(t){var r=t.selected,n=t.active;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:T(r?"font-semibold":"font-normal","block truncate"),children:e.network}),r?(0,p.jsx)("span",{className:T(n?"text-white":"text-purple-500","absolute inset-y-0 right-0 flex items-center pr-4"),children:(0,p.jsx)(M.Z,{className:"h-5 w-5","aria-hidden":"true"})}):null]})}},e.id)}))})})]})})}})})}),(0,p.jsx)("div",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",children:(0,p.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,p.jsx)("button",{className:"items-center px-3 py-2 text-xs btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",onClick:(0,l.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:"Connect"})})})]}),(0,p.jsx)("div",{className:"hidden sm:block","aria-hidden":"true",children:(0,p.jsx)("div",{className:"py-5",children:(0,p.jsx)("div",{className:"border-t border-gray-200"})})}),(0,p.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,p.jsx)("div",{className:"md:col-span-1",children:(0,p.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,p.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Image URL"}),(0,p.jsxs)("p",{className:"mt-1 text-sm text-gray-600",children:["The Arweave URL for your stored image. Set this as the"," ",(0,p.jsx)("code",{className:"text-purple-500 bg-purple-100",children:"image"})," and"," ",(0,p.jsx)("code",{className:"text-purple-500 bg-purple-100",children:"uri"})," values in your metadata file."]})]})}),(0,p.jsx)("div",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",children:Z?(0,p.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,p.jsx)("a",{href:Z,target:"_blank",rel:"noreferrer",children:Z})}):(0,p.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-1",children:(0,p.jsx)("div",{className:"max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:(0,p.jsxs)("div",{className:"space-y-1 text-center",children:[(0,p.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,p.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,p.jsxs)("label",{htmlFor:"image-upload",className:"relative cursor-pointer bg-white rounded-md font-medium text-purple-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[(0,p.jsx)("span",{children:"Upload an image"}),(0,p.jsx)("input",{id:"image-upload",name:"image-upload",type:"file",className:"sr-only",onChange:function(e){var t=e.target.files[0],r=new FileReader;t&&(N(t.name),r.onload=function(){r.result&&S(R.from(r.result))},r.readAsArrayBuffer(t))}})]}),(0,p.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),w?(0,p.jsx)("p",{className:"text-sm text-gray-500",children:w}):null]})})})}),(0,p.jsx)("div",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",children:(0,p.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:!Z&&(0,p.jsx)("button",{className:"px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",onClick:(0,l.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z());case 1:case"end":return e.stop()}}),e)}))),disabled:!g,children:"Upload Image"})})})]}),(0,p.jsx)("div",{className:"hidden sm:block","aria-hidden":"true",children:(0,p.jsx)("div",{className:"py-5",children:(0,p.jsx)("div",{className:"border-t border-gray-200"})})}),(0,p.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,p.jsx)("div",{className:"md:col-span-1",children:(0,p.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,p.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Metadata URL"}),(0,p.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"The Arweave URL where your metadata is saved. You will use this to create your token."})]})}),(0,p.jsx)("div",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",children:G?(0,p.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,p.jsx)("a",{href:G,target:"_blank",rel:"noreferrer",children:G})}):(0,p.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-1",children:(0,p.jsx)("div",{className:"max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:(0,p.jsxs)("div",{className:"space-y-1 text-center",children:[(0,p.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,p.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,p.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer bg-white rounded-md font-medium text-purple-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[(0,p.jsx)("span",{children:"Upload a file"}),(0,p.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only",onChange:function(e){var t=e.target.files[0],r=new FileReader;t&&(U(t.name),r.onload=function(){r.result&&W(R.from(r.result))},r.readAsArrayBuffer(t))}})]}),(0,p.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),_?(0,p.jsx)("p",{className:"text-sm text-gray-500",children:_}):null]})})})}),(0,p.jsx)("div",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",children:(0,p.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:!G&&(0,p.jsx)("button",{className:"items-center px-3 py-2 text-xs btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",onClick:(0,l.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q());case 1:case"end":return e.stop()}}),e)}))),disabled:!g,children:"Upload Metadata"})})})]})]})})},Z=function(e){return(0,n.Z)(e),(0,p.jsx)("div",{className:"md:hero mx-auto p-4",children:(0,p.jsxs)("div",{className:"md:hero-content flex flex-col",children:[(0,p.jsx)("h1",{className:"text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",children:"Upload Metadata"}),(0,p.jsx)("div",{className:"text-center",children:(0,p.jsx)(L,{})})]})})},K=r(77191),_=r.n(K),U=r(50780),E=function(){var e=(0,s.O)(),t=e.publicKey,r=e.signMessage,n=(0,a.useCallback)((0,l.Z)(i().mark((function e(){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}throw new Error("Wallet not connected!");case 3:if(r){e.next=5;break}throw new Error("Wallet does not support message signing!");case 5:return n=(new TextEncoder).encode("Hello, world!"),e.next=8,r(n);case 8:if(a=e.sent,U.sign.detached.verify(n,a,t.toBytes())){e.next=11;break}throw new Error("Invalid signature!");case 11:(0,u.h)({type:"success",message:"Sign message successful!",txid:_().encode(a)}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),(0,u.h)({type:"error",message:"Sign Message failed!",description:null===e.t0||void 0===e.t0?void 0:e.t0.message}),console.log("error","Sign Message failed! ".concat(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[0,14]])}))),[t,u.h,r]);return(0,p.jsx)("div",{children:(0,p.jsxs)("button",{className:"group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... ",onClick:n,disabled:!t,children:[(0,p.jsx)("div",{className:"hidden group-disabled:block",children:"Wallet not connected"}),(0,p.jsx)("span",{className:"block group-disabled:hidden",children:"Sign Message"})]})})},I=function(){var e=(0,o.R)().connection,t=(0,s.O)(),r=t.publicKey,n=t.sendTransaction,c=(0,a.useCallback)((0,l.Z)(i().mark((function t(){var a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=4;break}return(0,u.h)({type:"error",message:"Wallet not connected!"}),console.log("error","Send Transaction: Wallet not connected!"),t.abrupt("return");case 4:return a="",t.prev=5,s=(new d.Transaction).add(d.SystemProgram.transfer({fromPubkey:r,toPubkey:d.Keypair.generate().publicKey,lamports:1})),t.next=9,n(s,e);case 9:return a=t.sent,t.next=12,e.confirmTransaction(a,"confirmed");case 12:(0,u.h)({type:"success",message:"Transaction successful!",txid:a}),t.next=20;break;case 15:return t.prev=15,t.t0=t.catch(5),(0,u.h)({type:"error",message:"Transaction failed!",description:null===t.t0||void 0===t.t0?void 0:t.t0.message,txid:a}),console.log("error","Transaction failed! ".concat(null===t.t0||void 0===t.t0?void 0:t.t0.message),a),t.abrupt("return");case 20:case"end":return t.stop()}}),t,null,[[5,15]])}))),[r,u.h,e,n]);return(0,p.jsx)("div",{children:(0,p.jsxs)("button",{className:"group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... ",onClick:c,disabled:!r,children:[(0,p.jsx)("div",{className:"hidden group-disabled:block ",children:"Wallet not connected"}),(0,p.jsx)("span",{className:"block group-disabled:hidden",children:"Send Transaction"})]})})},W=function(e){return(0,n.Z)(e),(0,p.jsx)("div",{className:"md:hero mx-auto p-4",children:(0,p.jsxs)("div",{className:"md:hero-content flex flex-col",children:[(0,p.jsx)("h1",{className:"text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",children:"Basics"}),(0,p.jsxs)("div",{className:"text-center",children:[(0,p.jsx)(E,{}),(0,p.jsx)(I,{})]})]})})},D=r(48764).Buffer,G=function(){var e=(0,o.R)().connection,t=(0,s.O)(),r=t.publicKey,n=t.sendTransaction,c=(0,a.useState)(""),u=c[0],m=c[1],x=(0,a.useState)(""),f=x[0],h=x[1],b=(0,a.useState)(""),y=b[0],v=b[1],j=(0,a.useState)(""),w=j[0],N=j[1],k=(0,a.useCallback)(function(){var t=(0,l.Z)(i().mark((function t(a){var s,o,l,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=new d.PublicKey(a.tokenMint),console.log(s.toString()),console.log(a.tokenMint),o=d.PublicKey.findProgramAddressSync([D.from("metadata"),g.PROGRAM_ID.toBuffer(),s.toBuffer()],g.PROGRAM_ID)[0],l={name:a.tokenName,symbol:a.symbol,uri:a.metadata,sellerFeeBasisPoints:0,creators:null,collection:null,uses:null},c=(new d.Transaction).add((0,g.createUpdateMetadataAccountV2Instruction)({metadata:o,updateAuthority:r},{updateMetadataAccountArgsV2:{data:l,updateAuthority:r,primarySaleHappened:!0,isMutable:!0}})),t.next=8,n(c,e);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[r,e,n]);return(0,p.jsxs)("div",{className:"my-6",children:[(0,p.jsx)("input",{type:"text",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Token Mint Address",onChange:function(e){return m(e.target.value)}}),(0,p.jsx)("input",{type:"text",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Token Name",onChange:function(e){return h(e.target.value)}}),(0,p.jsx)("input",{type:"text",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Symbol",onChange:function(e){return v(e.target.value)}}),(0,p.jsx)("input",{type:"text",className:"form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Metadata Url",onChange:function(e){return N(e.target.value)}}),(0,p.jsx)("button",{className:"px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",onClick:function(){return k({metadata:w,symbol:y,tokenName:f,tokenMint:u})},children:(0,p.jsx)("span",{children:"Update Metadata"})})]})},H=function(e){return(0,n.Z)(e),(0,p.jsx)("div",{className:"md:hero mx-auto p-4",children:(0,p.jsxs)("div",{className:"md:hero-content flex flex-col",children:[(0,p.jsx)("h1",{className:"text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",children:"Update Metadata"}),(0,p.jsx)("div",{className:"text-center",children:(0,p.jsx)(G,{})})]})})}},43094:function(){},80950:function(){},12694:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},73105:function(){},77108:function(){},52361:function(){},94616:function(){},55024:function(){}}]);