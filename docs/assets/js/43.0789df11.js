(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{344:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在文章页面显示当前大纲\n")]),t._v(" "),s("h3",{attrs:{id:"toc-辅助函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toc-辅助函数"}},[t._v("#")]),t._v(" toc 辅助函数")]),t._v(" "),s("p",[t._v("解析内容中的标题标签 (h1~h6) 并插入目录。\n"),s("code",[t._v("<%- toc(str, [options]) %>")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("class")]),t._v(" "),s("td",[t._v("Class 名称")]),t._v(" "),s("td",[t._v("toc")])]),t._v(" "),s("tr",[s("td",[t._v("list_number")]),t._v(" "),s("td",[t._v("显示编号")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("max_depth")]),t._v(" "),s("td",[t._v("生成 TOC 的最大深度")]),t._v(" "),s("td",[t._v("6")])]),t._v(" "),s("tr",[s("td",[t._v("min_depth")]),t._v(" "),s("td",[t._v("生成 TOC 的最小深度")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("p",[t._v("示例：\n"),s("code",[t._v("<%- toc(page.content) %>")])]),t._v(" "),s("h3",{attrs:{id:"在主题里添加代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在主题里添加代码"}},[t._v("#")]),t._v(" 在主题里添加代码")]),t._v(" "),s("p",[t._v("themes/hollow/layout/_partial/article-full.ejs")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--  页面文章目录--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("toc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden-xs hidden-sm hidden-md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        <%- toc(item.more, {list_number: false}) %>\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"在主题里添加css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在主题里添加css"}},[t._v("#")]),t._v(" 在主题里添加css")]),t._v(" "),s("p",[t._v("themes/hollow/source/css/article.styl")]),t._v(" "),s("div",{staticClass:"language-styl line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-styl"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文章目录css")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#toc")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),t._v(" fixed")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("em")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),t._v(" color-link")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".toc")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ol")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".toc-item")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".toc-child")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".toc-link")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#333333")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);