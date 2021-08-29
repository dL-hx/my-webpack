const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     　　*/
    mode: 'development',
    /**
     　　* cheap:在生成source-map的时候可以不带列信息，只带行信息就可以了
     　　* 同时不要对我load代码的source-map。只要对我的业务代码进行source-map生成
     　　* 这种方式提示的错误比较全，打包速度比较快，
     　　*/
    devtool: 'cheap-module-eval-source-map',

    // 起个服务器
    devServer: {
        // 这个意思是服务器要生成在哪个文件夹下
        contentBase: './dist',
        port: 8081,
        // 启动的时候自动打开浏览器，然后自动访问这个服务器地址
        open: true,
        // 开启Hot Module Replacement
        hot: true
    },
    // HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = merge(commonConfig, devConfig);