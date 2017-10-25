// needs entry point and an output
const path = require('path')


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'), // needs to be an absolute path
    filename: 'bundle.js'
  }
}
