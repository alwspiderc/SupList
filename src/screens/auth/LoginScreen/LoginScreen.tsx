import {
  Box,
  Button,
  Icon,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components';
import React from 'react';

export function LoginScreen() {
  return (
    <Screen scrollable>
      <Box width={'100%'} alignItems="center" style={{marginTop: 60}}>
        <Icon name="logoNameVerticalWhite" />
      </Box>
      <TextInput boxProps={{mt: 's60'}} placeholder="Email" label="E-mail" />
      <PasswordInput boxProps={{mt: 's26'}} placeholder="Senha" label="Senha" />

      <Text color="greenPrimary" mt="s14" textAlign="right">
        Esqueceu a senha?
      </Text>

      <Button mt="s60" title="Entrar" />
      <Button preset="outline" mt="s8" title="Criar Conta" />
    </Screen>
  );
}
