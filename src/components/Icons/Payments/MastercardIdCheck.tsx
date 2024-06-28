import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgMastercardIdCheck = ({
  color = "currentColor",
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={67}
      height={20}
      fill="none"
      viewBox="0 0 67 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#000"
        d="M24.713 16.942h-.438v-5.107h.44zm3.34-5.107c.384-.005.766.056 1.13.18.318.108.61.282.856.51.237.225.422.5.541.805a3.04 3.04 0 0 1 0 2.119 2.25 2.25 0 0 1-.541.804c-.247.227-.538.4-.856.51a3.3 3.3 0 0 1-1.13.179h-1.836v-5.107zm-1.4.423v4.261h1.4a2.9 2.9 0 0 0 .97-.151c.263-.091.504-.237.707-.429.194-.188.342-.418.435-.672a2.7 2.7 0 0 0 0-1.758 1.8 1.8 0 0 0-.435-.673 1.95 1.95 0 0 0-.708-.428 2.9 2.9 0 0 0-.97-.15zm9.496-.481q.316 0 .625.073.297.07.566.209.26.135.477.331.214.192.364.436l-.365.25a1.8 1.8 0 0 0-.307-.362 1.94 1.94 0 0 0-.85-.449 2 2 0 0 0-.51-.058 2.2 2.2 0 0 0-.834.156 2 2 0 0 0-.672.446 2.1 2.1 0 0 0-.449.689 2.52 2.52 0 0 0 0 1.78c.102.257.255.491.45.689.19.193.419.344.67.444.266.107.55.161.835.159q.256 0 .507-.059a1.9 1.9 0 0 0 .85-.444q.177-.162.306-.365l.359.266q-.157.241-.371.431a2.35 2.35 0 0 1-1.032.53 2.76 2.76 0 0 1-1.64-.121 2.42 2.42 0 0 1-1.357-1.363 2.93 2.93 0 0 1 0-2.11 2.4 2.4 0 0 1 1.357-1.364 2.7 2.7 0 0 1 1.02-.194m3.523 2.327a1.3 1.3 0 0 1 .525-.494 1.5 1.5 0 0 1 .676-.154q.297-.003.578.096c.167.06.32.154.45.276q.194.185.29.436c.072.183.107.378.104.574v2.104h-.408v-1.977a1.4 1.4 0 0 0-.073-.466.9.9 0 0 0-.553-.571 1.3 1.3 0 0 0-.459-.077 1.2 1.2 0 0 0-.444.083 1 1 0 0 0-.36.232 1.1 1.1 0 0 0-.24.36c-.06.147-.09.304-.088.462v1.955h-.408V11.69h.408zm5.298-.648a1.48 1.48 0 0 1 1.125.49 1.7 1.7 0 0 1 .334.555c.082.226.125.465.125.705v.09q.001.045-.005.082h-2.833c.01.184.054.364.13.532q.105.226.286.396.177.162.403.246.237.085.488.084c.219.004.436-.04.636-.131.188-.09.36-.21.505-.358l.22.285q-.15.154-.33.273c-.208.14-.446.23-.694.267a3 3 0 0 1-.362.024 1.8 1.8 0 0 1-.682-.128 1.6 1.6 0 0 1-.89-.922 2 2 0 0 1-.125-.719c-.003-.243.04-.485.127-.712.079-.208.198-.4.35-.562a1.6 1.6 0 0 1 .532-.367 1.7 1.7 0 0 1 .662-.13m-.007.367a1.18 1.18 0 0 0-.848.338q-.166.164-.264.377-.106.23-.131.481h2.417a1.5 1.5 0 0 0-.117-.486 1.2 1.2 0 0 0-.253-.377 1.1 1.1 0 0 0-.802-.333m4.09-.367c.24-.003.478.043.7.136.21.09.398.225.548.396l-.267.281a1.4 1.4 0 0 0-.443-.312 1.3 1.3 0 0 0-.548-.112 1.27 1.27 0 0 0-1.205.83c-.13.358-.13.749 0 1.106q.094.245.276.436a1.28 1.28 0 0 0 .929.39c.191.003.38-.037.555-.116a1.5 1.5 0 0 0 .447-.31l.256.284c-.152.171-.34.307-.55.397-.221.093-.46.14-.7.136a1.8 1.8 0 0 1-.699-.134 1.7 1.7 0 0 1-.547-.372 1.7 1.7 0 0 1-.357-.56 2 2 0 0 1 0-1.405c.08-.21.201-.4.357-.562.155-.16.342-.286.547-.373a1.8 1.8 0 0 1 .7-.134m2.623 1.502h.55l1.421-1.448h.518l-1.609 1.621 1.638 1.812h-.52l-1.448-1.608h-.55v1.608h-.408v-5.252h.408zm-22.046-4.936V7.831a1.29 1.29 0 0 0-.815-1.3 1.3 1.3 0 0 0-.538-.088 1.33 1.33 0 0 0-1.21.622 1.25 1.25 0 0 0-1.135-.622 1.13 1.13 0 0 0-1.008.52V6.53h-.747v3.493h.754V8.088a.81.81 0 0 1 .842-.93c.497 0 .75.328.75.92v1.944h.753V8.086a.817.817 0 0 1 .843-.93c.511 0 .757.328.757.92v1.944zm11.182-3.493H39.59v-1.06h-.758v1.06h-.7v.695h.7v1.592c0 .81.309 1.293 1.194 1.293.332 0 .656-.094.936-.27l-.217-.651a1.4 1.4 0 0 1-.662.197c-.374 0-.495-.233-.495-.585V7.225h1.224zm6.382-.088a1.01 1.01 0 0 0-.905.511v-.423h-.742v3.493h.75v-1.96c0-.576.245-.898.733-.898q.242-.003.466.088l.23-.716a1.6 1.6 0 0 0-.532-.095m-9.649.365a2.55 2.55 0 0 0-1.403-.365c-.87 0-1.432.424-1.432 1.118 0 .57.417.922 1.188 1.03l.35.052c.407.058.605.168.605.365 0 .27-.273.423-.786.423a1.8 1.8 0 0 1-1.143-.365l-.353.592c.434.308.957.467 1.49.453.99 0 1.57-.475 1.57-1.14 0-.614-.454-.935-1.203-1.047l-.35-.051c-.323-.045-.583-.11-.583-.343 0-.257.244-.407.654-.407.378.006.747.108 1.073.298zm20.047-.365a1.01 1.01 0 0 0-.907.511v-.423h-.741v3.493h.749v-1.96c0-.576.244-.898.734-.898.16-.002.318.028.466.088l.233-.716a1.6 1.6 0 0 0-.532-.095m-9.642 1.834a1.75 1.75 0 0 0 1.835 1.834c.45.023.893-.126 1.238-.416l-.36-.614a1.5 1.5 0 0 1-.9.314 1.124 1.124 0 0 1-1.038-1.118 1.12 1.12 0 0 1 1.039-1.118c.326.004.642.115.899.315l.36-.615a1.8 1.8 0 0 0-1.238-.416 1.76 1.76 0 0 0-1.72 1.118 1.75 1.75 0 0 0-.115.716m7.008-1.745h-.749v.423a1.3 1.3 0 0 0-1.086-.511 1.844 1.844 0 0 0-1.72 1.834 1.836 1.836 0 0 0 1.72 1.834 1.3 1.3 0 0 0 1.086-.511v.425h.75zM52.18 8.277a1.04 1.04 0 0 1 .694-.904 1.044 1.044 0 0 1 1.372.805 1.038 1.038 0 0 1-1.024 1.216 1.044 1.044 0 0 1-1.042-1.117m-9.03-1.834A1.84 1.84 0 0 0 41.434 8.3a1.834 1.834 0 0 0 1.765 1.81 2.07 2.07 0 0 0 1.41-.489l-.367-.563a1.62 1.62 0 0 1-1 .366.96.96 0 0 1-1.03-.855h2.555q.012-.146.013-.291c-.007-1.09-.667-1.834-1.632-1.834m-.015.68a.863.863 0 0 1 .87.847h-1.787a.89.89 0 0 1 .914-.847m18.773-2h-.747v1.827a1.3 1.3 0 0 0-1.086-.51 1.844 1.844 0 0 0-1.72 1.833 1.836 1.836 0 0 0 1.72 1.834 1.3 1.3 0 0 0 1.086-.51v.424h.747zm.874 4.578a.22.22 0 0 1 .205.135.2.2 0 0 1 .017.087.2.2 0 0 1-.017.085.23.23 0 0 1-.118.12.2.2 0 0 1-.087.016.22.22 0 0 1-.158-.066.2.2 0 0 1-.048-.07.2.2 0 0 1-.017-.085q0-.046.017-.087a.2.2 0 0 1 .048-.07.2.2 0 0 1 .07-.047.2.2 0 0 1 .088-.018m0 .395a.2.2 0 0 0 .067-.014.2.2 0 0 0 .089-.092.174.174 0 0 0-.09-.227.2.2 0 0 0-.133 0 .175.175 0 0 0 0 .32.2.2 0 0 0 .067.013m.013-.277a.1.1 0 0 1 .058.017.06.06 0 0 1 .022.049.05.05 0 0 1-.017.042.1.1 0 0 1-.048.02l.066.079h-.05l-.063-.079h-.02v.079h-.042V9.82zm-.05.039v.054h.049q.015 0 .028-.007l.008-.01.002-.01a.03.03 0 0 0-.01-.022.1.1 0 0 0-.028-.005zm-3.623-1.581a1.04 1.04 0 0 1 1.29-.934 1.043 1.043 0 0 1 .707 1.424 1.04 1.04 0 0 1-1.371.542 1.04 1.04 0 0 1-.626-1.032m-25.27-1.745h-.749v.423a1.3 1.3 0 0 0-1.086-.511 1.843 1.843 0 0 0-1.72 1.834 1.836 1.836 0 0 0 1.72 1.834 1.3 1.3 0 0 0 1.086-.51v.424h.75zm-2.785 1.745a1.04 1.04 0 0 1 1.288-.934 1.043 1.043 0 0 1 .709 1.424 1.04 1.04 0 0 1-1.371.542 1.04 1.04 0 0 1-.626-1.032M54.72 16.77h-.063v.174h-.033v-.174h-.066v-.031h.162zm.248.174h-.034v-.166l-.058.147h-.034l-.058-.146v.165h-.032v-.203h.05l.058.144.058-.144h.05z"
      />
      <path fill="#FF5F00" d="M10.104 4.123h4.525v8.258h-4.525z" />
      <path
        fill="#EB001B"
        d="M10.392 8.252a5.27 5.27 0 0 1 1.974-4.13A5.1 5.1 0 0 0 9.17 2.999 5.27 5.27 0 0 0 5.51 4.57a5.247 5.247 0 0 0 0 7.361 5.27 5.27 0 0 0 3.66 1.572 5.1 5.1 0 0 0 3.196-1.123 5.28 5.28 0 0 1-1.974-4.13"
      />
      <path
        fill="#F79E1B"
        d="M20.241 11.505v-.167h.067v-.035h-.171v.035h.067v.167zm.332 0v-.202h-.053l-.059.139-.058-.14h-.053v.203h.038v-.152l.058.133h.038l.058-.134v.154zm.161-3.253a5.2 5.2 0 0 1-1.496 3.695 5.22 5.22 0 0 1-3.676 1.557 5.1 5.1 0 0 1-3.196-1.123 5.31 5.31 0 0 0 1.976-4.13 5.3 5.3 0 0 0-1.976-4.129 5.1 5.1 0 0 1 3.196-1.123 5.23 5.23 0 0 1 3.676 1.557 5.2 5.2 0 0 1 1.496 3.694"
      />
    </svg>
  );
};
export default SvgMastercardIdCheck;
