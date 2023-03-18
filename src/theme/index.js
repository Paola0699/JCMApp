import { createTheme } from "@mui/material/styles";
import { ButtonStyles } from "./button";
import { InputStyles } from "./input";

export const JCMTheme = createTheme({
    palette: {
        common: {
            black: "#000000",
            white: "#FFFFFF",
        },
        type: "dark",
        primary: {
            main: "#001E3C",
            light: "#4C6176",
            dark: "#00152A",
        },
        secondary: {
            main: "#E5E8EB",
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
            primary: "#A5B0BA",
            secondary: "#A5B0BA",
            disabled: "#CCCCCB",
            hint: "#7A7978",
        },
    },
    overrides: {
        MuiButton: ButtonStyles,
        MuiPaper: {
            root: {
              "&$rounded": {
                borderRadius: 2,
              },
            },
          },
        MuiInputBase: InputStyles, 
        MuiOutlinedInput: InputStyles,
    },
    typography: {
        h5: {
          fontSize: "30px"
        },
        TextField: {
            fontFamily: "Raleway",
            fontWeight: "700",
            textTransform: "none",
            fontSize: "1rem",
            color: '#FFFFFF'
          }
      }
});
