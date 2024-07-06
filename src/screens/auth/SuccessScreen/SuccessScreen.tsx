import {Box, Button, Icon, Screen, Text} from '@components';
import React from 'react';
import {AuthScreenProps} from 'src/routes/navigationType';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function navigateToLogin() {
    navigation.navigate('LoginScreen');
  }
  return (
    <Screen scrollable>
      <Box mt="s60">
        <Icon {...route.params.icon} />
        <Text variant="smallHeader" mt="s14">
          {route.params.title}
        </Text>
        <Text textAlign="left" mt="s14" variant="textMedium">
          {route.params.description}
        </Text>
        <Button mt="s60" title="Login" onPress={navigateToLogin} />
      </Box>
    </Screen>
  );
}
