// 第一种方式
// 首次访问页面时候, main.js 2mb
// 打包文件会很大, 加载时间会很长
// main.js 2mb
// 当页面业务逻辑发生变化时,又要加载2mb 的内容
import _ from 'lodash'; // 同步模块的引入

// 业务逻辑 1mb
console.log(_.join(['a', 'd', 'cd'], '***'));

// 此处省略10万行业务逻辑
console.log(_.join(['a', 'b', 'c'], '***'));


// 第二种方式
// main.js 被拆成lodash.js (1Mb), main.js (1Mb)

// 当页面业务逻辑发生变化时, 只要加载 main.js 即可(1Mb)

// Code Splitting


// 我们webpack的code splitting。所以说代码分割是webpack非常有竞争力的功能。
// splitChunks 配置项
