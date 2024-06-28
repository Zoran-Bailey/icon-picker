import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgXTwitterMonochrome = ({
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
        fill="#000"
        fillRule="evenodd"
        d="m15.946 23-5.55-7.91L3.449 23H.509l8.583-9.769L.51 1h7.546l5.23 7.455L19.839 1h2.94l-8.185 9.317L23.491 23zm3.272-2.23H17.24L4.718 3.23h1.98l5.014 7.023.867 1.219z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgXTwitterMonochrome;
