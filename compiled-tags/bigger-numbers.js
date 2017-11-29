
riot.tag2('bigger-numbers', '<p>Hi this is a bigger number component {message()}</p>', 'bigger-numbers p,[data-is="bigger-numbers"] p{ color: #000; }', '', function(opts) {
    this.message = function() {
      return 'cool!'
    }.bind(this)
});
