(function () {
'use strict';

riot.tag2('bn-root', '<div> <code> BN-ROOT with: {this.opts.childCount} </code> <yield></yield> <bn-renderer rtype="{this.opts.rtype}" data="{this.opts.data}"> <yield></yield> </bn-renderer> </div>', '', '', function(opts) {

    this.on('before-mount', function() {
      console.log('my opts are...', this.opts);
      console.log('my children are...', this.tags);

      this.opts.childCount = this.tags;

      console.log('c count', this.tags);

    });
});

riot.tag2('bn-value', '<div> <code> BN-VALUE </code> </div>', '', 'value', function(opts) {

    this.on('before-mount', function() {
      console.log('my parent is...', this.parent.root);
    });
});

riot.tag2('bn-renderer', '<div> <code> bn-renderer: type: {this.opts.rtype} data: {this.opts.data} </code> <yield></yield> </div>', '', 'rtype="null" data', function(opts) {
  this.on('before-mount', function() {

    console.log('bn-renderer, my opts are...', this.opts.rType);
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
