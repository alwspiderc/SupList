import {createTheme} from '@shopify/restyle';
import {ViewStyle} from 'react-native';

export const palette = {
  greenPrimary: '#18444B',
  greenPrimaryLight: '#68FEE4',
  redError: '#EA3838',
  redErrorLight: '#FEEFEE',

  grayBlack: '#1A191B',
  gray1: '#EDECEF',
  gray2: '#E1E1E1',
  grayWhite: '#FEFDFF',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    background: palette.grayWhite,
  },
  spacing: {
    s8: 8,
    s14: 14,
    s16: 16,
    s20: 20,
    s26: 26,
    s40: 40,
    s60: 60,
  },
  borderRadii: {
    s16: 16,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    smallHeader: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    textMedium: {
      fontSize: 20,
    },
    button: {
      fontWeight: 'bold',
      fontSize: 14,
      color: 'grayWhite',
      textTransform: 'uppercase',
    },
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#1A191B',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: {
    width: 0,
    height: -3,
  },
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
