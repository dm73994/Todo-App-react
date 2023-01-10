import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#027fe9'
        },
        secondary: {
            main: '#e0daf7'
        },
        success: {
            main: green.A400
        },
        error: {
            main: red.A700
        }
    }
})