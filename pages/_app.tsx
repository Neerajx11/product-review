import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import store from "../src/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Box maxW="1440px" mx="auto">
          <Component {...pageProps} />
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
