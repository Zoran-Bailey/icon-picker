import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgPinterest = ({
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
          fill="#fff"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
        />
        <path
          fill="#E60019"
          d="M12 0C5.373 0 0 5.373 0 12c0 5.086 3.16 9.432 7.625 11.18-.109-.948-.198-2.41.04-3.447.216-.938 1.402-5.965 1.402-5.965s-.356-.721-.356-1.778c0-1.669.968-2.913 2.173-2.913 1.027 0 1.52.77 1.52 1.688 0 1.028-.65 2.568-.997 4-.286 1.195.603 2.173 1.778 2.173 2.133 0 3.773-2.252 3.773-5.491 0-2.874-2.064-4.88-5.017-4.88-3.418 0-5.422 2.559-5.422 5.206 0 1.027.395 2.133.888 2.736a.36.36 0 0 1 .08.345c-.09.376-.297 1.195-.336 1.363-.05.218-.178.267-.405.158-1.502-.7-2.44-2.884-2.44-4.651 0-3.783 2.746-7.26 7.931-7.26 4.158 0 7.398 2.963 7.398 6.934 0 4.138-2.608 7.466-6.223 7.466-1.215 0-2.36-.632-2.745-1.383l-.75 2.855c-.268 1.047-.998 2.35-1.492 3.15 1.126.346 2.31.534 3.555.534 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgPinterest;