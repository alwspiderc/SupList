import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function CategoryScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'CategoryScreen'>) {
  return (
    <Screen>
      <Text>Category Screen</Text>
    </Screen>
  );
}
