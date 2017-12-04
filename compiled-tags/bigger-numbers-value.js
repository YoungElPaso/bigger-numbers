
riot.tag2('biggernumbersvalue', '<span if="{opts.value}"> {opts.value} </span> <yield></yield>', '', '', function(opts) {


    if (opts.enhance == 'true') {

      this.mixin('d3mixin');
    }
});
