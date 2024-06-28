import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgCustomerSupport = ({
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
        d="M18.5 10v-.5a6.5 6.5 0 1 0-13 0v.5m0 0h-1a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Zm8.375 10H18v-2.75m1-.25h-1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2Zm-6.5 4.25h-1.25a1.25 1.25 0 0 1 0-2.5h1.25a1.25 1.25 0 0 1 0 2.5Z"
      />
    </svg>
  );
};
export default SvgCustomerSupport;
