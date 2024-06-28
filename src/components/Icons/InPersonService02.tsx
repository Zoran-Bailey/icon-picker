import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgInPersonService02 = ({
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
        d="M10 20H3v-.758a6.4 6.4 0 0 1 .8-3.04 6.25 6.25 0 0 1 2.136-2.266A6.08 6.08 0 0 1 10 13.057M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10.067 11.214-.444 1.245a.845.845 0 0 1-.78.541h-.686a.83.83 0 0 1-.78-.541l-.444-1.245-.866-.5-1.262.247a.83.83 0 0 1-.837-.415l-.336-.592a.85.85 0 0 1 .067-.956L14 18v-1l-.817-.998a.85.85 0 0 1-.067-.956l.335-.592a.84.84 0 0 1 .838-.415l1.278.247.866-.5.428-1.245A.845.845 0 0 1 17.64 12h.704a.83.83 0 0 1 .779.541l.444 1.245.866.5 1.262-.247a.83.83 0 0 1 .838.415l.335.592a.85.85 0 0 1-.067.956L22 17v1l.816.998a.85.85 0 0 1 .068.956l-.336.592a.84.84 0 0 1-.837.415l-1.279-.247zm-.924-3.564c0 .359-.288.65-.643.65a.647.647 0 0 1-.643-.65c0-.36.288-.65.643-.65s.643.29.643.65Z"
      />
    </svg>
  );
};
export default SvgInPersonService02;
