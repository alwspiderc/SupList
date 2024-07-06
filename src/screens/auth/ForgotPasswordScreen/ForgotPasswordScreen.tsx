import {Box, Button, Screen, Text, TextInput} from '@components';
import React from 'react';
import {AuthScreenProps} from 'src/routes/navigationType';

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  function navigateToSuccessScreen() {
    navigation.navigate('SuccessScreen', {
      icon: {
        name: 'messageSquareRound',
        color: 'greenPrimary',
      },
      title: 'Enviamos um e-mail com as instruções para recuperação de senha!',
      description:
        'Vá até seu e-mail e siga as instruções para recuperar sua conta.',
    });
  }

  return (
    <Screen scrollable>
      <Box style={{marginTop: 200}}>
        <Text variant="smallHeader">Alterar senha</Text>
        <TextInput boxProps={{mt: 's26'}} placeholder="E-mail" label="E-mail" />
        <Button mt="s60" title="Recuperar" onPress={navigateToSuccessScreen} />
      </Box>
    </Screen>
  );
}
