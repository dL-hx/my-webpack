// ES Module 模块引入方式
import Header from './header'
import Sidebar from './Sidebar'
import Content from './Content'
var dom = document.getElementById('root');

new Header();
new Sidebar();
new Content();

// 使用ES6 浏览器不能解析代码,

// 需要引入插件 进行翻译代码 ----> webpack 打包(babel)配置