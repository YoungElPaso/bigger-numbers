"use strict";
let D3Mixin = {
  init: function() {
    this.on("mount", function() {
      // console.log("got the D3Mixin into the mix...");
      console.log("Mounted!");
    });
  }
};

export default D3Mixin;
