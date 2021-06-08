import 'styled-components';
import theme from '../src/constants/Themes';

type Theme = typeof theme;

// extend default styled component theme to accept strong typed properties
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
