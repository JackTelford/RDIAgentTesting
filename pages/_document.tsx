/*
import NextDocument, {
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { DEFAULT_LOCALE } from "utils/constants";
import React from "react";

const withStyledComponents = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const { renderPage } = ctx;
  const sheet = new ServerStyleSheet();

  try {
    ctx.renderPage = () =>
      renderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const { styles, ...initialProps } = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};

class Document extends NextDocument {
  public static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return withStyledComponents(ctx);
  }

  public render(): React.JSX.Element {
    return (
      <Html lang={DEFAULT_LOCALE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

// File: pages/_document.tsx
*/

// pages/_document.tsx
/*import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;*/

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener("DOMContentLoaded", function () {
                  const scripts = document.querySelectorAll('script[src]');
                  scripts.forEach(script => {
                    if (script.src.startsWith('/_next/')) {
                      script.src = '.' + script.src;
                      console.log("Updated script src to:", script.src);
                    }
                  });

                  const links = document.querySelectorAll('link[href]');
                  links.forEach(link => {
                    if (link.href.startsWith('/_next/')) {
                      link.href = '.' + link.href;
                      console.log("Updated link href to:", link.href);
                    }
                  });
                });
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function () {
                  "use strict";
                  let e;
                  let s = {
                    camera: { far: 400, fov: 30, near: .1 },
                    color: "hsl(225, 40%, 20%)",
                    colorCycleSpeed: 10,
                    forceAnimate: !0,
                    hh: 50,
                    hue: 225,
                    lightness: 20,
                    material: { options: { fog: !1, wireframe: !1 } },
                    saturation: 40,
                    shininess: 35,
                    waveHeight: 20,
                    waveSpeed: .25,
                    ww: 50
                  };
                  let t = { gyroControls: !1, mouseControls: !1, mouseEase: !1, touchControls: !1 };
                  let i = ["./System/Vanta.js/three.min.js", "./System/Vanta.js/vanta.waves.min.js"];

                  console.log("Initializing VANTA script...");

                  globalThis.addEventListener("message", ({ data: o }) => {
                    console.log("Received message:", o);
                    if ("undefined" != typeof WebGLRenderingContext) {
                      if ("init" === o) {
                        console.log("Initializing VANTA with scripts:", i);
                        globalThis.importScripts(...i);
                      } else if (o instanceof DOMRect) {
                        let { width: s, height: t } = o;
                        console.log("Resizing to width:", s, "height:", t);
                        e?.renderer.setSize(s, t);
                        e?.resize();
                      } else {
                        let { canvas: i, config: r, devicePixelRatio: a } = o;
                        let { VANTA: { current: n = e, WAVES: l } = {} } = globalThis;
                        if (!i || !l) return;
                        console.log("Initializing VANTA effect on canvas with config:", r);
                        n && n.destroy();
                        try {
                          e = l({ ...r || s, ...t, canvas: i, devicePixelRatio: a });
                        } catch (e) {
                          console.error("Error initializing VANTA effect:", e?.message);
                          globalThis.postMessage({ message: e?.message, type: "[error]" });
                        }
                      }
                    }
                  }, { passive: !0 });

                  console.log("VANTA script initialization complete.");
                }(), _N_E = {};
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
