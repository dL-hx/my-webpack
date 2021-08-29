> https://blog.csdn.net/u013210620/article/details/83069379
> https://www.cnblogs.com/wzndkj/category/1441873.html
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

### 3.1.1 打包图片(file-loader)
#### 1 安装file-loader(loader)
>npm install file-loader --save-dev

#### 2 webpack.common.js 添加 module 的配置
> 然后将加载程序添加到您的webpack配置中。例如：
``` webpack.common.js
const path = require('path');// node 中的核心模块 path

module.exports = {
    mode:'development',
    entry: './src/index.js',// 项目的入口文件
   + module: {
   +     rules: [// 其中包含各种loader的使用规则
   +         {
   +             test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
   +             use:  {
   +                 loader: 'file-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
   +                 options:{
   +                     // placeholder 占位符
   +                     name:'[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
   +                     outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
   +                 }
   +             },
   +         },
   +     ],
   + },
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```

运行 `npm run bundle` 命令后可以看到 图片被打包到: dist/images 


### 3.1.2 打包图片(url-loader)
#### 1 安装url-loader(loader)
>npm install url-loader --save-dev

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
        +            loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
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

运行 `npm run bundle` 命令后可以看到 图片被打包到: dist/images 

会将图片转换为base64 格式的图片, 加载到js文件中, 导致 `bundle.js` 文件很大, 所以网站打开时,
会很慢,
优点: 减少了一次 图片的 http请求
缺点: `.js` 文件很大

### 3.1.3 打包图片(url-loader) (推荐)
? 添加配置参数, 使得小图片以base64 方式存在于 `bundle.js` 文件中
减少http 请求次数, 大图片以file-loader 方式进行打包

