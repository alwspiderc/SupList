import {Box, Button, Icon, Screen, Text} from '@components';
import React from 'react';

export function SuccessScreen() {
  return (
    <Screen scrollable>
      <Box mt="s60">
        <Icon name="messageSquareRound" />
        <Text variant="smallHeader" mt="s14">
          Enviamos um e-mail com as instruções para recuperação de senha!
        </Text>
        <Text textAlign="left" mt="s14" variant="textMedium">
          Vá até seu e-mail e siga as instruções para recuperar sua conta.{' '}
        </Text>
        <Button mt="s60" title="Login" />
      </Box>
    </Screen>
  );
}
