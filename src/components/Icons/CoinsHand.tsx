import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgCoinsHand = ({
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
        d="M13.53 8.352a3.5 3.5 0 1 1 .941-4.704M6 20.088h2.61q.512 0 1.009.12l2.758.67a4.3 4.3 0 0 0 1.826.043l3.05-.593a4.2 4.2 0 0 0 2.127-1.107l2.158-2.1a1.503 1.503 0 0 0 0-2.168 1.61 1.61 0 0 0-2.06-.143l-2.515 1.835a2.12 2.12 0 0 1-1.25.405h-2.427 1.545c.871 0 1.577-.687 1.577-1.534v-.307c0-.703-.492-1.317-1.194-1.487l-2.385-.58A5 5 0 0 0 11.643 13c-.965 0-2.711.799-2.711.799L6 15.025M20 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 14.6v5.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 22 3.04 22 3.6 22h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C6 21.24 6 20.96 6 20.4v-5.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C5.24 13 4.96 13 4.4 13h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 13.76 2 14.04 2 14.6Z"
      />
    </svg>
  );
};
export default SvgCoinsHand;
