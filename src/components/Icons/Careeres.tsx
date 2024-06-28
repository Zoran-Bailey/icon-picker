import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgCareeres = ({
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
        d="M18 12.25c1.533 0 3 .533 4 1.333m-20 0c1-.8 2.467-1.333 4-1.333m10.59 8.25C15.426 19.599 13.752 19 12 19s-3.426.599-4.591 1.5M19.254 4.982a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536Zm-5.486 6a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536Zm-5.486-6a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536Z"
      />
    </svg>
  );
};
export default SvgCareeres;
