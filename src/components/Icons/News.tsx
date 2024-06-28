import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgNews = ({
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
        d="M18.667 22V4.222A2.22 2.22 0 0 0 16.444 2H4.222A2.22 2.22 0 0 0 2 4.222v15.556C2 21.005 2.995 22 4.222 22h15.556A2.22 2.22 0 0 0 22 19.778v-10a2.22 2.22 0 0 0-2.222-2.222h-.559M6 13.5h9m.001 4H5.997M12 6.498h3.001M12 9.499h3.001m-8.204 0H8.2c.28 0 .42 0 .527-.054a.5.5 0 0 0 .218-.219C9 9.12 9 8.98 9 8.7V7.298c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218c-.107-.055-.247-.055-.527-.055H6.797c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218c-.055.107-.055.247-.055.527V8.7c0 .28 0 .42.055.527a.5.5 0 0 0 .218.219c.107.054.247.054.527.054Z"
      />
    </svg>
  );
};
export default SvgNews;
