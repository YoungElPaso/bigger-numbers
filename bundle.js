(function () {
'use strict';

riot.tag2('bigger-numbers', '<div class="bignumber_wrapper {opts.styling}"> <div class="info" if="{opts.info}"> {opts.info} </div> <div class="bignumber_content"> {opts.preamble} <yield from="preamble"></yield> </div> <div class="bignumber_value"> {opts.value} <yield from="value"></yield> </div> <div class="bignumber_content"> {opts.caption} <yield from="caption"></yield> <yield></yield> </div> </div>', 'bigger-numbers .info,[data-is="bigger-numbers"] .info{ color: gray; font-size: small; } bigger-numbers .bignumber_wrapper,[data-is="bigger-numbers"] .bignumber_wrapper{ border: 1px solid; padding: 1em; } bigger-numbers .bignumber_wrapper.center,[data-is="bigger-numbers"] .bignumber_wrapper.center{ text-align: center; } bigger-numbers .bignumber_wrapper.even-bigger,[data-is="bigger-numbers"] .bignumber_wrapper.even-bigger{ font-size: xx-large; };', '', function(opts) {
});

// Main file for bigger-numbers component.
console.info(riot ? "RiotJS is loaded!" : null);

// Import the compiled Bigger Numbers tag.
// Mount RiotJS elements. In this case just one, bigger-numbers.
// TODO: make this conditional on some contexts.
// I.e. don't do it on every page. But hey, this is just a demo!
riot.mount("bigger-numbers");

}());
