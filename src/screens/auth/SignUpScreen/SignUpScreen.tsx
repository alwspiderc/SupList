import React from 'react';
import {Button, PasswordInput, Screen, Text, TextInput} from '@components';

export function SignUpScreen() {
  return (
    <Screen scrollable>
      <Text variant={'smallHeader'} mt="s26">
        Bem-vindo! {'\n'}Inicie sua jornada
      </Text>
      <TextInput boxProps={{mt: 's26'}} placeholder="Email" label="E-mail" />
      <TextInput boxProps={{mt: 's26'}} placeholder="Nome" label="Nome" />
      <PasswordInput
        boxProps={{mt: 's26'}}
        placeholder="Senha"
        label="Senha"
        secureTextEntry
      />
      <PasswordInput
        boxProps={{mt: 's26'}}
        placeholder="Confirmar Senha"
        label="Confirmar Senha"
        secureTextEntry
      />
      <Button mt="s60" title="Criar Conta" />
    </Screen>
  );
}
