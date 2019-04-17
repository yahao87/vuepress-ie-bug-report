module.exports = {
    host: '0.0.0.0',
    "port": 8080,
    "base": "/",
    "dest": "public",
    chainWebpack: (config, isServer) => {
        const jsRule = config.module.rule('js');
        jsRule.uses.delete('buble-loader');
        jsRule.use('babel-loader').loader('babel-loader')
            .options({
                presets: [
                    ["@babel/preset-env", {
                        useBuiltIns: "usage",
                        corejs: 3,
                    }]
                ],
                plugins: ["@babel/plugin-syntax-dynamic-import"],
            });
        const compileRule = config.module.rule('compile');
        compileRule
              .test(/\.js$/)
            .include
              .add(/@vuepress/)
              .add(/.temp/)
              .add(/docs/)
              .add(/packages/)
              .end()
            .use('babel-loader')
                .loader('babel-loader')
                .options({
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: "usage",
                            corejs: 3,
                        }]
                    ],
                    plugins: ["@babel/plugin-syntax-dynamic-import"],
            })
    }
}