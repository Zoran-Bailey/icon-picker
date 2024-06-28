import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgOnlineOnly = ({
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
        d="m2.687 15.645 1.908-1.101a.5.5 0 0 1 .342-.059l3.754.703a.5.5 0 0 0 .592-.494l-.014-3.29a.5.5 0 0 1 .068-.254l1.895-3.244a.5.5 0 0 0-.023-.54l-3.19-4.54M19 4.859C13.5 7.5 16.5 11 17.5 11.5c1.877.938 4.488 1 4.488 1Q22 12.251 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10q.251 0 .5-.012m3.52-.286-3.166-8.349 8.348 3.167L17.5 18z"
      />
    </svg>
  );
};
export default SvgOnlineOnly;
