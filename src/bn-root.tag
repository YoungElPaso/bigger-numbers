<!--  bn-root is just that, a root, a SFC  -->
<bn-root>
  <div>
    <code>
      BN-ROOT with: {this.opts.childCount}
    </code>
    <!--  Yield brings in the children, which could be data elements or anything really  -->
    <yield/>
    
    <!--  Rendering component goes here. A rendering component might just regurgitate the children as is OR it might take *data* and render a *type* of presentation: e.g. a pie-chart -->

    <!--  bn-renderer just renders, a SFC  -->
    <bn-renderer rtype={this.opts.rtype} data={this.opts.data} >
      <!--  Note! can use yield twice! so can compose this renderer well...  -->
      <!--  This yield is from the bn-root content.  -->
      <yield />
    </bn-renderer>
  </div>
  
  <script>
    // Do some things before the tag is mounted (rendered).
    this.on('before-mount', function() {
      console.log('my opts are...', this.opts);
      console.log('my children are...', this.tags);

      // Testing to see if we can 'hydrate' a state.
      // TODO: continue testing these ideas and prototypes, especially look into hyrdating.
      // Add child count...(this is state-like I guess...)
      this.opts.childCount = this.tags;
      // Argh, tags isn't an array...gotta count objects.
      console.log('c count', this.tags);
      // This type of thing should be its own component...some sort of wrapper or data container or something.
      // One way to do this would be to have a '<stateful>' tag that could have life-cycle methods so when used, it would pass state UP (or down) depending on children or attributes.
    });
  </script>

  <style>
  </style>

</bn-root>