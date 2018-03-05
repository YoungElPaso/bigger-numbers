riot.tag2('bn-root', '<div> BN-ROOT with: {this.opts.childCount} <yield></yield> <bn-value></bn-value> </div>', '', '', function(opts) {

    this.on('before-mount', function() {
      console.log('my children are...', this.tags)

      this.opts.childCount = this.tags;

      console.log('c count', this.tags);
    });
});