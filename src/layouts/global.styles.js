import { injectGlobal } from 'styled-components'
import CC from '../tokens/colours'

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  svg {
    fill: currentColor;
  }

  :any-link,
  :link,
  :visited {
    border-bottom: 2px solid ${CC.palette.yellow};
    text-decoration: none;
    color: ${CC.palette.greyDarker};

    &:hover,
    &:focus {
      background-color: ${CC.palette.yellow};
      color: ${CC.palette.greyDarkest};
      outline-width: 0.2em 0.2em 0 0.2em;
      outline-style: solid;
      outline-color: ${CC.palette.yellow};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  dl {
    margin-bottom: 0;
    font-size: 1em;
  }
`
