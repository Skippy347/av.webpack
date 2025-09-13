import path from "path";
import { BuildOptions } from "../types/webpackConfiguration";

import { buildPlugins } from "../buildPlugins/buildPlugins";
import { buildLoaders } from "../buildLoaders/buildLoaders";
import { buildResolvers } from "../buildResolvers/buildResolvers";

export function buildWebpackConfiguration(options: BuildOptions) {
  const { mode, paths } = options;

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
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
