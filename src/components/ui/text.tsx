// components/Text.tsx
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const fontSizes = {
  xxs: "text-xxs", // 10px
  xs: "text-xs", // 12px
  sm: "text-sm", // 14px
  base: "text-base", // 16px
  lg: "text-lg", // 18px
  xl: "text-xl", // 20px
  "2xl": "text-2xl", // 24px
  "3xl": "text-3xl", // 30px
  "4xl": "text-4xl", // 36px
  "5xl": "text-5xl", // 48px
  "6xl": "text-6xl", // 60px
  "7xl": "text-7xl", // 72px
  "8xl": "text-8xl", // 96px
  "9xl": "text-9xl", // 128px
};

const fontWeights = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

type TextProps = {
  type?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?:
    | "xxs"
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  weight?: keyof typeof fontWeights;
  children: ReactNode;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  type = "p",
  size = "base",
  weight = "normal",
  children,
  className,
  ...props
}) => {
  const Component = type;
  const textSizeClass = fontSizes[size] || fontSizes.base;
  const textWeightClass = fontWeights[weight] || fontWeights.normal;
  return (
    <Component
      className={cn(textSizeClass, textWeightClass, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
