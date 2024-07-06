import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from './AuthStack';

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;
