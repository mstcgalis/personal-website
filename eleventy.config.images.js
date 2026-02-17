const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		let split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	// Use: {% image "src.jpg", "alt text", null, null, true %} for LCP images (eager loading)
	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes, isLCP = false) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!
		let formats = ["avif", "webp", "auto"];
		let file = relativeToInputPath(this.page.inputPath, src);
		let metadata = await eleventyImage(file, {
			widths: widths || ["auto"],
			formats,
			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we're using addPlugin.
		});

		// Use eager loading and high fetch priority for LCP (above-the-fold) images
		let imageAttributes = {
			alt,
			sizes,
			loading: isLCP ? "eager" : "lazy",
			decoding: isLCP ? "sync" : "async",
		};
		if (isLCP) {
			imageAttributes.fetchpriority = "high";
		}
		return eleventyImage.generateHTML(metadata, imageAttributes);
	});
};
