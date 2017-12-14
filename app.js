// Main file for bigger-numbers component.
console.info(riot ? "RiotJS is loaded!" : null);

// Import the mixins to extend tags.
import D3Mixin from "./src/d3mixin.js";
riot.mixin("d3mixin", D3Mixin);

// Import the compiled Bigger Numbers tags.
import "./compiled-tags/bigger-numbers.js";
import "./compiled-tags/bigger-numbers-value.js";
import "./compiled-tags/bigger-numbers-caption.js";
import "./compiled-tags/bigger-numbers-preamble.js";

// Import new compiled, simplified tag.
import "./compiled-tags/big-number.js";
// Import new generic fallback tag.
import "./compiled-tags/fallback.js";

// Mount RiotJS elements. In this case just one, bigger-numbers.
// TODO: make this conditional on some contexts.
// I.e. don't do it on every page. But hey, this is just a demo!
riot.mount("*");
