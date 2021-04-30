import { createGlobalStyle } from 'styled-components';
import github_background from '../assets/github_background.svg';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
    }

    body {
        background: #F0F0F0 url(${github_background}) no-repeat 70% top;
    }

    body, input, button {
        font:16px sans-serif;
    }

    #root {
        max-width: 906px;
        margin: 0 auto;
        padding: 40px 20px;
    }

`;
