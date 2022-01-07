import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button {
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: #eee;

    }

    button { 
        cursor: pointer;
    }

    @media (max-width: 700px) {
        html {
            font-size: 60%;
        }
    }
    @media (max-width: 1400px) {
        html {
            font-size: 80%;
        }
    }
`;
