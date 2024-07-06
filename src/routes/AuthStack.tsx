import {IconProps} from '@components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPasswordScreen,
  LoginScreen,
  OnboardingScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens';
import React from 'react';

export type AuthStackParamList = {
  ForgotPasswordScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: String;
    description: String;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  OnboardingScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="OnboardingScreen">
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
