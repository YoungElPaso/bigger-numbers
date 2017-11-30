(function () {
'use strict';

riot.tag2('biggernumbers', '<div class="bignumber_wrapper {opts.styling}"> <div class="info" if="{opts.info}"> {opts.info} </div> <div class="bignumber_content"> {opts.preamble} <yield from="preamble"></yield> </div> <div class="bignumber_value"> {opts.value} <yield from="value"></yield> </div> <div class="bignumber_content"> {opts.caption} <yield from="caption"></yield> <yield></yield> </div> </div>', 'biggernumbers .info,[data-is="biggernumbers"] .info{ color: gray; font-size: small; } biggernumbers .bignumber_wrapper,[data-is="biggernumbers"] .bignumber_wrapper{ border: 1px solid; } biggernumbers .bignumber_wrapper.center,[data-is="biggernumbers"] .bignumber_wrapper.center{ text-align: center; } biggernumbers .bignumber_wrapper.even-bigger,[data-is="biggernumbers"] .bignumber_wrapper.even-bigger{ font-size: xx-large; };', '', function(opts) {
});

riot.tag2('biggernumbersvalue', '<span if="{opts.value}"> {opts.value} </span> <yield></yield>', '', '', function(opts) {
});

riot.tag2('biggernumberscaption', '<span if="{opts.caption}"> {opts.caption} </span> <yield></yield>', '', '', function(opts) {
});

riot.tag2('biggernumberspreamble', '<span if="{opts.preamble}"> {opts.preamble} </span> <yield></yield>', '', '', function(opts) {
});

// Main file for bigger-numbers component.
console.info(riot ? "RiotJS is loaded!" : null);

// Import the compiled Bigger Numbers tags.
riot.mount("*");

}());
