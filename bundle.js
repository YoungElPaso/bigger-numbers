(function () {
'use strict';

riot.tag2('bn-root', '<div> BN-ROOT with: {this.opts.childCount} <yield></yield> <bn-value></bn-value> </div>', '', '', function(opts) {

    this.on('before-mount', function() {
      console.log('my children are...', this.tags);

      this.opts.childCount = this.tags;

      console.log('c count', this.tags);
    });
});

riot.tag2('bn-value', '<div> BN-VALUE </div>', '', '', function(opts) {

    this.on('before-mount', function() {
      console.log('my parent is...', this.parent.root);
    });
});

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
riot.mount("bn-root");

}());
