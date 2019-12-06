# webpack学习笔记

>author：[tuyyang](https://github.com/tuyyang/webpack-lesson)
>
>start：2019-12-06

## webpack安装

```
npm install webpack webpack-cli -D
```

* 推荐局部安装

## webpack打包

1. ```
   npm webpack index.js
   ```

2. 新建`webpack.config.js`

   ```js
   //package.json
   "scripts": {
       "bundle": "webpack"
   }
   
   //webpack.config.js
   module.exports = {
   	mode: 'development' //打包时不压缩；production则表示压缩
       entry: {
       	main: './src/index.js' //打包文件的位置
   	},
       output: {
           filename: 'bundle.js', //打包后文件的名字
           path: path.resovle(__dirname, 'dist') //使用绝对路径
       }
   }
   ```

   ```
   npm run bundle
   ```



## loader

* `webpack`只能识别`js`文件，使用`loader`可以将`jpg`、`css`等文件打包
* 执行顺序：从下到上，从右到左

1. `file-loader`

   ```
   npm install file-loader -D
   ```

   

   ```js
   //webpack.config.js
   module.exports = {
       ...
       module: {
           rules: [{
               test: /\.(jpg|png|gif)$/,
               use: {
                   loader: 'file-loader',
                   options: {
                       name: '[name]_[hash].[ext]',
                       outputPath: 'images/'
                   }
               }
           }]
       },
       ...
   }
   ```

2. `url-loader`

   ```js
   //webpack.config.js
   module.exports = {
       ...
       module: {
           rules: [{
               test: /\.(jpg|png|gif)$/,
               use: {
                   loader: 'url-loader',
                   options: {
                       name: '[name]_[hash].[ext]',
                       outputPath: 'images/',
                       limit: 10240  //打包的最小值
                   }
               }
           }]
       },
       ...
   }
   ```

3. `postcss-loader`

   ```
   npm i -D postcss-loader
   ```

   