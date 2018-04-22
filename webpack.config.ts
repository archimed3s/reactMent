import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  resolve: {
	extensions: ['.ts', '.tsx', '.js', '.json']
  },
  entry: './src/index.tsx',
  output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js'
  },
  module: {
	rules: [
	  {
		test: /\.tsx?$/,
		loader: 'awesome-typescript-loader'
	  },
	  {
		enforce: 'pre',
		test: /\.js$/,
		loader: 'source-map-loader'
	  }
	]
  },
  externals: {
	'react': 'React',
	'react-dom': 'ReactDOM'
  }
};

export default config;