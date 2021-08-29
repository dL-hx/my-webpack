// CommonJS 规范
// var avatar = require('./avatar.jpg')
// console.log(avatar)

import avatar from './avatar.jpg';
import './index.css';

var img = new Image();
img.src = avatar;
img.classList.add('avatar'); // 让img 元素 添加 avatar 的样式
// img.className = 'avatar'

var root = document.getElementById('root');
root.append(img);