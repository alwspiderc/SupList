import {Box, Button, Screen, Text, TextInput} from '@components';
import React from 'react';

export function ForgotPasswordScreen() {
  return (
    <Screen scrollable>
      <Box style={{marginTop: 200}}>
        <Text variant="smallHeader">Alterar senha</Text>
        <TextInput boxProps={{mt: 's26'}} placeholder="E-mail" label="E-mail" />
        <Button mt="s60" title="Recuperar" />
      </Box>
    </Screen>
  );
}
