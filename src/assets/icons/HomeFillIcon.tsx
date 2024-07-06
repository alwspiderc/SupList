import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function HomeFillIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.42527 1.40363L1.42527 7.02207C1.15868 7.20929 1 7.51464 1 7.84041V18C1 18.5523 1.44772 19 2 19H10H18C18.5523 19 19 18.5523 19 18V7.84041C19 7.51464 18.8413 7.20929 18.5747 7.02207L10.5747 1.40363C10.2299 1.16143 9.77015 1.16143 9.42527 1.40363Z"
        stroke="#1C5B5D"
      />
    </Svg>
  );
}
