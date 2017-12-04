"use strict";

// Bring D3 along for the ride.
import * as d3 from "d3";

// TODO: change depenendencies to JUST what d3 we want.
// Ie Bring along *certain* d3 modules for the ride!
// import { scaleLinear } from "d3-scale";

let D3Mixin = {
  init: function() {
    this.on("mount", function() {
      // console.log("got the D3Mixin into the mix...");
      console.log("Mounted!", d3, this.root);
      // D3ify something!
      d3.select(this.root).style("background-color", "pink");
    });
  }
};

export default D3Mixin;
