const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

let commonConfig = {
    // 这个文件要做打包，从哪一个文件开始打包
    entry: {
        main: './src/index.js'
    },
    // 打包模块不知道该怎么办，就去模块配置里面该怎么办
    module: {
        // 规则
        rules: [{
            test: /\.js$/,
            // 如果你的这个js文件在node_modules里面，就不使用babel-loader了
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            // 假设是以jpg结尾的，我需要一个load帮助我们去打包
            test: /\.jpg|png|gif$/,
            use: {
                loader: 'url-loader',
                options: {
                    // 原来是什么名字，打包好还是什么名字
                    name: '[name]_[hash].[ext]',
                    // 当我碰到jpg,png,gif的时候，打包到根目录下到imgs文件夹里
                    outputPath: 'imgs/',
                    limit: 2048
                }
            }
        }, {
            test: /\.eot|ttf|svg|woff$/,
            use: {
                loader: 'file-loader'
            }
        }]
    },
    // HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),

        // webpack自带的插件
        new webpack.ProvidePlugin({
            // 意思是如果我的一个模块中使用了$这样一个字符串，我就会在模块中自动的引入jquery这个
            $: 'jquery',
            _: 'lodash'
        })
    ],
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: false, // 性能
    // 打包文件要放到哪里去，就配置在output这个对象里
    output: {

        /**
         　　　　* 打包出的文件要把他放到哪一个文件夹下，path后面要放一个绝对路径
         　　　　* __dirname指的是webpack.config.js所在的当前目录的这个路径
         　　　　* 下面这个结合就是一个绝对路径
         　　　　*/
        path: path.resolve(__dirname, '../dist')
    }
};

module.exports = (env) => {
    // 如果有这个全局变量，且是线上环境，否则是开发环境
    if (env && env.production) {
        return merge(commonConfig, prodConfig);
    } else {
        return merge(commonConfig, devConfig);
    }
}