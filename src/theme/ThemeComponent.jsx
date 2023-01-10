import { theme } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

const ThemeComponent = ({ children }) => {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default ThemeComponent