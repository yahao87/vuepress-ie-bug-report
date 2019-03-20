module.exports = {
    host: '0.0.0.0',
    "port": 8080,
    "base": "/",
    "dest": "public",
    /* chainWebpack: (config, isServer) => {
        // vuepress 는 기본적으로 buble-loader 를 사용해서 최신 es 문법 적용이 안된다.
        // 이 때문에 babel-loader 를 쓸 수 있도록 해야한다.
        // $ npm install --save-dev babel-loader@^8.0.0-beta.2 @babel/core @babel/preset-env @babel/plugin-syntax-dynamic-import
        // https://qiita.com/mysticatea/items/a0c3aee1217d182e5020
        const jsRule = config.module.rule('js');
        jsRule.uses.delete('buble-loader');
        jsRule.use('babel-loader').loader('babel-loader');
    } */
}