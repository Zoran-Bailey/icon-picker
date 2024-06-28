import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgCookerHood = ({
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
        d="M3.997 19.176v1m4.001-.173v.944M12 19.177v1m4.002-.117v.944m4.001-1.828v1m-2-6.675h-2.001m0-10.505v3.001l2.879 4.8m-10.883-7.8v3l-2.879 4.8M8.5 6h7m4.003 10.002H4.497a1.5 1.5 0 0 1-1.5-1.501v-1.5a2 2 0 0 1 2-2.001h14.006a2 2 0 0 1 2 2v1.501a1.5 1.5 0 0 1-1.5 1.5Z"
      />
    </svg>
  );
};
export default SvgCookerHood;
