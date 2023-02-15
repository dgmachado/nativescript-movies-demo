const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);
	
	let isProduction = !!env.production;
	if (!isProduction) {
		// enable testID to e2e test (Appium)
		env.e2e = true;
	}

	return webpack.resolveConfig();
};