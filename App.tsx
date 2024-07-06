import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from '@theme';
import {Route} from '@routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
