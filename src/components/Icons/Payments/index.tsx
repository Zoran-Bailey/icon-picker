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

const IconResolver = ({svgName, ...props}: {svgName?: string}) => {
  if (!svgName) {
    return null;
  }

  let GeneratedIconComponent;
  switch (svgName) {
    case 'afterpay-disclaimer':
      GeneratedIconComponent = lazy(() => import('./AfterpayDisclaimer'));
      break;

    case 'afterpay-monochrome':
      GeneratedIconComponent = lazy(() => import('./AfterpayMonochrome'));
      break;

    case 'afterpay':
      GeneratedIconComponent = lazy(() => import('./Afterpay'));
      break;

    case 'amex-monochrome':
      GeneratedIconComponent = lazy(() => import('./AmexMonochrome'));
      break;

    case 'amex-safekey-monochrome':
      GeneratedIconComponent = lazy(() => import('./AmexSafekeyMonochrome'));
      break;

    case 'amex-safekey':
      GeneratedIconComponent = lazy(() => import('./AmexSafekey'));
      break;

    case 'amex':
      GeneratedIconComponent = lazy(() => import('./Amex'));
      break;

    case 'apple-pay-monochrome':
      GeneratedIconComponent = lazy(() => import('./ApplePayMonochrome'));
      break;

    case 'apple-pay':
      GeneratedIconComponent = lazy(() => import('./ApplePay'));
      break;

    case 'diners-club-monochrome':
      GeneratedIconComponent = lazy(() => import('./DinersClubMonochrome'));
      break;

    case 'diners-club':
      GeneratedIconComponent = lazy(() => import('./DinersClub'));
      break;

    case 'g-pay-monochrome':
      GeneratedIconComponent = lazy(() => import('./GPayMonochrome'));
      break;

    case 'g-pay':
      GeneratedIconComponent = lazy(() => import('./GPay'));
      break;

    case 'humm-monochrome':
      GeneratedIconComponent = lazy(() => import('./HummMonochrome'));
      break;

    case 'humm':
      GeneratedIconComponent = lazy(() => import('./Humm'));
      break;

    case 'klarna-monochrome':
      GeneratedIconComponent = lazy(() => import('./KlarnaMonochrome'));
      break;

    case 'klarna':
      GeneratedIconComponent = lazy(() => import('./Klarna'));
      break;

    case 'latitude-monochrome':
      GeneratedIconComponent = lazy(() => import('./LatitudeMonochrome'));
      break;

    case 'latitude-pay-lg':
      GeneratedIconComponent = lazy(() => import('./LatitudePayLg'));
      break;

    case 'latitude':
      GeneratedIconComponent = lazy(() => import('./Latitude'));
      break;

    case 'master-card-monochrome':
      GeneratedIconComponent = lazy(() => import('./MasterCardMonochrome'));
      break;

    case 'master-card':
      GeneratedIconComponent = lazy(() => import('./MasterCard'));
      break;

    case 'mastercard-id-check-monochrome':
      GeneratedIconComponent = lazy(
        () => import('./MastercardIdCheckMonochrome'),
      );
      break;

    case 'mastercard-id-check':
      GeneratedIconComponent = lazy(() => import('./MastercardIdCheck'));
      break;

    case 'paypal-disclaimer':
      GeneratedIconComponent = lazy(() => import('./PaypalDisclaimer'));
      break;

    case 'paypal-monochrome':
      GeneratedIconComponent = lazy(() => import('./PaypalMonochrome'));
      break;

    case 'paypal':
      GeneratedIconComponent = lazy(() => import('./Paypal'));
      break;

    case 'shop-pay-monochrome':
      GeneratedIconComponent = lazy(() => import('./ShopPayMonochrome'));
      break;

    case 'shop-pay':
      GeneratedIconComponent = lazy(() => import('./ShopPay'));
      break;

    case 'visa-monochrome':
      GeneratedIconComponent = lazy(() => import('./VisaMonochrome'));
      break;

    case 'visa-verified-monochrome':
      GeneratedIconComponent = lazy(() => import('./VisaVerifiedMonochrome'));
      break;

    case 'visa-verified':
      GeneratedIconComponent = lazy(() => import('./VisaVerified'));
      break;

    case 'visa':
      GeneratedIconComponent = lazy(() => import('./Visa'));
      break;

    case 'zip-disclaimer':
      GeneratedIconComponent = lazy(() => import('./ZipDisclaimer'));
      break;

    case 'zip-monochrome':
      GeneratedIconComponent = lazy(() => import('./ZipMonochrome'));
      break;

    case 'zip':
      GeneratedIconComponent = lazy(() => import('./Zip'));
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
