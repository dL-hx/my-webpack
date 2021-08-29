const path = require('path');// node 中的核心模块 path
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

// 'presets': [
//     [
//         '@babel/preset-env',
//         {
//             targets: {
//                 chrome: "67",
//             },
//             /**
//              * 当我做polyfill填充的时候，去加一些低版本特性的时候，我不是把所有特性都加进来
//              * 是根据你的业务代码来决定要加什么
//             */
//             'useBuiltIns': 'usage',
//         }
//     ]
// ],

module.exports = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     */
    mode: 'development',
    //development 　devtool: 'cheap-module-eval-source-map'
    //production 　 devtool: 'cheap-module-source-map'
    devtool: 'cheap-module-eval-source-map',

    // 起个服务器
    devServer: {
        // 这个意思是服务器要生成在哪个文件夹下
        contentBase: './dist',
        // 启动的时候自动打开浏览器，然后自动访问这个服务器地址
        open: true,
        port: 8081,
        // 开启Hot Module Replacement
        hot: true,
        // 即便hmr的功能没有生效，浏览器也不要自动刷新
        hotOnly: true,

        historyApiFallback: true
    },

    entry: {
        main: './src/index.js',// 项目的入口文件
        // sub: './src/index.js'
    },
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
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
                use: ['style-loader', 'css-loader', 'postcss-loader'],
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
        new CleanWebpackPlugin(),
        // 当dev-server,两项host配置搞定后，再使用这个插件后，hmr功能就生效了
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // publicPath: '/',
        // 打包后的js  的文件名
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};