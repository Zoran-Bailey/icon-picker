import classNames from "classnames/bind";
// import styles from "./IconsSocial.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgLinkedin = ({
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
        fill="#0A66C2"
        d="M21.376 1H2.624A1.624 1.624 0 0 0 1 2.624v18.752A1.624 1.624 0 0 0 2.624 23h18.752A1.624 1.624 0 0 0 23 21.376V2.624A1.624 1.624 0 0 0 21.376 1M7.557 19.741H4.25V9.235h3.307zM5.901 7.78a1.899 1.899 0 1 1 1.91-1.898A1.87 1.87 0 0 1 5.9 7.78m13.85 11.97h-3.306v-5.74c0-1.692-.72-2.215-1.649-2.215-.98 0-1.943.74-1.943 2.258v5.697H9.543V9.242h3.181v1.456h.043c.32-.646 1.438-1.75 3.144-1.75 1.846 0 3.84 1.095 3.84 4.303z"
      />
    </svg>
  );
};
export default SvgLinkedin;
