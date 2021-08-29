function handleClick() {// 创建函数
    var element = document.createElement('div'); // 加载成功创建div 元素 并返回
    element.innerHTML ='Dell, Lee'
    document.body.appendChild(element)
}

export default handleClick;