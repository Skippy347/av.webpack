import webpack from "webpack";

import { buildWebpackConfiguration } from "./webpackConfiguration/build/buildWebpackConfiguration/buildWebpackConfiguration";
import { BuildEnvironmentVariables, BuildPaths } from "./webpackConfiguration/build/types/webpackConfiguration";
import path from "path";

const PATHS: BuildPaths = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnvironmentVariables) => {
  const MODE = env.mode || "development";
  const SERVER_PORT = env.port || 5000;

  const IS_DEVELOPMENT = MODE === "development";

  const webpackConfiguration: webpack.Configuration = buildWebpackConfiguration({
    mode: MODE,
    paths: PATHS,
    isDevelopment: IS_DEVELOPMENT,
    serverPort: SERVER_PORT,
  });

  return webpackConfiguration;
};
