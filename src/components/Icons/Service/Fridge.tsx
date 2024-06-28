import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgFridge = ({
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
        d="M19 11.11H5.5M16 14v2m0-10v2m1.25 13H6.75a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2Z"
      />
    </svg>
  );
};
export default SvgFridge;
