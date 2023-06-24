import path from 'path';
import { BuildPath } from '../../config/build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import { buildSvgLoader } from '../../config/build/loaders/buildSvgLoader';
import { StoryBookCssLoader } from '../../config/build/loaders/StoryBookCssLoader';


export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPath = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '../', '../', 'src')
	};
	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.cjs', '.ts', '.tsx');
	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if(/svg/.test(rule.test as string)){
			return { ...rule, exclude: /\.svg$/i };
		}
		return rule;
	});
	config.module.rules.push(StoryBookCssLoader(true));
	config.module.rules.push(buildSvgLoader());
	
	return config;
};


