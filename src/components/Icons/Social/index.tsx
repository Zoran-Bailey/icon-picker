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

const IconResolver = ({svgName, ...props}: {svgName?: string}) => {
  if (!svgName) {
    return null;
  }

  let GeneratedIconComponent;
  switch (svgName) {
    case 'facebook-monochrome':
      GeneratedIconComponent = lazy(() => import('./FacebookMonochrome'));
      break;

    case 'facebook':
      GeneratedIconComponent = lazy(() => import('./Facebook'));
      break;

    case 'instagram-monochrome':
      GeneratedIconComponent = lazy(() => import('./InstagramMonochrome'));
      break;

    case 'instagram':
      GeneratedIconComponent = lazy(() => import('./Instagram'));
      break;

    case 'linkedin-monochrome':
      GeneratedIconComponent = lazy(() => import('./LinkedinMonochrome'));
      break;

    case 'linkedin':
      GeneratedIconComponent = lazy(() => import('./Linkedin'));
      break;

    case 'pinterest-monochrome':
      GeneratedIconComponent = lazy(() => import('./PinterestMonochrome'));
      break;

    case 'pinterest':
      GeneratedIconComponent = lazy(() => import('./Pinterest'));
      break;

    case 'tiktok-monochrome':
      GeneratedIconComponent = lazy(() => import('./TiktokMonochrome'));
      break;

    case 'tiktok':
      GeneratedIconComponent = lazy(() => import('./Tiktok'));
      break;

    case 'tumblr-monochrome':
      GeneratedIconComponent = lazy(() => import('./TumblrMonochrome'));
      break;

    case 'tumblr':
      GeneratedIconComponent = lazy(() => import('./Tumblr'));
      break;

    case 'x-twitter-monochrome':
      GeneratedIconComponent = lazy(() => import('./XTwitterMonochrome'));
      break;

    case 'x-twitter':
      GeneratedIconComponent = lazy(() => import('./XTwitter'));
      break;

    case 'youtube-monochrome':
      GeneratedIconComponent = lazy(() => import('./YoutubeMonochrome'));
      break;

    case 'youtube':
      GeneratedIconComponent = lazy(() => import('./Youtube'));
      break;

    default:
      GeneratedIconComponent = null;
      break;
  }

  if (!GeneratedIconComponent) {
    return null;
  }

  return (
    <Suspense>
      <GeneratedIconComponent {...props} />
    </Suspense>
  );
};

export default IconResolver;
