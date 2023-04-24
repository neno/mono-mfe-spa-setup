export interface CustomTheme {
  colors: {
    [key: string]: string;
  },
}

export interface CustomColorThemes {
  [key: string]: CustomTheme;
}

const colorThemeDark: CustomTheme = {
  colors: {
    "color-scheme": "dark",
    primary: "#661AE6",
    "primary-content": "#ffffff",
    secondary: "#D926AA",
    "secondary-content": "#ffffff",
    accent: "#1FB2A5",
    "accent-content": "#ffffff",
    neutral: "#191D24",
    "neutral-focus": "#111318",
    "neutral-content": "#A6ADBB",
    "base-100": "#2A303C",
    "base-200": "#242933",
    "base-300": "#20252E",
    "base-content": "#A6ADBB",
  }
}

const colorThemeLight: CustomTheme = {
  colors: {
    "color-scheme": "light",
    primary: "#570df8",
    "primary-content": "#ffffff",
    secondary: "#f000b8",
    "secondary-content": "#ffffff",
    accent: "#37cdbe",
    "accent-content": "#163835",
    neutral: "#3d4451",
    "neutral-content": "#ffffff",
    "base-100": "#ffffff",
    "base-200": "#F2F2F2",
    "base-300": "#E5E6E6",
    "base-content": "#1f2937",
  }
}

const colorThemeFancy: CustomTheme = {
  colors: {
    "color-scheme": "light",
    primary: "#6e0b75",
    secondary: "#007ebd",
    accent: "#f8860d",
    neutral: "#1f2937",
    "base-100": "#ffffff",
    "base-content": "#1f2937",
  }
}

export const colorThemes: CustomColorThemes = {
  "[data-theme=dark]": colorThemeDark,
  "[data-theme=light]": colorThemeLight,
  "[data-theme=fantasy]": colorThemeFancy,
};

export default {
  ...colorThemeFancy,
};
