import React, { Component } from "react";
import { AppContext } from "next/app";

import type { NextPage, NextComponentType, NextPageContext } from "next";

export type TemplateProps = {
  name: string;
};

export class Template<TemplateProps> extends Component {
  static async getInitialProps(ctx: NextPageContext) {
    console.log(ctx, "my contexxxxxxxt in template");

    return {
      name: "juan template",
    };
  }
}

export default Template;
