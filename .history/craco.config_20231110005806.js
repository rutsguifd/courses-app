import { path, __dirname } from 'path';
export default {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
};
