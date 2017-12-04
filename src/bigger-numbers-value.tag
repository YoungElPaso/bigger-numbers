
<biggernumbersvalue>
    <!-- Note the opts.value condition... -->
      <span if={opts.value}>
        {opts.value}
      </span>
      <!-- Yields children instead of ops, which is easier for a user to 
      enter. -->
      <yield />
  <script>
    // Adding a possible D3 mixin here.
    // TODO: how to couple this? Adding D3 as a mixin or as a wrapper tag?
    // Not sure what the best approach is here...
    
    // Load the D3 mixin only if the opts say to. 
    // TODO: should the mixin be imported here? or in app.js?
    if (opts.enhance == 'true') {
      // console.log(this.opts);
      // console.log('adding D3 Mixin here to value...');
      this.mixin('d3mixin');
    }
  </script>

  <style>
  </style>
</biggernumbersvalue>
