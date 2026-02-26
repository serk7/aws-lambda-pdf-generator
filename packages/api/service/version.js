const packageJson = require('./../package.json');

const LambdaHelper = require('./../common/aws/LambdaHelper');

module.exports.handler = async (event, context) => {
	return new Promise((resolve, reject) => {
		return LambdaHelper.process('Read service metadata', event, (error, response) => {
			if (error) {
				reject(error);

				return;
			}

			resolve(response);
		}, (parser, responder) => {
			return {
				service: {
					name: packageJson.name,
					description: packageJson.description,
					environment: process.env.NODE_ENV,
					version: packageJson.version
				}
			};
		});
	});
};


