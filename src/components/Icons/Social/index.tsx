import {Suspense, lazy} from 'react';
export {default as FacebookMonochrome} from './FacebookMonochrome';
export {default as Facebook} from './Facebook';
export {default as InstagramMonochrome} from './InstagramMonochrome';
export {default as Instagram} from './Instagram';
export {default as LinkedinMonochrome} from './LinkedinMonochrome';
export {default as Linkedin} from './Linkedin';
export {default as PinterestMonochrome} from './PinterestMonochrome';
export {default as Pinterest} from './Pinterest';
export {default as TiktokMonochrome} from './TiktokMonochrome';
export {default as Tiktok} from './Tiktok';
export {default as TumblrMonochrome} from './TumblrMonochrome';
export {default as Tumblr} from './Tumblr';
export {default as XTwitterMonochrome} from './XTwitterMonochrome';
export {default as XTwitter} from './XTwitter';
export {default as YoutubeMonochrome} from './YoutubeMonochrome';
export {default as Youtube} from './Youtube';

const iconToImportMap = {
  'facebook-monochrome': lazy(() => import('./FacebookMonochrome')),
  facebook: lazy(() => import('./Facebook')),
  'instagram-monochrome': lazy(() => import('./InstagramMonochrome')),
  instagram: lazy(() => import('./Instagram')),
  'linkedin-monochrome': lazy(() => import('./LinkedinMonochrome')),
  linkedin: lazy(() => import('./Linkedin')),
  'pinterest-monochrome': lazy(() => import('./PinterestMonochrome')),
  pinterest: lazy(() => import('./Pinterest')),
  'tiktok-monochrome': lazy(() => import('./TiktokMonochrome')),
  tiktok: lazy(() => import('./Tiktok')),
  'tumblr-monochrome': lazy(() => import('./TumblrMonochrome')),
  tumblr: lazy(() => import('./Tumblr')),
  'x-twitter-monochrome': lazy(() => import('./XTwitterMonochrome')),
  'x-twitter': lazy(() => import('./XTwitter')),
  'youtube-monochrome': lazy(() => import('./YoutubeMonochrome')),
  youtube: lazy(() => import('./Youtube')),
};

const IconResolver = ({
  svgName,
  className,
  ...props
}: {
  svgName?: string;
  className?: string;
}) => {
  if (!svgName) {
    return null;
  }

  const GeneratedIconComponent: React.LazyExoticComponent<
    React.ComponentType<any>
  > = iconToImportMap[svgName as keyof typeof iconToImportMap];

  if (!GeneratedIconComponent) {
    return null;
  }

  return (
    <Suspense>
      <GeneratedIconComponent className={className} {...props} />
    </Suspense>
  );
};

export default IconResolver;
