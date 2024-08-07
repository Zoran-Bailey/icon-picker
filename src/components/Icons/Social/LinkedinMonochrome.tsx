import classNames from "classnames/bind";
// import styles from "./IconsSocial.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgLinkedinMonochrome = ({
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
        d="M21.372 1H2.624C1.726 1 1 1.709 1 2.586V21.41c0 .877.726 1.59 1.624 1.59h18.748C22.27 23 23 22.287 23 21.415V2.585C23 1.71 22.27 1 21.372 1M7.527 19.747H4.26V9.246h3.266zM5.894 7.815a1.892 1.892 0 1 1-.007-3.783 1.892 1.892 0 0 1 .007 3.783m13.853 11.932h-3.261v-5.104c0-1.216-.021-2.785-1.697-2.785-1.698 0-1.955 1.328-1.955 2.699v5.19H9.577V9.246h3.128v1.435h.043c.434-.825 1.5-1.697 3.085-1.697 3.304 0 3.914 2.174 3.914 5.001z"
      />
    </svg>
  );
};
export default SvgLinkedinMonochrome;
