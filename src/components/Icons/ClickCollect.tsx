import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgClickCollect = ({
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
        d="M12 21H6.437c-1.195 0-1.792 0-2.235-.238a2 2 0 0 1-.88-.944c-.205-.459-.162-1.055-.077-2.246l.649-9.086c.037-.524.056-.785.17-.984a1 1 0 0 1 .432-.403C4.702 7 4.965 7 5.49 7h13.033c.52 0 .781 0 .986.098a1 1 0 0 1 .432.399c.114.197.135.456.177.975L20.4 12M9 7V4.857C9 3.28 10.343 2 12 2s3 1.28 3 2.857V7m6 15-2.305-2.305M17 22l-1.5-5.5L21 18l-2.5 1.5z"
      />
    </svg>
  );
};
export default SvgClickCollect;