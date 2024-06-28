import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgBilling = ({
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
        d="M20 7v-.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h2.7M16 11H8m3.5 4H8m8-8H8m6 13 2.025-.405c.177-.035.265-.053.347-.085a1 1 0 0 0 .207-.111c.073-.05.136-.114.264-.242L21 15a1.414 1.414 0 1 0-2-2l-4.157 4.157a2 2 0 0 0-.242.264 1 1 0 0 0-.11.207c-.033.082-.05.17-.086.347z"
      />
    </svg>
  );
};
export default SvgBilling;
