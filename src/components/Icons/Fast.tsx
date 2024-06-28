import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgFast = ({
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
        d="m12.949 3-8.45 9.62c-.331.376-.496.564-.499.723a.44.44 0 0 0 .176.357c.13.1.39.1.906.1H12l-.949 7.2 8.45-9.62c.331-.376.496-.564.499-.723a.44.44 0 0 0-.176-.357c-.13-.1-.39-.1-.906-.1H12z"
      />
    </svg>
  );
};
export default SvgFast;
