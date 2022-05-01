const Path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: Path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    devtool: 'eval-cheap-module-source-map',
    devServer: {
        // contentBase: Path.join(__dirname, 'public'),
        historyApiFallback: true
    }

}