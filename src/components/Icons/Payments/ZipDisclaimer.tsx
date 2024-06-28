import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgZipDisclaimer = ({
  color = "currentColor",
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={20}
      fill="none"
      viewBox="0 0 44 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#000"
        d="M37.901 5.183h1.712V6.76h.675V5.183H42v-.605h-1.712V3h-.675v1.578h-1.712zm0 2.562H42v-.609h-4.099z"
      />
      <path
        fill="#1A0826"
        d="m2.798 14.542.308 2.456h10.83l-.355-2.815H8.533l-.047-.348 4.655-3.169-.31-2.463H2l.354 2.817h5.06l.044.352z"
      />
      <path fill="#AA8FFF" d="M14.078 8.202 15.187 17h10.835l-1.108-8.797z" />
      <path
        fill="#1A0826"
        d="M37.385 11.37c-.253-1.974-1.843-3.176-4.006-3.167h-7.21L27.275 17h3.243l-.222-1.759h3.433c2.699 0 3.934-1.642 3.656-3.87m-4.005 1.405h-3.39l-.266-2.111h3.409a1.2 1.2 0 0 1 .87.263q.18.15.287.356c.07.136.112.285.122.437a.9.9 0 0 1-.252.772.95.95 0 0 1-.779.28zM17.384 5.733a1.56 1.56 0 0 0-.211-2.221 1.65 1.65 0 0 0-1.13-.494 1.65 1.65 0 0 0-1.16.425 1.563 1.563 0 0 0 .213 2.227 1.652 1.652 0 0 0 2.288.066z"
      />
    </svg>
  );
};
export default SvgZipDisclaimer;
