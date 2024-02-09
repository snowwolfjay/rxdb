"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7824],{7140:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=r(7624),d=r(4552);const a={title:"IndexedDB RxStorage \ud83d\udc51",slug:"rx-storage-indexeddb.html"},s="IndexedDB RxStorage",o={id:"rx-storage-indexeddb",title:"IndexedDB RxStorage \ud83d\udc51",description:"The IndexedDB RxStorage is based on plain IndexedDB and can be used in browsers, electron or hybrid apps.",source:"@site/docs/rx-storage-indexeddb.md",sourceDirName:".",slug:"/rx-storage-indexeddb.html",permalink:"/rx-storage-indexeddb.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/master/docs-src/docs/rx-storage-indexeddb.md",tags:[],version:"current",frontMatter:{title:"IndexedDB RxStorage \ud83d\udc51",slug:"rx-storage-indexeddb.html"},sidebar:"tutorialSidebar",previous:{title:"Memory RxStorage",permalink:"/rx-storage-memory.html"},next:{title:"OPFS RxStorage \ud83d\udc51",permalink:"/rx-storage-opfs.html"}},i={},l=[{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Usage",id:"usage",level:2},{value:"Overwrite/Polyfill the native IndexedDB",id:"overwritepolyfill-the-native-indexeddb",level:2}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"indexeddb-rxstorage",children:"IndexedDB RxStorage"}),"\n",(0,t.jsxs)(n.p,{children:["The IndexedDB ",(0,t.jsx)(n.code,{children:"RxStorage"})," is based on plain IndexedDB and can be used in browsers, electron or hybrid apps."]}),"\n",(0,t.jsx)(n.h3,{id:"pros",children:"Pros"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It is really fast because it uses many ",(0,t.jsx)(n.a,{href:"/slow-indexeddb.html",children:"performance optimizations"})," for IndexedDB. See ",(0,t.jsx)(n.a,{href:"/rx-storage-performance.html",children:"performance comparison"})]}),"\n",(0,t.jsx)(n.li,{children:"It has a small build size."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cons",children:"Cons"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It is part of the ",(0,t.jsx)(n.a,{href:"/premium",children:"\ud83d\udc51 RxDB Premium"})," plugin that must be purchased."]}),"\n",(0,t.jsxs)(n.li,{children:["Requires support for ",(0,t.jsx)(n.a,{href:"https://caniuse.com/indexeddb2",children:"IndexedDB v2"}),", it does not work on Internet Explorer."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageIndexedDB\n} from 'rxdb-premium/plugins/storage-indexeddb';\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageIndexedDB({\n        /**\n         * For better performance, queries run with a batched cursor.\n         * You can change the batchSize to optimize the query time\n         * for specific queries.\n         * You should only change this value when you are also doing performance measurements.\n         * [default=300]\n         */\n        batchSize: 300\n    })\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"overwritepolyfill-the-native-indexeddb",children:"Overwrite/Polyfill the native IndexedDB"}),"\n",(0,t.jsxs)(n.p,{children:["Node.js has no IndexedDB API. To still run the IndexedDB ",(0,t.jsx)(n.code,{children:"RxStorage"})," in Node.js, for example to run unit tests, you have to polyfill it.\nYou can do that by using the ",(0,t.jsx)(n.a,{href:"https://github.com/dumbmatter/fakeIndexedDB",children:"fake-indexeddb"})," module and pass it to the ",(0,t.jsx)(n.code,{children:"getRxStorageDexie()"})," function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageIndexedDB } from 'rxdb-premium/plugins/storage-indexeddb';\n\n//> npm install fake-indexeddb --save\nconst fakeIndexedDB = require('fake-indexeddb');\nconst fakeIDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange');\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageIndexedDB({\n        indexedDB: fakeIndexedDB,\n        IDBKeyRange: fakeIDBKeyRange\n    })\n});\n\n"})})]})}function c(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>o,M:()=>s});var t=r(1504);const d={},a=t.createContext(d);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);