import { Suspense, lazy } from "react";
export { default as Svg360View } from "./Svg360View";
export { default as AccountLg } from "./AccountLg";
export { default as AddToBag } from "./AddToBag";
export { default as AlertCircleWrong } from "./AlertCircleWrong";
export { default as AlertCircle } from "./AlertCircle";
export { default as AlertHexagon } from "./AlertHexagon";
export { default as AlertTriangle } from "./AlertTriangle";
export { default as ArrowDown } from "./ArrowDown";
export { default as ArrowLeft } from "./ArrowLeft";
export { default as ArrowRight } from "./ArrowRight";
export { default as ArrowUpLeft } from "./ArrowUpLeft";
export { default as ArrowUpRight } from "./ArrowUpRight";
export { default as ArrowUp } from "./ArrowUp";
export { default as Billing } from "./Billing";
export { default as CalendarTick } from "./CalendarTick";
export { default as Calendar } from "./Calendar";
export { default as Careeres } from "./Careeres";
export { default as CheckCircle } from "./CheckCircle";
export { default as Check } from "./Check";
export { default as ChevronDown } from "./ChevronDown";
export { default as ChevronLeft } from "./ChevronLeft";
export { default as ChevronRight } from "./ChevronRight";
export { default as ChevronSelectorHorizontal } from "./ChevronSelectorHorizontal";
export { default as ChevronSelectorVertical } from "./ChevronSelectorVertical";
export { default as ChevronUp } from "./ChevronUp";
export { default as ClickCollectAvailable } from "./ClickCollectAvailable";
export { default as ClickCollectNotAvailable } from "./ClickCollectNotAvailable";
export { default as ClickCollect } from "./ClickCollect";
export { default as Clock } from "./Clock";
export { default as Close } from "./Close";
export { default as CoinsHand } from "./CoinsHand";
export { default as Compare } from "./Compare";
export { default as Cover } from "./Cover";
export { default as CreditCardCheck } from "./CreditCardCheck";
export { default as CreditCardEdit } from "./CreditCardEdit";
export { default as CreditCardLock } from "./CreditCardLock";
export { default as CreditCardPlus } from "./CreditCardPlus";
export { default as CreditCardX } from "./CreditCardX";
export { default as CreditCard } from "./CreditCard";
export { default as CustomerSupport } from "./CustomerSupport";
export { default as Delivery } from "./Delivery";
export { default as DigitalItemCloud } from "./DigitalItemCloud";
export { default as DotsHorizontal } from "./DotsHorizontal";
export { default as DotsVertical } from "./DotsVertical";
export { default as Download } from "./Download";
export { default as Energy } from "./Energy";
export { default as Equals } from "./Equals";
export { default as Expand } from "./Expand";
export { default as EyeOff } from "./EyeOff";
export { default as Eye } from "./Eye";
export { default as FaceId } from "./FaceId";
export { default as Fast } from "./Fast";
export { default as FileAttachment } from "./FileAttachment";
export { default as FileCheck } from "./FileCheck";
export { default as FileDownload } from "./FileDownload";
export { default as FilePlus } from "./FilePlus";
export { default as FileSearch } from "./FileSearch";
export { default as FileX } from "./FileX";
export { default as File } from "./File";
export { default as Filters } from "./Filters";
export { default as Gift } from "./Gift";
export { default as Globe } from "./Globe";
export { default as Heart } from "./Heart";
export { default as HelpCircle } from "./HelpCircle";
export { default as Help } from "./Help";
export { default as Home } from "./Home";
export { default as ImageGallery } from "./ImageGallery";
export { default as Image } from "./Image";
export { default as InPersonService01 } from "./InPersonService01";
export { default as InPersonService02 } from "./InPersonService02";
export { default as InStoreOnly } from "./InStoreOnly";
export { default as InfoCircle } from "./InfoCircle";
export { default as Key } from "./Key";
export { default as LinkExternal } from "./LinkExternal";
export { default as Link } from "./Link";
export { default as Lock } from "./Lock";
export { default as Mail } from "./Mail";
export { default as MarkLocation } from "./MarkLocation";
export { default as MarkerPin01 } from "./MarkerPin01";
export { default as MarkerPin02 } from "./MarkerPin02";
export { default as MarkerPin03 } from "./MarkerPin03";
export { default as Menu } from "./Menu";
export { default as MessageQuestion } from "./MessageQuestion";
export { default as Message } from "./Message";
export { default as Minimize } from "./Minimize";
export { default as Minus } from "./Minus";
export { default as News } from "./News";
export { default as OnlineOnly } from "./OnlineOnly";
export { default as PackageSearch } from "./PackageSearch";
export { default as Package } from "./Package";
export { default as Paperclip } from "./Paperclip";
export { default as PhoneCall } from "./PhoneCall";
export { default as Play } from "./Play";
export { default as Plus } from "./Plus";
export { default as PriceCheck } from "./PriceCheck";
export { default as Promo } from "./Promo";
export { default as Recycle } from "./Recycle";
export { default as RefreshAuto } from "./RefreshAuto";
export { default as ReverseLeft } from "./ReverseLeft";
export { default as ReverseRight } from "./ReverseRight";
export { default as Ruler } from "./Ruler";
export { default as Sale } from "./Sale";
export { default as Search } from "./Search";
export { default as Service } from "./Service";
export { default as Settings } from "./Settings";
export { default as ShieldTick } from "./ShieldTick";
export { default as Shield } from "./Shield";
export { default as Shipping } from "./Shipping";
export { default as ShoppingCartLg } from "./ShoppingCartLg";
export { default as ShoppingCart } from "./ShoppingCart";
export { default as StoreCashLg } from "./StoreCashLg";
export { default as StoreCashSmall } from "./StoreCashSmall";
export { default as StoreLg } from "./StoreLg";
export { default as SwitchHorizontal01 } from "./SwitchHorizontal01";
export { default as SwitchHorizontal02 } from "./SwitchHorizontal02";
export { default as SwitchVertical01 } from "./SwitchVertical01";
export { default as SwitchVertical02 } from "./SwitchVertical02";
export { default as TagLg } from "./TagLg";
export { default as Tag } from "./Tag";
export { default as ThumbsDown } from "./ThumbsDown";
export { default as ThumbsUp } from "./ThumbsUp";
export { default as TopSelller } from "./TopSelller";
export { default as Trash } from "./Trash";
export { default as Video } from "./Video";
export { default as VolumeMax } from "./VolumeMax";
export { default as VolumeMin } from "./VolumeMin";
export { default as VolumeX } from "./VolumeX";
export { default as Wallet } from "./Wallet";
export { default as ZoomIn } from "./ZoomIn";
export { default as ZoomOut } from "./ZoomOut";

