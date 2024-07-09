import React from 'react';

import {FabButton, Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {StyleProp, ViewStyle} from 'react-native';

export function CategoryScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'CategoryScreen'>) {
  return (
    <Screen style={$screen}>
      {/* <HomeHeader /> */}
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
