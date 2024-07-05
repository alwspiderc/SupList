import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
  OnboardingScreen,
} from '@screens';
import {theme} from '@theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <WelcomeScreen /> */}
        {/* <LoginScreen /> */}
        {/* <ForgotPasswordScreen /> */}
        {/* <SignUpScreen /> */}
        <OnboardingScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
