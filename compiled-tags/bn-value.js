riot.tag2('bn-value', '<div> BN-VALUE </div>', '', '', function(opts) {

    this.on('before-mount', function() {
      console.log('my parent is...', this.parent.root)
    });
});