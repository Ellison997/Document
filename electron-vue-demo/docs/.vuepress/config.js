module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/Electron-Vue-Demo/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}