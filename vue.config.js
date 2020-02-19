module.exports = {
  lintOnSave: false,
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/todolist/" : "/",
  pages: {
    index: {
      title: "Labora",
      entry: "src/main.ts"
    }
  }
};
