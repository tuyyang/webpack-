const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                // loader: 'file-loader',
                loader: 'url-loader',
                options: {
                    //placeholder 占位符
                    //[name]_[hash].[ext]
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 2048 //打包的最小值
                }
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader',
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
        // 使用绝对路径
    }
}