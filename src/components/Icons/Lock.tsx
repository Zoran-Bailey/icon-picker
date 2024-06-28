import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgLock = ({
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
        d="M16 9V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v3m4 5.5v2M8.8 21h6.4v0c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2v-1.4c0-1.68 0-3.52-.327-4.162a3 3 0 0 0-1.311-1.311C17.72 9 15.88 9 14.2 9H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 11.28 4 13.12 4 14.8v1.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 21 7.12 21 8.8 21z"
      />
    </svg>
  );
};
export default SvgLock;
