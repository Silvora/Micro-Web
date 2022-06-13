module.exports = {
    publicPath: "//localhost:3002",
    devServer: {
        port: 3002,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: `vueApp`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            //jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};