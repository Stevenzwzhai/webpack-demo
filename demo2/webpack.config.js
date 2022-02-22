const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    // optimization: {
    //     // 优化导出的模块
    //     usedExports: true
    // },
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
    ]
}