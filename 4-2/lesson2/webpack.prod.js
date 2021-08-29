const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     　　*/
    mode: 'production',
    /**
     　　* cheap:在生成source-map的时候可以不带列信息，只带行信息就可以了
     　　* 同时不要对我load代码的source-map。只要对我的业务代码进行source-map生成
     　　* 这种方式提示的错误比较全，打包速度比较快，
     　　*/
    devtool: 'cheap-module-source-map'
};
module.exports = merge(commonConfig, prodConfig);