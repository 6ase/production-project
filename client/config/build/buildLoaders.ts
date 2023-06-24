import webpack  from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	
	const babelLoader = {
		test: /\.(?:js|mjs|cjs)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					[ '@babel/preset-env', { targets: 'defaults' } ]
				]
			}
		}
	};
	const svgLoader = buildSvgLoader();
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};
	const scssLoader = buildCssLoader(isDev);
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	return [
		typescriptLoader,
		scssLoader,
		svgLoader,
		fileLoader,
		babelLoader
	];
}