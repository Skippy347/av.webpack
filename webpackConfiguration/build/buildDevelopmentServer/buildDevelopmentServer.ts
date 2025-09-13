import { BuildOptions } from "../types/webpackConfiguration";
import type { Configuration as DevelopmentServerConfiguration } from "webpack-dev-server";

export function buildDevelopmentServer(options: BuildOptions): DevelopmentServerConfiguration {
  const { serverPort } = options;

  return {
    port: serverPort,
    open: true,
  };
}
