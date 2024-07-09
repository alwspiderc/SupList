import React from 'react';

import {Pressable} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Theme, ThemeColors} from '@theme';

import {AddIcon} from '../../assets/icons/AddIcon';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {BellOnIcon} from '../../assets/icons/BellOnIcon';
import {LogoVerticalWhiteIcon} from '../../assets/svgs/LogoVerticalWhiteIcon';
import {LogoNameVerticalWhiteIcon} from '../../assets/svgs/LogoNameVerticalWhiteIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {MessageSquareRoundIcon} from '../../assets/icons/messageSquareRoundIcon';
import {CheckSquareRoundIcon} from '../../assets/icons/checkSquareRoundIcon';
import {CategoryIcon} from '../../assets/icons/CategoryIcon';
import {CategoryFillIcon} from '../../assets/icons/CategoryFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';

export interface IconBase {
  size?: number;
  color?: string;
}
export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({name, color = 'grayBlack', size, onPress}: IconProps) {
  const {colors} = useTheme<Theme>();

  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} />;
}

const iconRegistry = {
  add: AddIcon,
  arrowLeft: ArrowLeftIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  logoVerticalWhite: LogoVerticalWhiteIcon,
  logoNameVerticalWhite: LogoNameVerticalWhiteIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  messageSquareRound: MessageSquareRoundIcon,
  checkSquareRound: CheckSquareRoundIcon,
  category: CategoryIcon,
  categoryFill: CategoryFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
