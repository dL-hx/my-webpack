const path = require('path');// node 中的核心模块 path
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     */
    mode: 'development',
    entry: {
        main: './src/index.js',// 项目的入口文件
        sub: './src/index.js'
    },
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use: {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit: 10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
            {
                test: /\.eot|ttf|svg|woff$/, // 在执行引入字体文件的时候, 这个时候借助于file-loader打包
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules:true // 加一个modules的配置，在引入css的地方改成这样
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        // publicPath: 'http://cdn.com.cn',
        // 打包后的js  的文件名
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};