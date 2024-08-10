import React, { useEffect } from "react";
import { headerClass, mainClass, themeColor } from "../styles/styles";
import Text from "@/components/ui/text";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Menu from "@/components/icons/menu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun, UsersRound } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/router";
interface Props {
  children: React.ReactNode;
}

const MenuLayout = ({ children }: Props) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const { i18n, ready } = useTranslation("home");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    setMounted(true);
    // router.push(router.pathname, router.asPath, { locale: i18n.language });
  }, []);
  useEffect(() => {
    if (ready && mounted) {
      router.push(router.pathname, router.asPath, { locale: i18n.language });
    }
  }, [i18n.language]);
  if (!ready || !mounted) return null;
  return (
    <div className={cn(mainClass)}>
      <header className={cn(headerClass)}>
        <NavigationMenu className="min-w-full pb-2 py-4 justify-between h-full">
          <NavigationMenuList className="gap-8">
            <div className="flex items-center md:hidden">
              <Menu width={48} height={48} />
            </div>
            <div className="hidden items-center md:flex h-full">
              <UsersRound color={themeColor.primary} width={36} height={36} />
              <Text weight="bold" size="2xl" className="text-primary">
                Yongsin
              </Text>
            </div>
            <div className="hidden md:flex w-full h-full items-center">
              <NavigationMenuItem>
                <Link href="/sec1" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-transparent active:bg-transparent focus:bg-transparent"
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-transparent active:bg-transparent focus:bg-transparent"
                    )}
                  >
                    test
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "hover:bg-transparent active:bg-transparent focus:bg-transparent font-medium"
                      )}
                      onClick={() => setTheme("light")}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
          </NavigationMenuList>
          <NavigationMenuList className="h-5">
            <NavigationMenuItem>
              <Button
                variant="link"
                className="focus-visible:ring-transparent text-foreground hover:bg-accent"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? <Sun /> : <Moon />}
              </Button>
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            <NavigationMenuItem>
              <Button
                variant={i18n.language.includes("en") ? "default" : "ghost"}
                className="focus-visible:ring-transparent text-foreground"
                onClick={() => changeLanguage("en")}
              >
                <Text>EN</Text>
              </Button>
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            <NavigationMenuItem>
              <Button
                variant={i18n.language === "th" ? "default" : "ghost"}
                className="focus-visible:ring-transparent text-foreground"
                onClick={() => changeLanguage("th")}
              >
                <Text>TH</Text>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <Separator /> */}
      </header>
      <div className="px-16 w-screen">{children}</div>
    </div>
  );
};

export default MenuLayout;
