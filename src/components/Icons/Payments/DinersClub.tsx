import classNames from "classnames/bind";
// import styles from "./IconsPayments.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgDinersClub = ({
  color = "currentColor",
  size = "lg",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={20}
      fill="none"
      viewBox="0 0 25 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#143A82"
        fillRule="evenodd"
        d="M20.834 9.638c0 3.409-3.075 6.212-6.443 6.195H9.547c-3.408.017-6.214-2.785-6.214-6.195 0-3.728 2.806-6.306 6.214-6.305h4.844c3.368 0 6.443 2.576 6.443 6.305M3.922 9.572c0-3.16 2.525-5.721 5.639-5.722 3.115 0 5.64 2.562 5.64 5.722s-2.525 5.72-5.64 5.722c-3.115-.002-5.638-2.562-5.639-5.722m4.36-3.385a3.63 3.63 0 0 0-2.295 3.385 3.63 3.63 0 0 0 2.294 3.384zm2.558 0v6.77a3.63 3.63 0 0 0 2.296-3.385 3.63 3.63 0 0 0-2.296-3.385"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDinersClub;
