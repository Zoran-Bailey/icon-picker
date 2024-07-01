import classNames from "classnames/bind";
// import styles from "./IconsSocial.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgYoutube = ({
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
      <g clipPath="url(#a)">
        <path
          fill="#FF0302"
          d="M23.522 6.185A3.02 3.02 0 0 0 21.4 4.05c-1.876-.505-9.376-.505-9.376-.505s-7.5 0-9.376.505A3.02 3.02 0 0 0 .526 6.185C.024 8.07.024 12 .024 12s0 3.93.502 5.815a3.02 3.02 0 0 0 2.122 2.135c1.876.505 9.376.505 9.376.505s7.5 0 9.376-.505a3.02 3.02 0 0 0 2.122-2.135c.502-1.885.502-5.815.502-5.815s0-3.93-.502-5.815"
        />
        <path fill="#FEFEFE" d="M9.57 15.569V8.43L15.841 12z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgYoutube;
