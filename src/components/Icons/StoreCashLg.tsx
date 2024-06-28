import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgStoreCashLg = ({
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
        d="M21.334 10.073V5.516c0-1.083 0-1.624-.234-1.957a1.34 1.34 0 0 0-.876-.547c-.407-.068-.91.159-1.918.613L6.48 8.955c-.898.405-1.347.608-1.676.922-.29.277-.512.616-.649.99C4 11.29 4 11.773 4 12.739M16.5 27h7.234c1.493 0 2.24 0 2.81-.284a2.64 2.64 0 0 0 1.166-1.138c.29-.557.29-1.286.29-2.745V14.24c0-1.459 0-2.188-.29-2.745a2.64 2.64 0 0 0-1.166-1.138c-.57-.284-1.317-.284-2.81-.284H8.267c-1.493 0-2.24 0-2.81.284a2.64 2.64 0 0 0-1.166 1.138c-.29.557-.29 1.286-.29 2.745V16M19 16l5 2v1l-5 2m-7.001 3.073c-.098.849-1.85 1.526-3.997 1.526-2.154 0-3.909-.681-3.997-1.533m7.994-3.096c-.098.85-1.85 1.526-3.997 1.526-2.154 0-3.909-.68-3.997-1.533M4 20.597c0-.885 1.793-1.601 4.002-1.601 2.21 0 4 .717 4.002 1.6V27.4c-.001.883-1.792 1.6-4.002 1.6s-4-.717-4.002-1.6z"
      />
    </svg>
  );
};
export default SvgStoreCashLg;
