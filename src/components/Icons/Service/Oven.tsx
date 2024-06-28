import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgOven = ({
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
        d="M20.5 9h-17M9 6h.125M6 6h.125M15 6h.125M17.5 6h.125m1.378 15.004H4.997a2 2 0 0 1-2-2.001V4.997a2 2 0 0 1 2-2h14.006a2 2 0 0 1 2 2v14.006a2 2 0 0 1-2 2ZM5.569 12H18.43v6.431H5.57z"
      />
    </svg>
  );
};
export default SvgOven;
