import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgShipping = ({
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
        d="M3.696 19H2.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C1 18.24 1 17.96 1 17.4V6.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C1.76 5 2.04 5 2.601 5H12.9c.56 0 .841 0 1.055.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v10.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C13.74 19 13.46 19 12.9 19H8m7-10h4.688c.468 0 .701 0 .893.084a1 1 0 0 1 .42.344c.119.171.165.4.256.858l1.36 6.8c.131.656.197.984.108 1.241a1 1 0 0 1-.439.536c-.234.137-.569.137-1.238.137H20m1.5-6H18M6 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </svg>
  );
};
export default SvgShipping;
