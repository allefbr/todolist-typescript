import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';
import globalStyles from './global';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${globalStyles}
`;

export default GlobalStyle;
