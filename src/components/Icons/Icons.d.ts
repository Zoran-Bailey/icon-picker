import {SVGProps} from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: IconSize;
}
