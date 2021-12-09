const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsDir: "h5", 
  configureWebpack: config => {
    Object.assign(config.resolve.alias, {
     // "@utils": resolve("src/utils"),
    //  "@libs": resolve("src/libs"),
    //  "@api": resolve("src/api"),
      "@components": resolve("src/components"),
      "@assets": resolve("src/assets"),
      "@css": resolve("src/assets/css"),
      "@images": resolve("src/assets/images"),
      "@views": resolve("src/views"),
    });


  },

};
