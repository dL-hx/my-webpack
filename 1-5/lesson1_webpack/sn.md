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
webpack 是文件的翻译器