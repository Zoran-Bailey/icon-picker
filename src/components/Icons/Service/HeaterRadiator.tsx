import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgHeaterRadiator = ({
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 2a2.9 2.9 0 0 0-.74.918C8.088 3.26 8 3.628 8 4s.088.74.26 1.083.423.655.74.917c.64.53 1 1.25 1 2s-.36 1.47-1 2m4-8a2.9 2.9 0 0 0-.74.918C12.088 3.26 12 3.628 12 4s.088.74.26 1.083.423.655.74.917c.64.53 1 1.25 1 2s-.36 1.47-1 2m4-8a2.9 2.9 0 0 0-.74.918C16.088 3.26 16 3.628 16 4s.088.74.26 1.083.423.655.74.917c.64.53 1 1.25 1 2s-.36 1.47-1 2M5 6H3.333c-.353 0-.692.144-.942.4A1.38 1.38 0 0 0 2 7.363v12.272c0 .362.14.709.39.965.25.255.59.399.943.399h17.334c.353 0 .692-.144.942-.4.25-.255.391-.602.391-.964V7.364c0-.362-.14-.709-.39-.965A1.32 1.32 0 0 0 20.667 6M5 21.5v1m14-1v1M4.875 10H5m-.125 3H5m4 4v-4m4 4v-4m4 4v-4"
      />
    </svg>
  );
};
export default SvgHeaterRadiator;
