import React, {useEffect, useState} from 'react';
import {Animated, StyleProp} from 'react-native';

import {Box, BoxProps, Icon, IconProps} from '@components';

interface FabButtonProps {
  titleIcon: IconProps['name'];
  onPress: () => void;
  disabled?: boolean;
}

export function FabButton({titleIcon, onPress}: FabButtonProps) {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(animation, {
      toValue: 10,
      friction: 5,
      useNativeDriver: true,
      delay: 1000,
    }).start();
  });

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const $floatButton: StyleProp<BoxProps> = {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    right: 20,
    top: 670,
    backgroundColor: 'primary',
    borderRadius: 's50',
  };

  return (
    <Box {...$floatButton}>
      <Animated.View style={[rotation]}>
        <Icon name={titleIcon} color="grayWhite" size={60} onPress={onPress} />
      </Animated.View>
    </Box>
  );
}
