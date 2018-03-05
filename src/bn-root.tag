<bn-root>
  <div>
    BN-ROOT with: {this.opts.childCount}
    <yield/>
    <bn-value/>
  </div>
  
  <script>
    // Do some things before the tag is mounted (rendered).
    this.on('before-mount', function() {
      console.log('my children are...', this.tags)

      // Testing to see if we can 'hydrate' a state.
      // TODO: continue testing these ideas and prototypes, especially look into hyrdating.
      // Add child count...(this is state-like I guess...)
      this.opts.childCount = this.tags;
      // Argh, tags isn't an array...gotta count objects.
      console.log('c count', this.tags);
    });
  </script>

  <style>
  </style>

</bn-root>