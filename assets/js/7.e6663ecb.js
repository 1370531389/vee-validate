(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{307:function(e,t,o){"use strict";o.r(t);var a=o(50),s=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"multiple-forms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multiple-forms","aria-hidden":"true"}},[e._v("#")]),e._v(" Multiple Forms")]),e._v(" "),o("p",[e._v("VeeValidate allows you to create "),o("strong",[e._v("logical")]),e._v(" forms with the "),o("code",[e._v("ValidationObserver")]),e._v(" component, as it can be nested and controlled by parent observers. Although recommended, you don't have to use the "),o("code",[e._v("form")]),e._v(" tag.")]),e._v(" "),o("p",[e._v("The following are some common examples where you would have multiple forms in the same component.")]),e._v(" "),o("h2",{attrs:{id:"same-page-forms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#same-page-forms","aria-hidden":"true"}},[e._v("#")]),e._v(" Same Page Forms")]),e._v(" "),o("p",[e._v("You can have multiple forms in the same page, for example a sign up/sign in page with both forms.")]),e._v(" "),o("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/vue-template-kysb1?fontsize=14",title:"VeeValidate multi-forms example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("Refactoring")]),e._v(" "),o("p",[e._v("Having multiple forms in the same page is messy, try to avoid that and refactor your forms into form components instead if your app has too many forms.")])]),e._v(" "),o("h2",{attrs:{id:"nested-forms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nested-forms","aria-hidden":"true"}},[e._v("#")]),e._v(" Nested Forms")]),e._v(" "),o("p",[e._v("The native HTML "),o("code",[e._v("form")]),e._v(" tag doesn't allow you to nest other "),o("code",[e._v("form")]),e._v(" tags as children, and in reality the need for nested forms is rather rare.")]),e._v(" "),o("p",[e._v("But since JavaScript Validation doesn't require you to use "),o("code",[e._v("form")]),e._v(" tags, you can create logically nested forms.")]),e._v(" "),o("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/veevalidate-multi-forms-example-dfukg?fontsize=14",title:"VeeValidate nested-forms example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}),e._v(" "),o("h2",{attrs:{id:"multi-step-forms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-step-forms","aria-hidden":"true"}},[e._v("#")]),e._v(" Multi-step Forms")]),e._v(" "),o("p",[e._v("Tabbed forms structure isn't special per say, they are not that different from the last example. But the caveat is that you want to maintain the validation state even if the provider is hidden.")]),e._v(" "),o("p",[e._v("This is when "),o("code",[e._v("persist")]),e._v(' prop comes into play. This tells each parent observer to "remember" the state of its direction provider children, so when they are rendered next time they will get their state back.')]),e._v(" "),o("p",[e._v("Ideally in this example you wouldn't pass a step unless the current active set is valid. But they can go back freely to update their previous inputs.")]),e._v(" "),o("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/veevalidate-30-multi-step-form-example-i4tfh?fontsize=14",title:"VeeValidate 3.0 - Multi-step Form example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),o("p",[e._v('Note that we don\'t need to use nested observers a lot here, they are only useful if you want to "group" some providers in a larger form structure.')])])])},[],!1,null,null,null);s.options.__file="multiple-forms.md";t.default=s.exports}}]);