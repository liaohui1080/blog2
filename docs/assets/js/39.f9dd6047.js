(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{345:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"官网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[t._v("#")]),t._v(" 官网")]),t._v(" "),s("p",[t._v("即用型 OCR，支持 80 多种语言和所有流行的书写脚本，包括：拉丁文、中文、阿拉伯文、梵文、西里尔文等。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/JaidedAI/EasyOCR",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文 Github 官网"),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.jaided.ai/easyocr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("演示文档,教程,API"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("pip")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" easyocr\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("从 github 安装")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" git+https://github.com/JaidedAI/EasyOCR.git\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Note 1: For Windows, please install torch and torchvision first by following the official instructions here https://pytorch.org. On the pytorch website, be sure to select the right CUDA version you have. If you intend to run on CPU mode only, select "),s("code",[t._v("CUDA = None")]),t._v(".")]),t._v(" "),s("p",[t._v("Note 2: We also provide a Dockerfile "),s("a",{attrs:{href:"https://github.com/JaidedAI/EasyOCR/blob/master/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" easyocr\nreader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" easyocr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ch_sim'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this needs to run only once to load the model into memory")]),t._v("\nresult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readtext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chinese.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("The output will be in a list format, each item represents a bounding box, the text detected and confident level, respectively.")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("189")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("469")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("469")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("165")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("189")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("165")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'愚园路'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3754989504814148")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("134")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("134")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'西'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.40452659130096436")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("517")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("565")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("565")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("517")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'东'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9989598989486694")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("78")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("126")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("136")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("126")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("136")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("156")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("78")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("156")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'315'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8125889301300049")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("514")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("126")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("574")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("126")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("574")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("156")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("514")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("156")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'309'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4971577227115631")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("226")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("170")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("414")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("170")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("414")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("226")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Yuyuan Rd.'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8261902332305908")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("79")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("173")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("125")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("173")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("125")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("213")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("79")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("213")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'W'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9848111271858215")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("529")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("173")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("569")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("173")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("569")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("213")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("529")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("213")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8405593633651733")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("Note 1: "),s("code",[t._v("['ch_sim','en']")]),t._v(" is the list of languages you want to read. You can pass\nseveral languages at once but not all languages can be used together.\nEnglish is compatible with every language and languages that share common characters are usually compatible with each other.")]),t._v(" "),s("p",[t._v("Note 2: Instead of the filepath "),s("code",[t._v("chinese.jpg")]),t._v(", you can also pass an OpenCV image object (numpy array) or an image file as bytes. A URL to a raw image is also acceptable.")]),t._v(" "),s("p",[t._v("Note 3: The line "),s("code",[t._v("reader = easyocr.Reader(['ch_sim','en'])")]),t._v(" is for loading a model into memory. It takes some time but it needs to be run only once.")]),t._v(" "),s("p",[t._v("You can also set "),s("code",[t._v("detail=0")]),t._v(" for simpler output.")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readtext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chinese.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" detail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Result:")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'愚园路'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'西'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'东'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'315'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'309'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Yuyuan Rd.'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'W'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Model weights for the chosen language will be automatically downloaded or you can\ndownload them manually from the "),s("a",{attrs:{href:"https://www.jaided.ai/easyocr/modelhub",target:"_blank",rel:"noopener noreferrer"}},[t._v("model hub"),s("OutboundLink")],1),t._v(" and put them in the '~/.EasyOCR/model' folder")]),t._v(" "),s("p",[t._v("In case you do not have a GPU, or your GPU has low memory, you can run the model in CPU-only mode by adding "),s("code",[t._v("gpu=False")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" easyocr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ch_sim'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gpu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("For more information, read the "),s("a",{attrs:{href:"https://www.jaided.ai/easyocr/tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("tutorial"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://www.jaided.ai/easyocr/documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"run-on-command-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-on-command-line"}},[t._v("#")]),t._v(" Run on command line")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ easyocr "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" ch_sim en "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" chinese.jpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--detail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--gpu")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("True\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"train-use-your-own-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#train-use-your-own-model"}},[t._v("#")]),t._v(" Train/use your own model")]),t._v(" "),s("p",[t._v("For recognition model, "),s("a",{attrs:{href:"https://github.com/JaidedAI/EasyOCR/blob/master/custom_model.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("For detection model (CRAFT), "),s("a",{attrs:{href:"https://github.com/JaidedAI/EasyOCR/blob/master/trainer/craft/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"implementation-roadmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation-roadmap"}},[t._v("#")]),t._v(" Implementation Roadmap")]),t._v(" "),s("ul",[s("li",[t._v("Handwritten support")]),t._v(" "),s("li",[t._v("Restructure code to support swappable detection and recognition algorithms\nThe api should be as easy as")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" easyocr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" detection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recognition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Transformer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The idea is to be able to plug in any state-of-the-art model into EasyOCR. There are a lot of geniuses trying to make better detection/recognition models, but we are not trying to be geniuses here. We just want to make their works quickly accessible to the public ... for free. (well, we believe most geniuses want their work to create a positive impact as fast/big as possible) The pipeline should be something like the below diagram. Grey slots are placeholders for changeable light blue modules.")])])}),[],!1,null,null,null);s.default=e.exports}}]);