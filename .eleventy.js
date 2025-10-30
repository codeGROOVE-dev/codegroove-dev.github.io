module.exports = function(eleventyConfig) {
  // Copy assets folders
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("canva/codeGROOVE_files");
  eleventyConfig.addPassthroughCopy("src/.well-known");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
