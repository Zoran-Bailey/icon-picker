import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgDelivery = ({
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
        d="m3 2.5.812.27c.787.263 1.18.394 1.471.637a2 2 0 0 1 .578.803C6 4.562 6 4.977 6 5.806V15.5M21 20l-2.085-1.436c-.305-.21-.457-.314-.623-.389a2 2 0 0 0-.46-.142C17.655 18 17.47 18 17.1 18H8.5m5.5-7h2m-8.004 6.856q.008.144 0 .288a2 2 0 1 1 0-.288ZM17.714 5h-6.428c-.79 0-1.429.64-1.429 1.429v6.428c0 .79.64 1.429 1.429 1.429h6.428c.79 0 1.429-.64 1.429-1.429V6.43c0-.79-.64-1.429-1.429-1.429Z"
      />
    </svg>
  );
};
export default SvgDelivery;
