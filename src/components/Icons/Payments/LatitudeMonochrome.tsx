import classNames from "classnames/bind";
// import styles from "./IconsPayments.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgLatitudeMonochrome = ({
  color = "currentColor",
  size = "lg",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={20}
      fill="none"
      viewBox="0 0 25 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path fill="#000" d="M4 2h17v16H4z" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.768 14.209h.413v1.051h.172v-1.05h.412v-.175H9.77zm-3.06-.175h-.173v1.226h.875v-.175h-.703zm4.835 1.226h.172v-1.226h-.174zm5.518-.613a.44.44 0 0 0-.14-.328.43.43 0 0 0-.334-.11h-.312v.876h.312a.42.42 0 0 0 .334-.11.43.43 0 0 0 .14-.328m.174 0a.6.6 0 0 1-.182.451.6.6 0 0 1-.452.162h-.498v-1.226h.496a.58.58 0 0 1 .452.162.6.6 0 0 1 .183.451zm-4.743-.439h.412v1.052h.172v-1.052h.412v-.175h-.995zm6.374 0v-.175h-.877v1.227h.875v-.175h-.703v-.35h.605v-.176h-.604v-.35zm-9.981.526-.227-.526-.226.526zm-.142-.7.546 1.226h-.18l-.152-.35h-.602l-.151.35h-.178l.546-1.226zm5.689 0v.67c0 .222.087.396.338.396.25 0 .337-.174.337-.395v-.671h.173v.697a.53.53 0 0 1-.14.385.5.5 0 0 1-.37.162.5.5 0 0 1-.37-.162.52.52 0 0 1-.14-.385v-.697zm-3.93-9.461v5.818h5.718v1.234H9.29V4.573zm5.112 3.879a.6.6 0 0 1 .56.38.63.63 0 0 1-.131.673.6.6 0 0 1-.661.134.625.625 0 0 1-.196-1.006.6.6 0 0 1 .428-.181m0-1.94c.12 0 .237.036.337.104a.615.615 0 0 1 .258.633.6.6 0 0 1-.166.316.6.6 0 0 1-.661.134.6.6 0 0 1-.272-.227.625.625 0 0 1 .272-.914.6.6 0 0 1 .232-.046m-1.906-1.94a.6.6 0 0 1 .56.382.63.63 0 0 1-.131.672.6.6 0 0 1-.661.134.624.624 0 0 1-.197-1.006.6.6 0 0 1 .43-.181m-1.906 0a.6.6 0 0 1 .56.382.63.63 0 0 1-.132.672.6.6 0 0 1-.66.134.625.625 0 0 1 0-1.14.6.6 0 0 1 .232-.047m3.812 0a.615.615 0 0 1 .595.737.6.6 0 0 1-.166.317.6.6 0 0 1-.661.134.6.6 0 0 1-.272-.228.625.625 0 0 1 .075-.779.6.6 0 0 1 .429-.18"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLatitudeMonochrome;
