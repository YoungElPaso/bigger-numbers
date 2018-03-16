
riot.tag2('bn-error', '<div> <code> <i>BN-ERROR {this.opts.error}</i> </code> </div>', 'bn-error i,[data-is="bn-error"] i{color: red}', 'error', function(opts) {

    this.on('before-mount', function() {
      console.log('my parent is...', this.parent.root)
    });
});