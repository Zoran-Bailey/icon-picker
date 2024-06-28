import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgShoppingCartLg = ({
  color = "currentColor",
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 3h1.154c.86 0 1.29 0 1.652.147a2 2 0 0 1 .815.61c.242.307.363.72.604 1.546L9.234 15.6c.15.515.226.772.233 1.03a2 2 0 0 1-.098.675c-.08.245-.225.47-.515.922l-2.126 3.308c-.534.83-.243 1.939.673 2.308.233.094.466.157.673.157h17.069M7 7h20.39c.863 0 1.295 0 1.554.182a1 1 0 0 1 .415.677c.044.313-.152.698-.543 1.467l-2.614 5.133c-.488.959-.733 1.438-1.094 1.787-.32.309-.704.543-1.124.685-.476.16-1.014.157-2.09.15l-12.214-.08M8.5 12H27m-4.5 15.65h.013m-14.026 0H8.5m14.643 0c0 .359-.288.65-.643.65a.647.647 0 0 1-.643-.65c0-.359.288-.65.643-.65s.643.291.643.65Zm-14.013 0c0 .359-.288.65-.643.65a.646.646 0 0 1-.643-.65c0-.359.288-.65.643-.65s.643.291.643.65Z"
      />
    </svg>
  );
};
export default SvgShoppingCartLg;
