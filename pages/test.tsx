import React, { Component } from "react";
import { AppContext } from "next/app";

import Template, { TemplateProps } from "../components/Template";

export class Test extends Template<TemplateProps> {
  static async getInitialProps(ctx) {
    console.log(ctx, "my contexxxxxxxt in test");

    //const { Component, context } = ctx;
    //const pageProps = await Component.getInitialProps(ctx);
    //console.log(pageProps, "props in text ");

    const templateProps = Template.getInitialProps(ctx);
    console.log(templateProps, "Template props inherit");

    return templateProps;
  }

  render() {
    console.log(this.props, "props from test");
    return "hola";
  }
}

export default Test;
