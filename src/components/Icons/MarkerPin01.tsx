import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgMarkerPin01 = ({
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10h.013M20 10c0 6.418-7 7-8 12-1-5-8-5.582-8-12a8 8 0 1 1 16 0m-7.357 0c0 .359-.288.65-.643.65a.647.647 0 0 1-.643-.65c0-.359.288-.65.643-.65s.643.291.643.65"
      />
    </svg>
  );
};
export default SvgMarkerPin01;
