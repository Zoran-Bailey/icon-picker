import classNames from "classnames/bind";
// import styles from "./IconsPayments.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgMasterCardMonochrome = ({
  color = "currentColor",
  size = "lg",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={20}
      fill="none"
      viewBox="0 0 28 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#000"
        d="M15.834 9.583a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0"
      />
      <path
        fill="#A2A2A2"
        d="M24.167 9.583a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0"
      />
      <path
        fill="#8A8A8A"
        d="M13.75 14.242a6.24 6.24 0 0 0 2.084-4.659 6.23 6.23 0 0 0-2.084-4.658 6.23 6.23 0 0 0-2.083 4.658c0 1.851.805 3.515 2.083 4.659"
      />
    </svg>
  );
};
export default SvgMasterCardMonochrome;
