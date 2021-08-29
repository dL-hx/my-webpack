import avatar from './avatar.jpg';
function createAvatar() {
    var img = new Image();
    img.src = avatar;
    img.classList.add('avatar'); // 让img 元素 添加 avatar 的样式
    var root = document.getElementById('root');
    root.append(img);
}

export default createAvatar