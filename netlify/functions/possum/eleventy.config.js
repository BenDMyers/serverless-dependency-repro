const {EleventyServerlessBundlerPlugin} = require('@11ty/eleventy');

// We don't use `toCamelCase`, but it should be bundled with the serverless function nonetheless.
const toCamelCase = require('to-camel-case');

/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig)) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(
		EleventyServerlessBundlerPlugin,
		{name: 'possum', functionsDir: 'netlify/functions'}
	)

	return {
		dir: {
			input: 'src'
		}
	};
};