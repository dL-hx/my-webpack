// ES Module 模块引入方式

// CommonJS  模块引入规范
// CMD
// AMD
// webpack is a module bundler.
// webpack 模块打包工具
// js 模块打包工具

/*
import Header from './header';
import Sidebar from './Sidebar';
import Content from './Content';

*/


// CommenJS 规范
var Header = require('./header')
var Sidebar = require('./sidebar')
var Content = require('./content')
new Header();
new Sidebar();
new Content();
