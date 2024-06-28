import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgSmartHome = ({
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
        d="M9.032 14.42a4.654 4.654 0 0 1 5.687 0m2.031-2.839c-2.843-2.219-6.907-2.219-9.75 0M11.875 17H12m7.842-8.701-6-4.667a3 3 0 0 0-3.684 0l-6 4.667A3 3 0 0 0 3 10.667V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.333c0-.926-.427-1.8-1.158-2.368Z"
      />
    </svg>
  );
};
export default SvgSmartHome;
