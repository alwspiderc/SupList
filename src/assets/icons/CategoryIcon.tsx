import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function CategoryIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 20" fill="none">
      <Path
        d="M6.21428 1H2.5C1.39543 1 0.5 1.89543 0.5 3V6.2C0.5 7.30457 1.39543 8.2 2.5 8.2H6.21429C7.31886 8.2 8.21429 7.30457 8.21429 6.2V3C8.21429 1.89543 7.31885 1 6.21428 1Z"
        stroke="#939292"
        strokeLinecap="round"
      />
      <Path
        d="M16.5 1H12.7857C11.6812 1 10.7857 1.89543 10.7857 3V6.2C10.7857 7.30457 11.6812 8.2 12.7857 8.2H16.5C17.6046 8.2 18.5 7.30457 18.5 6.2V3C18.5 1.89543 17.6046 1 16.5 1Z"
        stroke="#939292"
        strokeLinecap="round"
      />
      <Path
        d="M6.21428 11.8H2.5C1.39543 11.8 0.5 12.6955 0.5 13.8V17C0.5 18.1046 1.39543 19 2.5 19H6.21429C7.31886 19 8.21429 18.1046 8.21429 17V13.8C8.21429 12.6955 7.31885 11.8 6.21428 11.8Z"
        stroke="#939292"
        strokeLinecap="round"
      />
      <Path
        d="M16.5 11.8H12.7857C11.6812 11.8 10.7857 12.6955 10.7857 13.8V17C10.7857 18.1046 11.6812 19 12.7857 19H16.5C17.6046 19 18.5 18.1046 18.5 17V13.8C18.5 12.6955 17.6046 11.8 16.5 11.8Z"
        stroke="#939292"
        strokeLinecap="round"
      />
    </Svg>
  );
}
