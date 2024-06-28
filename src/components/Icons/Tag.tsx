import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgTag = ({
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
        d="M9.466 9.466h.01M1 1l5 5m-3-.085v4.077c0 .446 0 .668.05.878q.068.28.219.527c.112.184.27.341.585.656l6.986 6.987c1.083 1.082 1.624 1.624 2.248 1.826.549.179 1.14.179 1.69 0 .623-.203 1.165-.744 2.247-1.826l2.015-2.015c1.082-1.082 1.624-1.624 1.826-2.248a2.73 2.73 0 0 0 0-1.689c-.203-.624-.744-1.165-1.826-2.248l-6.987-6.986c-.315-.315-.472-.473-.656-.585q-.246-.15-.527-.219C10.66 3 10.438 3 9.992 3H5.915c-1.02 0-1.53 0-1.92.199a1.82 1.82 0 0 0-.796.796C3 4.385 3 4.895 3 5.915Zm6.922 3.551a.456.456 0 1 1-.911 0 .456.456 0 0 1 .91 0Z"
      />
    </svg>
  );
};
export default SvgTag;
