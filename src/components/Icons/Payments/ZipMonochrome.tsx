import classNames from "classnames/bind";
// import styles from "./IconsPayments.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgZipMonochrome = ({
  color = "currentColor",
  size = "lg",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={43}
      height={20}
      fill="none"
      viewBox="0 0 43 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#000"
        d="m4.14 11.554.313 2.575h10.951l-.358-2.95H9.94l-.045-.365 4.703-3.32-.314-2.58H3.334l.358 2.948h5.114l.045.369z"
      />
      <path fill="#8B8B8B" d="m15.556 4.913 1.12 9.216h10.96l-1.12-9.216z" />
      <path
        fill="#000"
        d="M39.127 8.23c-.253-2.07-1.863-3.326-4.051-3.317h-7.29l1.12 9.216h3.28l-.225-1.843h3.47c2.731 0 3.981-1.72 3.696-4.055m-4.05 1.472-3.429.004-.268-2.212 3.447.003c.811.01 1.226.471 1.293 1.102.041.407-.143 1.103-1.043 1.103M18.83 3.689c.577-.626.476-1.668-.225-2.328-.7-.66-1.736-.687-2.313-.061s-.476 1.668.225 2.327c.7.66 1.736.687 2.313.062"
      />
    </svg>
  );
};
export default SvgZipMonochrome;
