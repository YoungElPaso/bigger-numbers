// rollup.config.js

// import riot from "rollup-plugin-riot";

// import options from "./riot.config.js";

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "app.js",
  output: {
    file: "bundle.js",
    format: "iife"
  },
  watch: {
    include: ["./src/**", "./compiled-tags/**", "app.js"]
  },
  // Not sure this Riot plugin does all I need. Not sure it does watch
  // plugins: [riot(options)]
  plugins: [resolve(), commonjs()]
};
