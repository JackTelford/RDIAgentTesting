/*
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { memo } from "react";
import { type FeatureBundle, LazyMotion } from "framer-motion";
import { useSession } from "contexts/session";
import GlobalStyle from "styles/GlobalStyle";
import themes from "styles/themes";
import { DEFAULT_THEME } from "utils/constants";

const motionFeatures = async (): Promise<FeatureBundle> =>
  (
    await import(
      /!* webpackMode: "eager" *!/
      "styles/motionFeatures"
    )
  ).default;

const StyledApp: FC = ({ children }) => {
  const { themeName } = useSession();

  return (
    <StyleSheetManager enableVendorPrefixes>
      <ThemeProvider theme={themes[themeName] || themes[DEFAULT_THEME]}>
        <GlobalStyle />
        <LazyMotion features={motionFeatures} strict>
          {children}
        </LazyMotion>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default memo(StyledApp);

// path: components/pages/StyledApp.tsx
*/

import { StyleSheetManager, ThemeProvider } from "styled-components";
import { memo, ReactNode } from "react";
import { type FeatureBundle, LazyMotion } from "framer-motion";
import { useSession } from "contexts/session";
import GlobalStyle from "styles/GlobalStyle";
import themes from "styles/themes";
import { DEFAULT_THEME } from "utils/constants";
import isPropValid from "@emotion/is-prop-valid";

const motionFeatures = async (): Promise<FeatureBundle> =>
  (await import("styles/motionFeatures")).default;

const StyledApp: FC<{ children: ReactNode }> = ({ children }) => {
  const { themeName } = useSession();

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={themes[themeName] || themes[DEFAULT_THEME]}>
        <GlobalStyle />
        <LazyMotion features={motionFeatures} strict>
          {children}
        </LazyMotion>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default memo(StyledApp);
