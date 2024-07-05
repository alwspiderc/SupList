import React from 'react';
import {createText} from '@shopify/restyle';
import {Theme} from '../../theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {}

export function Text({children, ...sRTextProps}: TextProps) {
  return <SRText {...sRTextProps}>{children}</SRText>;
}
