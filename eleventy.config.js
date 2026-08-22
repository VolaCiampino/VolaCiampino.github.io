const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);

	eleventyConfig.addPassthroughCopy("misc/");
	eleventyConfig.addPassthroughCopy("foto/");
	eleventyConfig.addPassthroughCopy("favicon.ico");
	eleventyConfig.addPassthroughCopy("robots.txt");
	eleventyConfig.addPassthroughCopy("CNAME");

	return {
		dir: {
			input: "src",
			output: "_site"
		},
	};
};
