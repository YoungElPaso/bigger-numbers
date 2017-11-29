/** @jsx h */

// import "skatejs-web-components";
import { Component, h, prop } from "skatejs";

class SKTags extends Component {
  static props = {
    // delimiter: prop.string({ attribute: true, default: " " })
    name: prop.string
  };

  renderCallback() {
    return (
      <div>
        <div class="wrapper">{name}</div>
      </div>
    );
  }
}

customElements.define("sk-tags", SKTags);
