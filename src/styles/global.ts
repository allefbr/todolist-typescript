import { css } from 'styled-components';

import defaultColors from './colors';

const globalStyles = css`
  body {
    background-color: ${defaultColors.primary};
    font-family: 'Quicksand', sans-serif;
  }
`;

export default globalStyles;
