import React from 'react';

import {Svg, Path, Rect} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';
import {palette} from '../../theme/theme';

export function CheckSquareRoundIcon({
  size = 48,
  color = palette.greenPrimary,
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Rect width="48" height="48" rx="10" fill={color} />

      <Path
        d="M18.1489 24.8197L24.3989 31.0697L33.7739 17.0072"
        stroke="#FEFDFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
