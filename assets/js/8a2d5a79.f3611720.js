"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[49562],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,h=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(h,d(d({ref:t},s),{},{components:a})):n.createElement(h,d({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(39960),r=a(86341),i=a(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},p=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(d,null,i.createElement(s,null),i.createElement(l,null),i.createElement(p,null))},u=function(){return i.createElement(d,null,i.createElement(l,null),i.createElement(p,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(c,null),external:i.createElement(u,null)})}},56945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=a(68629),d=(a(86341),["components"]),l={id:"imperatively-modifying-store-data",title:"Imperatively modifying store data",slug:"/guided-tour/updating-data/imperatively-modifying-store-data/",description:"Using readUpdatableQuery to update scalar fields in the store",keywords:["record source","store","updater","typesafe updaters","readUpdatableQuery","readUpdatableFragment","updatable"]},s=void 0,p={unversionedId:"guided-tour/updating-data/imperatively-modifying-store-data",id:"version-v14.0.0/guided-tour/updating-data/imperatively-modifying-store-data",title:"Imperatively modifying store data",description:"Using readUpdatableQuery to update scalar fields in the store",source:"@site/versioned_docs/version-v14.0.0/guided-tour/updating-data/imperatively-modifying-store-data.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/imperatively-modifying-store-data/",permalink:"/docs/guided-tour/updating-data/imperatively-modifying-store-data/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/updating-data/imperatively-modifying-store-data.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Andres Suarez",lastUpdatedAt:1680221497,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{id:"imperatively-modifying-store-data",title:"Imperatively modifying store data",slug:"/guided-tour/updating-data/imperatively-modifying-store-data/",description:"Using readUpdatableQuery to update scalar fields in the store",keywords:["record source","store","updater","typesafe updaters","readUpdatableQuery","readUpdatableFragment","updatable"]}},c={},u=[{value:"When to use updaters",id:"when-to-use-updaters",level:2},{value:"Complex client updates",id:"complex-client-updates",level:3},{value:"Client schema extensions",id:"client-schema-extensions",level:3},{value:"Use of other APIs",id:"use-of-other-apis",level:3},{value:"If multiple optimistic responses modify a given store value",id:"if-multiple-optimistic-responses-modify-a-given-store-value",level:3},{value:"When <strong>not</strong> to use updaters",id:"when-not-to-use-updaters",level:2},{value:"To trigger other side effects",id:"to-trigger-other-side-effects",level:3},{value:"The various types of updater functions",id:"the-various-types-of-updater-functions",level:2},{value:"Optimistic updaters vs updaters",id:"optimistic-updaters-vs-updaters",level:2},{value:"Example",id:"example",level:2},{value:"Example 2: Updating data in response to user interactions",id:"example-2-updating-data-in-response-to-user-interactions",level:2},{value:"Alternative API: <code>readUpdatableQuery</code>.",id:"alternative-api-readupdatablequery",level:2}],m={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"See also ",(0,i.mdx)("a",{parentName:"p",href:"../imperatively-modifying-linked-fields"},"this guide on updating linked fields in the store"),".")),(0,i.mdx)("p",null,"Data in Relay stores can be imperatively modified within updater functions."),(0,i.mdx)("h2",{id:"when-to-use-updaters"},"When to use updaters"),(0,i.mdx)("h3",{id:"complex-client-updates"},"Complex client updates"),(0,i.mdx)("p",null,"You might provide an updater function if the changes to local data are more complex than what can be achieved by simply writing a network response to the store and cannot be handled by the declarative mutation directives."),(0,i.mdx)("h3",{id:"client-schema-extensions"},"Client schema extensions"),(0,i.mdx)("p",null,"In addition, since the network response necessarily will not include data for fields defined in client schema extensions, you may wish to use an updater to initialize data defined in client schema extensions."),(0,i.mdx)("h3",{id:"use-of-other-apis"},"Use of other APIs"),(0,i.mdx)("p",null,"Lastly, there are things you can only achieve using updaters, such as invalidating nodes, deleting nodes, finding all connections at a given field, etc."),(0,i.mdx)("h3",{id:"if-multiple-optimistic-responses-modify-a-given-store-value"},"If multiple optimistic responses modify a given store value"),(0,i.mdx)("p",null,"If two optimistic responses affect a given value, and the first optimistic response is rolled back, the second one will remain applied."),(0,i.mdx)("p",null,"For example, if two optimistic responses each increase a story's like count by one, and the first optimistic response is rolled back, the second optimistic response remains applied. However, it is ",(0,i.mdx)("strong",{parentName:"p"},"not recalculated"),", and the value of the like count will remain increased by two."),(0,i.mdx)("h2",{id:"when-not-to-use-updaters"},"When ",(0,i.mdx)("strong",{parentName:"h2"},"not")," to use updaters"),(0,i.mdx)("h3",{id:"to-trigger-other-side-effects"},"To trigger other side effects"),(0,i.mdx)("p",null,"You should use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCompleted")," callback to trigger other side effects."),(0,i.mdx)("h2",{id:"the-various-types-of-updater-functions"},"The various types of updater functions"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"useMutation")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"commitMutation")," APIs accept configuration objects which can include ",(0,i.mdx)("inlineCode",{parentName:"p"},"optimisticUpdater")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"updater")," fields. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"requestSubscription")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"useSubscription")," APIs accept configuration objects which can include ",(0,i.mdx)("inlineCode",{parentName:"p"},"updater")," fields."),(0,i.mdx)("p",null,"In addition, there is another API (",(0,i.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate"),") which also accepts an updater function. It will be discussed in the ",(0,i.mdx)("a",{parentName:"p",href:"../local-data-updates/"},"Other APIs for modifying local data")," section."),(0,i.mdx)("h2",{id:"optimistic-updaters-vs-updaters"},"Optimistic updaters vs updaters"),(0,i.mdx)("p",null,"Mutations can have both optimistic and regular updaters. Optimistic updaters are executed when a mutation is triggered. When that mutation completes or errors, the optimistic update is rolled back."),(0,i.mdx)("p",null,"Regular updaters are executed when a mutation completes successfully."),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("p",null,"Let's construct an example in which an ",(0,i.mdx)("inlineCode",{parentName:"p"},"is_new_comment")," field (which is defined in a schema extension) is set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")," on a newly created Feedback object in a mutation updater."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"# Feedback.graphql\nextend type Feedback {\n  is_new_comment: Boolean\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// CreateFeedback.js\nimport type {Environment} from 'react-relay';\nimport type {\n  FeedbackCreateData,\n  CreateFeedbackMutation,\n  CreateFeedbackMutation$data,\n} from 'CreateFeedbackMutation.graphql';\n\nconst {commitMutation, graphql} = require('react-relay');\nconst {ConnectionHandler} = require('relay-runtime');\n\nfunction commitCreateFeedbackMutation(\n  environment: Environment,\n  input: FeedbackCreateData,\n) {\n  return commitMutation<FeedbackCreateData>(environment, {\n    mutation: graphql`\n      mutation CreateFeedbackMutation($input: FeedbackCreateData!) {\n        feedback_create(input: $input) {\n          feedback {\n            id\n            # Step 1: in the mutation response, spread an updatable fragment (defined below).\n            # This updatable fragment will select the fields that we want to update on this\n            # particular feedback object.\n            ...CreateFeedback_updatable_feedback\n          }\n        }\n      }\n    `,\n    variables: {input},\n\n    // Step 2: define an updater\n    updater: (store: RecordSourceSelectorProxy, response: ?CreateCommentMutation$data) => {\n      // Step 3: Access and nullcheck the feedback object.\n      // Note that this could also have been achieved with the @required directive.\n      const feedbackRef = response?.feedback_create?.feedback;\n      if (feedbackRef == null) {\n        return;\n      }\n\n      // Step 3: call store.readUpdatableFragment\n      const {updatableData} = store.readUpdatableFragment(\n          // Step 4: Pass it a fragment literal, where the fragment contains the @updatable directive.\n          // This fragment selects the fields that you wish to update on the feedback object.\n          // In step 1, we spread this fragment in the query response.\n          graphql`\n            fragment CreateFeedback_updatable_feedback on Feedback @updatable {\n              is_new_comment\n            }\n          `,\n          // Step 5: Pass the fragment reference.\n          feedbackRef\n        );\n\n      // Step 6: Mutate the updatableData object!\n      updatableData.is_new_comment = true;\n    },\n  });\n}\n\nmodule.exports = {commit: commitCreateFeedbackMutation};\n")),(0,i.mdx)("p",null,"Let's distill what's going on here."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"updater")," accepts two parameters: a ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecordSourceSelectorProxy")," and an optional object that is the result of reading out the mutation response.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The type of this second argument is a nullable version of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$data")," type that is imported from the generated mutation file."),(0,i.mdx)("li",{parentName:"ul"},"The second argument contains just the data selected directly by the mutation argument. In other words, it will not contain any fields selected solely by spread fragments."))),(0,i.mdx)("li",{parentName:"ul"},"This ",(0,i.mdx)("inlineCode",{parentName:"li"},"updater")," is executed after the mutation response has been written to the store."),(0,i.mdx)("li",{parentName:"ul"},"In this example updater, we do three things:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"First, we spread an updatable fragment in the mutation response."),(0,i.mdx)("li",{parentName:"ul"},"Second, we read out the fields selected by this fragment by calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableFragment"),". This returns an updatable proxy object."),(0,i.mdx)("li",{parentName:"ul"},"Third, we update fields on this updatable proxy."))),(0,i.mdx)("li",{parentName:"ul"},"Once this updater completes, the updates that have been recorded are written to the store, and all affected components are re-rendered.")),(0,i.mdx)("h2",{id:"example-2-updating-data-in-response-to-user-interactions"},"Example 2: Updating data in response to user interactions"),(0,i.mdx)("p",null,"Let's consider the common case of updating store data in response to a user interaction.  In a click handler, let's a toggle an ",(0,i.mdx)("inlineCode",{parentName:"p"},"is_selected")," field. This field is defined on Users in a client schema extension."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"# User.graphql\nextend type User {\n  is_selected: Boolean\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// UserSelectToggle.react.js\nimport type {RecordSourceSelectorProxy} from 'react-relay';\nimport type {UserSelectToggle_viewer$key} from 'UserSelectToggle_viewer.graphql';\n\nconst {useRelayEnvironment, commitLocalUpdate} = require('react-relay');\n\nfunction UserSelectToggle({ userId, viewerRef }: {\n  userId: string,\n  viewerRef: UserSelectToggle_viewer$key,\n}) {\n  const viewer = useFragment(graphql`\n    fragment UserSelectToggle_viewer on Viewer {\n      user(user_id: $user_id) {\n        id\n        name\n        is_selected\n        ...UserSelectToggle_updatable_user\n      }\n    }\n  `, viewerRef);\n\n  const environment = useRelayEnvironment();\n\n  return <button\n    onClick={() => {\n      commitLocalUpdate(\n        environment,\n        (store: RecordSourceSelectorProxy) => {\n          const userRef = viewer.user;\n          if (userRef == null) {\n            return;\n          }\n\n          const {updatableData} = store.readUpdatableFragment(\n            graphql`\n              fragment UserSelectToggle_updatable_user on User @updatable {\n                is_selected\n              }\n            `,\n            userRef\n          );\n\n          updatableData.is_selected = !viewer?.user?.is_selected;\n        }\n      );\n    }}\n  >\n    {viewer?.user?.is_selected ? 'Deselect' : 'Select'} {viewer?.user?.name}\n  </button>\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In a click handler, we call ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate"),", which accepts a Relay environment and an updater function. ",(0,i.mdx)("strong",{parentName:"li"},"Unlike in the previous examples, this updater does not accept a second parameter")," because there is no associated network payload."),(0,i.mdx)("li",{parentName:"ul"},"In this updater function, we access get an updatable proxy object by calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"store.readUpdatableFragment"),", and toggle the ",(0,i.mdx)("inlineCode",{parentName:"li"},"is_selected")," field."),(0,i.mdx)("li",{parentName:"ul"},"Like the previous example in which we called ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableFragment"),", this can be rewritten to use the ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableQuery")," API.")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"This example can be rewritten using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"environment.commitPayload")," API, albeit without type safety.")),(0,i.mdx)("h2",{id:"alternative-api-readupdatablequery"},"Alternative API: ",(0,i.mdx)("inlineCode",{parentName:"h2"},"readUpdatableQuery"),"."),(0,i.mdx)("p",null,"In the previous examples, we used an updatable fragment to access the record whose fields we want to update. This can also be possible to do with an updatable query."),(0,i.mdx)("p",null,"If we know the path from the root (i.e. the object whose type is ",(0,i.mdx)("inlineCode",{parentName:"p"},"Query"),") to the record we wish to modify, we can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery")," API to achieve this."),(0,i.mdx)("p",null,"For example, we could set the viewer's ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," field in response to an event as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// NameUpdater.react.js\nfunction NameUpdater({ queryRef }: {\n  queryRef: NameUpdater_viewer$key,\n}) {\n  const environment = useRelayEnvironment();\n  const data = useFragment(\n    graphql`\n      fragment NameUpdater_viewer on Viewer {\n        name\n      }\n    `,\n    queryRef\n  );\n  const [newName, setNewName] = useState(data?.viewer?.name);\n  const onSubmit = () => {\n    commitLocalUpdate(environment, store => {\n      const {updatableData} = store.readUpdatableQuery(\n        graphql`\n          viewer {\n            name\n          }\n        `,\n        {}\n      );\n      const viewer = updatableData.viewer;\n      if (viewer != null) {\n        viewer.name = newName;\n      }\n    });\n  };\n\n  // etc\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"This particular example can be rewritten using ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableFragment"),". However, you may prefer ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableQuery")," for several reasons:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"You do not have ready access to a fragment reference, e.g. if the call to ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," is not obviously associated with a component."),(0,i.mdx)("li",{parentName:"ul"},"You do not have ready access to a fragment where we select the ",(0,i.mdx)("strong",{parentName:"li"},"parent record")," of the record we wish to modify (e.g. the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Query")," in this example). Due to a known type hole in Relay, ",(0,i.mdx)("strong",{parentName:"li"},"updatable fragments cannot be spread at the top level.")),(0,i.mdx)("li",{parentName:"ul"},"You wish to use variables in the updatatable fragment. Currently, updatable fragments reuse the variables that were passed to the query. This means that you cannot, for example, have an updatable fragment with fragment-local variables and call ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableFragment")," multiple times, each time passing different variables.")))),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);