(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{454:function(t,n,e){},530:function(t,n,e){"use strict";var a=e(454);e.n(a).a},547:function(t,n,e){"use strict";e.r(n);e(37),e(85),e(59),e(8),e(84),e(124),e(38);var a={data:function(){return{pages:[]}},created:function(){var t=this;this.$site.pages.forEach((function(n){n.path!=t.currentPath&&n.path.includes(t.currentPath)&&t.pages.push(n)}))},computed:{pageCount:function(){return this.pages.length.toString()},currentPath:function(){return this.$page.path},numArticles:function(){return this.pageCount+" Articles"}}},r=(e(530),e(7)),i=Object(r.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",[e("strong",[e("Badge",{attrs:{vertical:"middle",type:"tip",text:t.numArticles}})],1)]),t._v(" "),e("br"),e("br"),t._v(" "),e("ol",t._l(t.pages,(function(n){return e("li",{key:n.key},[e("article",[e("h2",[e("router-link",{attrs:{to:n.path,tag:"a"}},[t._v("\n            "+t._s(n.title)+"\n            "),e("span",[e("span",{staticClass:"lastupdated"},[t._v("\n                "+t._s(n.readingTime.text)+"\n                ")])])])],1),t._v(" "),e("ul",{staticClass:"menu"},t._l(n.frontmatter.tags,(function(t){return e("li",{key:t},[e("Badge",{attrs:{type:"warning",vertical:"middle",text:t}})],1)})),0)])])})),0)])}),[],!1,null,"287c169f",null);n.default=i.exports}}]);
//# sourceMappingURL=9.3fba009e.js.map