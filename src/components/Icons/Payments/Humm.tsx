import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgHumm = ({
  color = "currentColor",
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={20}
      fill="none"
      viewBox="0 0 60 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#FF6C00"
        d="M23.578 9.758c0-.927-.496-1.225-1.282-1.225-.29.004-.573.072-.832.2a1.9 1.9 0 0 0-.657.537v4.897h-2.474V3.707h2.468v3.806c.464-.533 1.378-1.115 2.675-1.115 1.762 0 2.564.973 2.564 2.371v5.398h-2.462zm8.26 4.409h2.468V6.582H31.84v4.9c-.17.228-.392.413-.648.54a1.9 1.9 0 0 1-.826.2c-.8 0-1.282-.315-1.282-1.225v-4.41h-2.466v5.398c0 1.397.784 2.37 2.546 2.37 1.298 0 2.195-.562 2.676-1.098zM54.57 6.398a3.4 3.4 0 0 0-1.502.362 3.3 3.3 0 0 0-1.173.988c-.321-.895-1.09-1.35-2.195-1.35-1.164 0-2.12.617-2.498 1.055a1 1 0 0 0-.05-.1v-.028h-.016c-.373-.664-1.084-.983-2.027-.983q-.43.001-.846.112a3.33 3.33 0 0 0-2.089 1.294c-.32-.895-1.09-1.35-2.195-1.35-1.217 0-2.21.674-2.547 1.114v-.926h-2.468v7.585h2.468v-4.9c.256-.315.716-.738 1.377-.738.753 0 1.026.44 1.026 1.02v4.614h2.467V9.27c.24-.314.717-.737 1.393-.737.593 0 .894.28.991.702v4.932h2.486V9.25c.26-.31.717-.714 1.358-.714.752 0 1.025.44 1.025 1.02v4.61h2.47V9.27c.241-.314.717-.737 1.394-.737.737 0 1.025.44 1.025 1.02v4.614H56.9V8.673c0-1.553-.905-2.275-2.33-2.275m-39.421 4.073v3.696H9.594a5.65 5.65 0 0 1-2.442-.555 5.5 5.5 0 0 1-1.945-1.55 5.4 5.4 0 0 1-1.05-2.23 5.3 5.3 0 0 1 .057-2.456c.103-.594-.383-1.545-.88-2.175.804.092 1.98.03 2.34-.328A5.6 5.6 0 0 1 9.5 3.287a5.62 5.62 0 0 1 3.878 1.458l.082.125-3.728 3.659a.21.21 0 0 0 0 .296.22.22 0 0 0 .304 0l5.34-5.233a4.97 4.97 0 0 1 1.272 3.482 5 5 0 0 1-1.5 3.393zM7.276 6.62a.8.8 0 0 0 .621-.301.76.76 0 0 0 .132-.667.76.76 0 0 0-.46-.507.8.8 0 0 0-.691.05h.014a.44.44 0 0 1 .387.22.414.414 0 0 1-.196.584.44.44 0 0 1-.444-.049.4.4 0 0 1-.138-.183v.017a.9.9 0 0 0 .063.374.77.77 0 0 0 .286.335.8.8 0 0 0 .426.127"
      />
    </svg>
  );
};
export default SvgHumm;