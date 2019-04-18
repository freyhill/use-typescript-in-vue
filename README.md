[typescript vue 起手文档](https://github.com/Microsoft/TypeScript-Vue-Starter#typescript-vue-starter)

## 安装
按照github文档上的教程，在换成.vue后缀的时候运行报错，查了原因是因为```vue-loader```15版本的兼容问题

**解决**:在webpack.config.js中添加 css的loader 和vue-loader的plugin
```
const VueLoaderPlugin = require('vue-loader/lib/plugin')

.....

module.exports = {

 module: {
    rules: [
      { // 必须添加不然报错
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
    ]
  },
 plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],   
}
 
```