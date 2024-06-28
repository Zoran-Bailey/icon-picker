import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgInStoreOnly = ({
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.974 6V2H2v20h8.842M6.974 6C10.842 3 17 3 17 3v4M6.974 6v4H9.5m8-5H21v3M9.5 14H6.974v7.5M18 15.8h.008m4.992 0c0 3.851-4.375 4.2-5 7.2-.625-3-5-3.349-5-7.2 0-2.651 2.239-4.8 5-4.8s5 2.149 5 4.8m-4.598 0c0 .215-.18.39-.402.39a.396.396 0 0 1-.402-.39c0-.215.18-.39.402-.39s.402.175.402.39"
      />
    </svg>
  );
};
export default SvgInStoreOnly;
