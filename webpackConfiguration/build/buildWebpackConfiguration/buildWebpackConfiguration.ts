import { BuildOptions } from "../types/webpackConfiguration";

import { buildPlugins } from "../buildPlugins/buildPlugins";
import { buildLoaders } from "../buildLoaders/buildLoaders";
import { buildResolvers } from "../buildResolvers/buildResolvers";
import { buildDevelopmentServer } from "../buildDevelopmentServer/buildDevelopmentServer";

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
