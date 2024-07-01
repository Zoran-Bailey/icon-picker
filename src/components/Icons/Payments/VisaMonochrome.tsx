import classNames from "classnames/bind";
// import styles from "./IconsPayments.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgVisaMonochrome = ({
  color = "currentColor",
  size = "lg",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39}
      height={20}
      fill="none"
      viewBox="0 0 39 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#000"
        d="M22.387 7.023c-.006.454.542.754 1.439 1.202 1.479.691 2.162 1.53 2.153 2.632-.02 2.01-1.77 3.31-4.465 3.31-1.15-.013-2.257-.247-2.856-.518l.36-2.168.33.153c.842.363 1.387.51 2.413.51.737 0 1.528-.297 1.535-.947.004-.423-.331-.727-1.33-1.201-.972-.464-2.26-1.24-2.245-2.633.014-1.883 1.8-3.196 4.332-3.196.994 0 1.79.21 2.298.407l-.348 2.1-.229-.113a4.6 4.6 0 0 0-1.92-.37c-1.003 0-1.467.43-1.467.832"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M30.945 4.344h1.98L35 14.025h-2.379s-.235-1.112-.312-1.451l-1.8-.002h-.005l-1.479-.002c-.099.262-.539 1.455-.539 1.455h-2.692l3.808-8.878c.27-.63.728-.803 1.343-.803m-.16 3.536-1.021 2.708h2.128l-.593-2.798-.174-.834c-.067.188-.16.436-.232.628-.066.178-.115.309-.108.296"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="M14.49 14.023h2.562l1.604-9.688h-2.563zm-4.661-3.074 2.51-6.607h2.716l-4.036 9.67-2.713.003L6.026 5.6a10.6 10.6 0 0 0-2.692-1.063l.032-.201H7.5c.557.021 1.007.205 1.163.818l.899 4.45z"
      />
    </svg>
  );
};
export default SvgVisaMonochrome;
