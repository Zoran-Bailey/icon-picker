import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgClickCollectNotAvailable = ({
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
        d="M12 22H6.42c-1.189 0-1.784 0-2.226-.236a2 2 0 0 1-.879-.94c-.206-.457-.167-1.05-.087-2.237L3.9 8.494c.036-.527.053-.79.167-.989a1 1 0 0 1 .432-.405c.207-.1.47-.1.998-.1h13.026c.52 0 .781 0 .986.098a1 1 0 0 1 .432.399c.114.197.135.456.177.975L20.4 12M9 7V4.857C9 3.28 10.343 2 12 2s3 1.28 3 2.857V7m1 9 2.5 2.5m0 0L21 21m-2.5-2.5L21 16m-2.5 2.5L16 21"
      />
    </svg>
  );
};
export default SvgClickCollectNotAvailable;
