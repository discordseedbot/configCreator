const path = require('path');

module.exports = {
	name: require("./package.json").name,
	cache: false,
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: [ '.js' ]
    },
    performance: {
        hints: "warning",
        maxAssetSize: 2097152,
        maxEntrypointSize: 3145728,
        assetFilter: function(assetFileName){
            return assetFileName.endsWith(".js");
        }
    },
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: true,
		splitChunks: false,
	},
    output: {
        filename: 'bundle.js',
		path: path.resolve(__dirname),
    }
};