var path = require('path');
module.exports = {
    entry: ['./src/email-auth.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'email-auth.js',
        library: ['email-auth'],
        libraryTarget: 'umd'
    },
    devtool: "source-map",
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}