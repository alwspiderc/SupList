import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>Home Screen</Text>
    </Screen>
  );
}
