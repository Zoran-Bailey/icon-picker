import * as iconsBarrel from './index';
import {IconProps} from './Icons';

/**
 * Resolves an icon component from the react icon component name
 *
 * usage:
 * ```
 * * const Icon = IconResolver('Check');
 * // use as a component
 * <Icon />
 *
 * // returns undefined as component doesn't exist
 * const AnotherIcon = IconResolver('icon that doesnt exist')
 *
 *
 * ```
 * @param iconName the react Icon component name
 * @returns The icon component if found else undefined
 */
export const IconResolver = (iconName: string | null | undefined) => {
  if (typeof iconName !== 'string') return undefined;

  const icon = iconsBarrel[iconName as keyof typeof iconsBarrel];
  return icon as React.ComponentType<IconProps>;
};
