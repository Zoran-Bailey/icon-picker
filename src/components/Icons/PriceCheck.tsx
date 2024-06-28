import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgPriceCheck = ({
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
        d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      />
      <path
        fill={color}
        d="M11.455 15.914v1.066c0 .707-.919.682-.919 0V15.9c-.888-.1-1.614-.44-2.192-1.01-.563-.569-.844-1.51-.844-1.934 0-.956 1.377-1.012 1.377 0 0 .488.223.853.637 1.209s.933.526 1.556.526c1.229 0 1.925-.626 2.058-1.436.074-.967-.681-1.536-1.733-1.75l-1.318-.312q-2.488-.62-2.488-2.56c0-.74.281-1.366.859-1.864a3.6 3.6 0 0 1 2.088-.867V4.98c0-.64.919-.64.919 0v.936c1.614.213 2.875 1.223 2.73 2.603-.038.357-.186.67-.701.67-.148 0-.612-.11-.612-.57 0-1.22-.87-1.48-1.995-1.48-.518 0-.963.142-1.348.413-.37.27-.563.625-.563 1.066 0 .683.49 1.138 1.452 1.366l1.333.313c1.94.469 2.918 1.536 2.725 3.071-.178 1.366-1.303 2.418-3.021 2.546"
      />
    </svg>
  );
};
export default SvgPriceCheck;
