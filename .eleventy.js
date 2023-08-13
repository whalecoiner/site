module.exports = eleventyConfig => {
    // Use the eleventyConfig object's built in methods to customize
    return {
        dir: {
          input: "content",
          output: "_site",
        },
        templateFormats: [ "md", "njk", "html", ],
      };

  };

