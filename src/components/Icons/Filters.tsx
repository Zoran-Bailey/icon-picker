import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgFilters = ({
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
        d="M3 16h2.5M21 16h-8m8-8h-2.5M3 8h8m-4.414 6.586a2 2 0 1 0 2.828 2.828 2 2 0 0 0-2.828-2.828Zm10.828-8a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828Z"
      />
    </svg>
  );
};
export default SvgFilters;
