import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;

  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.4;
  }

  body {
    margin: 0;
    padding: 0;
    color: #163d8d;
  }
`;

const theme = {
  colors: {
    accent: "#34a29d",
    primary: "#163d8d",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
