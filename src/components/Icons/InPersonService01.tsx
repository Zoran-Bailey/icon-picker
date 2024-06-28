import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgInPersonService01 = ({
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
        d="M10 20H3v-.758a6.4 6.4 0 0 1 .8-3.04 6.25 6.25 0 0 1 2.136-2.266A6.08 6.08 0 0 1 10 13.057m6 9.826v-3.887c-4.509-1.728-3.117-7.132 0-7.996v3a2 2 0 1 0 4 0v-3c3.116.864 4.509 6.268 0 7.996v3.887M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
    </svg>
  );
};
export default SvgInPersonService01;
