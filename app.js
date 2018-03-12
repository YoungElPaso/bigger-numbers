// Main file for bigger-numbers component.
console.info(riot ? "RiotJS is loaded!" : null);

// Import the mixins to extend tags.

// import D3Mixin from "./src/d3mixin.js";
// riot.mixin("d3mixin", D3Mixin);

// Import the compiled Bigger Numbers tags.
// import "./compiled-tags/bigger-numbers.js";
// import "./compiled-tags/bigger-numbers-value.js";
// import "./compiled-tags/bigger-numbers-caption.js";
// import "./compiled-tags/bigger-numbers-preamble.js";

// Import the new bn-root tag.
import "./compiled-tags/bn-root.js";

// Import the new bn-value tag.
import "./compiled-tags/bn-value.js";

// Import the new bn-renderer tag.
import "./compiled-tags/bn-renderer.js";

// // Import new compiled, simplified tag.
// import "./compiled-tags/big-number.js";
// // Import new generic fallback tag.
// import "./compiled-tags/fallback.js";

// Mount RiotJS elements.
// riot.mount("*");

// Try mounting just the parent elements. Not ALL elements. Mounting all will lead to weird issues w/ timing, whereas letting the parent mount and mount children seems not to...
riot.mount("bn-root");
