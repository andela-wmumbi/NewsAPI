const path = require('path');
module.exports = {
    //specifies the entry file where the bundler starts the bundling process
    //output: specifies the location where the bundled js code is to be saved
    //loaders: transformations that are applied on a file in our app
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        fielanme: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
        ]
    }

