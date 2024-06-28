import {Suspense, lazy} from 'react';
export {default as AirConditioner} from './AirConditioner';
export {default as Antenas} from './Antenas';
export {default as Audio} from './Audio';
export {default as Bbqs} from './Bbqs';
export {default as CeilingFans} from './CeilingFans';
export {default as Computer} from './Computer';
export {default as CookerHood} from './CookerHood';
export {default as Cooktops} from './Cooktops';
export {default as Dishwasher} from './Dishwasher';
export {default as Fridge} from './Fridge';
export {default as HeaterRadiator} from './HeaterRadiator';
export {default as Oven} from './Oven';
export {default as SmartHome} from './SmartHome';
export {default as Tv} from './Tv';
export {default as WashinMachineDryers} from './WashinMachineDryers';

const IconResolver = ({svgName, ...props}: {svgName?: string}) => {
  if (!svgName) {
    return null;
  }

  let GeneratedIconComponent;
  switch (svgName) {
    case 'air-conditioner':
      GeneratedIconComponent = lazy(() => import('./AirConditioner'));
      break;

    case 'antenas':
      GeneratedIconComponent = lazy(() => import('./Antenas'));
      break;

    case 'audio':
      GeneratedIconComponent = lazy(() => import('./Audio'));
      break;

    case 'bbqs':
      GeneratedIconComponent = lazy(() => import('./Bbqs'));
      break;

    case 'ceiling-fans':
      GeneratedIconComponent = lazy(() => import('./CeilingFans'));
      break;

    case 'computer':
      GeneratedIconComponent = lazy(() => import('./Computer'));
      break;

    case 'cooker-hood':
      GeneratedIconComponent = lazy(() => import('./CookerHood'));
      break;

    case 'cooktops':
      GeneratedIconComponent = lazy(() => import('./Cooktops'));
      break;

    case 'dishwasher':
      GeneratedIconComponent = lazy(() => import('./Dishwasher'));
      break;

    case 'fridge':
      GeneratedIconComponent = lazy(() => import('./Fridge'));
      break;

    case 'heater-radiator':
      GeneratedIconComponent = lazy(() => import('./HeaterRadiator'));
      break;

    case 'oven':
      GeneratedIconComponent = lazy(() => import('./Oven'));
      break;

    case 'smart-home':
      GeneratedIconComponent = lazy(() => import('./SmartHome'));
      break;

    case 'tv':
      GeneratedIconComponent = lazy(() => import('./Tv'));
      break;

    case 'washin-machine-dryers':
      GeneratedIconComponent = lazy(() => import('./WashinMachineDryers'));
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
