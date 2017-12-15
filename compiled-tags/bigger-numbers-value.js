
riot.tag2('biggernumbersvalue', '<span if="{opts.value}"> {opts.value} </span> <yield></yield>', '', 'class="bignumber_value"', function(opts) {


    if (opts.enhance == 'true') {

      this.mixin('d3mixin');
    }
});