#### 4 添加配置参数(  limit: 2048, ( bytes ))
2048, ( bytes) => 2kb
大于(或等于) 2kb 图片会被打包到 images 文件夹下
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
                  +  loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options:{
                        // placeholder 占位符
                        name:'[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                  +     limit:10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
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

运行 `npm run bundle` 命令后可以看到 

当图片大小 大于(或等于) 10 kb 图片会被 打包到: dist/images 
小于 10 kb 图片会以base64 方式 打包到 `bundle.js` 文件中

实际上, url-loader 和 file-loader 很相似,  url-loader 比 file-loader
多了一个配置项 `limit` 参数, 可以让 小图片以 base64 方式 打包, 
大图片以 file (文件) 形式打包

### 3.2  打包静态资源

### 3.2.1  打包静态资源(css)
#### 1 安装css-loader 和 style-loader (loader)
>npm install --save-dev css-loader
>npm install --save-dev style-loader

#### 2 webpack.common.js 添加 module 的配置
``` javascript
const path = require('path');// node 中的核心模块 path

module.exports = {
    mode:'development',
    entry: './src/index.js',// 项目的入口文件
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use:  {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options:{
                        // placeholder 占位符
                        name:'[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit:10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
          +  {
          +      test: /\.css$/i,
          +      use: ['style-loader', 'css-loader'],
          +  },
        ],
    },
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```


css-loader 作用 ,
像官网所说解析css代码中的url、@import语法像import和require一样去处理css里面引入的模块

style-loader作用 ,
> js 动态加载
会把样式代码 通过js 添加到 index.html 的head 标签中的style 标签中,
在浏览器运行时, 会发现, head 标签 中包含 style 标签
> 会把 css-loader 的样式, 挂载到head 标签中
>
所以: css 打包, style-loader 要配合 css-loader 来使用

### 3.2.2  打包静态资源(scss)
? 想让我们的项目支持, sass , css 文件的新的写法, 需要配置这种 文件的相应的loader
这里安装 , sass-loader

#### 1 安装sass-loader 和 node-sass (loader)
>npm install sass-loader node-sass --save-dev

#### 2 webpack.common.js 添加 module 的配置
```scss
body {
  .avatar{
    width: 150px;
    height: 150px;
  }
}
```
```javascript
const path = require('path');// node 中的核心模块 path

module.exports = {
    mode: 'development',
    entry: './src/index.js',// 项目的入口文件
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use: {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit: 10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
            {
                test: /\.scss$/i, // 支持打包scss 文件
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```
### 3.2.3  自动添加 兼容浏览器的前缀

```scss
body {
  .avatar{
    width: 150px;
    height: 150px;
    transform: translate(100px, 100px); /*图片偏移 100px, 100px*/
  }
}
```

? 希望在写css 时候添加,兼容各大浏览器厂商的前缀

#### 1 安装postcss-loader 和 autoprefixer 插件
>npm i postcss-loader -D
>npm i autoprefixer -D
#### 2 webpack.common.js 添加 module 的配置
``` javascript
const path = require('path');// node 中的核心模块 path

module.exports = {
    mode: 'development',
    entry: './src/index.js',// 项目的入口文件
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use: {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit: 10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
            {
                test: /\.scss$/i,
          +      use: ['style-loader', 'css-loader', 'sass-loader','postcss-loader'],
            },
        ],
    },
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```
#### 3 创建 postcss.config.js
``` javascript
+ const autoprefixer = require('autoprefixer');
+ module.exports = {
+     plugins: [
+         autoprefixer
+     ]
+ };
```

再次打包后 可以看到浏览器中自动添加了 -web-kit 的兼容的代码
``` css
body .avatar {
  width: 150px;
  height: 150px;
  -webkit-transform: translate(100px, 100px);
  transform: translate(100px, 100px); 
}
```

#### 补充知识
在 style.scss 中 引入 新的scss 文件, 
那么就要去修改 webpack.common.js 的css 配置
``` scss
@import "./avatar.scss";

body {
  .avatar {
    width: 150px;
    height: 150px;
    transform: translate(100px, 100px);
  }
}
```

webpack.common.js
``` javascript
const path = require('path');// node 中的核心模块 path

module.exports = {
    mode: 'development',
    entry: './src/index.js',// 项目的入口文件
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use: {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit: 10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
               +     {
               +         loader: 'css-loader',
               +         options: {
               +             importLoaders:2
               +         }
               + },
                    'sass-loader',
                    'postcss-loader'
                ],
            },
        ],
    },
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```
注: 
这里的importLoaders: 2 是在css-loader 之后指定2个数量的loader（即 postcss-loader）来处理import进来的资源


在index.js里面引入style.scss，webpack在打包的时候，
先去执行postcss-loader，然后执行scss-loader，css-loader,style-loader。
但是在style.scss里面遇到avatar.scss的时候，就不再去执行postcss-loader了。
而是执行scss-loader了，那如果写上这个配置
importLoaders: 2
那么还会从下到上执行postcss-loader,scss-loader...。所以这个就能保证，我在哪引用都没有问题。

修改完成后, 再次打包, 此时支持scss 文件的 导入



---
接下来我们了解下css的模块化
createAvatar.js
```javascript
import avatar from './avatar.jpg';
function createAvatar() {
    var img = new Image();
    img.src = avatar;
    img.classList.add('avatar'); // 让img 元素 添加 avatar 的样式
    var root = document.getElementById('root');
    root.append(img);
}

export default createAvatar

```

index.js
```javascript
import avatar from './avatar.jpg';
import createAvatar from './createAvatar';
import './style.scss'

createAvatar()

var img = new Image();
img.src = avatar;
img.classList.add('avatar'); // 让img 元素 添加 avatar 的样式
// img.className = 'avatar'

var root = document.getElementById('root');
root.append(img);

```


这样我们打包出来，会看到两张图片，而且样式都是一样的。
这个我们要说明一个什么问题呢。在index.js里面引入的index.css会作用于当前页面的img标签，
还会作用于createAvatar里面的img标签，这么写，这个样式是全局的，
这样很容易引起样式冲突的问题。这个时候我们就引入了一个概念，css module的概念，
css模块化的概念，什么意思呢，就是这个css样式只作用于当前页面。


加一个modules的配置，在引入css的地方改成这样


webpack.common.js
``` javascript
const path = require('path');// node 中的核心模块 path

module.exports = {
    mode: 'development',
    entry: './src/index.js',// 项目的入口文件
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use: {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit: 10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:2,
                   +         modules:true // 加一个modules的配置，在引入css的地方改成这样
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ],
            },
        ],
    },
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```

index.js
```javascript
import avatar from './avatar.jpg';
import style from './index.scss';
import createAvatar from './createAvatar';

createAvatar();

var img = new Image();
img.src = avatar;
img.classList.add(style.avatar);

var root = document.getElementById('root');
root.appendChild(img);

```


打包运行会发现一个是什么样式都没有，一个是有样式的，这样就能保证只有这个文件有对应的样式。
如果想要createAvatar也有样式，那么在createAvatar里面也引入

createAvatar.js
```javascript
import avatar from './avatar.jpg';
import style from './index.scss';

function createAvatar() {
　　var img = new Image();
　　img.src = avatar;
　　img.classList.add(style.avatar);

　　var root = document.getElementById('root');
　　root.appendChild(img);
}

export default createAvatar;
```

这样又有样式了，这样带来的语法好处是，
我这个文件的样式和其它文件的样式不会有耦合，冲突，相对独立。


---
打包字体文件

? 那么如何使用webpack,打包字体文件,src目录下一个font文件夹，放着字体的格式

index.js
``` javascript
var root = document.getElementById('root');
import './style.scss'

root.innerHTML = '<div class="iconfont icon-changjingguanli">abc</div>';
```

style.scss
``` scss
@font-face {
  font-family: "iconfont";
  src: url('./font/iconfont.eot?t=1543245201565'); /* IE9*/
  src: url('./font/iconfont.eot?t=1543245201565#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAUUAAsAAAAAB+gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZB101UY21hcAAAAYAAAABRAAABfpko8ApnbHlmAAAB1AAAAT4AAAHEQ6PMXmhlYWQAAAMUAAAALwAAADYTY6EfaGhlYQAAA0QAAAAcAAAAJAfeA4RobXR4AAADYAAAAAwAAAAMDAAAAGxvY2EAAANsAAAACAAAAAgAfgDibWF4cAAAA3QAAAAfAAAAIAESAGBuYW1lAAADlAAAAUUAAAJtPlT+fXBvc3QAAATcAAAANwAAAEtetkw6eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBxeJ75OYm7438AQw9zA0AAUZgTJAQDtMgyweJztkLkNgEAMBMc+Q4Aog4CAYojIufYp4vBDGaw0I+3KkYEJaM7hGMiFEDl9ldwbS+7GljcW+9PHcN9h75ZW18yfNb1/TeNPRX2uQF/bKQ21AAAAeJxtkL9Kw1AUxs/JpSlCuZLb9BZJSJM0TS1CqGl6Mvl/kA6C4OLYxRdwcBG0g8/g4pJH8BG6OAo+Qh2dfIJGb2JrpbicP9/v44NzoALw9caeWR82oQUDOIALAPQ4Vg0Hm94+pkaEzNTbnh8OjYQGXiwbqefrpixHw5QxDQvPUqMkxH+4dp6Pe4RIPczKviF4PuZCcMy4GK9GYQukj3xW7q6qGK9Bra9S/qbl+Mv5TFlWyT2avxeCLbRsDQAwdfuUZewQdiCBPYCOr1c7lHRTOVCHR9hVb5DNaoRtrjlIaUVvqKeUiDlo6n6YUD3ChGJp6sx1YpF/1sVrK6QR4oiKyl/s0+7xVXv3+q6PlrZQR49WEFAQ3P606ZZ82r7sPDSWmFzr3nbwbHJzYkRZrbbM046w8FMwx8UAAN9e80/ZAAB4nGNgZGBgAGJjl5PM8fw2Xxm4WRhA4IaS3kQE/f8ACwOzA5DLwcAEEgUA714IdgB4nGNgZGBgbvjfwBDDwgACQJKRARUwAwBHCQJsBAAAAAQAAAAEAAAAAAAAAAB+AOJ4nGNgZGBgYGYIYWBlAAEmIOYCQgaG/2A+AwARQgFzAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJmRiZGZkYWBPzkjMS89KzMvPb00MS8nkz8tNa8iEyiUBsTFGZkMDADmWgyTAA==') format('woff'),
  url('./font/iconfont.ttf?t=1543245201565') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./font/iconfont.svg?t=1543245201565#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-changjingguanli:before { content: "\eb61"; }

.icon-fenxiangfangshi:before { content: "\eb62"; }

```

这样理论上没有什么问题，运行 npm run bundle。发现报错了，报什么错呢

![font-build-err](https://img2018.cnblogs.com/blog/331769/201904/331769-20190421081618322-419351155.png)

如图，他说字体不知道如何打包，这是为什么呢，在执行引入字体文件的时候，webpack不知道如何打包，这个时候借助于file-loader打包

webpack.common.js
``` javascript
module: {
　　+ rules: [{
　　+ 　　test: /\.eot|ttf|svg|woff$/,
　　+ 　　use: {
　　+ 　　　　loader: 'file-loader'
　　+ 　　}
　　+ }]
},
```

再重新运行npm run bundle，就没有报错了，页面上对应的字体内容也显示出来了。


### 3.3 使用plugins让打包更便捷
之前运行dist下的js，都是手动把index.html拷贝过去的，每次把dist文件夹删除，都需要将index.html拷贝进去，这样很麻烦，我们在webpack官方插件中找到
`HtmlWebpackPlugin`

#### 1 安装HtmlWebpackPlugin插件
>npm install --save-dev html-webpack-plugin

#### 2 webpack.common.js 添加 module 的配置
``` javascript
const path = require('path');// node 中的核心模块 path
+ var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
   */
    mode: 'development',
    entry: './src/index.js',// 项目的入口文件
    module: {...},

  + plugins: [new HtmlWebpackPlugin()],

    output: {...},
};
```
这样配置好，再去打包，发现会自动生成一个index.html，
index.html
```html
<!DOCTYPE html>
<html>
　　<head>
　　　　<meta charset="UTF-8">
　　　　<title>Webpack App</title>
　　</head>
<body>
　　<script type="text/javascript" src="bundle.js"></script></body>
</html>
```

html里面还引入了bundle.js。而且在src里面我并没有这个index.html.这就是webpack里面插件的作用

HtmlWebpackPlugin这个插件能干什么呢？HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
我们再打开index.html，发现网页上什么也没有。为什么呢？

我们看自己的代码逻辑
index.js
```javascript
var root = document.getElementById('root');
import './index.scss';

root.innerHTML = '<div class="iconfont iconfangdajing">abc</div>';
```
代码逻辑是找到id为root到节点，再把abc挂在到root上。但是我们看index.html并没有root这个标签。所以说明用webpack生成到这个html，少了一个id为root的标签。那我想让他自动生成这个id为root的标签，怎么办，可以对这个html-webpack-plugin做一个配置
``` webpack.common.js
plugins: [new HtmlWebpackPlugin({
　　template: 'src/index.html'
})],
```
然后在src里面自己写一个模版index.html
src/index.html
``` html
<!DOCTYPE html>
<html lang="en">
　　<head>
　　　　<meta charset="UTF-8">
　　　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
　　　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
　　　　<title>html template</title>
　　</head>
　　<body>
　　　　<div id='root'></div>
　　</body>
</html>
```

然后运行npm run bundle，打开自动生成的html
```
<!DOCTYPE html>
<html lang="en">
　　<head>
　　　　<meta charset="UTF-8">
　　　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
　　　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
　　　　<title>html template</title>
　　</head>
　　<body>
　　　　<div id='root'></div>
　　　　<script type="text/javascript" src="bundle.js"></script>
　　</body>
</html>
```


可以惊讶的看到id为root的标签插入进去了。这是为什么呢？


html-webpack-plugin会自动生成一个html，这个html是以哪个模版生成的呢，是src下面的index.html为模板生成的。生成之后，会把打包出来bundle.js注入到html中。
 

通过这个例子，我们说明一下webpack中plugin的作用。
plugin可以在webpack运行到某个时刻的时候，帮你做一些事情。这个很像生命周期函数的定义。这个时刻是什么时刻呢，就是webpack打包结束的时刻。其它的插件也会在某些时刻做一些事情，比如刚打包的时刻。比如打包js的某个时刻。再举个例子。。
 

我们现在打包好的名字叫bundle.js，现在我改一下，叫做dist.js
webpack.common.js

``` javascript
output: {
　　filename: 'dist.js',
　　path: path.resolve(__dirname, 'dist')
}
```
然后重新打包，然后dist目录下会多出一个dist.js文件，
html里面自动引入的也是dist.js文件。
但是我们看bundle.js的文件依然存在，为什么呀，
一个是我们刚才没有删除dist，再打包，但每次打包都需要删除一下，会很麻烦。
我们希望每次打包的时候，自动将dist删除，这样就不会有上次遗留的东西了。
现在就需要另外一个插件，在官网webpack下找到，叫做clean-webpack-plugin
#### 3 安装clean-webpack-plugin插件
> npm install clean-webpack-plugin -D
> 作用: 清除遗留的旧的打包代码了

装好之后，我们去增加配置
#### 4 webpack.common.js 添加 module 的配置
``` javascript
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js',
    },
...
    plugins: [
       new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
+       new CleanWebpackPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
```
这个意思是在打包之前先删除掉dist这个文件夹。这样运行npm run bundle，之前bundle.js就不在了。


### 3.4 webpack中Entry与Output的基础配置
entry顾名思义，就是打包的入口文件
webpack.common.js

``` javascript
module.exports = {
　　// 这个文件要做打包，从哪一个文件开始打包
　　entry: './src/index.js',

　　// 打包文件要放到哪里去，就配置在output这个对象里
　　output: {
　　　　// 打包好的文件名字
　　　　filename: 'bundle.js',
　　　　/**
　　　　* 打包出的文件要把他放到哪一个文件夹下，path后面要放一个绝对路径
　　　　* __dirname指的是webpack.config.js所在的当前目录的这个路径
　　　　* 下面这个结合就是一个绝对路径
　　　　*/
　　　　path: path.resolve(__dirname, 'dist')
　　}
}
```

其中，
```javascript
entry: './src/index.js'
```

等同于
```javascript
entry: {
　　main: './src/index.js'
}
```
打包生成的文件，默认的名字叫main。打包生成的文件叫做bundle.js，
``` javascript
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名 ,默认为 main.js 
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
```
如果我把这个自定义的打包好的名字去掉。那么打包生成的名字是什么，是main.js。
所以这个名字，就是打包生成的名字。


现在我有一个需求，我希望，这个index.js，反复生成两次，
第一个文件叫做main，第二个文件叫做sub。
打包生成的名字还是叫bundle

``` javascript
const path = require('path');// node 中的核心模块 path
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     */
    mode: 'development',
    entry: {
        main: './src/index.js',// 项目的入口文件
        sub:'./src/index.js'
    },
    module: {...},

    plugins: [...],
    output: {
        filename: 'bundle.js', // 打包后的js  的文件名
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```

这个时候会报错，如图。

![sub_main_js_err](https://img2018.cnblogs.com/blog/331769/201904/331769-20190421162330059-2013726563.png)

为什么呢？现在要用index.js生成两个文件，
**一个叫做main,一个叫sub，但是这两个文件最终都会被取名叫做bundle.js。**
这样取名就重复了。就冲突了，想要解决这个问题，我们把filename替换成一个占位符

webpack.common.js
```javascript
output: {
　　// 打包好的文件名字
　　filename: '[name].bundle.js',
　　path: path.resolve(__dirname, 'dist')
}
```

这个就是打包相应的名字

但是一般我们做好的项目都会上传到线上，

#### 3.5 将js 文件放到CDN 上的可选配置项
> 　　publicPath: 'http://cdn.com.cn',

域名下到文件，这个时候自动生成的index.html里面的js路径不是我想要到，
我想要在路径前面加上域名

index.html
```html
<script type="text/javascript" src="main.bundle.js"></script>
<script type="text/javascript" src="sub.bundle.js"></script>
```

这个自动插入的js想变成这样
```html
<script type="text/javascript" src="http://cdn.com/main.bundle.js"></script>
<script type="text/javascript" src="http://cdn.com/sub.bundle.js"></script>
```

我们可以在webpack里面配置一个内容
webpack.common.js
``` javascript
output: {
　　publicPath: 'http://cdn.com.cn',
　　filename: '[name].bundle.js',
　　path: path.resolve(__dirname, 'dist')
}
```

再去运行 npm run bundle。生成index.html
```html
<!DOCTYPE html>
<html lang="en">
　　<head>
    　　　　<meta charset="UTF-8">
    　　　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
    　　　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
    　　　　<title>html template</title>
    　　</head>
　　<body>
　　　　<div id='root'></div>
　　<script type="text/javascript" src="http://cdn.com.cn/main.bundle.js"></script><script type="text/javascript" src="http://cdn.com.cn/sub.bundle.js"></script></body>
</html>
```

会发现自动带了域名


#### 3.6 webpack中SourceMap的配置
> devtool配置: https://webpack.js.org/configuration/devtool/

希望在开发的时候，不要告诉我压缩文件哪一行代码出错了，而是告诉我具体的哪个文件，哪行js代码出错了。
 

什么是SourceMap?
现在知道dist目录下main.js文件96行出错
sourceMap 它是一个映射关系，他知道dist目录下main.js文件96行，实际上对应的是src目录下index.js的第一行。
当前其实是index.js的第一行


配置，其实webpack默认是把sourceMap配置进去了，去掉SourceMap

```javascript
module.exports = {
　　mode: 'development',
　　// 默认sourceMap配置进去了，所以先把sourceMap把他关掉
　　devtool: 'none'
}
```
加上SourceMap配置
```javascript
module.exports = {
　　mode: 'development',
　　devtool: 'inline-source-map'
}
```
用inline的时候js.map文件会变成base64的字符串被压缩到main.js里面。会告诉我们哪一行哪一列出错了
 
```javascript
module.exports = {
　　mode: 'development',
　　devtool: 'cheap-inline-source-map'
}
```
用cheap-inline会告诉我们哪一行出错了，不会告诉我们哪一列
 
```javascript
module.exports = {
　　mode: 'development',
　　devtool: 'inline-cheap-module-source-map'
}
```
inline-cheap-module-source-map表示我不仅管业务代码的错误，还管第三方模块代码的错误
 

```javascript
module.exports = {
　　mode: 'development',
　　devtool: 'eval'
}
```
eval是打包最快的一种，但是针对于比较复杂的情况下，eval提示的信息不一定全面
 

最佳实践
```javascript
module.exports = {
　　mode: 'development',
　　devtool: 'cheap-module-eval-source-map'
}
```
这种方式提示的错误比较全，打包速度比较快，

 

如果是线上，建议这样
```javascript
module.exports = {
　　mode: 'production',
　　devtool: 'cheap-module-source-map'
}
```

#### 3.7 使用WebpackDevServer提升开发效率
我们目前的状态是，如果代码有变动，每次都需要执行npm run bundle，然后打开index.html，
在浏览器里面运行才行。这样，实际上，开发效率是比较低的。
我希望如果代码改动，dist会自动的更改，再去看页面效果，刷新就好了。

首先我们把package.json里面的script改成
``` javascript
"scripts": {
　　"watch": "webpack --watch"
},
```

这里加个watch是什么意思呢？意思是webpack会帮我们去watch，监听他打包的文件，只要打包的文件发生变化，他就会自动的重新打包。

 

但是这个方式还是不够好，我希望，不仅自动打包，而且第一次watch的时候，自动给我打开浏览器，这个时候可以配合webpack的devServer来实现。
需要安装webpack-dev-server
webpack下配置

#### 1 安装webpack-dev-server插件
> npm install webpack-dev-server -D
>
> provides you with a simple web server and the ability to use live reloading. Let's set it up:

``` javascript
const path = require('path');// node 中的核心模块 path
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     */
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    // 起个服务器
  + devServer: {
  +     // 这个意思是服务器要生成在哪个文件夹下
  +     contentBase:'./dist'
  + },

    entry: {...},
    module: {...},

    plugins: [...],
    output: {...},
};
```

package.json
``` javascript
"scripts": {
　　"watch": "webpack --watch",
　　"start": "webpack-dev-server"
},
```
然后启动npm run start。他会提示我们Project is running at http://localhost:8080/。
然后浏览器打开这个网页，在js发生变化的时候，webpack-dev-server也能感知到js发生的变化，会自动更新，不用重新刷新。

所以webpack-dev-server比刚才的watch好在哪里。他不但会监听变化，重新帮我们打包，还会自动的重新刷新浏览器。这个时候我们再对webpack做一个配置

``` javascript
module.exports = {
　　// 起个服务器
　　devServer: {
　　　　// 这个意思是服务器要生成在哪个文件夹下
　　　　contentBase:'./dist',
　　　　// 启动的时候自动打开浏览器，然后自动访问这个服务器地址
　+　　open:true
　　}
}
```

那么为什么要开这样一个服务器呢，我们在写react,vue的时候，知道前端都要写个ajax去请求，
如果是通过npm run bundle,通过原始的webpack打包，打开dist文件下的index.html。这个时候页面去发ajax请求就不行了。
因为如果要发ajax请求，这个地址必须在服务器上，通过http的形式打开。所以需要webpack-dev-server。
 

我们不管写react还是vue。里面都有一个proxy这样的配置。实际上是帮助我们跨域的时候使用的接口代理。
那为什么在react,vue之中可以使用接口代理呢？是因为，他们的底层都使用了webpack-dev-server。

``` javascript
// 起个服务器
devServer: {
　　// 这个意思是服务器要生成在哪个文件夹下
　　contentBase:'./dist',
　　// 启动的时候自动打开浏览器，然后自动访问这个服务器地址
　　open:true,
    port: 9000, // 端口打开为9000
　　// 如果浏览器访问localhost:8080/api下的地址，会自动转发到http://localhost:3000下
　　proxy: {
　　　　'/api': 'http://localhost:3000'
　　}
},
```

除了这三个配置，还可以有很多其它到配置项，https://webpack.js.org/configuration/dev-server#devserverproxy

在我们使用比较老到脚手架工具，会发现他并没有配置webpack-dev-server。而是自己实现了一个类似于webpack-dev-server这样到内容。
为什么呢，因为比较早的时候，webpack-dev-server不是特别的稳定。配置项也不多，有些作者认为不好用，就自己实现了

``` javascript
"scripts": {
　　"bundle": "webpack",
　　"watch": "webpack --watch",
　　"start": "webpack-dev-server",
　　"server": "node server.js"
},
```

安装 npm install express webpack-dev-middleware -D

在根目录下创建server.js

server.js
```javascript
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.common.js');
const complier = webpack(config);

const app = express();
app.use(webpackDevMiddleware(complier,{
　　publicPath:config.output.publicPath
}))

app.listen(3000, ()=>{
　　console.log('server is running');
})
```

然后运行localhost:3000就运行。实际上这样自己写，得到跟webpack-dev-server一样的效果，自己需要写很多内容。
所以webpack-dev-server是最推荐的方式，也是业界用的最多的。
所以这种方式是在node中使用webpack

#### 3.8 webpack中热模块更新

Hot Module Replacement，热模块更新，很多时候会简写成HMR。
``` javascript
"scripts": {
　　"start": "webpack-dev-server",
},
```

在加热更新之前，我们运行npm run start，会发现之前我们打包有个dist目录，
为什么运行这个命令的时候，dist目录没有了。实际上，webpack-dev-server，
还是会对src目录下进行打包的。但是打包生成的文件，他并不会放在dist目录下。
而是放到电脑中的内存里面。这样的话，可以有效的提升打包的速度。
让我们开发更快，所以不用担心。

index.js
```javascript
var btn = document.createElement('button');
btn.innerHTML = '新增';
document.body.appendChild(btn);

btn.onclick = function() {
　　var div = document.createElement('div');
　　div.innerHTML = 'item';
　　document.body.appendChild(div);
}
```

这个js是点击一下新增，就新增一个item的div。现在我要实现一个样式的效果。
偶数的时候给他加个背景

style.css
```css
div:nth-of-type(odd) {
　　background: yellow;
}
```

这个时候我把yellow改成blue。webpack-dev-server检测到代码对变化就会重新刷新，需要重新点击去测试。那之前好不容易点的东西没有了，又要重新点击，于是我就希望，
当改变样式代码的时候，不要刷新页面，只要改变样式就行了，
不要给我删除掉之前的dom。这个时候就用到了HMR

``` javascript
...
  +  const webpack = require('webpack')

module.exports = {
　　// 起个服务器
　　devServer: {
　　　　// 这个意思是服务器要生成在哪个文件夹下
　　　　contentBase:'./dist',
　　　　// 启动的时候自动打开浏览器，然后自动访问这个服务器地址
　　　　open:true,
　　　　// 开启Hot Module Replacement
　+　　　hot: true,
　+　　　// 即便hmr的功能没有生效，浏览器也不要自动刷新
　+　　　hotOnly: true
　　},
　　// HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
　　plugins: [
　　　　new HtmlWebpackPlugin({
　　　　　　template: 'src/index.html'
　　　　}),
　　　　new CleanWebpackPlugin(),
　　　　// 当dev-server,两项host配置搞定后，再使用这个插件后，hmr功能就生效了
　+　　　new webpack.HotModuleReplacementPlugin()
　　],
}
```

这个时候再去更改样式，就不会影响之前js对html的变更。改了css文件，就只会替换css的内容
所以使用HMR的好处是,**在写css的时候，方便调试css**。
 
 ---
 这是时候再把上面的配置恢复到没有hmr的时候
 ``` javascript
const path = require('path');// node 中的核心模块 path
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     */
    mode: 'development',
    //development 　devtool: 'cheap-module-eval-source-map'
    //production 　 devtool: 'cheap-module-source-map'
    devtool: 'cheap-module-eval-source-map',

    // 起个服务器
    devServer: {
        // 这个意思是服务器要生成在哪个文件夹下
        contentBase: './dist',
        // 启动的时候自动打开浏览器，然后自动访问这个服务器地址
        open: true,
        port: 8081,

    },

    entry: {
        main: './src/index.js',// 项目的入口文件
        // sub: './src/index.js'
    },
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use: {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit: 10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
            {
                test: /\.eot|ttf|svg|woff$/, // 在执行引入字体文件的时候, 这个时候借助于file-loader打包
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules:true // 加一个modules的配置，在引入css的地方改成这样
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        // publicPath: '/',
        // 打包后的js  的文件名
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```

index.js
```javascript
import counter from './counter';
import number from './number';

counter();
number();
```

counter.js
```javascript
function counter() {
　　var div = document.createElement('div');
　　div.setAttribute('id', 'counter');
　　div.innerHTML = 1;
　　div.onclick = function() {
　　div.innerHTML = parseInt(div.innerHTML, 10) + 1;
}

document.body.appendChild(div);

export default counter;
```

number.js
```javascript
function number() {
　　var div = document.createElement('div');
　　div.setAttribute('id', 'number');
　　div.innerHTML = 1000;
　　document.body.appendChild(div);
}
export default number;
```

这个时候运行页面，把1增加到10。这个时候将number.js里面写死的1000变成2000。发现，呀，我之前点击到的10，又重新恢复到了1。说明刷新了页面。之前的一些数据没有保存下来。我希望number的数据更新到，
别去更新我counter.js到内容。这时候把配置加回来

webpack.common.js

```javascript
module.exports = {
　　// 起个服务器
　　devServer: {
　　　　// 这个意思是服务器要生成在哪个文件夹下
　　　　contentBase:'./dist',
　　　　// 启动的时候自动打开浏览器，然后自动访问这个服务器地址
　　　　open:true,
　　　　// 开启Hot Module Replacement
　　　　hot: true,
　　　　// 即便hmr的功能没有生效，浏览器也不要自动刷新
　　　　hotOnly: true
　　},
　　// HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
　　plugins: [
　　　　new HtmlWebpackPlugin({
　　　　　　template: 'src/index.html'
　　　　}),
　　　　new CleanWebpackPlugin(),
　　　　// 当dev-server,两项host配置搞定后，再使用这个插件后，hmr功能就生效了
　　　　new webpack.HotModuleReplacementPlugin()
　　],
}
```

发现number代码改成2000，页面上的1000并没有变成2000。这个时候需要自己去加点代码

index.js
```javascript
import counter from './counter';
import number from './number';

counter();
number();

if(module.hot) {
　　module.hot.accept('./number', ()=>{
　　　　let removeNode = document.getElementById('number');
　　　　document.body.removeChild(removeNode);
　　　　number();
　　})
}
```

这个时候把1点到10。再去更改number里面的代码，把1000改成2000。
这个时候发现10没有任何变化，只从1000更新到20000。
 

那么这个时候就会想css会自动更新，这里却要在index里面多加这层判断。
其实css也是要加这层判断的，只是css-loader里面已经加了这段代码，所以不用写。
react,vue里面也内置了这些代码。本质上要写hmr的内容，都需要写这段。
只不过框架帮我们实现了，自己不用去写。

#### 3.9 webpack中使用babel处理es6语法

index.js
```javascript
const arr = [
　　new Promise(()=>{}),
　　new Promise(()=>{})
];

arr.map(item => {
　　console.log(item);
})
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
　　<head>
　　　　<meta charset="UTF-8">
　　　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
　　　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
　　　　<title>html template</title>
　　</head>
　　<body>
　　　　<div id='root'></div>
　　</body>
</html>
```

运行npx webpack(用dev-server打包放在了缓存里面，
看不到最终的打包内容)。看到打包生成的main.js的最后几行，
index里面写的js，原封不动的打包到了main.js里面。这个时候浏览器中运行，
可以打印出promise对象。好像是没问题的，这是什么原因呢，
这是因为chrome更新比较快，es6里面很多东西，他都做了实现，
所以直接在chrome浏览器写es6语法没问题，
但是比如在ie或者更新没那么快的浏览器，，，就会报错。。


这个时候需要借助babel,https://babeljs.io/。
先安装两个包
> npm install --save-dev babel-loader @babel/core

一个是帮助webpack打包用的工具，一个是babel的核心库
webpack配置babel相关
```javascript
module.exports = {
　　module: {
　　　　rules:[{
　　　　　　test: /\.js$/,
　　　　　　exclude: /node_modules/,
　　　　　　loader: "babel-loader"
　　　　}]
　　}
}
```

再继续安装
> npm install @babel/preset-env --save-dev
 
 
为什么要安装这个模块，当我们使用babel－loader处理js文件的时候，实际上这个babel-loader只是webpack和babel做通信的一个桥梁，用了他之后，webpack和babel做了打通，但实际上，babel-loader并不会帮助我们把es6语法翻译成es5语法，还需要借助一些其它的模块才能够帮助我们把es6语法翻译成es5语法。babel/preset-env就是这样的一个模块，这里面包含了所有把es6转化成es5的规则。
装好之后，还需要在webpack里面配置一下

``` javascript
module.exports = {
　　module: {
　　　　+ rules:[{
　　　　+ 　　test: /\.js$/,
　　　　+ 　　exclude: /node_modules/,
　　　　+ 　　loader: "babel-loader",
　　　　+ 　　options:{
　　　　+ 　　　　"presets": ["@babel/preset-env"]
　　　　+ 　　}
　　　　+ }]
　　}
}
```

再使用npx webpack，看转化后的main.js，发现es6的语法转化成了es5的语法。但是光做到这点不够。为什么呢？因为比如像Promise这样新的语法变量，包括数组里面这个map方法，在低版本的浏览器里，实际上还是不存在的。虽然了语法翻译，但只翻译了一部分。还有一些对象或者函数在一些低版本的浏览器里面还是没有的。
 

所以不仅要用preset-env翻译es6，还需要将缺失的语法补充到浏览器里，这个模块就是babel/polyfill。然后把polyfill引入到业务代码的最顶部
index.js

```javascript
import "@babel/polyfill";

const arr = [
　　new Promise(()=>{}),
　　new Promise(()=>{})
];

arr.map(item => {
　　console.log(item);
});
```

处理好后，再运行，会发现原来打包好的main是28kb，现在是534kb。这多出来的内容就是polyfill弥补的内容，
所以main.js一下子就变的很大。那么我不想要这么大，我只需要你在我需要补充语法的时候出来相应处理的代码就可以。
安装
>  npm install core-js --save-dev
```
module.exports = {
　　module: {
　　　　rules:[{
　　　　　　test: /\.js$/,
　　　　　　exclude: /node_modules/,
　　　　　　loader: "babel-loader",
　　　　　　options:{
　　　　　　　　presets: [['@babel/preset-env',{
　　　　　　　　/**
　　　　　　　　* 当我做polyfill填充的时候，去加一些低版本特性的时候，我不是把所有特性都加进来
　　　　　　　　* 是根据你的业务代码来决定要加什么
　　　　　　　　*/
　　　　　　　　useBuiltIns: 'usage',
　　　　　　　　corejs: 3
　　　　　　　　}]]
　　　　　　}
　　　　}]
　　}
}
```
主页打包出来的main就124kb，小了很多
 

当然preset也可以配置一些额外的参数
```javascript
module.exports = {
　　module: {
　　　　rules:[{
　　　　　　test: /\.js$/,
　　　　　　exclude: /node_modules/,
　　　　　　loader: "babel-loader",
　　　　　　options:{
　　　　　　　　presets: [['@babel/preset-env',{
　　　　　　　　/**
　　　　　　　　* 意思是我的这个项目，打包会运行在>67这个版本的chrome浏览器下
　　　　　　　　* 比如chrome浏览器在67版本以上对es6语法支持很好了，就不需要翻译
　　　　　　　　*/
　　　　　　　　targets: {
　　　　　　　　　　chrome: "67",
　　　　　　　　},
　　　　　　　　/**
　　　　　　　　* 当我做polyfill填充的时候，去加一些低版本特性的时候，我不是把所有特性都加进来
　　　　　　　　* 是根据你的业务代码来决定要加什么
　　　　　　　　* @babel/polyfill，放在js入口
　　　　　　　　*/
　　　　　　　　useBuiltIns: 'usage',
　　　　　　　　corejs: 3
　　　　　　　　}]]
　　　　　　}
　　　　}]
　　}
}
```
再运行npm run bundle，发现main.js重新变成了28.8kb。

这种方案不一定所有场景都适用，在开发一个第三方模块的时候，
这个时候用polyfill注入是有问题的，因为这是时候注入会以全局变量的方式注入，
会污染到全局环境。所以我们在打包UI组件库或者类库的时候，需要换一种打包的方式。
去除index的pollfile。webpack也不做presets的配置了
首先安装
> npm install --save-dev @babel/plugin-transform-runtime
> npm install --save @babel/runtime

index.js
```javascript
// import "@babel/polyfill";

const arr = [
　　new Promise(()=>{}),
　　new Promise(()=>{})
];

arr.map(item => {
　　console.log(item);
})
```

```javascript
module.exports = {
　　module: {
　　　　rules:[{
　　　　　　test: /\.js$/,
　　　　　　exclude: /node_modules/,
　　　　　　loader: "babel-loader",
　　　　　　options:{
　　　　　　　　"plugins": [["@babel/plugin-transform-runtime",{
　　　　　　　　"absoluteRuntime": false,
　　　　　　　　"corejs": 2,
　　　　　　　　"helpers": true,
　　　　　　　　"regenerator": true,
　　　　　　　　"useESModules": false
　　　　　　　　}]]
　　　　　　}
　　　　}]
　　}
}
```

再安装
> npm install --save @babel/runtime-corejs2

再运行npm run bundle，发现可以重新进行打包。

另外补充一个知识点，如果我们认真的去配置babel相关的配置，会发现非常的长。我们可以在根目录新建一个文件。叫.babelrc。然后把options对象拿出来放到.babelrc里面。然后删除babel配置的option
.babelrc

``` json
{
  "plugins": [["@babel/plugin-transform-runtime",{
    "absoluteRuntime": false,
    "corejs": 2,
    "helpers": true,
    "regenerator": true,
    "useESModules": false
  }]]
}
```

webpack.common.js
```javascript
module.exports = {
　　module: {
　　　　rules:[{
　　　　　　test: /\.js$/,
　　　　　　exclude: /node_modules/,
　　　　　　loader: "babel-loader"
　　　　}]
　　}
}
```
这样执行起来 npm run bundle 不会有任何问题

#### 3.10 webpack实现对react代码打包

首先安装react相关能支持react代码的包
> npm install react react-dom --save
> npm install --save-dev @babel/preset-react

index.js
```
import "@babel/polyfill";

import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
　　render() {
　　　　return <div>Hello World</div>
　　}
}

ReactDom.render(<App />, document.getElementById('root'));
```
index.html
``` html
<!DOCTYPE html>
<html lang="en">
　　<head>
　　　　<meta charset="UTF-8">
　　　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
　　　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
　　　　<title>html template</title>
　　</head>
　　<body>
　　　　<div id='root'></div>
　　</body>
</html>
```

.babelrc
``` javascript
{
　　"presets": [
　　　　["@babel/preset-env",{
　　　　　　　　"targets": {
　　　　　　　　"chrome": "67",
　　　　　　},
　　　　　　"useBuiltIns": "usage",
　　　　　　"corejs": 3
　　　　}],
　　　　"@babel/preset-react"
　　]
}
```

再运行npm run start。就可以正确读取到hello world这个文本了

这样执行起来 npm run bundle 就可以对react 代码进行打包

index.js
```javascript
// import "@babel/polyfill";
```

index.js里面只留下babel/polyfill。打包npm run bundle，会发现一条提示语。
他的意思是如果.babelrc里面用了useBuiltIns。业务代码里面就不需要再引入babel/polyfill。webpack会自动引入polyfill。

index.js
```
// import '@babel/polyfill';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
```

再运行npm run start, npm run bundle,
同样可以运行和打包文件


## 四 打包静态资源
### 4.1 webpack中 tree shaking概念详解
> 最理想的是我引用什么，就给我打包什么。在webpack 2.0以后提供了tree shaking的概念，意思是树抖动的意思。把没用的东西都摇晃掉
math.js
```javascript
export const add = (a, b) => {
　　console.log(a+b);
}

export const minus = (a, b) => {
　　console.log(a-b);
}
```

index.js
```javascript
import { add } from './math.js';

add(1,2);
```

index.html
```html
<!DOCTYPE html>
<html lang="en">
　　<head>
　　　　<meta charset="UTF-8">
　　　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
　　　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
　　　　<title>html template</title>
　　</head>
　　<body>
　　　　<div id='root'></div>
　　</body>
</html>
```

所有文件准备好了后，我们打包npx webpack。打开index.html。就发现输出了3。说明代码已经正确的运行了。

 

可以看到我在index里面只引用了add方法，但是在打包生成的文件里minus这个文件也存在打包文件里。虽然index.js里面只引用了math.js的一个方法，但是把所有的math.js都打包生成到了main.js里面。那这是没有必要的。因为业务代码只需要add。**最理想的是我引用什么，就给我打包什么。在webpack 2.0以后提供了tree shaking的概念，意思是树抖动的意思。把没用的东西都摇晃掉**。
tree shaking只支持 ES Module的引入方式，因为es module底层是一个静态引入的方式，而commonjs是动态引入的方式。
 
webpack.common.js
```javascript
module.exports = {
　　mode: 'development',
　　optimization: {
　　　　// 看一看哪些模块被导出了，再去打包
　　　　useExports: true
　　}
}
```

package.json
```javascript
{
　　"sideEffects": false
　　/***
　　* 把不需要tre shaking的模块配置在这里
　　* 如果webpack引入了tree shaking，那么webpack只要打包一个模块，就会应用tree shaking这种
　　* 方式打包。如果没有引入任何一个模块，"sideEffects": ["babel/polyfill"]
　　* babel/ polyfill引入就会报错。这里配置了后，tree shaking就不会去打包babel/polyfill
　　* 但是现在我们写的是业务代码，不是第三方模块，不使用babel.polyfill，这是配置false，
　　* 就是所有打包文件都走tree shaking。
　　*/
}
```

我们再去打包，发现minus还在，但是tree shaking已经生效了，前面会提醒，他已经知道只用了add方法，
```javascript
/*! exports provided: add, minus */
/*! exports used: add */
```

但是在开发环境下，我们可能需要调试，
报出来的行可能不准确，所以保留了代码。
真正打包上线的时候，minus的代码就会不打包了这个时候。

production的时候，optimization都不需要配置。production的时候tree shaking自动的配置好了。
只需要 devtool: 'cheap-module-eval-source-map'就可以



### 4.2 webpack中Development和Production模式的区分打包
#### 4.2.1 webpack.dev.js & webpack.prod.js
当我们在开发一个项目的时候，我们一般用development这个环境进行项目的开发，在这个环境下，webpack使用dev-server，帮我们启用一个服务器，然后这个服务器里面还集成了一些，比如hmr这样的特性，只要我更改了代码，他会帮我们重新打包，然后我们代码的内容会实时的展示在对应的页面上，所以开发环境上，development这样的模式非常的方便，但是一旦我们的代码开发完成了，我们需要把我们的代码打包上线，这个时候主要用刀production模式，那么production模式和development模式差异主要在几个方面。
 

首先在开发环境中，source-map他是非常全的，这样的话可以帮助我们快递定位问题，但是在production环境下，代码已经要上线了，这个时候source-map并不那么重要了，这个时候的source-map会更佳简洁一些
 

另外一点，在开发环境下，我们的代码不压缩，一旦代码上线，我们希望我们的代码被压缩。
 

所以在开发环境下，我们webpack.config.js里面

webpack.common.js
```javascript
mode: 'development',
devtool: 'cheap-module-eval-source-map',
```

在上线环境下
```javascript
mode: 'production',
devtool: 'cheap-module-source-map',
```

每次开发上线，我们需要不断的去更改webpack.config.js的内容，这样就比较麻烦了，要像解决这个问题，我们这样做，我们给他改一个名字。开发坏境下我们使用webpack.dev.js。线上环境用webpack.prod.js。
 

然后在package.json里面配置

```javascript
"scripts": {
　　"dev": "webpack-dev-server --config webpack.dev.js",
　　"build": "webpack --config webpack.prod.js",
},
```

webpack.dev.js
```javascript
const path = require('path');// node 中的核心模块 path
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

// 'presets': [
//     [
//         '@babel/preset-env',
//         {
//             targets: {
//                 chrome: "67",
//             },
//             /**
//              * 当我做polyfill填充的时候，去加一些低版本特性的时候，我不是把所有特性都加进来
//              * 是根据你的业务代码来决定要加什么
//             */
//             'useBuiltIns': 'usage',
//         }
//     ]
// ],

module.exports = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     */
    mode: 'development',
    //development 　devtool: 'cheap-module-eval-source-map'
    //production 　 devtool: 'cheap-module-source-map'
    devtool: 'cheap-module-eval-source-map',

    // 起个服务器
    devServer: {
        // 这个意思是服务器要生成在哪个文件夹下
        contentBase: './dist',
        // 启动的时候自动打开浏览器，然后自动访问这个服务器地址
        open: true,
        port: 8081,
        // 开启Hot Module Replacement
        hot: true
    },

    entry: {
        main: './src/index.js',// 项目的入口文件
        // sub: './src/index.js'
    },
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use: {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit: 10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
            {
                test: /\.eot|ttf|svg|woff$/, // 在执行引入字体文件的时候, 这个时候借助于file-loader打包
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules:true // 加一个modules的配置，在引入css的地方改成这样
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        // 当dev-server,两项host配置搞定后，再使用这个插件后，hmr功能就生效了
        new webpack.HotModuleReplacementPlugin()
    ],

    optimization: {
        // 看一看哪些模块被导出了，再去打包
        usedExports: true,
    },
    output: {
        // publicPath: '/',
        // 打包后的js  的文件名
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```

webpack.prod.js
```javascript
const path = require('path');// node 中的核心模块 path
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// 'presets': [
//     [
//         '@babel/preset-env',
//         {
//             targets: {
//                 chrome: "67",
//             },
//             /**
//              * 当我做polyfill填充的时候，去加一些低版本特性的时候，我不是把所有特性都加进来
//              * 是根据你的业务代码来决定要加什么
//             */
//             'useBuiltIns': 'usage',
//         }
//     ]
// ],

module.exports = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     */
    mode: 'production',
    //development 　devtool: 'cheap-module-eval-source-map'
    //production 　 devtool: 'cheap-module-source-map'
    devtool: 'cheap-module-source-map',

    entry: {
        main: './src/index.js',// 项目的入口文件
        // sub: './src/index.js'
    },
    module: {
        rules: [// 其中包含各种loader的使用规则
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,// 正则表达式，表示打包 图片 后缀的文件
                use: {
                    loader: 'url-loader',// 针对图片文件使用的loader，注意有先后顺序，数组项越靠后越先执行
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',// 配置打包的图片的名字为 :  [原图片名称]_[这次打包的后缀].后缀名
                        outputPath: 'images/', // 将打包生成的图片放到 dist/images 目录下
                        limit: 10240 //大于(或等于) 10 kb 图片会被打包到 images 文件夹下
                    }
                },
            },
            {
                test: /\.eot|ttf|svg|woff$/, // 在执行引入字体文件的时候, 这个时候借助于file-loader打包
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules:true // 加一个modules的配置，在引入css的地方改成这样
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()
    ],

    output: {
        // publicPath: '/',
        // 打包后的js  的文件名
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 打包后的文件放到哪里,输出文件的路径是绝对路径,  __dirname:webpack 文件的路径
    },
};
```

此时可以正常打包 和 开发

#### 4.2.2 合并相同的代码
> 提取公共的代码, 对文件进行合并
---
> 我们发现dev和build存在很多相同的代码。比如entry,modules,output。这样就会出现大量重复代码，为了解决这个问题，我们新建一个webpack.common.js。把公共的抽出来，抽出来之后，这个时候直接这样肯定不行，
> npm run dev就只有webpack.dev.js这里面的文件。我们需要跟它们做一个合并。安装
>
> npm install webpack-merge -D
然后webpack.dev.js和webpack.prod.js引入merge模块
 

webpack.common.js
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // 这个文件要做打包，从哪一个文件开始打包
    entry: {
        main: './src/index.js'
    },
    // 打包模块不知道该怎么办，就去模块配置里面该怎么办
    module: {
        // 规则
        rules: [{
            test: /\.js$/,
            // 如果你的这个js文件在node_modules里面，就不使用babel-loader了
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            // 假设是以jpg结尾的，我需要一个load帮助我们去打包
            test: /\.jpg|png|gif$/,
            use: {
                loader: 'url-loader',
                options: {
                    // 原来是什么名字，打包好还是什么名字
                    name: '[name]_[hash].[ext]',
                    // 当我碰到jpg,png,gif的时候，打包到根目录下到imgs文件夹里
                    outputPath: 'imgs/',
                    limit: 2048
                }
            }
        }, {
            test: /\.eot|ttf|svg|woff$/,
            use: {
                loader: 'file-loader'
            }
        }, {
            // 假设是以css结尾的，我需要一个load帮助我们去打包
            test: /\.scss$/,
            // 需要两个loader，所以不能是个对象，需要是个数组
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }]
    },
    // HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    // 打包文件要放到哪里去，就配置在output这个对象里
    output: {
        // 打包好的文件名字
        filename: '[name].js',
        /**
         　　　　* 打包出的文件要把他放到哪一个文件夹下，path后面要放一个绝对路径
         　　　　* __dirname指的是webpack.config.js所在的当前目录的这个路径
         　　　　* 下面这个结合就是一个绝对路径
         　　　　*/
        path: path.resolve(__dirname, 'dist')
    }
};
```


webpack.dev.js
```javascript
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     　　*/
    mode: 'development',
    /**
     　　* cheap:在生成source-map的时候可以不带列信息，只带行信息就可以了
     　　* 同时不要对我load代码的source-map。只要对我的业务代码进行source-map生成
     　　* 这种方式提示的错误比较全，打包速度比较快，
     　　*/
    devtool: 'cheap-module-eval-source-map',

    // 起个服务器
    devServer: {
        // 这个意思是服务器要生成在哪个文件夹下
        contentBase: './dist',
        // 启动的时候自动打开浏览器，然后自动访问这个服务器地址
        open: true,
        // 开启Hot Module Replacement
        hot: true
    },
    // HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = merge(commonConfig, devConfig);
```

webpack.prod.js
```javascript
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
    /**
     　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
     　　* production: 压缩模式，被压缩的代码
     　　* development: 开发模式，不压缩的代码
     　　*
     　　*/
    mode: 'production',
    /**
     　　* cheap:在生成source-map的时候可以不带列信息，只带行信息就可以了
     　　* 同时不要对我load代码的source-map。只要对我的业务代码进行source-map生成
     　　* 这种方式提示的错误比较全，打包速度比较快，
     　　*/
    devtool: 'cheap-module-source-map'
};
module.exports = merge(commonConfig, prodConfig);
```


这样运行npm run dev, npm run build就没有问题了。

#### 4.2.3 将代码放到文件中

有时候第三方模块会给webpack进行一个整合，
都放到build目录里。这两个时候package.json需要进行一个更改

---
1. 新建build 目录
2. 将 webpack.common.js, webpack.dev.js, webpack.prod.js 文件放到 build 目录中
3. 修改package.json 中的下列代码
``` javascript
"scripts": {
　　"dev": "webpack-dev-server --config ./build/webpack.dev.js",
　　"build": "webpack --config ./build/webpack.prod.js",
}
```

这样运行npm run dev, npm run build就没有问题了。

#### 4.2.4 dist 文件目录修改

使用npm run dev："webpack-dev-server --config ./build/webpack.dev.js。"，
会看不到打包生成的dist目录。

所以我们使用一个新的，不要启用dev-server服务。使用npm run dev-build:"webpack --config ./build/webpack.dev.js"。

这个时候我们发现，dist目录生成到了build下面。
![dist_file_into_build_file](https://img2018.cnblogs.com/blog/331769/201905/331769-20190502173616136-1766840880.png)

我们build下面放到都是webpack配置。这是因为之前webpack移动到了build目录，输出文件到地方没改。直接写dist。
指的是:
dist目录生成在webpack同级的目录下。改成 `../dist`。就可以了。

**所以webpack的配置项真的是巨多，想完全的能记住是不可能的，所以遇到打包的问题怎么办，首先是打开打包的命令行工具，然后去分析，当你打包的过程开始执行时，他一步一步具体的流程之中哪里出了问题，通过控制台，我们就可以找到这些问题，找到问题后，截取出来，然后到google或者stack overflow上去提问，搜索问题的解决方案，找到后，再去找对应文档上的配置说明，根据文档，再回头去修改我们的配置文件，改的过程中遇到新的问题，再一点一点的去解决。**

#### 4.3 Code Splitting

接着进入正题。Code Splitting到底是什么？代码分割到底是什么？举个例子。
首先我们安装一个包，叫做lodash。
> npm install lodash --save

他是一个功能集合，提供了很多工具方法，
可以高性能的比如字符串拼装的一些函数。然后继续写代码

index.html
```html
<!DOCTYPE html>
<html lang="en">
　　<head>
　　　　<meta charset="UTF-8">
　　　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
　　　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
　　　　<title>html template</title>
　　</head>
　　<body>
　　　　<div id='root'></div>
　　</body>
</html>
```

index.js

// 一般我们习惯用_去代替lodash。
import _ from "lodash";

console.log(_.join(['a', 'b', 'c'], '*'))

其实他引入了一个库，在这里，使用这个库，做了一个字符串链接这样的操作。最终打印的结果应该是a*b*c这样的字符串。然后我们输入npm run dev-build打包结束后，浏览index.html。发现控制它输出了a*b*c。所以这个函数就是字符串连接的函数。

 

然后我们看到lodash和我们的业务代码都被打包到一个文件中。我们到main.js有1.38M。非常大。工具库和业务逻辑统一打包到main.js里面。这种方式做打包会带来一个潜在的问题。


第一种方式
假设lodash有1mb，业务逻辑代码1mb。那么main.js 2mb
打包文件会很大，加载时间会很长
当页面业务逻辑发生变化时，又要加载2MB的内容

那么我们需要解决这个问题，在src目录下，我再创建一个文件，
叫做lodash.js。然后将lodash的引入放放到lodash.js文件里面

lodash.js
```javascript
// 一般我们习惯用_去代替lodash。
import _ from "lodash";
window._ = _;
```

index.js
```javascript
console.log(_.join(['a', 'b', 'c'], '*'))
```

webpack.common.js

```javascript
module.exports = {
　　entry: {
　　　　lodash: './src/lodash.js',
　　　　main: './src/index.js'
　　}
}
```

再运行npm run dev-build。发现打包出来两个文件。这个时候lodash就跟index.js分开加载了。之前用户需要加载完2MB的页面才能加载页面。现在我们把main.js分成了两个文件，
分别是lodash.js和index.js。这是时候我们去想，