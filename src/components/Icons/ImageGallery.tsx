import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgImageGallery = ({
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
        d="M5.667 18H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 16.48 2 15.92 2 14.8V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 2 4.08 2 5.2 2h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 3.52 18 4.08 18 5.2v2.3M7.818 21.788l5.277-5.13c.317-.308.475-.462.658-.52.16-.05.333-.05.494 0 .183.058.341.212.658.52l5.242 5.096m-4.547-4.42 2.295-2.232c.317-.308.475-.462.658-.52.16-.05.334-.05.494 0 .183.058.341.212.658.52l2.077 2.077M9.2 22h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 20.48 22 19.92 22 18.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 8 19.92 8 18.8 8H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 9.52 6 10.08 6 11.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 22 8.08 22 9.2 22Zm3.2-9.333c0 .859-.716 1.555-1.6 1.555s-1.6-.696-1.6-1.555c0-.86.716-1.556 1.6-1.556s1.6.696 1.6 1.556Z"
      />
    </svg>
  );
};
export default SvgImageGallery;
