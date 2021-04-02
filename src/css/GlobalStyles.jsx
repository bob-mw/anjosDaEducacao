import { createGlobalStyle } from "styled-components"

import Fonts from './fonts'

const GlobalStyles = createGlobalStyle`

    :root {
        --bg-light-pink: #F1D7D8;
        --bg-pink: #e4b1b3;
        --bg-dark-pink: #dd9ea1;
        --bg-darker-pink:#a02a5fff;

        --bg-dark-orange: #EF6351;
        --bg-orange: #F38375;
        --bg-light-orange: #F7A399;
        --bg-lighter-orange: #FBC3BC;
        --bg-lighter-blue: #AED9E0;
        --bg-light-blue: #86C5FC;
        --bg-blue: #6CAEE7;
        --bg-dark-blue: #5296D1;
    }

    ${Fonts}

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
    }

    body {
        line-height: 1;
        font-size: 100%;
        font-family: 'Montserrat', sans-serif;
    }
    img {
        display: block;
        width: 100%;
        height: auto;
    }
`
export default GlobalStyles