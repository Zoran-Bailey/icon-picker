import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgShield = ({
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
        d="M11.302 21.615c.221.129.332.194.488.227.122.026.298.026.42 0 .156-.033.267-.098.488-.227C14.646 20.478 20 16.908 20 12V7.218c0-.8 0-1.2-.13-1.543a2 2 0 0 0-.548-.79c-.275-.243-.65-.383-1.398-.664l-5.362-2.01c-.208-.078-.312-.117-.419-.133a1 1 0 0 0-.286 0c-.107.016-.21.055-.419.133L6.076 4.22c-.748.281-1.122.421-1.398.665a2 2 0 0 0-.547.789C4 6.018 4 6.418 4 7.218V12c0 4.908 5.354 8.478 7.302 9.615Z"
      />
    </svg>
  );
};
export default SvgShield;