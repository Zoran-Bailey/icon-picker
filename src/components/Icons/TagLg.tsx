import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgTagLg = ({
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
        d="m20.973 4.275 5.401 2.998c1.05.583 1.574.874 1.846 1.299a2 2 0 0 1 .308 1.257c-.045.503-.375 1.003-1.037 2.005l-.131.2M6 6 3 3m22.5 12.5-10 9.924m-4-14.24h.013m17.04 9.451-7.918 7.919a1.526 1.526 0 0 1-2.157 0L5.226 15.302a.73.73 0 0 1-.224-.59l1.201-7.816a.754.754 0 0 1 .693-.693l7.816-1.2a.73.73 0 0 1 .59.223l13.252 13.252a1.527 1.527 0 0 1 0 2.157Zm-16.41-9.45c0 .358-.288.65-.643.65a.647.647 0 0 1-.643-.65c0-.36.288-.65.643-.65s.643.29.643.65Z"
      />
    </svg>
  );
};
export default SvgTagLg;
