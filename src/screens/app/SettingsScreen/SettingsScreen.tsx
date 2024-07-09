import {Button, Screen, Text} from '@components';
import {AppScreeProps} from '@routes';

export function SettingsScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppScreeProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Settings Screen</Text>
      <Button title="Sair da conta" />
    </Screen>
  );
}
