// CommonJS 规范
// var avatar = require('./avatar.jpg')
// console.log(avatar)

import avatar from './avatar.jpg'
var img = new Image()
img.src = avatar

var root = document.getElementById('root')
root.append(img)