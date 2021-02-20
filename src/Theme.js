import { createMuiTheme } from '@material-ui/core';
import { green, orange , grey} from '@material-ui/core/colors';

export const roboShopTheme = createMuiTheme({
    palette: {
        primary: {
            main: grey[100],
          },
          secondary: {
            main: grey[300],
          },
    },
  });