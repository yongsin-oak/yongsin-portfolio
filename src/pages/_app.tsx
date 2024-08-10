import MenuLayout from "@/pages/menuLayout";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@/pages/theme-provider";
import { Theme } from "@radix-ui/themes";
import "../i18n/i18n";
import { K2D } from "next/font/google";
const k2d = K2D({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});
const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={k2d.className}>
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
  </main>
);

export default appWithTranslation(MyApp);
