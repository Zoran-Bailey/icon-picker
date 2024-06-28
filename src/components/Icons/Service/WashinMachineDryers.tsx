import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgWashinMachineDryers = ({
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
        d="M20.78 8H3m13-2.5h2m-9.464 11a1.91 1.91 0 0 1 .584-2.536l.001-.001a1.91 1.91 0 0 1 2.193.037l1.372.999c.65.473 1.527.488 2.193.037l.001-.001a1.91 1.91 0 0 0 .584-2.536M5 21h13.779a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Zm9.828-9.328a4 4 0 1 1-5.657 5.656 4 4 0 0 1 5.657-5.656Z"
      />
    </svg>
  );
};
export default SvgWashinMachineDryers;
