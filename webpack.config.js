const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
let webpack=require('webpack')
module.exports={
    mode:'development', // production
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname, 'src', 'index.html'),
            filename:'index.html'
        }),
        new webpack.ProvidePlugin({
            '$':'jquery'
        })
    ],
    devServer:{
        port:3000,
        contentBase:path.join(__dirname,'dist')
    }
}