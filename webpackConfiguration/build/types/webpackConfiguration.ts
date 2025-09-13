export type BuildMode = "production" | "development";

export interface BuildPaths {
  build: string;
  entry: string;
  html: string;
}

export interface BuildEnvironmentVariables {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  serverPort: number;
  isDevelopment: boolean;
}
