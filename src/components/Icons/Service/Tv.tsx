import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgTv = ({
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
        d="M15.5 15h-7m-5.75 5.5V19a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1.5M5.6 12h12.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C20 11.24 20 10.96 20 10.4V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C19.24 2 18.96 2 18.4 2H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 2.76 4 3.04 4 3.6v6.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C4.76 12 5.04 12 5.6 12Z"
      />
    </svg>
  );
};
export default SvgTv;
