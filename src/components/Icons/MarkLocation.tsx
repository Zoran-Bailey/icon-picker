import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgMarkLocation = ({
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
        d="M20 12a8 8 0 0 1-8 8m8-8a8 8 0 0 0-8-8m8 8h2m-10 8a8 8 0 0 1-8-8m8 8v2M4 12a8 8 0 0 1 8-8m-8 8H2m10-8V2m0 10h.013m.63 0c0 .359-.288.65-.643.65a.647.647 0 0 1-.643-.65c0-.359.288-.65.643-.65s.643.291.643.65Z"
      />
    </svg>
  );
};
export default SvgMarkLocation;
