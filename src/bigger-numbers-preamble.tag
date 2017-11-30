
<biggernumberspreamble>
    <!-- Note the opts.preamble condition... -->
      <span if={opts.preamble}>
        {opts.preamble}
      </span>
      <!-- Yields children instead of ops, which is easier for a user to 
      enter. -->
      <yield />
  <script>
    //
  </script>

  <style>
  </style>
</biggernumberspreamble>