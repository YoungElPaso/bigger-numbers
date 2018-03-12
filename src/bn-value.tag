<!--  bn-value is a SFC that just renders some data  -->
<bn-value value>
  <div>
    <code>
      BN-VALUE
    </code>
  </div>
  
  <script>
    // Do some things before the tag is mounted (rendered).
    this.on('before-mount', function() {
      console.log('my parent is...', this.parent.root)
    });
  </script>

  <style>
  </style>

</bn-value>