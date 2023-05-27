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
        --color-error: #b31e1e;
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
        text-align: center;
        margin: 60px auto 60px 20px;
        letter-spacing: 0.5px;
        text-transform: lowercase;
    }

    h2 {
        font-family: Open Sans, sans-serif;
        font-size: 1.2rem;
        text-align: center;
        letter-spacing: 0.8px;
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
        letter-spacing: 0.8px;
    }

    button {
        font-family: Serenity, sans-serif;
        height: 40px;
        font-size: 1.1rem;
        letter-spacing: 1.8px;
        border-radius: 5px;
        border: 1px solid #e9e9e9;
        text-transform: lowercase;
        cursor: pointer;
    }

    input, textarea {
        border: 1px solid #e9e9e9;
        border-radius: 10px;
        outline-color: var(--color-accent-two);
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.06);
    }

    input[type='checkbox'] {
        box-shadow: none;
    }

    input {
        height: 35px;
    }

    .react-datepicker__input-container {
        width: 60%;
    }

    .react-datepicker__close-icon::after {
        transform: translateY(-4px) translateX(5px);
    }

    .react-datepicker__input-container input {
        width: 100%;
    }
`;

export default GlobalStyle;