const IconResolver = ({ svgName, ...props }: { svgName?: string }) => {
  if (!svgName) {
    return null;
  }

  let GeneratedIconComponent;
  switch (svgName) {
    case "360-view":
      GeneratedIconComponent = lazy(() => import("./Svg360View"));
      break;

    case "account-lg":
      GeneratedIconComponent = lazy(() => import("./AccountLg"));
      break;

    case "add-to-bag":
      GeneratedIconComponent = lazy(() => import("./AddToBag"));
      break;

    case "alert-circle-wrong":
      GeneratedIconComponent = lazy(() => import("./AlertCircleWrong"));
      break;

    case "alert-circle":
      GeneratedIconComponent = lazy(() => import("./AlertCircle"));
      break;

    case "alert-hexagon":
      GeneratedIconComponent = lazy(() => import("./AlertHexagon"));
      break;

    case "alert-triangle":
      GeneratedIconComponent = lazy(() => import("./AlertTriangle"));
      break;

    case "arrow-down":
      GeneratedIconComponent = lazy(() => import("./ArrowDown"));
      break;

    case "arrow-left":
      GeneratedIconComponent = lazy(() => import("./ArrowLeft"));
      break;

    case "arrow-right":
      GeneratedIconComponent = lazy(() => import("./ArrowRight"));
      break;

    case "arrow-up-left":
      GeneratedIconComponent = lazy(() => import("./ArrowUpLeft"));
      break;

    case "arrow-up-right":
      GeneratedIconComponent = lazy(() => import("./ArrowUpRight"));
      break;

    case "arrow-up":
      GeneratedIconComponent = lazy(() => import("./ArrowUp"));
      break;

    case "billing":
      GeneratedIconComponent = lazy(() => import("./Billing"));
      break;

    case "calendar-tick":
      GeneratedIconComponent = lazy(() => import("./CalendarTick"));
      break;

    case "calendar":
      GeneratedIconComponent = lazy(() => import("./Calendar"));
      break;

    case "careeres":
      GeneratedIconComponent = lazy(() => import("./Careeres"));
      break;

    case "check-circle":
      GeneratedIconComponent = lazy(() => import("./CheckCircle"));
      break;

    case "check":
      GeneratedIconComponent = lazy(() => import("./Check"));
      break;

    case "chevron-down":
      GeneratedIconComponent = lazy(() => import("./ChevronDown"));
      break;

    case "chevron-left":
      GeneratedIconComponent = lazy(() => import("./ChevronLeft"));
      break;

    case "chevron-right":
      GeneratedIconComponent = lazy(() => import("./ChevronRight"));
      break;

    case "chevron-selector-horizontal":
      GeneratedIconComponent = lazy(
        () => import("./ChevronSelectorHorizontal")
      );
      break;

    case "chevron-selector-vertical":
      GeneratedIconComponent = lazy(() => import("./ChevronSelectorVertical"));
      break;

    case "chevron-up":
      GeneratedIconComponent = lazy(() => import("./ChevronUp"));
      break;

    case "click-collect-available":
      GeneratedIconComponent = lazy(() => import("./ClickCollectAvailable"));
      break;

    case "click-collect-not-available":
      GeneratedIconComponent = lazy(() => import("./ClickCollectNotAvailable"));
      break;

    case "click-collect":
      GeneratedIconComponent = lazy(() => import("./ClickCollect"));
      break;

    case "clock":
      GeneratedIconComponent = lazy(() => import("./Clock"));
      break;

    case "close":
      GeneratedIconComponent = lazy(() => import("./Close"));
      break;

    case "coins-hand":
      GeneratedIconComponent = lazy(() => import("./CoinsHand"));
      break;

    case "compare":
      GeneratedIconComponent = lazy(() => import("./Compare"));
      break;

    case "cover":
      GeneratedIconComponent = lazy(() => import("./Cover"));
      break;

    case "credit-card-check":
      GeneratedIconComponent = lazy(() => import("./CreditCardCheck"));
      break;

    case "credit-card-edit":
      GeneratedIconComponent = lazy(() => import("./CreditCardEdit"));
      break;

    case "credit-card-lock":
      GeneratedIconComponent = lazy(() => import("./CreditCardLock"));
      break;

    case "credit-card-plus":
      GeneratedIconComponent = lazy(() => import("./CreditCardPlus"));
      break;

    case "credit-card-x":
      GeneratedIconComponent = lazy(() => import("./CreditCardX"));
      break;

    case "credit-card":
      GeneratedIconComponent = lazy(() => import("./CreditCard"));
      break;

    case "customer-support":
      GeneratedIconComponent = lazy(() => import("./CustomerSupport"));
      break;

    case "delivery":
      GeneratedIconComponent = lazy(() => import("./Delivery"));
      break;

    case "digital-item-cloud":
      GeneratedIconComponent = lazy(() => import("./DigitalItemCloud"));
      break;

    case "dots-horizontal":
      GeneratedIconComponent = lazy(() => import("./DotsHorizontal"));
      break;

    case "dots-vertical":
      GeneratedIconComponent = lazy(() => import("./DotsVertical"));
      break;

    case "download":
      GeneratedIconComponent = lazy(() => import("./Download"));
      break;

    case "energy":
      GeneratedIconComponent = lazy(() => import("./Energy"));
      break;

    case "equals":
      GeneratedIconComponent = lazy(() => import("./Equals"));
      break;

    case "expand":
      GeneratedIconComponent = lazy(() => import("./Expand"));
      break;

    case "eye-off":
      GeneratedIconComponent = lazy(() => import("./EyeOff"));
      break;

    case "eye":
      GeneratedIconComponent = lazy(() => import("./Eye"));
      break;

    case "face-id":
      GeneratedIconComponent = lazy(() => import("./FaceId"));
      break;

    case "fast":
      GeneratedIconComponent = lazy(() => import("./Fast"));
      break;

    case "file-attachment":
      GeneratedIconComponent = lazy(() => import("./FileAttachment"));
      break;

    case "file-check":
      GeneratedIconComponent = lazy(() => import("./FileCheck"));
      break;

    case "file-download":
      GeneratedIconComponent = lazy(() => import("./FileDownload"));
      break;

    case "file-plus":
      GeneratedIconComponent = lazy(() => import("./FilePlus"));
      break;

    case "file-search":
      GeneratedIconComponent = lazy(() => import("./FileSearch"));
      break;

    case "file-x":
      GeneratedIconComponent = lazy(() => import("./FileX"));
      break;

    case "file":
      GeneratedIconComponent = lazy(() => import("./File"));
      break;

    case "filters":
      GeneratedIconComponent = lazy(() => import("./Filters"));
      break;

    case "gift":
      GeneratedIconComponent = lazy(() => import("./Gift"));
      break;

    case "globe":
      GeneratedIconComponent = lazy(() => import("./Globe"));
      break;

    case "heart":
      GeneratedIconComponent = lazy(() => import("./Heart"));
      break;

    case "help-circle":
      GeneratedIconComponent = lazy(() => import("./HelpCircle"));
      break;

    case "help":
      GeneratedIconComponent = lazy(() => import("./Help"));
      break;

    case "home":
      GeneratedIconComponent = lazy(() => import("./Home"));
      break;

    case "image-gallery":
      GeneratedIconComponent = lazy(() => import("./ImageGallery"));
      break;

    case "image":
      GeneratedIconComponent = lazy(() => import("./Image"));
      break;

    case "in-person-service-01":
      GeneratedIconComponent = lazy(() => import("./InPersonService01"));
      break;

    case "in-person-service-02":
      GeneratedIconComponent = lazy(() => import("./InPersonService02"));
      break;

    case "in-store-only":
      GeneratedIconComponent = lazy(() => import("./InStoreOnly"));
      break;

    case "info-circle":
      GeneratedIconComponent = lazy(() => import("./InfoCircle"));
      break;

    case "key":
      GeneratedIconComponent = lazy(() => import("./Key"));
      break;

    case "link-external":
      GeneratedIconComponent = lazy(() => import("./LinkExternal"));
      break;

    case "link":
      GeneratedIconComponent = lazy(() => import("./Link"));
      break;

    case "lock":
      GeneratedIconComponent = lazy(() => import("./Lock"));
      break;

    case "mail":
      GeneratedIconComponent = lazy(() => import("./Mail"));
      break;

    case "mark-location":
      GeneratedIconComponent = lazy(() => import("./MarkLocation"));
      break;

    case "marker-pin-01":
      GeneratedIconComponent = lazy(() => import("./MarkerPin01"));
      break;

    case "marker-pin-02":
      GeneratedIconComponent = lazy(() => import("./MarkerPin02"));
      break;

    case "marker-pin-03":
      GeneratedIconComponent = lazy(() => import("./MarkerPin03"));
      break;

    case "menu":
      GeneratedIconComponent = lazy(() => import("./Menu"));
      break;

    case "message-question":
      GeneratedIconComponent = lazy(() => import("./MessageQuestion"));
      break;

    case "message":
      GeneratedIconComponent = lazy(() => import("./Message"));
      break;

    case "minimize":
      GeneratedIconComponent = lazy(() => import("./Minimize"));
      break;

    case "minus":
      GeneratedIconComponent = lazy(() => import("./Minus"));
      break;

    case "news":
      GeneratedIconComponent = lazy(() => import("./News"));
      break;

    case "online-only":
      GeneratedIconComponent = lazy(() => import("./OnlineOnly"));
      break;

    case "package-search":
      GeneratedIconComponent = lazy(() => import("./PackageSearch"));
      break;

    case "package":
      GeneratedIconComponent = lazy(() => import("./Package"));
      break;

    case "paperclip":
      GeneratedIconComponent = lazy(() => import("./Paperclip"));
      break;

    case "phone-call":
      GeneratedIconComponent = lazy(() => import("./PhoneCall"));
      break;

    case "play":
      GeneratedIconComponent = lazy(() => import("./Play"));
      break;

    case "plus":
      GeneratedIconComponent = lazy(() => import("./Plus"));
      break;

    case "price-check":
      GeneratedIconComponent = lazy(() => import("./PriceCheck"));
      break;

    case "promo":
      GeneratedIconComponent = lazy(() => import("./Promo"));
      break;

    case "recycle":
      GeneratedIconComponent = lazy(() => import("./Recycle"));
      break;

    case "refresh-auto":
      GeneratedIconComponent = lazy(() => import("./RefreshAuto"));
      break;

    case "reverse-left":
      GeneratedIconComponent = lazy(() => import("./ReverseLeft"));
      break;

    case "reverse-right":
      GeneratedIconComponent = lazy(() => import("./ReverseRight"));
      break;

    case "ruler":
      GeneratedIconComponent = lazy(() => import("./Ruler"));
      break;

    case "sale":
      GeneratedIconComponent = lazy(() => import("./Sale"));
      break;

    case "search":
      GeneratedIconComponent = lazy(() => import("./Search"));
      break;

    case "service":
      GeneratedIconComponent = lazy(() => import("./Service"));
      break;

    case "settings":
      GeneratedIconComponent = lazy(() => import("./Settings"));
      break;

    case "shield-tick":
      GeneratedIconComponent = lazy(() => import("./ShieldTick"));
      break;

    case "shield":
      GeneratedIconComponent = lazy(() => import("./Shield"));
      break;

    case "shipping":
      GeneratedIconComponent = lazy(() => import("./Shipping"));
      break;

    case "shopping-cart-lg":
      GeneratedIconComponent = lazy(() => import("./ShoppingCartLg"));
      break;

    case "shopping-cart":
      GeneratedIconComponent = lazy(() => import("./ShoppingCart"));
      break;

    case "store-cash-lg":
      GeneratedIconComponent = lazy(() => import("./StoreCashLg"));
      break;

    case "store-cash-small":
      GeneratedIconComponent = lazy(() => import("./StoreCashSmall"));
      break;

    case "store-lg":
      GeneratedIconComponent = lazy(() => import("./StoreLg"));
      break;

    case "switch-horizontal-01":
      GeneratedIconComponent = lazy(() => import("./SwitchHorizontal01"));
      break;

    case "switch-horizontal-02":
      GeneratedIconComponent = lazy(() => import("./SwitchHorizontal02"));
      break;

    case "switch-vertical-01":
      GeneratedIconComponent = lazy(() => import("./SwitchVertical01"));
      break;

    case "switch-vertical-02":
      GeneratedIconComponent = lazy(() => import("./SwitchVertical02"));
      break;

    case "tag-lg":
      GeneratedIconComponent = lazy(() => import("./TagLg"));
      break;

    case "tag":
      GeneratedIconComponent = lazy(() => import("./Tag"));
      break;

    case "thumbs-down":
      GeneratedIconComponent = lazy(() => import("./ThumbsDown"));
      break;

    case "thumbs-up":
      GeneratedIconComponent = lazy(() => import("./ThumbsUp"));
      break;

    case "top-selller":
      GeneratedIconComponent = lazy(() => import("./TopSelller"));
      break;

    case "trash":
      GeneratedIconComponent = lazy(() => import("./Trash"));
      break;

    case "video":
      GeneratedIconComponent = lazy(() => import("./Video"));
      break;

    case "volume-max":
      GeneratedIconComponent = lazy(() => import("./VolumeMax"));
      break;

    case "volume-min":
      GeneratedIconComponent = lazy(() => import("./VolumeMin"));
      break;

    case "volume-x":
      GeneratedIconComponent = lazy(() => import("./VolumeX"));
      break;

    case "wallet":
      GeneratedIconComponent = lazy(() => import("./Wallet"));
      break;

    case "zoom-in":
      GeneratedIconComponent = lazy(() => import("./ZoomIn"));
      break;

    case "zoom-out":
      GeneratedIconComponent = lazy(() => import("./ZoomOut"));
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

export const AllIconNames = [
  "360-view",
  "account-lg",
  "add-to-bag",
  "alert-circle-wrong",
  "alert-circle",
  "alert-hexagon",
  "alert-triangle",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up-left",
  "arrow-up-right",
  "arrow-up",
  "billing",
  "calendar-tick",
  "calendar",
  "careeres",
  "check-circle",
  "check",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-selector-horizontal",
  "chevron-selector-vertical",
  "chevron-up",
  "click-collect-available",
  "click-collect-not-available",
  "click-collect",
  "clock",
  "close",
  "coins-hand",
  "compare",
  "cover",
  "credit-card-check",
  "credit-card-edit",
  "credit-card-lock",
  "credit-card-plus",
  "credit-card-x",
  "credit-card",
  "customer-support",
  "delivery",
  "digital-item-cloud",
  "dots-horizontal",
  "dots-vertical",
  "download",
  "energy",
  "equals",
  "expand",
  "eye-off",
  "eye",
  "face-id",
  "fast",
  "file-attachment",
  "file-check",
  "file-download",
  "file-plus",
  "file-search",
  "file-x",
  "file",
  "filters",
  "gift",
  "globe",
  "heart",
  "help-circle",
  "help",
  "home",
  "image-gallery",
  "image",
  "in-person-service-01",
  "in-person-service-02",
  "in-store-only",
  "info-circle",
  "key",
  "link-external",
  "link",
  "lock",
  "mail",
  "mark-location",
  "marker-pin-01",
  "marker-pin-02",
  "marker-pin-03",
  "menu",
  "message-question",
  "message",
  "minimize",
  "minus",
  "news",
  "online-only",
  "package-search",
  "package",
  "paperclip",
  "phone-call",
  "play",
  "plus",
  "price-check",
  "promo",
  "recycle",
  "refresh-auto",
  "reverse-left",
  "reverse-right",
  "ruler",
  "sale",
  "search",
  "service",
  "settings",
  "shield-tick",
  "shield",
  "shipping",
  "shopping-cart-lg",
  "shopping-cart",
  "store-cash-lg",
  "store-cash-small",
  "store-lg",
  "switch-horizontal-01",
  "switch-horizontal-02",
  "switch-vertical-01",
  "switch-vertical-02",
  "tag-lg",
  "tag",
  "thumbs-down",
  "thumbs-up",
  "top-selller",
  "trash",
  "video",
  "volume-max",
  "volume-min",
  "volume-x",
  "wallet",
  "zoom-in",
  "zoom-out",
];
