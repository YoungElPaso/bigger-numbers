// Main file for bigger-numbers component.
console.info(riot ? "RiotJS is loaded!" : null);

// Import the compiled Bigger Numbers tag.
import "./compiled-tags/bigger-numbers.js";

// Mount RiotJS elements.
riot.mount("*");
