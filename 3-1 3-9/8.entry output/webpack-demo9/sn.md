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
```scss
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
```javascript
var root = document.getElementById('root');
import './style.scss'

root.innerHTML = '<div class="iconfont icon-changjingguanli">abc</div>';
```

style.scss
```scss
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

