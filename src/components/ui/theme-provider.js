"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Define default props for the ThemeProvider
const defaultProps = {
  defaultTheme: "system", // Use system theme by default (light/dark based on user preference)
  enableSystem: true,     // Enable system theme detection
  attribute: "class",     // Use class to toggle themes
};

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...defaultProps} {...props}>
      {children}
    </NextThemesProvider>
  );
}
