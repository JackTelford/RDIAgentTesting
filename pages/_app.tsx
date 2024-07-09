import { type AppProps } from "next/app";
import type React from "react";
import { ErrorBoundary } from "components/pages/ErrorBoundary";
import Metadata from "components/pages/Metadata";
import StyledApp from "components/pages/StyledApp";
import { FileSystemProvider } from "contexts/fileSystem";
import { MenuProvider } from "contexts/menu";
import { ProcessProvider } from "contexts/process";
import { SessionProvider } from "contexts/session";
import { ViewportProvider } from "contexts/viewport";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <ViewportProvider>
      <ProcessProvider>
        <FileSystemProvider>
          <SessionProvider>
            <ErrorBoundary>
              <Metadata />
              <StyledApp>
                <MenuProvider>
                  <Component {...pageProps} />
                </MenuProvider>
              </StyledApp>
            </ErrorBoundary>
          </SessionProvider>
        </FileSystemProvider>
      </ProcessProvider>
    </ViewportProvider>
  </StyleSheetManager>
);

export default App;

/*
// OG CODE
import { type AppProps } from "next/app";
import type React from "react";
import { ErrorBoundary } from "components/pages/ErrorBoundary";
import Metadata from "components/pages/Metadata";
import StyledApp from "components/pages/StyledApp";
import { FileSystemProvider } from "contexts/fileSystem";
import { MenuProvider } from "contexts/menu";
import { ProcessProvider } from "contexts/process";
import { SessionProvider } from "contexts/session";
import { ViewportProvider } from "contexts/viewport";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ViewportProvider>
    <ProcessProvider>
      <FileSystemProvider>
        <SessionProvider>
          <ErrorBoundary>
            <Metadata />
            <StyledApp>
              <MenuProvider>
                <Component {...pageProps} />
              </MenuProvider>
            </StyledApp>
          </ErrorBoundary>
        </SessionProvider>
      </FileSystemProvider>
    </ProcessProvider>
  </ViewportProvider>
);

export default App;

// path pages/_app.tsx
*/

// import { type AppProps } from "next/app";
// import type React from "react";
// import { ErrorBoundary } from "components/pages/ErrorBoundary";
// import Metadata from "components/pages/Metadata";
// import StyledApp from "components/pages/StyledApp";
// import { FileSystemProvider } from "contexts/fileSystem";
// import { MenuProvider } from "contexts/menu";
// import { ProcessProvider } from "contexts/process";
// import { SessionProvider } from "contexts/session";
// import { ViewportProvider } from "contexts/viewport";
// import { StyleSheetManager } from "styled-components";
// import isPropValid from "@emotion/is-prop-valid";
//
// const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
//   <StyleSheetManager shouldForwardProp={isPropValid}>
//     <ViewportProvider>
//       <ProcessProvider>
//         <FileSystemProvider>
//           <SessionProvider>
//             <ErrorBoundary>
//               <Metadata />
//               <StyledApp>
//                 <MenuProvider>
//                   <Component {...pageProps} />
//                 </MenuProvider>
//               </StyledApp>
//             </ErrorBoundary>
//           </SessionProvider>
//         </FileSystemProvider>
//       </ProcessProvider>
//     </ViewportProvider>
//   </StyleSheetManager>
// );
//
// export default App;

// path pages/_app.tsx
