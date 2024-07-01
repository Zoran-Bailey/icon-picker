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

const iconToImportMap = {
  'air-conditioner': lazy(() => import('./AirConditioner')),
  antenas: lazy(() => import('./Antenas')),
  audio: lazy(() => import('./Audio')),
  bbqs: lazy(() => import('./Bbqs')),
  'ceiling-fans': lazy(() => import('./CeilingFans')),
  computer: lazy(() => import('./Computer')),
  'cooker-hood': lazy(() => import('./CookerHood')),
  cooktops: lazy(() => import('./Cooktops')),
  dishwasher: lazy(() => import('./Dishwasher')),
  fridge: lazy(() => import('./Fridge')),
  'heater-radiator': lazy(() => import('./HeaterRadiator')),
  oven: lazy(() => import('./Oven')),
  'smart-home': lazy(() => import('./SmartHome')),
  tv: lazy(() => import('./Tv')),
  'washin-machine-dryers': lazy(() => import('./WashinMachineDryers')),
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
