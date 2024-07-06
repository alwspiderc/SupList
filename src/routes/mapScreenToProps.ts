import {IconProps} from '@components';
import {AppTabBottomTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },

  CategoryScreen: {
    label: 'Categorias',
    icon: {
      focused: 'categoryFill',
      unfocused: 'category',
    },
  },
  MyProfileScreen: {
    label: 'Perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
