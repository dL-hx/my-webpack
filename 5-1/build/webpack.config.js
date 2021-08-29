const path = require('path')

module.exports = {
    mode:'production',
    entry: {
        "main": "./dist/library.js",
    },
    // 如果打包过程中遇到lodash，就忽略这个库，不要打包到代码里面去
    externals : {
        lodash :'lodash'
    },
    output:{
        path:path.resolve(__dirname, '../dist'),
        filename: 'library.js',
        // 打包生成的代码挂载到页面到一个全局变量上
        library: 'library',
        // 通过任何形式，都可以引用的到
        libraryTarget: 'umd',
        globalObject: 'this',
    }
}