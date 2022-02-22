const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index',
    output: {
        filename: 'main.js'
    },
    optimization: {
        // 优化导出的模块
        usedExports: true,
        // concatenateModules: true
    },
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
    ]
}