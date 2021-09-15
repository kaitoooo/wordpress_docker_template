const path = require('path');

const themeName = 'template';
const config = {
	themeName: themeName,
	assets: path.resolve(__dirname, `../src/wp-content/themes/${themeName}/assets/`),
	dist: path.resolve(__dirname, 'dist'),
};

module.exports = config;
