function getComponent() {// 创建函数
    // 异步调用lodash 返回回来后, 会放到_这个变量里
    // 这个魔法注释的意思是我异步引入lodash这样的库，在打包的时候，给这个库的名字取名叫lodash。
    return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => { // 函数异步加载 lodash  函数库
        var element = document.createElement('div'); // 加载成功创建div 元素 并返回
        element.innerHTML = _.join(['Dell', 'Lee'], '-');
        return element;
    });
}

getComponent().then(element => {
    document.body.appendChild(element);
});