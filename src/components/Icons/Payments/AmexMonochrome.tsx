import classNames from "classnames/bind";
// import styles from "./IconsPayments.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgAmexMonochrome = ({
  color = "currentColor",
  size = "lg",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <g clipPath="url(#a)">
        <path fill="#fff" d="M20 20H0V0h20z" />
        <path
          fill="#000"
          d="M20 20v-3.17h-2.413l-1.242-1.373-1.249 1.374H7.141v-6.402H4.574L7.758 3.22h3.072l1.096 2.47V3.22h3.802l.66 1.861.665-1.86H20V0H0v20zm-2.006-3.97H20l-2.654-2.815L20 10.432h-1.974l-1.64 1.792-1.623-1.792h-2.007l2.639 2.799-2.639 2.798h1.952l1.647-1.807zm.47-2.813L20 14.852v-3.256zm-8.946 1.517v-.872h3.158V12.6H9.518v-.871h3.238v-1.296H7.991v5.598h4.765v-1.296zm8.97-5.114H20V4.023h-2.35l-1.256 3.486-1.248-3.486h-2.39V9.62h1.51V5.702l1.44 3.918h1.343l1.44-3.926zm-7.451 0h1.719l-2.47-5.597H8.317L5.848 9.62h1.678L7.99 8.5h2.575zm-1-2.375H8.518l.76-1.831z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgAmexMonochrome;
