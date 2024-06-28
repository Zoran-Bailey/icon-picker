import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const Svg360View = ({
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
        d="M9.371 8.818V4.5c0-1.38 1.144-2.5 2.554-2.5 1.112 0 2.204.696 2.554 1.667M1.393 10.333C1.742 11.304 2.834 12 3.946 12 5.356 12 6.5 10.88 6.5 9.5v-.417c0-1.38-1.144-2.5-2.554-2.5H3.86c1.222 0 2.213-.97 2.213-2.166v-.334C6.074 2.933 5.121 2 3.946 2a2.14 2.14 0 0 0-1.703.833m14.383 17.89C20.39 20.246 23 19.206 23 18c0-1.657-4.925-3-11-3S1 16.343 1 18s4.925 3 11 3m-1-2 2 2-2 2M9.371 9.083V9.5c0 1.38 1.144 2.5 2.554 2.5 1.411 0 2.555-1.12 2.555-2.5v-.417c0-1.38-1.144-2.5-2.555-2.5-1.41 0-2.554 1.12-2.554 2.5Zm8.141-4.666v5C17.512 10.797 18.59 12 20 12s2.554-1.12 2.554-2.5v-5C22.554 3.12 21.411 2 20 2s-2.488 1.036-2.488 2.417Z"
      />
    </svg>
  );
};
export default Svg360View;
