import classNames from "classnames/bind";
// import styles from "./IconsSocial.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgXTwitter = ({
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
        fill="#242E36"
        fillRule="evenodd"
        d="m15.946 23-5.55-7.91L3.45 23H.51l8.582-9.769L.51 1h7.546l5.23 7.455L19.84 1h2.939l-8.184 9.317L23.492 23zm3.273-2.23H17.24L4.718 3.23h1.98l5.014 7.023.868 1.219z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgXTwitter;
