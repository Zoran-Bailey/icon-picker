import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgCeilingFans = ({
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
        d="m9 2 .33.658c.113.228.17.342.235.441A2 2 0 0 0 11 3.986c.118.014.245.014.5.014s.382 0 .5-.014a2 2 0 0 0 1.435-.887c.065-.099.122-.213.236-.44L14 2m-2.5 11V4.5m0 8.5c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C9 14.803 9 15.035 9 15.5m2.5-2.5c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.675.038 1.14M10 18H4.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C1 16.48 1 15.92 1 14.8V14l8 1.75m4 .25h5.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 17.52 22 18.88 22 20l-8-1.5V20c0 3-5 3-5 0v-1.5"
      />
    </svg>
  );
};
export default SvgCeilingFans;
