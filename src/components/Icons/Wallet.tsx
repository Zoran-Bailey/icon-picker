import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgWallet = ({
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
        d="M16 7V3.5c0-.831 0-1.247-.175-1.502a1 1 0 0 0-.657-.42c-.306-.053-.683.121-1.438.47L4.858 6.142c-.673.31-1.01.466-1.257.707a2 2 0 0 0-.486.76C3 7.936 3 8.307 3 9.049V14m13.5-.5h.01M3 10.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 20 5.08 20 6.2 20h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 18.48 21 17.92 21 16.8v-6.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 7 18.92 7 17.8 7H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 8.52 3 9.08 3 10.2Zm14 3.3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
    </svg>
  );
};
export default SvgWallet;
