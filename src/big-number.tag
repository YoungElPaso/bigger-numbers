<!-- Need to define a series of conditions... 
 for showing opts when they are there
 for showing children when they are the only thing there
 for showing children as a fallback
 for showing the opts/attrs in the WYS
 for showing just the opts in the front (translating children to opts? if the opts are empty?)
 for showing the fallback if there is no JS and in  the WYS.
 todo: best ergonomics possible.
-->
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
  <!-- Pass child HTML (yielded content) into the fallback sub-component which handles displaying it.-->
  <div if={!gotOpts} >
    <fallback><yield/></fallback>
  </div>

  <script>
    // Check some stuff before mounting, maybe manipulate some opts.
    this.on('before-mount', function() {
       // Since yield isn't easily controlled in this tag, work around to hide/show yield and fallback by controlling it in a sub-component.
      // If we have a value from opts, skip yielded fallback content.
      this.gotOpts = (this.opts.value && this.opts.caption) ? true : false;
      // Change showFallback depending on opts.
      // this.showFallback = !this.gotOpts;
    });
  </script>

  <style>
  </style>

</bignumber>