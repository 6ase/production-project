import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader (isDev: boolean) {
	return {
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
}