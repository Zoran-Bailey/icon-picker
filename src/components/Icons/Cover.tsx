import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgCover = ({
  color = "currentColor",
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 19.4c0 1.436-1.12 2.6-2.5 2.6S12 20.836 12 19.4V12m-9.874-1.594C2.89 5.641 7.02 2 12 2s9.11 3.64 9.874 8.406L22 12H2s.087-1.346.126-1.594Z"
      />
    </svg>
  );
};
export default SvgCover;
