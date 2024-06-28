import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgAudio = ({
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 2 6.08 2 7.2 2h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 3.52 20 4.08 20 5.2v13.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 22 17.92 22 16.8 22H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 20.48 4 19.92 4 18.8z"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.182 11.318a4.5 4.5 0 1 1-6.364 6.364 4.5 4.5 0 0 1 6.364-6.364"
        clipRule="evenodd"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.06 13.44a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12m0-8.5a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAudio;
