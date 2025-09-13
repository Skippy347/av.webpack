import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import { BuildOptions } from "../types/webpackConfiguration";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDevelopment } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  };

  return [typescriptLoader, cssLoader];
}
