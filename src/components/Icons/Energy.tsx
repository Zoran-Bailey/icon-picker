import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgEnergy = ({
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
        fill={color}
        d="M10 22h-.75v.227l.126.189zm.75-4.341a.75.75 0 0 0-1.5 0zm4 0a.75.75 0 0 0-1.5 0zM14 22l.624.416.126-.189V22zM12.75 2a.75.75 0 0 0-1.5 0zm-1.5 1a.75.75 0 0 0 1.5 0zM3 12.75a.75.75 0 0 0 0-1.5zm-1-1.5a.75.75 0 0 0 0 1.5zm2.97-5.22a.75.75 0 0 0 1.06-1.06zm.46-1.66a.75.75 0 0 0-1.06 1.06zm12.54.6a.75.75 0 1 0 1.06 1.06zm1.66.46a.75.75 0 0 0-1.06-1.06zM22 12.75a.75.75 0 0 0 0-1.5zm-1-1.5a.75.75 0 0 0 0 1.5zM10.75 22v-4.341h-1.5V22zm2.5-4.341V22h1.5v-4.341zm4-5.659c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12zM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75zM6.75 12c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 5.25 12zM12 6.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25zM11.25 2v1h1.5V2zM3 11.25H2v1.5h1zm3.03-6.28-.6-.6-1.06 1.06.6.6zm13 1.06.6-.6-1.06-1.06-.6.6zM22 11.25h-1v1.5h1zM9.376 22.416c1.297 1.945 3.951 1.945 5.248 0l-1.248-.832c-.703 1.055-2.049 1.055-2.752 0z"
      />
    </svg>
  );
};
export default SvgEnergy;
