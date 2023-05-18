import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack  from 'webpack';
import { BuildOptions } from './types/config';

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
	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [ '@svgr/webpack' ],
	};
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};
	const scssLoader = {
		test: /\.(css|scss)$/,
		use: [
			isDev? 'style-loader': MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: true,
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]'
					}
				}
			}
			,
			'sass-loader',
		],
	};
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