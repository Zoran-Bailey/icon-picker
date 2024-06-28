import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgTumblr = ({
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
        fill="#001935"
        d="M14.47 23c-3.176 0-5.558-1.696-5.558-5.775v-6.508H6v-3.53c3.176-.87 4.5-3.712 4.677-6.187h3.308v5.592H18v4.125h-4.015V16.4c0 1.696.838 2.292 2.162 2.292H18V23z"
      />
    </svg>
  );
};
export default SvgTumblr;
