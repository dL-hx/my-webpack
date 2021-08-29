const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
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
            loader: 'babel-loader',
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
        }, {
            // 假设是以css结尾的，我需要一个load帮助我们去打包
            test: /\.scss$/,
            // 需要两个loader，所以不能是个对象，需要是个数组
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }]
    },
    // HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        // 帮我们做代码分割
        splitChunks: {
            // 意思是做代码分割的时候只对异步代码生效，如果想对同步异步都有效，配置成"all"
            chunks: 'all',
            // 引入到这个类库大于30kb才做代码分割，如果小于30kb就不做代码分割
            minSize: 30000,
            // 当改成2就不做代码分割了，因为他发现代码里面只用了一次lodash的引入，小于2
            minChunks: 1,
            // 同时加载的模块数，最多是5个。也就是说打包前5个的时候，会帮忙分割代码，后面的就不分割了
            maxAsyncRequests: 5,
            // 入口文件，引入其他的js库，引入的文件最多只能分割成3个文件
            maxInitialRequests: 3,
            // 文件生成的时候，文件中间会有一个链接符，比如verdors~main.js
            automaticNameDelimiter: '~',
            // 指的的cachegroups的名字有效,不然就是0.js,1.js
            name: true,
            // 缓存组
            cacheGroups: {
                vendors: {
                    /**
                    * test会检测，同步引入的库是否是在node_modules里面，是的话单独打包
                    * 打包vendor~main.js。符合vendors这个组，同时入口是main。
                    */
                    test: /[\\/]node_modules[\\/]/,
                    /**
                    * lodash既符合vendors，也符合default。因为default没有test，就是都支持，那么根据什么来呢
                    * 根据priority,他的值越大，优先级越高，比如-10>-20
                    */
                    priority: -10,
                    // 当代码同步的时候，一旦遇到是第三方类库，同时满足大于30kb，同时被引入超过1次，同时满足下面的条件，统一打包到vendors.js里面
                    filename: 'vendors.js'
                },
                default: false
            }
        }
    },
    // 打包文件要放到哪里去，就配置在output这个对象里
    output: {
        // 打包好的文件名字
        filename: '[name].js',
        /**
         　　　　* 打包出的文件要把他放到哪一个文件夹下，path后面要放一个绝对路径
         　　　　* __dirname指的是webpack.config.js所在的当前目录的这个路径
         　　　　* 下面这个结合就是一个绝对路径
         　　　　*/
        path: path.resolve(__dirname, '../dist')
    }
};