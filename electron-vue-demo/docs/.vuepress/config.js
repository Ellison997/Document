module.exports = {
    title: 'Electron-Vue-Demo',
    description: 'Electron-Vue-Demo 使用手册',
    base: '/Electron-Vue-Demo/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
    themeConfig: {
        logo: '/assets/img/logo.jpg',
        displayAllHeaders: true, // 默认值：false
        nav: [
            { text: 'Home', link: '/' },
            // { text: 'Github', link: 'https://github.com/Ellison997/Electron-Vue-Demo' },
        ],
        sidebar: [
            ['/introduction/', '简介'],
            ['/sqlite3/', '集成 sqlite3'],
            ['/serialport/', '集成 serialport']
        ],
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'Ellison997/Electron-Vue-Demo',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'Ellison997/Document',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'electron-vue-demo',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'

    }
}