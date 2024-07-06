import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';

export function Route() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
