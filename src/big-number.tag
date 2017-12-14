<bignumber class="bignumber_wrapper">
  <div if={gotOpts} >
    <div if={opts.preamble} class="bignumber_content">
      {opts.preamble}
    </div>
    <div if={opts.value} class="bignumber_value">
      {opts.value}
    </div>
    <div if={opts.caption} class="bignumber_content">
      {opts.caption}
    </div>
  </div>
  <!-- Pass child HTML (yielded content) into the fallback sub-component which handles displaying it.  Only show it if there's no opts.-->
  <div if={!gotOpts} >
    <fallback><yield/></fallback>
  </div>

  <script>
    // Do some things before the tag is mounted (rendered).
    this.on('before-mount', function() {
      // If we have a value from certain opts, skip yielded fallback content.
      this.gotOpts = (this.opts.value && this.opts.caption) ? true : false;
    });
  </script>

  <style>
  </style>

</bignumber>