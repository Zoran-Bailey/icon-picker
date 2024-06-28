import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgMessage = ({
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
        d="M6.444 7.959H12M6.444 11.75h8.89m-8.89 6.5v2.531c0 .577 0 .866.122 1.014A.56.56 0 0 0 7 22c.194 0 .425-.18.888-.541l2.65-2.068c.542-.422.812-.633 1.114-.783a3.4 3.4 0 0 1 .846-.29c.332-.066.678-.066 1.372-.066h2.796c1.866 0 2.8 0 3.513-.355a3.3 3.3 0 0 0 1.457-1.42C22 15.782 22 14.87 22 13.05V7.2c0-1.82 0-2.731-.363-3.426a3.3 3.3 0 0 0-1.457-1.42C19.467 2 18.534 2 16.667 2H7.333c-1.867 0-2.8 0-3.513.354a3.3 3.3 0 0 0-1.457 1.42C2 4.47 2 5.38 2 7.202v6.717c0 1.007 0 1.511.114 1.925A3.29 3.29 0 0 0 4.47 18.14c.423.11.94.11 1.973.11Z"
      />
    </svg>
  );
};
export default SvgMessage;
