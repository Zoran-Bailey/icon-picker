import classNames from "classnames/bind";
// import styles from "./IconsSocial.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgTiktokMonochrome = ({
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
        fill="#000"
        d="M16.705 1h-3.946v14.986c0 1.785-1.518 3.252-3.407 3.252-1.888 0-3.406-1.467-3.406-3.252 0-1.754 1.484-3.189 3.305-3.253V8.971C5.238 9.035 2 12.127 2 15.986 2 19.876 5.305 23 9.386 23s7.386-3.157 7.386-7.014V8.3A9.53 9.53 0 0 0 22 9.96V6.197C19.032 6.101 16.705 3.806 16.705 1"
      />
    </svg>
  );
};
export default SvgTiktokMonochrome;
