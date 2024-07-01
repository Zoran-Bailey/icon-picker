import { Suspense, lazy } from "react";
export { default as Svg360View } from "./360View";
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

const iconToImportMap = {
  "360-view": lazy(() => import("./360View")),
  "account-lg": lazy(() => import("./AccountLg")),
  "add-to-bag": lazy(() => import("./AddToBag")),
  "alert-circle-wrong": lazy(() => import("./AlertCircleWrong")),
  "alert-circle": lazy(() => import("./AlertCircle")),
  "alert-hexagon": lazy(() => import("./AlertHexagon")),
  "alert-triangle": lazy(() => import("./AlertTriangle")),
  "arrow-down": lazy(() => import("./ArrowDown")),
  "arrow-left": lazy(() => import("./ArrowLeft")),
  "arrow-right": lazy(() => import("./ArrowRight")),
  "arrow-up-left": lazy(() => import("./ArrowUpLeft")),
  "arrow-up-right": lazy(() => import("./ArrowUpRight")),
  "arrow-up": lazy(() => import("./ArrowUp")),
  billing: lazy(() => import("./Billing")),
  "calendar-tick": lazy(() => import("./CalendarTick")),
  calendar: lazy(() => import("./Calendar")),
  careeres: lazy(() => import("./Careeres")),
  "check-circle": lazy(() => import("./CheckCircle")),
  check: lazy(() => import("./Check")),
  "chevron-down": lazy(() => import("./ChevronDown")),
  "chevron-left": lazy(() => import("./ChevronLeft")),
  "chevron-right": lazy(() => import("./ChevronRight")),
  "chevron-selector-horizontal": lazy(
    () => import("./ChevronSelectorHorizontal")
  ),
  "chevron-selector-vertical": lazy(() => import("./ChevronSelectorVertical")),
  "chevron-up": lazy(() => import("./ChevronUp")),
  "click-collect-available": lazy(() => import("./ClickCollectAvailable")),
  "click-collect-not-available": lazy(
    () => import("./ClickCollectNotAvailable")
  ),
  "click-collect": lazy(() => import("./ClickCollect")),
  clock: lazy(() => import("./Clock")),
  close: lazy(() => import("./Close")),
  "coins-hand": lazy(() => import("./CoinsHand")),
  compare: lazy(() => import("./Compare")),
  cover: lazy(() => import("./Cover")),
  "credit-card-check": lazy(() => import("./CreditCardCheck")),
  "credit-card-edit": lazy(() => import("./CreditCardEdit")),
  "credit-card-lock": lazy(() => import("./CreditCardLock")),
  "credit-card-plus": lazy(() => import("./CreditCardPlus")),
  "credit-card-x": lazy(() => import("./CreditCardX")),
  "credit-card": lazy(() => import("./CreditCard")),
  "customer-support": lazy(() => import("./CustomerSupport")),
  delivery: lazy(() => import("./Delivery")),
  "digital-item-cloud": lazy(() => import("./DigitalItemCloud")),
  "dots-horizontal": lazy(() => import("./DotsHorizontal")),
  "dots-vertical": lazy(() => import("./DotsVertical")),
  download: lazy(() => import("./Download")),
  energy: lazy(() => import("./Energy")),
  equals: lazy(() => import("./Equals")),
  expand: lazy(() => import("./Expand")),
  "eye-off": lazy(() => import("./EyeOff")),
  eye: lazy(() => import("./Eye")),
  "face-id": lazy(() => import("./FaceId")),
  fast: lazy(() => import("./Fast")),
  "file-attachment": lazy(() => import("./FileAttachment")),
  "file-check": lazy(() => import("./FileCheck")),
  "file-download": lazy(() => import("./FileDownload")),
  "file-plus": lazy(() => import("./FilePlus")),
  "file-search": lazy(() => import("./FileSearch")),
  "file-x": lazy(() => import("./FileX")),
  file: lazy(() => import("./File")),
  filters: lazy(() => import("./Filters")),
  gift: lazy(() => import("./Gift")),
  globe: lazy(() => import("./Globe")),
  heart: lazy(() => import("./Heart")),
  "help-circle": lazy(() => import("./HelpCircle")),
  help: lazy(() => import("./Help")),
  home: lazy(() => import("./Home")),
  "image-gallery": lazy(() => import("./ImageGallery")),
  image: lazy(() => import("./Image")),
  "in-person-service-01": lazy(() => import("./InPersonService01")),
  "in-person-service-02": lazy(() => import("./InPersonService02")),
  "in-store-only": lazy(() => import("./InStoreOnly")),
  "info-circle": lazy(() => import("./InfoCircle")),
  key: lazy(() => import("./Key")),
  "link-external": lazy(() => import("./LinkExternal")),
  link: lazy(() => import("./Link")),
  lock: lazy(() => import("./Lock")),
  mail: lazy(() => import("./Mail")),
  "mark-location": lazy(() => import("./MarkLocation")),
  "marker-pin-01": lazy(() => import("./MarkerPin01")),
  "marker-pin-02": lazy(() => import("./MarkerPin02")),
  "marker-pin-03": lazy(() => import("./MarkerPin03")),
  menu: lazy(() => import("./Menu")),
  "message-question": lazy(() => import("./MessageQuestion")),
  message: lazy(() => import("./Message")),
  minimize: lazy(() => import("./Minimize")),
  minus: lazy(() => import("./Minus")),
  news: lazy(() => import("./News")),
  "online-only": lazy(() => import("./OnlineOnly")),
  "package-search": lazy(() => import("./PackageSearch")),
  package: lazy(() => import("./Package")),
  paperclip: lazy(() => import("./Paperclip")),
  "phone-call": lazy(() => import("./PhoneCall")),
  play: lazy(() => import("./Play")),
  plus: lazy(() => import("./Plus")),
  "price-check": lazy(() => import("./PriceCheck")),
  promo: lazy(() => import("./Promo")),
  recycle: lazy(() => import("./Recycle")),
  "refresh-auto": lazy(() => import("./RefreshAuto")),
  "reverse-left": lazy(() => import("./ReverseLeft")),
  "reverse-right": lazy(() => import("./ReverseRight")),
  ruler: lazy(() => import("./Ruler")),
  sale: lazy(() => import("./Sale")),
  search: lazy(() => import("./Search")),
  service: lazy(() => import("./Service")),
  settings: lazy(() => import("./Settings")),
  "shield-tick": lazy(() => import("./ShieldTick")),
  shield: lazy(() => import("./Shield")),
  shipping: lazy(() => import("./Shipping")),
  "shopping-cart-lg": lazy(() => import("./ShoppingCartLg")),
  "shopping-cart": lazy(() => import("./ShoppingCart")),
  "store-cash-lg": lazy(() => import("./StoreCashLg")),
  "store-cash-small": lazy(() => import("./StoreCashSmall")),
  "store-lg": lazy(() => import("./StoreLg")),
  "switch-horizontal-01": lazy(() => import("./SwitchHorizontal01")),
  "switch-horizontal-02": lazy(() => import("./SwitchHorizontal02")),
  "switch-vertical-01": lazy(() => import("./SwitchVertical01")),
  "switch-vertical-02": lazy(() => import("./SwitchVertical02")),
  "tag-lg": lazy(() => import("./TagLg")),
  tag: lazy(() => import("./Tag")),
  "thumbs-down": lazy(() => import("./ThumbsDown")),
  "thumbs-up": lazy(() => import("./ThumbsUp")),
  "top-selller": lazy(() => import("./TopSelller")),
  trash: lazy(() => import("./Trash")),
  video: lazy(() => import("./Video")),
  "volume-max": lazy(() => import("./VolumeMax")),
  "volume-min": lazy(() => import("./VolumeMin")),
  "volume-x": lazy(() => import("./VolumeX")),
  wallet: lazy(() => import("./Wallet")),
  "zoom-in": lazy(() => import("./ZoomIn")),
  "zoom-out": lazy(() => import("./ZoomOut")),
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
