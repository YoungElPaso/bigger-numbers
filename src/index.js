/** @jsx h */

// Main file for Bigger Numbers component.

// Import Skate.js for component building.
import { props, withComponent } from "skatejs";

// Import withPreact as the renderer.
import withPreact from "@skatejs/renderer-preact";
// import withReact from "@skatejs/renderer-react";

// Import rendering method from Preact.
import { h } from "preact";
// import React from "react";

// Import tachyons for styling.
import tachyons from "tachyons";

// todo try to import a tachyons css file directly... maybe that would work?
const foo = "bar";
const foobar = tachyons;

// Define the new component.
class BigNumber extends withComponent(withPreact()) {
  // class BigNumber extends withReact(withComponent()) {
  // Caption and values can be specified as attributes/props alone.
  // That is the best way for use to manage the templating.
  static props = {
    caption: props.string,
    value: props.string,
    img: props.string
  };

  renderCallback({ caption, value, img }) {
    // If we wanted a truly default img this is how we could do it.
    let image = img;
    // let image = img ? img : "http://lorempixel.com/200/200/nature/";
    // However, instead we're going to rely on the tag having some
    // attributes ready before users can get to it.
    // console.log(foobar);
    return (
      // TODO: need to get the 'host' styling to cascade in here, or import the
      //  tachyons styles, which does encapsulate it nicely.
      <div>
        <style>
          {`
          /* want to include tachyons here...*/
            div  {background: red}
          ` + tachyons}
        </style>
        <div class="pa3 bg-gray">
          <slot>
            <div class="value bg-green">{value}</div>
            <div class="caption bg-red">{caption}</div>
            <div class="img">
              <img src={image} />
            </div>
          </slot>
        </div>
      </div>
    );
  }
}

// Add component to the customElements.
customElements.define("big-number", BigNumber);
