<!--  bn-error is a SFC that just renders an error  -->
<bn-error error>
  <div>
    <code>
      <i>BN-ERROR {this.opts.error}</i>
    </code>
  </div>
  
  <script>
    // Do some things before the tag is mounted (rendered).
    this.on('before-mount', function() {
      console.log('my parent is...', this.parent.root)
    });
  </script>

  <style>
   i {color: red}
  </style>

</bn-error>