/** @format */

const path = require('path');

module.exports = {
    //处理 element-ui core-js版本错误问题
    // chainWebpack(config) {
    //     //在https://github.com/vuejs/vuepress/issues/2275中发现，原来是element ui依赖core-js的2.x版本，而webpress项目依赖core-js的3.x版本导致的
    //     config.resolve.alias.set('core-js/library/fn', 'core-js/features');
    // },
    // base: '/begda-ui/', //连接的基础路径
    base: '/blog2/', //连接的基础路径
    port: 4002,
    dest: path.resolve('docs','blog2'), //编译输出目录
    // 国际化相关
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'Begda',
            description: '记录平时常用的一些东西'
        }
    },
    head: [
        // ['link', { rel: 'stylesheet', href: './css/css.css' }],
        ['link', {rel: 'stylesheet', href: '//at.alicdn.com/t/font_1706538_0cfbwmm8gq77.css'}],
        ['viewport', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],

        //高德地图key
        // ['script', { src: `https://unpkg.com/begda-ui@0.0.25/lib/index.js` }]
    ],
    markdown: {
        lineNumbers: true, // 代码块显示行号
        extractHeaders: ['h2', 'h3'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
        // // markdown-it-anchor 的选项
        anchor: {permalink: true},
        // // markdown-it-toc 的选项
        toc: {includeLevel: [2, 3, 4]},
        config: md => {
            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-***'))
        }
    },


    plugins: {
        'demo-container': {},
        //自动生成侧边栏,会直接让sidebar失效,所以下面用 sidebar_dd 这次参数做了新的侧边栏数据
        'vuepress-plugin-auto-sidebar': {
            sidebarDepth: 2,
            title: {
                // more options:
                // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
                mode: "titlecase"
            },
            ignore: [
                // example:
                // ignore files starting with `ignore-` in the `/menu3/menu 3-3/` directory
                {
                    menu: "/小说/",
                    regex: "ignore-*"
                }
            ]
        },
    },
    theme: require.resolve('./vuepress-theme-begda'), //设置主题
    themeConfig: {
        logo: '/images/logo.jpg',
        smoothScroll: true, //启用页面滚动效果。
        noFoundPageByTencent: false, //关闭公益广告
        type: 'blog', //设置首页为blog组件
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '更新时间', // 文档更新时间：每个文件git最后提交的时间
        displayAllHeaders: false, // 默认值：false 侧边栏折叠所有页面的左侧标题链接
        activeHeaderLinks: true, // 默认值：true
        search: true,
        searchMaxSuggestions: 10,

        nav: [
            {text: '首页', link: '/'},
            {text: 'BegdaUI', link: '/BegdaUI/'},
            {text: '易经', link: '/易经/'}, // 内部链接 以docs为根目录
            {text: '梅花易数', link: '/梅花易数/'}, // 内部链接 以docs为根目录
            {text: '小说', link: '/小说/首页'}, // 外部链接
            {text: '收藏', link: '/收藏/网址'}, // 外部链接
            {
                text: 'Github',
                link: '//github.com/begda/begda-ui/',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        ],
        // sidebar:'auto',
        sidebar_dd: {
            '/收藏/': ['网址', '语言精句'],
            '/易经/爻辞/': [
                {title: '乾', collapsable: true, children: ['乾/乾', '乾/九二', '乾/九三', '乾/九四', '乾/九五']},
                {title: '坤', collapsable: true, children: ['坤/坤']}
            ],

            '/梅花易数/': [
                {
                    title: '卷一',
                    collapsable: true,
                    children: ['象数义理', '起卦', '卦例/物卦起例', '卦例/自己的']
                },
                {title: '解卦', collapsable: true, children: ['体克用', '解卦诀窍', '起卦']},

            ],

            '/小说/': [
                {
                    title: '我在明朝开淘宝',
                    collapsable: true,
                    children: ['我在明朝开淘宝/首页', '我在明朝开淘宝/第一次穿越']
                },
                {title: '来自未来的男人', collapsable: true, children: ['来自未来的男人/首页']},
                {title: '素材', collapsable: true, children: ['素材/首页', '素材/人物/刘汉东2', '素材/人物/朱小强']}
            ],

        },
        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'Begda', // 必需
            link: '//github.com/begda/begda-ui/' // 可选的
        }
    }
};
