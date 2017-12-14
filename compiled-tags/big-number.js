
riot.tag2('bignumber', '<div if="{gotOpts}"> <div if="{opts.preamble}" class="bignumber_content"> {opts.preamble} </div> <div if="{opts.value}" class="bignumber_value"> {opts.value} </div> <div if="{opts.caption}" class="bignumber_content"> {opts.caption} </div> </div> <div if="{!gotOpts}"> <fallback><yield></yield></fallback> </div>', '', 'class="bignumber_wrapper"', function(opts) {

    this.on('before-mount', function() {

      this.gotOpts = (this.opts.value && this.opts.caption) ? true : false;

    });
});