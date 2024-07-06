import React from 'react';

import {Box, Button, Icon, Screen, Text} from '@components';
import {AuthScreenProps} from 'src/routes/navigationType';

export function OnboardingScreen({
  navigation,
}: AuthScreenProps<'OnboardingScreen'>) {
  function navigateToLogin() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen>
      <Box width={'100%'} alignItems="center" style={{marginTop: 170}}>
        <Icon name="logoVerticalWhite" />
      </Box>
      <Text variant={'smallHeader'} mt="s14" textAlign="center">
        Você gostaria de ser {'\n'} mais produtivo?
      </Text>
      <Button mt="s60" title="Inicie sua jornada" onPress={navigateToLogin} />
    </Screen>
  );
}
