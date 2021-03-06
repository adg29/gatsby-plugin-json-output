const path = require(`path`);

const { start } = require(`./lib/index`);

const publicPath = path.resolve("./public");

exports.createPages = async ({ graphql }, pluginOptions) => {
  delete pluginOptions.plugins;
  await start(graphql, publicPath, pluginOptions);
}