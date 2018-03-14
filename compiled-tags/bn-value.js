
riot.tag2('bn-value', '<div> <code> BN-VALUE </code> </div>', '', 'value', function(opts) {

    this.on('before-mount', function() {
      console.log('my parent is...', this.parent.root)
    });
});