import { createGlobalStyle } from 'styled-components';

/*
  Global style component for default styling
*/

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: #FEFEFE;
        --color-secondary: #D9415D; 
        --color-accent-one: #3B5F75;
        --color-accent-two: #6BA7BF; 
        --color-accent-three: #8C3D2B; 
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-borders: #e9e9e9;
        height: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: Open Sans, sans-serif;
        background: var(--color-primary);
        
    }

    body {
        height: 100%;
        background: var(--color-primary);
        margin: auto;
    }

    h1 {
        font-family: Serenity, sans-serif;
        font-size: 2rem;
        color: var(--color-black);
        text-align: left;
        margin: 60px auto 60px 20px;
        letter-spacing: 0.5px;
    }

    h2 {
        font-family: Open Sans, sans-serif;
        font-size: 1.2rem;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    a,
    a:visited {
        color: var(--color-black);
    }

    p {
        font-family: Open Sans, sans-serif;
        max-width: 600px;
        margin: auto;
    }

    button {
        font-family: Serenity, sans-serif;
        font-size: 1rem;
        cursor: pointer;
    }
`;

export default GlobalStyle;
