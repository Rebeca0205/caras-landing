import { createGlobalStyle } from "styled-components";
import PlayfairFont from '../assets/fonts/Playfair-display-Regular.ttf';
import BarlowLightFont from '../assets/fonts/Barlow-light.ttf';
import BarlowBoldFont from '../assets/fonts/Barlow-bold.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Playfair-display-Regular';
        src: url(${PlayfairFont});
    }

    @font-face {
        font-family: 'Barlow-light';
        src: url(${BarlowLightFont});
    }

    @font-face {
        font-family: 'Barlow-bold';
        src: url(${BarlowBoldFont});
    }

    body{
        margin: 0;

        @media (prefers-color-scheme: dark){
            background-color: #1b1a1a;
            transition: all .25s linear;
            color: #ffffff;
        }
    }

    h1{
        font-size: clamp(2rem, 3vw, 3rem);
    }

    h2{
        font-size: clamp(1.5rem, 3vw, 1.8rem);
    }

    h3{
        font-size: clamp(1rem, 3vw, 1.6rem);
        text-align: center
    }
`

export default GlobalStyle;