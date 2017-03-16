const path = require('path')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?sourceMap=true&importLoaders=1',
          'postcss?sourceMap=inline'
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}

// module.exports = {
//   module: {
//     loaders: [
//       {
//         test: /.css$/,
//         loaders: [
//           'style',
//           'css',
//           {
//             loader: 'postcss-loader',
//             options: {
//               sourceMap: 'inline'
//             }
//           }
//         ],
//         include: path.resolve(__dirname, '../')
//       }
//     ]
//   }
// }
