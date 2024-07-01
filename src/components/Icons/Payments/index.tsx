import {Suspense, lazy} from 'react';
export {default as AfterpayDisclaimer} from './AfterpayDisclaimer';
export {default as AfterpayMonochrome} from './AfterpayMonochrome';
export {default as Afterpay} from './Afterpay';
export {default as AmexMonochrome} from './AmexMonochrome';
export {default as AmexSafekeyMonochrome} from './AmexSafekeyMonochrome';
export {default as AmexSafekey} from './AmexSafekey';
export {default as Amex} from './Amex';
export {default as ApplePayMonochrome} from './ApplePayMonochrome';
export {default as ApplePay} from './ApplePay';
export {default as DinersClubMonochrome} from './DinersClubMonochrome';
export {default as DinersClub} from './DinersClub';
export {default as GPayMonochrome} from './GPayMonochrome';
export {default as GPay} from './GPay';
export {default as HummMonochrome} from './HummMonochrome';
export {default as Humm} from './Humm';
export {default as KlarnaMonochrome} from './KlarnaMonochrome';
export {default as Klarna} from './Klarna';
export {default as LatitudeMonochrome} from './LatitudeMonochrome';
export {default as LatitudePayLg} from './LatitudePayLg';
export {default as Latitude} from './Latitude';
export {default as MasterCardMonochrome} from './MasterCardMonochrome';
export {default as MasterCard} from './MasterCard';
export {default as MastercardIdCheckMonochrome} from './MastercardIdCheckMonochrome';
export {default as MastercardIdCheck} from './MastercardIdCheck';
export {default as PaypalDisclaimer} from './PaypalDisclaimer';
export {default as PaypalMonochrome} from './PaypalMonochrome';
export {default as Paypal} from './Paypal';
export {default as ShopPayMonochrome} from './ShopPayMonochrome';
export {default as ShopPay} from './ShopPay';
export {default as VisaMonochrome} from './VisaMonochrome';
export {default as VisaVerifiedMonochrome} from './VisaVerifiedMonochrome';
export {default as VisaVerified} from './VisaVerified';
export {default as Visa} from './Visa';
export {default as ZipDisclaimer} from './ZipDisclaimer';
export {default as ZipMonochrome} from './ZipMonochrome';
export {default as Zip} from './Zip';

const iconToImportMap = {
  'afterpay-disclaimer': lazy(() => import('./AfterpayDisclaimer')),
  'afterpay-monochrome': lazy(() => import('./AfterpayMonochrome')),
  afterpay: lazy(() => import('./Afterpay')),
  'amex-monochrome': lazy(() => import('./AmexMonochrome')),
  'amex-safekey-monochrome': lazy(() => import('./AmexSafekeyMonochrome')),
  'amex-safekey': lazy(() => import('./AmexSafekey')),
  amex: lazy(() => import('./Amex')),
  'apple-pay-monochrome': lazy(() => import('./ApplePayMonochrome')),
  'apple-pay': lazy(() => import('./ApplePay')),
  'diners-club-monochrome': lazy(() => import('./DinersClubMonochrome')),
  'diners-club': lazy(() => import('./DinersClub')),
  'g-pay-monochrome': lazy(() => import('./GPayMonochrome')),
  'g-pay': lazy(() => import('./GPay')),
  'humm-monochrome': lazy(() => import('./HummMonochrome')),
  humm: lazy(() => import('./Humm')),
  'klarna-monochrome': lazy(() => import('./KlarnaMonochrome')),
  klarna: lazy(() => import('./Klarna')),
  'latitude-monochrome': lazy(() => import('./LatitudeMonochrome')),
  'latitude-pay-lg': lazy(() => import('./LatitudePayLg')),
  latitude: lazy(() => import('./Latitude')),
  'master-card-monochrome': lazy(() => import('./MasterCardMonochrome')),
  'master-card': lazy(() => import('./MasterCard')),
  'mastercard-id-check-monochrome': lazy(
    () => import('./MastercardIdCheckMonochrome'),
  ),
  'mastercard-id-check': lazy(() => import('./MastercardIdCheck')),
  'paypal-disclaimer': lazy(() => import('./PaypalDisclaimer')),
  'paypal-monochrome': lazy(() => import('./PaypalMonochrome')),
  paypal: lazy(() => import('./Paypal')),
  'shop-pay-monochrome': lazy(() => import('./ShopPayMonochrome')),
  'shop-pay': lazy(() => import('./ShopPay')),
  'visa-monochrome': lazy(() => import('./VisaMonochrome')),
  'visa-verified-monochrome': lazy(() => import('./VisaVerifiedMonochrome')),
  'visa-verified': lazy(() => import('./VisaVerified')),
  visa: lazy(() => import('./Visa')),
  'zip-disclaimer': lazy(() => import('./ZipDisclaimer')),
  'zip-monochrome': lazy(() => import('./ZipMonochrome')),
  zip: lazy(() => import('./Zip')),
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
