(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{590:function(t,e,s){"use strict";s.r(e);var a=s(7),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-js"}},[t._v("#")]),t._v(" react.js")]),t._v(" "),s("TagLinks"),t._v(" "),s("ul",[s("li",[t._v("Generate and return content from javascript")]),t._v(" "),s("li",[t._v("How to reusestateful logic between components?\n"),s("ul",[s("li",[t._v("Use react lifecycle hooks\n"),s("ul",[s("li",[t._v("componentDidMount")]),t._v(" "),s("li",[t._v("componentDidUpdate")]),t._v(" "),s("li",[t._v("componentWillUnmount - cleanup code")])])])])])]),t._v(" "),s("dl",[s("dt",[t._v("Why we need a frontend web framework in the first place? What problem does it solve?")]),t._v(" "),s("dd",[s("p",[t._v("To work with javascript little bit easier and organised. Good for managing enterprise level projects")]),t._v(" "),s("ul",[s("li",[t._v("Provides built in reactivity")])])])]),t._v(" "),s("p",[t._v("Bootstrap new react app")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("npx create-react-app my-app\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("packages")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("react-dom")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("react-scripts")]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"react-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks"}},[t._v("#")]),t._v(" React Hooks")]),t._v(" "),s("h3",{attrs:{id:"usestate-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usestate-hook"}},[t._v("#")]),t._v(" useState Hook")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Hooks")]),t._v(" "),s("p",[t._v("can use hooks ONLY inside of function components and NOT class component")])]),t._v(" "),s("ul",[s("li",[t._v("Hooks cannot be nested into anything, loops, functions, conditionals etc")]),t._v(" "),s("li",[t._v("use the function varient, runs only once when component is loaded")]),t._v(" "),s("li",[t._v("returns 2 values\n"),s("ul",[s("li",[t._v("current state values")]),t._v(" "),s("li",[t._v("function to update the current state - use the function version to set your state value\n"),s("ul",[s("li",[t._v("use previous value to update the current values")])])])])])]),t._v(" "),s("h3",{attrs:{id:"useref-hook-use-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useref-hook-use-case"}},[t._v("#")]),t._v(" useRef Hook use case")]),t._v(" "),s("ul",[s("li",[t._v("How to show how many times a component rendered on screen?")]),t._v(" "),s("li",[t._v("Reference elements inside HTML\n"),s("ul",[s("li",[t._v("same effect as document.querySelector()")])])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("useRef")]),t._v(" "),s("p",[t._v("Do not manage states yourself, let react do it for you. Do not misuse userRef\nUpdate states using JSX")])]),t._v(" "),s("dl",[s("dt",[t._v("ref vs state? Difference?")]),t._v(" "),s("dd",[t._v("Refs doent cause component to reupdate.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Library")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("react-dom")]),t._v(" "),s("td",[t._v("DOM manupulation helper functions, render() function")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://github.com/iamdustan/smoothscroll",target:"_blank",rel:"noopener noreferrer"}},[t._v("smoothscroll-polyfill"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("scroll behaviour css proprty")])])])]),t._v(" "),s("h3",{attrs:{id:"useeffect-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-hook"}},[t._v("#")]),t._v(" useEffect Hook")]),t._v(" "),s("blockquote",[s("p",[t._v("Anything we somethign something to change depending on s props, state, variable change, component mount/unmount use this hook")])]),t._v(" "),s("ul",[s("li",[t._v("inside a function component we dont have lifecycle hooks at all. All we have is useEffect hook")]),t._v(" "),s("li",[t._v("We want something to change in component, on a sideffect")]),t._v(" "),s("li",[t._v("Run hook only when a specific thing (2nd param) changes\n"),s("ul",[s("li",[t._v("if you pass an empty array, "),s("code",[t._v("useEffect")]),t._v(" will only run once onMount, because empty array doesnt changes.")])])])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'render'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("resourceType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("How to remove useEffect event listner?  when component is unmounted, we dont want slow apps\n"),s("ul",[s("li",[t._v("use "),s("code",[t._v("return () => {...}")]),t._v(" within "),s("code",[t._v("useEffect")]),t._v(", runs evenrtime componet is unmounted")]),t._v(" "),s("li",[t._v("like unsubscribing from an api")])])])]),t._v(" "),s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),s("ul",{staticClass:"task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"markdown-todo",attrs:{disabled:"true",type:"checkbox"}}),t._v(" Clients")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"markdown-todo",attrs:{disabled:"true",type:"checkbox"}}),t._v(" Server")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"markdown-todo",attrs:{disabled:"true",type:"checkbox"}}),t._v(" Hooks")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"markdown-todo",attrs:{disabled:"true",type:"checkbox"}}),t._v(" Context")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"markdown-todo",attrs:{disabled:"true",type:"checkbox"}}),t._v(" Components")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"markdown-todo",attrs:{disabled:"true",type:"checkbox"}}),t._v(" States")])]),t._v(" "),s("h2",{attrs:{id:"redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" REDUX")]),t._v(" "),s("ul",[s("li",[t._v("could be used independently of react, independent js library")]),t._v(" "),s("li",[t._v("state management")]),t._v(" "),s("li",[s("code",[t._v("useState")]),t._v(", "),s("code",[t._v("useSlice")])]),t._v(" "),s("li",[t._v("MobX is alternative library")]),t._v(" "),s("li",[t._v("Apollo, build, query and manage data graphs")])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Counter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setCounter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("increment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevCounter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" prevCounter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      Value: ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("increment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Increment")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[t._v("#")]),t._v(" Patterns")]),t._v(" "),s("blockquote",[s("p",[t._v("For long-term maintainability, if there is a problem, we should be able to fix it.")])]),t._v(" "),s("ul",[s("li",[t._v("Avoid prop drilling")]),t._v(" "),s("li",[t._v("Properly use sideEffect within components")]),t._v(" "),s("li",[t._v("Mixed Components - side efffects + state handling + views")]),t._v(" "),s("li",[t._v("Container / View Pattern - look for props changes for sideeffects and conditional rendering")]),t._v(" "),s("li",[t._v("sideEffects are main source of bugs, schema of api may change")]),t._v(" "),s("li",[t._v("How to reuse logic in different views?\n"),s("ul",[s("li",[t._v("Higher Order Component, take one component as parameter and returns another component")]),t._v(" "),s("li",[t._v("Render props")])])]),t._v(" "),s("li",[t._v("Provider Pattern - redux is an implementation of provider pattern")])]),t._v(" "),s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("blockquote",[s("p",[t._v("Test the behaviour of your application?")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://testing-library.com/docs/react-testing-library/intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("React testing library"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("jest\n"),s("ul",[s("li",[t._v("little bit more helpful output against an expectation")])])])]),t._v(" "),s("h2",{attrs:{id:"look-for-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#look-for-help"}},[t._v("#")]),t._v(" Look for Help")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/tagged/reactjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/tagged/reactjs"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.webdevsimplified.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.webdevsimplified.com/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://reactpatterns.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://reactpatterns.com/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://reactcheatsheet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://reactcheatsheet.com/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.reddit.com/r/reactjs/comments/8avfej/what_does_side_effects_mean_in_react/",target:"_blank",rel:"noopener noreferrer"}},[t._v("What does side-effect mean in react?"),s("OutboundLink")],1)])]),t._v(" "),s("Footer")],1)}),[],!1,null,null,null);e.default=n.exports}}]);