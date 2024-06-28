import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgDishwasher = ({
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
        d="M21.004 8.999H2.996M10 5.998h4.002m5.002 15.006H4.997a2 2 0 0 1-2-2.001V4.997a2 2 0 0 1 2-2h14.006a2 2 0 0 1 2 2v14.006a2 2 0 0 1-2 2Zm-6.52-8.763 1.438 1.924a2.4 2.4 0 0 1-1.918 3.838 2.4 2.4 0 0 1-1.92-3.838l1.44-1.924a.6.6 0 0 1 .96 0Z"
      />
    </svg>
  );
};
export default SvgDishwasher;
