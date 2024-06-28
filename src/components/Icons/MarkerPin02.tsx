import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgMarkerPin02 = ({
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
        d="M5 14.286c-1.851.817-3 1.955-3 3.214C2 19.985 6.477 22 12 22s10-2.015 10-4.5c0-1.259-1.149-2.397-3-3.214M12 8h.013M18 8c0 4.064-4.5 6-6 9-1.5-3-6-4.936-6-9a6 6 0 1 1 12 0m-5.357 0c0 .359-.288.65-.643.65a.647.647 0 0 1-.643-.65c0-.359.288-.65.643-.65s.643.291.643.65"
      />
    </svg>
  );
};
export default SvgMarkerPin02;
