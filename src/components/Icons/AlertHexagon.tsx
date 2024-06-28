import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgAlertHexagon = ({
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
        d="M12 8v5m0 3h.01M3 7.942v8.117c0 .342 0 .514.05.666a1 1 0 0 0 .215.364c.109.119.258.202.558.368l7.4 4.111c.284.158.425.237.575.268q.201.04.403 0c.15-.031.292-.11.576-.268l7.4-4.11c.3-.167.45-.25.558-.369a1 1 0 0 0 .215-.364c.05-.152.05-.324.05-.666V7.942c0-.343 0-.514-.05-.667a1 1 0 0 0-.215-.364c-.109-.119-.258-.202-.558-.368l-7.4-4.111c-.284-.158-.425-.237-.575-.267a1 1 0 0 0-.403 0c-.15.03-.292.11-.576.267l-7.4 4.11c-.3.167-.45.25-.558.369a1 1 0 0 0-.215.364C3 7.428 3 7.599 3 7.942Z"
      />
    </svg>
  );
};
export default SvgAlertHexagon;
