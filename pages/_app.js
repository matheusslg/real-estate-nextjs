/** Plugins */
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

/** Styles */
import "../styles/globals.css";

const theme = extendTheme({
  colors: {
    brand: "#56B15F",
    whatsapp: "#25D366",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
