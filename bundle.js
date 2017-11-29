(function () {
'use strict';

riot.tag2('bigger-numbers', '<p>Hi this is a bigger number component {message()}</p>', 'bigger-numbers p,[data-is="bigger-numbers"] p{ }', '', function(opts) {
    this.message = function() {
      return 'nay, super neat!'
    }.bind(this);
});

// Main file for bigger-numbers component.
console.info(riot ? "RiotJS is loaded!" : null);

// Import the compiled Bigger Numbers tag.
riot.mount("*");

}());
