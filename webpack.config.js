var path = require('path')

module.exports = {
  entry: './app/index.js',
  output:  {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loaders: [
          'react-hot',
          'babel?plugins[]=transform-class-properties,presets[]=react,presets[]=es2015'
        ]
      },
    ]
  }
}
