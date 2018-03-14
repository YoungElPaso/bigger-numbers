
riot.tag2('bn-root', '<div> <code> BN-ROOT with: {this.opts.childCount} </code> <yield></yield> <bn-renderer rtype="{this.opts.rtype}" data="{this.opts.data}"> <yield></yield> </bn-renderer> </div>', '', '', function(opts) {

    this.on('before-mount', function() {
      console.log('my opts are...', this.opts);
      console.log('my children are...', this.tags);

      this.opts.childCount = this.tags;

      console.log('c count', this.tags);

    });
});