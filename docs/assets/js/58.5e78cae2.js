(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{359:function(s,t,a){"use strict";a.r(t);var e=a(11),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-core-js-版本错误问题"}},[s._v("1. core-js 版本错误问题")]),t("ul",[t("li",[t("a",{attrs:{href:"#错误原因"}},[s._v("错误原因")])]),t("li",[t("a",{attrs:{href:"#错误代码"}},[s._v("错误代码")])]),t("li",[t("a",{attrs:{href:"#解决方案"}},[s._v("解决方案")])])])]),t("li",[t("a",{attrs:{href:"#_2-配置问题"}},[s._v("2. 配置问题")])])])]),t("p"),s._v(" "),t("h3",{attrs:{id:"_1-core-js-版本错误问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-core-js-版本错误问题"}},[s._v("#")]),s._v(" 1. core-js 版本错误问题")]),s._v(" "),t("p",[s._v("处理 element-ui 的 core-js 版本错误问题")]),s._v(" "),t("h4",{attrs:{id:"错误原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误原因"}},[s._v("#")]),s._v(" 错误原因")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("在https://github.com/vuejs/vuepress/issues/2275中发现，\n原来是element ui 依赖 core-js 的 2.x 版本，而 webpress 项目依赖\ncore-js 的 3.x 版本导致的\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"错误代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误代码"}},[s._v("#")]),s._v(" 错误代码")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Error: Cannot "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" module ‘core-js/library/fn/object/assign\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("下面两个方法都可以解决这个问题")]),s._v(" "),t("ol",[t("li",[s._v("在 config.js 文件（路径 docs.vuepress\\config.js）中加上以下代码")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chainWebpack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alias"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js/library/fn'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js/features'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("直接安装 core-js2*的版本")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" core-js@2.x\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("br"),s._v(" "),t("br"),s._v(" "),t("br"),s._v(" "),t("br"),s._v(" "),t("h3",{attrs:{id:"_2-配置问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置问题"}},[s._v("#")]),s._v(" 2. 配置问题")])])}),[],!1,null,null,null);t.default=n.exports}}]);