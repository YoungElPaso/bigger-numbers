
<biggernumbers>
<div class="bignumber_wrapper {opts.styling}">
  <!-- Note the opts.info for additional notes... -->
    <div class="info" if={opts.info}>
      {opts.info}
    </div>
  
    <div class="bignumber_content">
      <!-- Note the opts.preamble OR yield... -->
      {opts.preamble}
      <yield from ="preamble"/>
    </div>

    <div class="bignumber_value">
      <!-- Note the opts.value OR yield... -->
      {opts.value}
      <yield from  ="value"/>
    </div>

    <div class="bignumber_content">
      <!-- Note the opts.caption OR yield... -->
      {opts.caption}
      <yield from ="caption" />
      <!-- This is a dumping ground for extra children tags from content -->
      <yield />
    </div>
</div>

  
  <script>
    // We can access the component like this...
    // this.on('mount', function() {
    //   var t = this;
    //   console.log(t);
    // })
    // TODO: need a condtion to set opts if yield exists so they don't collide.
    // Surely there is an API to inspect that.
    // Although which should take precedence is not obvious...
    // 
    // TODO: provide a working example of why this is good. I.e. how we can progressively enhance BN because of components.
    // For instance, in on('mount') we could hook in D3 to re-render a
    // value in a dynamic way (heat map, size or whatever). This could be opt-in too by passing a 'dynamic-value' boolean opt/attribute on the tag, checking for it and running whatever function (say D3) on the value at will.
  </script>

  <style>
  /* TODO: Will lose the styling later...*/
    :scope .info {
      color: gray;
      font-size: small;
    }
    :scope .bignumber_wrapper {
      border: 1px solid;
    };
    /* Some scoped styles for kicks.*/
    :scope .bignumber_wrapper.center {
      text-align: center;
    };
    :scope .bignumber_wrapper.even-bigger {
      font-size: xx-large;
    };
  </style>
</biggernumbers>
