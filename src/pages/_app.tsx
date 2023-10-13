import "@/styles/globals.css";
import "@fontsource/roboto";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "@/config/theme";
import "react-multi-carousel/lib/styles.css";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { HydrationProvider, Client } from "react-hydration-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HydrationProvider>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
          <Client>
            <Component {...pageProps} />
          </Client>
        </ChakraProvider>
      </I18nextProvider>
    </HydrationProvider>
  );
}
