module.exports = function (eleventyConfig) {

    // Statische bestanden kopiëren naar _site
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("style");
    eleventyConfig.addPassthroughCopy("tokens");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ["njk", "html", "md"],
        htmlTemplateEngine: "njk"
    };
};
