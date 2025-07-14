module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/.well-known");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Add date filters
  eleventyConfig.addFilter("dateReadable", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // RSS date filter
  eleventyConfig.addFilter("dateToRfc3339", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  // Get newest date in collection
  eleventyConfig.addFilter("getNewestCollectionItemDate", (collection) => {
    return new Date(Math.max(...collection.map(item => item.date)));
  });

  // Convert HTML to absolute URLs
  eleventyConfig.addFilter("htmlToAbsoluteUrls", (htmlContent, base) => {
    if (!htmlContent) return '';
    // Simple implementation - in production you might want to use a proper HTML parser
    return htmlContent.replace(/src="\/([^"]+)"/g, `src="${base}/$1`)
                     .replace(/href="\/([^"]+)"/g, `href="${base}/$1`);
  });

  // Add excerpt support
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};