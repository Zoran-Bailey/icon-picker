import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgFileAttachment = ({
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
        d="M18 20v-4.5a1.5 1.5 0 0 1 3 0V20a3 3 0 1 1-6 0v-2.8m5-6.2c0-.734 0-2.112-.083-2.458A3 3 0 0 0 19.73 8m0 0a3 3 0 0 0-.172-.325c-.186-.303-.445-.562-.964-1.08l-3.188-3.19c-.519-.518-.778-.777-1.081-.963A3 3 0 0 0 14 2.27M19.73 8H15.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C14 7.24 14 6.96 14 6.4V2.27m0 0a3 3 0 0 0-.542-.187C13.112 2 12.745 2 12.012 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h2.7"
      />
    </svg>
  );
};
export default SvgFileAttachment;
