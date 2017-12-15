
<biggernumberscaption class="bn-caption">
    <div class="bignumber_content">
    <!-- Note the opts.caption condition... -->
      <span if={opts.caption}>
        {opts.caption}
      </span>
      <!-- Yields children instead of ops, which is easier for a user to 
      enter. -->
      <yield />
      </div>
  <script>
    //
  </script>

  <style>
  </style>
</biggernumberscaption>