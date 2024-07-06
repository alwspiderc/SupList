import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from './AppStack';
import {AuthStackParamList} from './AuthStack';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {AppTabBottomTabParamList} from './AppTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreeProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;
