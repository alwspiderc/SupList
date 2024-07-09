import React from 'react';
// import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';
import {SimpleLogo} from '../../../../brand';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  // const navigation = useNavigation();

  function navigateToSearchScreen() {
    // navigation.navigate('SearchScreen');
  }

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <SimpleLogo />
      <Box flexDirection="row">
        <Box mr="s20">
          <Icon onPress={navigateToSearchScreen} name="search" />
        </Box>
        <Icon name="bell" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's20',
  paddingHorizontal: 's20',
};
