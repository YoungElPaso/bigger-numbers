
riot.tag2('bigger-numbers', '<p>Hi this is a bigger number component {message()}</p>', 'bigger-numbers p,[data-is="bigger-numbers"] p{ }', '', function(opts) {
    this.message = function() {
      return 'nay, super neat!'
    }.bind(this)
});
