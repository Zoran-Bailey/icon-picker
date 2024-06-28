import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgBbqs = ({
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
        d="M15.752 3.997a1.25 1.25 0 0 1 0-1.5 1.25 1.25 0 0 0 0-1.501M12 3.997a1.25 1.25 0 0 1 0-1.5 1.25 1.25 0 0 0 0-1.501M8.248 3.997a1.25 1.25 0 0 1 0-1.5 1.25 1.25 0 0 0 0-1.501m6.999 14.636 2.089 5.372m-.836-1.5h-7m-.715-3.86-.813 2.437M4.997 7.998h14.006a1 1 0 0 1 1 1 6 6 0 0 1-6.002 6.003H9.999A6 6 0 0 1 3.997 9a1 1 0 0 1 1-1ZM9 19.503a1.5 1.5 0 1 1-3.002 0 1.5 1.5 0 0 1 3.002 0Z"
      />
    </svg>
  );
};
export default SvgBbqs;
