const path = require('path');// node 中的核心模块 path

module.exports = {
    entry: './index.js',// 项目的入口文件
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};