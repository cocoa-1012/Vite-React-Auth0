export interface Theme {
    background: string;
    surface: string;
    raised: string;
    primary: string;
    secondary: string;

    onBackground: string;
    onSurface: string;
    onRaised: string;
    onPrimary: string;
    onSecondary: string;
}

export interface OverallTheme {
    dark: Theme;
    light: Theme;
}


export const darkTheme: Theme = {
    background: "#181c2c",
    surface: "#282c44",
    raised: "#353952",
    primary: "#00bcd4",
    secondary: "#007888",

    onBackground: "#F1F1F1",
    onSurface: "#F1F1F1",
    onRaised: "#C1C1C1",
    onPrimary: "#F1F1F1",
    onSecondary: "#C1C1C1"
};

export const offDarkTheme: Theme = {
    background: "#302c2c",
    surface: "#403c3c",
    raised: "#353952",
    primary: "#a4dc4c",
    secondary: "#bcbc2b",

    onBackground: "#202020",
    onSurface: "#e7e0c3",
    onRaised: "#161A30",
    onPrimary: "#202020",
    onSecondary: "#202020",
}

export const lightTheme: Theme = {

    background: "#dcdde5",
    surface: "#F1F1F1",
    raised: "#dcdde5",
    primary: "#00bcd4",
    secondary: "#007888",

    onBackground: "#202020",
    onSurface: "#202020",
    onRaised: "#202020",
    onPrimary: "#fff",
    onSecondary: "#708090"
};

export const theme: OverallTheme = {
    dark: darkTheme,
    light: lightTheme,
}

export default theme;
