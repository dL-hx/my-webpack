const path = require('path');// node 中的核心模块 path

module.exports = {
    mode: 'development',
    entry: './src/index.js',// 项目的入口文件
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
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:2
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ],
            },
        ],
    },
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};