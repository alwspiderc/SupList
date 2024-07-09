import React from 'react';

import {FabButton, Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {HomeHeader} from './components/HomeHeader';
import {StyleProp, ViewStyle} from 'react-native';

export function HomeScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen style={$screen}>
      <HomeHeader />
      {/* <Text>Bom dia, Ester! {'\n'}Hoje é quarta-feita, 20 Jan - 5 tarefas</Text> */}
      <FabButton titleIcon="add" onPress={() => {}} />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
