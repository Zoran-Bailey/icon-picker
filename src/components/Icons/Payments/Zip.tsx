import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgZip = ({
  color = "currentColor",
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={43}
      height={20}
      fill="none"
      viewBox="0 0 43 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#000"
        d="m4.14 11.554.313 2.575h10.95l-.358-2.95H9.94l-.044-.365 4.702-3.32-.314-2.58H3.333l.358 2.948h5.115l.045.369z"
      />
      <path fill="#A690F8" d="m15.556 4.913 1.12 9.216h10.959l-1.12-9.216z" />
      <path
        fill="#000"
        d="M39.127 8.23c-.253-2.07-1.863-3.326-4.052-3.317h-7.29l1.12 9.216h3.28l-.225-1.843h3.47c2.732 0 3.982-1.72 3.697-4.055m-4.05 1.472-3.43.004-.268-2.212 3.448.003c.81.01 1.225.471 1.292 1.102.042.407-.142 1.103-1.043 1.103M18.83 3.689c.576-.626.476-1.668-.225-2.328S16.868.674 16.292 1.3s-.477 1.668.224 2.327c.7.66 1.737.687 2.313.062"
      />
    </svg>
  );
};
export default SvgZip;
