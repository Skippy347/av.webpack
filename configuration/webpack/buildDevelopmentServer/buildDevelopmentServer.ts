import type { Configuration as DevelopmentServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "../types/webpackConfiguration";

export function buildDevelopmentServer(options: BuildOptions): DevelopmentServerConfiguration {
  const { serverPort } = options;

  return {
    port: serverPort,
    open: true,
    historyApiFallback: true,
  };
}
