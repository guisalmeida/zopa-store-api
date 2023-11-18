import { createGlobalStyle } from 'styled-components'
import './reset.css'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyles = createGlobalStyle`

:root {   
    --sub-color: grey;
    --main-color: black;
    --dark: #212529;
    --grey: #a7a7a7;
    --light-grey: #f9f9f9;
    --white: #fff;
    --red: #cf3838;
    --border: #e6e6e6;

    --break-small: 450px;
    --break-medium: 768px;
    --break-large: 1170px;
    --break-huge: 1440px;
    
    font-size: 16px;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 400;
}

*,
:after,
:before {
    box-sizing: border-box;
}

body,
body button,
body input,
html,
html button,
html input {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 400;
}

body {
    background-color:var(--light-grey);
    color:var(--dark);
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 400;
    min-height: 100%;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
}

button {
    outline: none;
    border: none;
    background-color: transparent;
}

button, a {
    cursor: pointer;
}

.container {
    width: 100%;
    max-width: var(--break-large);
}
`
export default GlobalStyles
