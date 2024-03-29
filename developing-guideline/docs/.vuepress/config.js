module.exports = {
    title: '湘亭科技软件开发指南',
    description: 'Developing-Guideline 手册',
    base: '/Document/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        displayAllHeaders: false, // 默认值：false
        activeHeaderLinks: true, // 默认值：true
        nav: [
            { text: '首页', link: '/' },
            { text: '编程规约', link: '/specification/' },
            { text: 'Vue', link: '/vue/' },
            { text: 'React', link: '/react/' },
            { text: 'Node.js', link: '/nodejs/' },
            { text: 'Android', link: '/android/' },
            { text: 'Electron', link: '/electron/' },
            { text: 'Git', link: '/git/' },
            { text: '移动端', link: '/mobile/' },
            { text: '服务器', link: '/server/' },
            { text: '网络安全', link: '/safety/' },
            { text: '测试', link: '/test/' },
            { text: '技术分享', link: '/sharing/' },
            // { text: 'Github', link: 'https://github.com/Ellison997/Document/tree/main/developing-guideline' },
        ],
        sidebar: {
            '/specification/': ['', {
                title: '命名规范',
                collapsable: false,
                children: [
                    'name_dir',
                    'name_image',
                    'name_htmlcss',
                    'name_classname'
                ]
            }, {
                title: 'HTML规范',
                collapsable: false,
                children: [
                    'html_code',
                    'html_note',
                    'html_template',
                    'html_webapp'
                ]
            }, {
                title: 'CSS规范',
                collapsable: false,
                children: [
                    'css_code',
                    'css_note',
                    'css_query',
                    'css_reset',
                    'css_sass',
                    'css_webkit'
                ]
            }, {
                title: 'JavaScript 规范',
                collapsable: false,
                children: [
                    'js_code',
                    'js_language',
                    'js_vue'
                ]
            }, {
                title: '图片规范',
                collapsable: false,
                children: [
                    'image_format',
                    'image_import',
                    'image_quality',
                    'image_size',
                ]
            }],
            '/react/': ['', {
                title: 'React基础',
                collapsable: false,
                children: [
                    'basics_character'
                ]
            }]
        },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'Ellison997/Document',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'Ellison997/Document',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'developing-guideline/docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'

    }
}