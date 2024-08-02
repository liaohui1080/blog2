(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{338:function(t,s,a){"use strict";a.r(s);var r=a(11),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#gitignore-规则不生效"}},[t._v(".gitignore 规则不生效")]),s("ul",[s("li",[s("a",{attrs:{href:"#错误原因"}},[t._v("错误原因")])]),s("li",[s("a",{attrs:{href:"#解决方案"}},[t._v("解决方案")])])])]),s("li",[s("a",{attrs:{href:"#github-push-超时"}},[t._v("GitHub push 超时")]),s("ul",[s("li",[s("a",{attrs:{href:"#错误原因"}},[t._v("错误原因")])]),s("li",[s("a",{attrs:{href:"#解决方案"}},[t._v("解决方案")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"gitignore-规则不生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitignore-规则不生效"}},[t._v("#")]),t._v(" .gitignore 规则不生效")]),t._v(" "),s("h3",{attrs:{id:"错误原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误原因"}},[t._v("#")]),t._v(" 错误原因")]),t._v(" "),s("p",[t._v("在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。")]),t._v(" "),s("p",[t._v("原因是 .gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore 是无效的。")]),t._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("解决方法就是先把本地缓存删除（改变成未 track 状态），然后再提交。")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cached")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update .gitignore'")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("br"),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"github-push-超时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-push-超时"}},[t._v("#")]),t._v(" GitHub push 超时")]),t._v(" "),s("h3",{attrs:{id:"错误原因-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误原因-2"}},[t._v("#")]),t._v(" 错误原因")]),t._v(" "),s("blockquote",[s("p",[t._v("由于墙的原因 造成提交超时")]),t._v(" "),s("p",[t._v("LibreSSL SSL_read: error:02FFF03C:system library:func(4095):Operation timed out, errno 60")])]),t._v(" "),s("h3",{attrs:{id:"解决方案-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("blockquote",[s("p",[t._v("需要有自己的的代理服务器")])]),t._v(" "),s("ol",[s("li",[t._v("设置针对 github.com 本身(如果你需要代理的仓库，都是 github 上面的，只要设置这个)的代理：")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#只对github.com")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" http.https://github.com.proxy socks5://127.0.0.1:1080\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#上面是别人的，如果你的代理是http类型的，如下设置：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" http.https://github.com.proxy "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:代理的port'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#取消代理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--unset")]),t._v(" http.https://github.com.proxy\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("针对所有仓库包含 github.com 之外的仓库的代理")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" http.proxy "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socks5://127.0.0.1:1080'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" https.proxy "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socks5://127.0.0.1:1080'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#上面是别人的，如果你的代理是http类型的，如下设置：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" http.proxy  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:代理的port'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" https.proxy  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:代理的port'")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);