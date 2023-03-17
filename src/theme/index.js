import { createTheme } from "@mui/material/styles";
import { THDButtonStyles } from "./button";

export const THDTheme = createTheme({
    palette: {
        common: {
            black: "#000000",
            white: "#FFFFFF",
        },
        type: "light",
        primary: {
            main: "#F96302",
            light: "#FDD8C0",
            dark: "#C14C00",
        },
        secondary: {
            // Darken so we reach the AA contrast ratio level.
            main: "#F96302", // darken("#019E84", 0.4),
        },
        error: {
            main: "#E34A4A",
            light: "#FFAFAF",
            dark: "#AB0000",
        },
        warning: {
            main: "#FBC524",
            light: "#FEE9A9",
            dark: "#DDA413",
        },
        info: {
            main: "#62D4CA",
            light: "#B5FFF8",
            dark: "#3B8780",
        },
        success: {
            main: "#1DDB7F",
            light: "#BFE9D4",
            dark: "#009A4F",
        },
        grey: {
            50: "#F4F4F4",
            100: "#E1E1E1",
            200: "#CCCCCB",
            300: "#969695",
            400: "#7A7978",
            500: "#61605F",
            600: "#4B4A4A",
            700: "#373636",
            800: "#212120",
            900: "#121111",
            A100: "#d5d5d5",
            A200: "#aaaaaa",
            A400: "#303030",
            A700: "#616161",
        },
        text: {
            primary: "#212120",
            secondary: "#FFFFFF",
            disabled: "#CCCCCB",
            hint: "#7A7978",
        },
    },
    overrides: {
        MuiButton: THDButtonStyles,
        MuiPaper: {
            root: {
              "&$rounded": {
                borderRadius: 2,
              },
            },
          },
    },
    typography: {
        h5: {
          fontSize: "10px"
        }
      }

    /*  overrides: {
       MuiButton: THDButtonStyles,
       MuiCheckbox: THDCheckboxStyles,
       MuiFormControlLabel: THDFormControlLabelStyles,
       MuiPaper: {
         root: {
           "&$rounded": {
             borderRadius: 2,
           },
         },
       },
       MuiAlert: THDAlertStyles,
     }, */
});
