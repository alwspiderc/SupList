import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text>My Profile Screen</Text>
      <Button
        mt="s60"
        title="Configurações"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
