import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgCooktops = ({
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
        d="M18 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-7 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgCooktops;
