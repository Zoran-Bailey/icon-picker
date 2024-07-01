import classNames from "classnames/bind";
// import styles from "./IconsPayments.module.css";
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgPaypalMonochrome = ({
  color = "currentColor",
  size = "lg",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={20}
      fill="none"
      viewBox="0 0 64 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#8C8C8C"
        d="m57.758 5.416-1.348 8.468a.22.22 0 0 0 .125.232q.043.02.09.019h1.596a.235.235 0 0 0 .234-.198l1.348-8.468a.22.22 0 0 0-.124-.232.2.2 0 0 0-.092-.019h-1.595a.23.23 0 0 0-.234.198m-1.703 2.471H54.54a.235.235 0 0 0-.234.198l-.05.312S53.081 7.122 51 7.983c-1.194.494-1.767 1.512-2.011 2.259 0 0-.774 2.268.976 3.517 0 0 1.624 1.201 3.451-.074l-.031.2a.217.217 0 0 0 .215.25h1.515a.233.233 0 0 0 .234-.198l.922-5.799a.214.214 0 0 0-.125-.232.2.2 0 0 0-.092-.019m-2.227 3.205a1.68 1.68 0 0 1-.576 1.04 1.7 1.7 0 0 1-1.124.404 1.6 1.6 0 0 1-.476-.07 1.33 1.33 0 0 1-.919-1.505 1.7 1.7 0 0 1 .577-1.04c.313-.266.712-.41 1.123-.405q.243-.002.476.07c.657.207 1.028.83.92 1.506zm-8.081.16c.82 0 1.614-.291 2.238-.821a3.4 3.4 0 0 0 1.16-2.069c.266-1.677-1.054-3.141-2.925-3.141h-3.015a.235.235 0 0 0-.234.198l-1.348 8.468a.22.22 0 0 0 .124.23q.045.02.092.02h1.596a.235.235 0 0 0 .234-.198l.396-2.486a.23.23 0 0 1 .234-.199zm1.335-2.966c-.099.62-.582 1.076-1.506 1.076h-1.181l.358-2.255h1.16c.956.002 1.267.561 1.169 1.18z"
      />
      <path
        fill="#4E4E4E"
        d="m39.805 8.031-1.826 3.059-.926-3.036a.23.23 0 0 0-.226-.167H35.18a.18.18 0 0 0-.178.15.2.2 0 0 0 .009.083l1.66 5.114-1.501 2.41a.174.174 0 0 0 .15.268h1.775a.3.3 0 0 0 .252-.14l4.637-7.615a.17.17 0 0 0 .004-.178.18.18 0 0 0-.156-.089H40.06a.3.3 0 0 0-.254.141m-5.56-.144h-1.514a.235.235 0 0 0-.235.198l-.049.312s-1.176-1.275-3.257-.413c-1.194.493-1.767 1.512-2.01 2.258 0 0-.775 2.269.976 3.517 0 0 1.623 1.201 3.45-.074l-.03.2a.215.215 0 0 0 .124.23q.043.02.091.02h1.514a.235.235 0 0 0 .234-.198l.922-5.799a.22.22 0 0 0-.124-.23.2.2 0 0 0-.091-.02m-2.227 3.206c-.06.404-.264.774-.576 1.038-.313.266-.712.41-1.123.405a1.6 1.6 0 0 1-.475-.069 1.33 1.33 0 0 1-.919-1.507 1.704 1.704 0 0 1 1.706-1.444c.16-.001.322.022.476.07.65.207 1.02.83.913 1.507zm-8.08.16c.819 0 1.611-.292 2.236-.823a3.4 3.4 0 0 0 1.16-2.068c.265-1.677-1.056-3.141-2.926-3.141h-3.015a.235.235 0 0 0-.234.197l-1.344 8.466a.22.22 0 0 0 .124.23.2.2 0 0 0 .092.021h1.595a.235.235 0 0 0 .234-.198l.395-2.487a.23.23 0 0 1 .235-.198zm1.335-2.967c-.099.62-.582 1.076-1.506 1.076h-1.181l.358-2.255h1.16c.956.002 1.267.562 1.169 1.18z"
      />
      <path
        fill="#5E5E5E"
        d="M13.703 5.939c.036-1.884-1.518-3.33-3.655-3.33h-4.42a.43.43 0 0 0-.426.366L3.43 14.04a.35.35 0 0 0 .347.406h2.618l-.409 2.562a.35.35 0 0 0 .347.406h2.133a.4.4 0 0 0 .273-.104c.078-.067.09-.16.107-.26l.626-3.685a.54.54 0 0 1 .146-.3.35.35 0 0 1 .25-.104h1.305c2.092 0 3.867-1.487 4.192-3.556.23-1.468-.4-2.804-1.663-3.466"
      />
      <path
        fill="#8C8C8C"
        d="M6.963 10.365 6.31 14.5l-.41 2.594a.35.35 0 0 0 .347.406h2.258a.43.43 0 0 0 .426-.365l.595-3.77A.43.43 0 0 1 9.954 13h1.329a4.25 4.25 0 0 0 4.192-3.595c.23-1.468-.509-2.804-1.772-3.466a4 4 0 0 1-.041.467A4.25 4.25 0 0 1 9.469 10H7.39a.43.43 0 0 0-.426.365"
      />
      <path
        fill="#4E4E4E"
        d="M6.31 14.5H3.685a.35.35 0 0 1-.346-.406l1.77-11.23a.43.43 0 0 1 .427-.364h4.514c2.137 0 3.69 1.555 3.654 3.439a3.94 3.94 0 0 0-1.84-.439H8.1a.43.43 0 0 0-.428.365l-.71 4.5z"
      />
    </svg>
  );
};
export default SvgPaypalMonochrome;
