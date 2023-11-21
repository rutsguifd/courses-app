import path from 'path';
import __dirname from 'path';
export default {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
};
