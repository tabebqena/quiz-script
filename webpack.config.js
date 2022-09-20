const path = require('path');
var DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: "./ts/index.ts",
    output: {
        filename: 'quiz.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json" }
            }
        ]
    },
    watch: true,
/*  plugins: [
        new DeclarationBundlerPlugin({
            moduleName: 'MODEULENAME',
            out: './dist/main.d.ts',
        })
    ] */
};



