import webpack from "webpack";

import { buildWebpackConfiguration } from "./webpackConfiguration/build/buildWebpackConfiguration/buildWebpackConfiguration";
import { BuildPaths } from "./webpackConfiguration/build/types/webpackConfiguration";
import path from "path";

const PATHS: BuildPaths = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const MODE = "development";
const isDevelopment = MODE === "development";

const config: webpack.Configuration = buildWebpackConfiguration({
  mode: MODE,
  paths: PATHS,
  isDevelopment: isDevelopment,
});

export default config;
