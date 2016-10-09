var path  = require('path');
var jqueryPath = path.resolve('node_modules/jquery/dist/jquery.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: path.resolve('src/index.js'),
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    //如何解析文件
    resolve:{
        extensions:['','.js','.css','.json'],
        alias:{
            'jquery':jqueryPath,
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack-react',
            template:'./src/index.html',
            filename:'index.html'
        }),
        new openBrowserWebpackPlugin({ url: 'http://localhost:3333' })
    ],
    devServer:{
        port: 3333,
        contentBase:'./build',
        inline:true,
    },
    module:{
        loaders:[ //制定不同文件的加载器
            {
                test: /\.js$/, //正则，匹配到的文件后缀名
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
        ]
    }
}