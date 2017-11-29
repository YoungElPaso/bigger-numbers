// rollup.config.js

import riot from "rollup-plugin-riot";

import options from "./riot.config.js";

export default {
  input: "app.js",
  output: {
    file: "bundle.js",
    format: "iife"
  },
  watch: {
    include: ["src/**", "app.js"]
  },
  plugins: [riot(options)]
};
