import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgAccountLg = ({
  color = "currentColor",
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M28 28a12.95 12.95 0 0 0-4.573-6.511A12.37 12.37 0 0 0 16 19c-2.67 0-5.27.872-7.427 2.489A12.95 12.95 0 0 0 4 28zM16 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
      />
    </svg>
  );
};
export default SvgAccountLg;
