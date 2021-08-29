function getComponent() {// 创建函数
    return import('lodash').then(({default: _}) => { // 函数异步加载 lodash  函数库
        var element = document.createElement('div'); // 加载成功创建div 元素 并返回
        element.innerHTML = _.join(['Dell', 'Lee'], '-');
        return element;
    });
}

getComponent().then(element => {
    document.body.appendChild(element);
});

// 总结：
//
// 1、代码分割跟webpack无关
//
// 2、所以webpack分割代码有两种方式，一种是同步的方式，靠

/*
optimization: {
    // 帮我们做代码分割
    splitChunks: {
        chunks: 'all'
    }
},

*/

// 这个配置。
// 一种是异步的方式，无需做任何配置，会自动进行代码分割。需要额外的安装 babel-plugin-dynamic-import-webpack 支持。(新版本已支持 动态模块加载)