import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import { StylesProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './page/App'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

ReactDOM.render(
    <React.Fragment>
        <StylesProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
                <App />
            </ThemeProvider>
        </StylesProvider>
    </React.Fragment>,
    document.querySelector('#root')
);
