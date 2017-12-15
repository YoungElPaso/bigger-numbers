// rollup.config.js

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "mcgill-components.js",
  output: {
    file: "components-bundle.js",
    format: "iife"
  },
  watch: {
    include: ["./src/**", "./compiled-tags/**", "app.js"]
  },
  // Not sure this Riot plugin does all I need. Not sure it does watch
  // plugins: [riot(options)]
  plugins: [resolve(), commonjs()]
};
