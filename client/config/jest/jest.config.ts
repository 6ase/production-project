
import path from 'path';

export default {
	globals: {
		__IS_DEV__: true,
	},
	coveragePathIgnorePatterns: [
		'<rootDir>\\\\node_modules\\\\'
	],
	coverageProvider: 'babel',
	rootDir: '../../',
	moduleDirectories: [ 'node_modules', 'src' ],
	moduleFileExtensions: [
		'js',
		'mjs',
		'cjs',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node'
	],
	testEnvironment: 'jsdom',
	testMatch: [
		'<rootDir>/**/*.?(spec|test).[tj]s?(x)',
	],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
	}
};
