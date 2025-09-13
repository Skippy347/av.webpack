import { buildDevelopmentServer } from "../buildDevelopmentServer/buildDevelopmentServer";
import { buildLoaders } from "../buildLoaders/buildLoaders";
import { buildPlugins } from "../buildPlugins/buildPlugins";
import { buildResolvers } from "../buildResolvers/buildResolvers";
import { BuildOptions } from "../types/webpackConfiguration";

export function buildWebpackConfiguration(options: BuildOptions) {
  const { mode, paths, isDevelopment } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDevelopment ? "inline-source-map" : undefined,
    devServer: isDevelopment ? buildDevelopmentServer(options) : undefined,
  };
}
