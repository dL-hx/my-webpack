## 一 基本概念
## 安装 webpack

npm init 
> 初始化package.json 文件  

npm install webpack-cli --save-dev
> 安装webpack脚手架工具

npm install webpack --save
> 安装webpack
>
## npx webpack index.js 
> 使用webpack 翻译 index.js 文件
使用webpack 确保 如下代码被翻译为浏览器可以识别的代码
``` js
import Header from './header'
import Sidebar from './Sidebar'
import Content from './Content'

```

## 总结
webpack 是文件的打包工具

webpack 模块打包工具
// js-> 模块打包工具
 
// 打包css 文件
// 打包img 文件
// import style from './index.css'
// import img from './index.png'


## 二 搭建webpack 环境配置
## 2.1 webpack 的安装使用
## 修改package.json 文件

{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  + "private": true, // 私有项目, 不会被发布到npm 的线上 
  - "main": "index.js", // 项目的主目录,  表示向外部暴露文件 index.js
  "scripts": { //脚本命令, 不需要可以删除 或者新增
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "", // 作者
  "license": "ISC" // 如果需要开源, 修改"license": "MIT"
}

### 修改如下
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true, 
  "scripts": {
    
  },
  "author": "Tffans",
  "license": "ISC"
}

## 安装webpack 环境命令
### 全局安装 webpack
> npm install webpack webpack-cli -g
>
>如果遇到npm 源被墙,  设置 `淘宝镜像地址` 或者 使用 `cnpm` 安装 , 或`代理(翻墙)`

### 卸载webpack
> npm uninstall webpack webpack-cli -g

### 在项目中安装 webpack 方式(推荐)
> npm install webpack webpack-cli --save-dev
> 或者 使用 -D (-D 命令等价于 --save-dev)
> npm install webpack webpack-cli -D

### 全局命令,与本地命令的区别
> webpack -v
> 全局webpack 包 版本
>
>
> npx webpack -v(推荐)
> 在项目中 运行webpack 包 版本
>
### 查看第三方包的信息
> npm info webpack 
### 安装指定版本的 webpack 方式(@)
安装 4.41.5 版本
> npm install webpack@4.41.5 webpack-cli -D

### 安装依赖包
> npm install


