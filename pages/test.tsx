import React, { Component } from "react";
import type { NextPageContext } from "next";

import { PortalContext } from "../components/PortalContext";

export class Test extends Component {
  static async getInitialProps(ctx: NextPageContext) {
    console.log(ctx, "ctx in test");

    return {
      name: "return from tesssssst",
    };
  }

  render() {
    console.log(this.props, "props from test");
    return "hola";
  }
}

export default PortalContext(Test);
