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

? 思考
webpack 打包 图片文件 和js 文件的方式不同?
webpack 如何找到项目的主文件的路径?
默认的主文件的路径是什么?
如何设置webpack 配置文件?

## 2.2 webpack 的默认配置文件(webpack.common.js)
webpack.common.js
```javascript
const path = require('path');// node 中的核心模块 path

module.exports = {
    entry: './index.js',// 项目的入口文件
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```
然后在项目的根目录运行,如下命令
> npx webpack

可以看到生成了dist 文件, 文件夹中有打包好的js (bundle.js)

当运行`npx webpack` 命令时
webpack 会去寻找 项目中的配置文件(webpack.common.js), 查看入口和输出的文件及输出文件的名称, 
然后输出 相应的 打包的代码

### 2.3 使用不同的配置文件
> 使用其他文件作为webpack 的配置文件

> 如果出于某些原因要根据特定情况使用不同的配置文件，可以使用--config标志通过命令行更改此配置文件。
Use different config file

If for some reason you want to use different config file depending on certain situations you can change this via command line by using the --config flag.
```package.json
"scripts": {
  "build": "webpack --config prod.config.js" // 修改打包命令为 , 以 prod.config.js 作为 webpack 的配置文件
}
```

### 2.4 优化代码结构
> 1. 新建src 文件, 
> 2. 将 content.js, header.js,index.js, sidebar.js 文件放到src 文件目录下
> 3. 修改webpack.config.js 配置文件路径为 `./src/index.js`
webpack.common.js
 ```
const path = require('path');// node 中的核心模块 path

module.exports = {
+   entry: './src/index.js',// 项目的入口文件
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
 ```
> 4. 再次执行如下命令
> npx webpack

### 2.5 简化打包代码(npm script)
> 使用npm script 简化打包代码
``` package.json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "bundle": "webpack" // 新增命令脚本
  },
  "author": "Tffans",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  }
}
```
> 在命令行 运行如下命令, 进行打包
> npm run bundle
>
>
>
## 总结
global
--
webpack index.js

local
--
npm webpack index.js

npm run bundle

webpack-cli 作用?
使得我们可以在命令行中使用 `webpack` 这个命令
> 可以在命令行中使用 webpack index.js
>
`` webpack.common.js
module.exports = {
    mode:'development', // 指定打包模式为 development|production 版本, development:未压缩, production:压缩版本
    entry: './src/index.js',// 项目的入口文件
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
``
## 三 打包静态资源

## 3.1 配置loader
### 什么是loader
webpack 不能识别非js 结尾的文件, 需要通过loader,让webpack 识别出来, 
要让webpack识别需要去配置 相应的loader
,新建module -> rules 属性 (配置模块打包规则)
### webpack 的配置项
> module -> rules 属性 (配置模块打包规则)

### 3.1.1 打包图片
#### 1 安装file-loader(loader)
>npm install file-loader --save-dev

#### 2 webpack.common.js 添加 module 的配置
> 然后将加载程序添加到您的webpack配置中。例如：
``` webpack.common.js
const path = require('path');// node 中的核心模块 path

module.exports = {
    mode:'development',
    entry: './src/index.js',// 项目的入口文件
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use:  {
                    loader: 'file-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options:{
                        // placeholder 占位符
                        name:'[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                    }
                },
            },
        ],
    },
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```
