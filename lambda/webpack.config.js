const path = require('path');


module.exports = {
    mode: "development",
    entry: "./src/lambda.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js',
    }
}
