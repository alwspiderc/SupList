import React from 'react';
import {Button, PasswordInput, Screen, Text, TextInput} from '@components';
import {AuthScreenProps} from 'src/routes/navigationType';

export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  function navigateToSuccessScreen() {
    navigation.navigate('SuccessScreen', {
      icon: {
        name: 'checkSquareRound',
        color: 'greenPrimary',
      },
      title: 'Sua conta foi criada com sucesso!',
      description: 'Faço login na nossa plataforma.',
    });
  }
  return (
    <Screen scrollable>
      <Text variant={'smallHeader'} mt="s26">
        Criar conta
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
      <Button mt="s60" title="Criar Conta" onPress={navigateToSuccessScreen} />
    </Screen>
  );
}
