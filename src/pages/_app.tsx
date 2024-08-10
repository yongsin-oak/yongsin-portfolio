import MenuLayout from "@/pages/menuLayout";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@/pages/theme-provider";
import { Theme } from "@radix-ui/themes";
import "../i18n/i18n";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Theme>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <MenuLayout>
        <Component {...pageProps} />
      </MenuLayout>
    </ThemeProvider>
  </Theme>
);

export default appWithTranslation(MyApp);
