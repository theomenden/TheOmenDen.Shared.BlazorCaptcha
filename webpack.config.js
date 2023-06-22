// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

module.exports = () => ({
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: isProduction ? false : 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    }
});