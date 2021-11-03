import React, { FC } from "react";
import type { NextComponentType, NextPageContext } from "next";

import { PortalProvider } from "../components/context";

export const PortalContext = (C: NextComponentType<NextPageContext>) => {
  let componentProps = {};

  class PortalContextComponent extends React.Component<NextComponentType> {
    static async getInitialProps(ctx: NextPageContext) {
      // Get component’s props
      if (C.getInitialProps) {
        componentProps = await C.getInitialProps(ctx);
      }

      return {
        lastname: "chica",
        ...componentProps,
      };
    }

    render() {
      console.log(this.props, "props in hoc");
      return (
        <PortalProvider>
          <C {...this.props} />
        </PortalProvider>
      );
    }
  }

  return PortalContextComponent;
};
