const path = require('path');

module.exports={
    entry: './src/index.js',
    output: {
        /*path: path.resolve(_dirname, 'dist'),*/
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ]
    },
    devServer: {
      port: 4000,
        /*contentBase: '/src',*/
    }
};