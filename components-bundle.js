(function () {
'use strict';

riot.tag2('biggernumbers', '<div class="bignumber_wrapper {opts.styling}"> <div class="info" if="{opts.info}"> {opts.info} </div> <div class="bignumber_content"> {opts.preamble} <yield from="preamble"></yield> </div> <div class="bignumber_value"> {opts.value} <yield from="value"></yield> </div> <div class="bignumber_content"> {opts.caption} <yield from="caption"></yield> <yield></yield> </div> </div>', 'biggernumbers .info,[data-is="biggernumbers"] .info{ color: gray; font-size: small; } biggernumbers .bignumber_wrapper,[data-is="biggernumbers"] .bignumber_wrapper{ border: 1px solid; } biggernumbers .bignumber_wrapper.center,[data-is="biggernumbers"] .bignumber_wrapper.center{ text-align: center; } biggernumbers .bignumber_wrapper.even-bigger,[data-is="biggernumbers"] .bignumber_wrapper.even-bigger{ font-size: xx-large; };', '', function(opts) {
});

riot.tag2('biggernumbersvalue', '<span if="{opts.value}"> {opts.value} </span> <yield></yield>', '', 'class="bignumber_value"', function(opts) {


    if (opts.enhance == 'true') {

      this.mixin('d3mixin');
    }
});

riot.tag2('biggernumberscaption', '<div class="bignumber_content"> <span if="{opts.caption}"> {opts.caption} </span> <yield></yield> </div>', '', 'class="bn-caption"', function(opts) {
});

riot.tag2('biggernumberspreamble', '<span if="{opts.preamble}"> {opts.preamble} </span> <yield></yield>', '', '', function(opts) {
});

riot.tag2('bignumber', '<div if="{gotOpts}"> <div if="{opts.preamble}" class="bignumber_content"> {opts.preamble} </div> <div if="{opts.value}" class="bignumber_value"> {opts.value} </div> <div if="{opts.caption}" class="bignumber_content"> {opts.caption} </div> </div> <div if="{!gotOpts}"> <fallback><yield></yield></fallback> </div>', '', 'class="bignumber_wrapper"', function(opts) {

    this.on('before-mount', function() {

      this.gotOpts = (this.opts.value && this.opts.caption) ? true : false;
    });
});

riot.tag2('fallback', '<div> <yield></yield> </div>', '', '', function(opts) {
});

// Main file for bigger-numbers component.
// console.info(riot ? "RiotJS is loaded!" : null);

// Import the compiled Bigger Numbers tags.
// Import new compiled, simplified tag.
// Import new generic fallback tag.
// Mount RiotJS elements.
riot.mount("*");

}());
