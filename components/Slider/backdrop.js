import React, { Component } from "react";
export default class Backdrop extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {
    var open = false;
    // console.log(false)
    this.props.openDrawer(open);
    this.setState({ open: open });
  }

  render() {
    return <div className="backdrop" onClick={this.openDrawer} />;
  }
}
