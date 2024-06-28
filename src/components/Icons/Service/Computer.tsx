import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgComputer = ({
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
        d="M9 17H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5M5 20h4m10-8h-4m4-3h-4m2 8h.125M13.6 21h6.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.24 22 19.96 22 19.4V5.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C21.24 4 20.96 4 20.4 4h-6.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C12 4.76 12 5.04 12 5.6v13.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C12.76 21 13.04 21 13.6 21Z"
      />
    </svg>
  );
};
export default SvgComputer;
