<!--  bn-renderer is a SFC that renders data passed as 'data' attr using styling defined by 'type' attr  -->
<bn-renderer rtype="null" data>
  <div>
    <code>
      bn-renderer:
      type: {this.opts.rtype}
      data: {this.opts.data}
    </code>
    <yield />
  </div>
  <script>
  this.on('before-mount', function() {
    // TODO: figure out how to put in default attr/opts. see Riot docs perhaps.
    console.log('bn-renderer, my opts are...', this.opts.rType);
  });
  </script>
</bn-renderer>