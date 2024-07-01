import classNames from "classnames/bind";
// import styles from "./IconsPayments.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgAfterpayMonochrome = ({
  color = "currentColor",
  size = "lg",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={58}
      height={20}
      fill="none"
      viewBox="0 0 58 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#fff"
        d="M0 10C0 4.477 4.477 0 10 0h37.75c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 20 0 15.523 0 10"
      />
      <g clipPath="url(#a)">
        <path
          fill="#000"
          d="M47.7 0H10.05C4.5 0 0 4.477 0 10s4.5 10 10.05 10H47.7c5.55 0 10.05-4.477 10.05-10S53.25 0 47.7 0"
        />
        <path
          fill="#fff"
          d="M49.222 7.611 46.68 6.16c-.848-.484-1.906.125-1.906 1.098v.164c0 .09.048.173.127.217l.593.34a.247.247 0 0 0 .37-.214v-.388c0-.193.21-.313.377-.217l2.336 1.333a.25.25 0 0 1 0 .435l-2.336 1.333a.25.25 0 0 1-.376-.216v-.193c0-.974-1.058-1.583-1.906-1.099l-2.542 1.451a1.263 1.263 0 0 0 0 2.197l2.542 1.451c.848.484 1.906-.125 1.906-1.098v-.165a.25.25 0 0 0-.127-.217l-.593-.339a.247.247 0 0 0-.37.213v.389a.251.251 0 0 1-.377.217l-2.336-1.334a.25.25 0 0 1 0-.434l2.336-1.334a.251.251 0 0 1 .376.217v.193c0 .973 1.058 1.583 1.906 1.098l2.542-1.45a1.263 1.263 0 0 0 0-2.197m-8.288.24-2.96 6.08h-1.228l1.106-2.272-1.739-3.808h1.26l1.117 2.55 1.22-2.55zM11.362 10.01c0-.726-.53-1.235-1.18-1.235-.652 0-1.18.518-1.18 1.235 0 .716.528 1.234 1.18 1.234.65 0 1.18-.51 1.18-1.234m.008 2.158v-.561a1.74 1.74 0 0 1-1.37.63c-1.19 0-2.092-.95-2.092-2.227 0-1.278.937-2.236 2.118-2.236.555 0 1.023.242 1.344.621v-.544h1.068v4.317zm6.251-.958c-.373 0-.477-.138-.477-.5V8.792h.686V7.85h-.686V6.798h-1.093v1.053h-1.408v-.429c0-.363.138-.5.52-.5h.24v-.838h-.526c-.902 0-1.328.293-1.328 1.191v.576h-.607v.942h.607v3.375h1.094V8.793h1.408v2.115c0 .88.338 1.26 1.223 1.26h.564v-.958zm3.922-1.589c-.078-.56-.537-.898-1.075-.898s-.98.329-1.094.898zm-2.178.674c.078.639.538 1.001 1.12 1.001.46 0 .815-.216 1.023-.561h1.12c-.26.915-1.085 1.502-2.17 1.502-1.31 0-2.23-.915-2.23-2.219s.973-2.244 2.256-2.244c1.284 0 2.23.95 2.23 2.244 0 .095-.008.19-.026.276zm10.303-.285c0-.7-.53-1.235-1.18-1.235-.651 0-1.18.518-1.18 1.235 0 .716.529 1.234 1.18 1.234s1.18-.535 1.18-1.234m-3.436 3.92V7.851h1.067v.561c.32-.397.798-.638 1.37-.638 1.172 0 2.092.958 2.092 2.227 0 1.27-.937 2.236-2.117 2.236-.547 0-.998-.216-1.31-.578v2.271zm8.375-3.92c0-.726-.53-1.235-1.18-1.235-.652 0-1.18.518-1.18 1.235 0 .716.529 1.234 1.18 1.234s1.18-.51 1.18-1.234m.008 2.158v-.561a1.74 1.74 0 0 1-1.37.63c-1.19 0-2.092-.95-2.092-2.227 0-1.278.937-2.236 2.117-2.236.555 0 1.024.242 1.345.621v-.544h1.067v4.317zM24.308 8.274s.272-.5.937-.5c.285 0 .469.097.469.097v1.101s-.402-.246-.77-.197c-.369.05-.602.387-.601.838v2.556H23.24V7.852h1.067z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h57.75v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgAfterpayMonochrome;
