
riot.tag2('bn-renderer', '<div> <code> bn-renderer: type: {this.opts.rtype} data: {this.opts.data} </code> <yield></yield> </div>', '', 'rtype="null" data', function(opts) {
  this.on('before-mount', function() {

    console.log('bn-renderer, my opts are...', this.opts.rType);
  });
});