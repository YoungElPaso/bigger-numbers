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
      // Using interpolation to map range of values to a colour.
      let range = 100;
      let bgColor = d3.scaleSequential(d3.interpolateCool).domain([0, range]);
      let color = d3.scaleSequential(d3.interpolateWarm).domain([0, range]);
      let fontSize = d3.scaleSequential(d3.interpolateRound(0, range / 50));
      let cValue = this.opts.value;
      // Only works for a number value!
      // If eValue isn't a number, let's assume something in the middle of
      // the domain.
      cValue = isNaN(cValue) ? 50 : cValue;
      d3.select(this.root).style("background-color", bgColor(cValue));
      d3.select(this.root).style("color", color(range - cValue));
      d3.select(this.root).style("font-size", fontSize(cValue) + "px");
    });
  }
};

export default D3Mixin;
