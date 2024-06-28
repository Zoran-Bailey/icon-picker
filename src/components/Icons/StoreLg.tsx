import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgStoreLg = ({
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.429 7.292V5H3v22h26V7.75h-4.179M24.357 27V16.917H7.643L7.668 27m5.546 0V16.917M18.786 27V16.917M24.357 5v7.333H7.643V8.694q.001-.027.025-.039C13.162 6.245 18.346 5 24.358 5"
      />
    </svg>
  );
};
export default SvgStoreLg;
