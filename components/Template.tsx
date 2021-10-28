import React, { Component } from "react";
import { AppContext } from "next/app";

export class Template extends Component {
  static async getInitialProps(ctx) {
    console.log(ctx, "my contexxxxxxxt in template");

    return {
      name: "juan template",
    };
  }
}

export default Template;
