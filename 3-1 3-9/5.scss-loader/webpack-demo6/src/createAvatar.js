import avatar from './avatar.jpg';
import style from './style.scss'

function createAvatar() {
    var img = new Image();
    img.src = avatar;
    img.classList.add(style.avatar); // 让img 元素 添加 avatar 的样式
    var root = document.getElementById('root');
    root.append(img);
}

export default createAvatar