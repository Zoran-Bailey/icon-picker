import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgShopPayMonochrome = ({
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
        fill="#000"
        d="M16.816 8.155c-.422-.889-1.222-1.463-2.428-1.463a2.41 2.41 0 0 0-1.899.98l-.044.054V4.243a.076.076 0 0 0-.075-.076h-1.705a.076.076 0 0 0-.075.076v9.99a.075.075 0 0 0 .075.075h1.826a.076.076 0 0 0 .075-.074v-4.26c0-.828.55-1.415 1.43-1.415.963 0 1.206.795 1.206 1.605v4.07a.075.075 0 0 0 .074.074h1.822a.075.075 0 0 0 .076-.074V9.92c0-.147 0-.292-.02-.433a3.8 3.8 0 0 0-.338-1.333M7.699 9.636s-.93-.22-1.272-.308-.94-.276-.94-.73.482-.6.972-.6 1.034.12 1.076.665a.08.08 0 0 0 .079.071l1.8-.006a.077.077 0 0 0 .076-.083C9.38 6.9 7.854 6.277 6.448 6.277c-1.668 0-2.888 1.104-2.888 2.32 0 .89.25 1.723 2.218 2.303.345.1.814.232 1.224.346.492.138.757.346.757.675 0 .38-.55.646-1.09.646-.782 0-1.338-.292-1.383-.815a.08.08 0 0 0-.078-.069l-1.796.009a.08.08 0 0 0-.056.024.08.08 0 0 0-.022.057C3.416 13.42 5 14.307 6.477 14.307c2.2 0 3.194-1.242 3.194-2.405.002-.547-.123-1.792-1.972-2.266M30.853 6.69c-.915 0-1.68.507-2.174 1.12V6.76a.074.074 0 0 0-.073-.074h-1.708a.074.074 0 0 0-.074.074v9.798a.075.075 0 0 0 .074.073h1.828a.073.073 0 0 0 .072-.073v-3.22h.028c.29.443 1.083.976 2.12.976 1.95 0 3.575-1.623 3.575-3.815.001-2.105-1.616-3.81-3.669-3.81m-.17 5.758a1.93 1.93 0 0 1-1.823-1.165 1.95 1.95 0 0 1 .387-2.135 1.936 1.936 0 0 1 3.326 1.351 1.93 1.93 0 0 1-.542 1.369 1.9 1.9 0 0 1-1.348.58m-9.265-6.188c-1.704 0-2.554.58-3.236 1.046l-.02.014a.17.17 0 0 0-.051.225l.674 1.164a.17.17 0 0 0 .257.046l.053-.044c.35-.296.913-.69 2.274-.798.758-.06 1.412.138 1.895.59.53.492.848 1.285.848 2.123 0 1.542-.904 2.51-2.358 2.53-1.197-.007-2.002-.634-2.002-1.56 0-.491.222-.811.653-1.131a.17.17 0 0 0 .051-.216L19.851 9.1a.18.18 0 0 0-.107-.085.17.17 0 0 0-.137.018c-.68.404-1.512 1.144-1.467 2.565.055 1.81 1.554 3.19 3.502 3.247h.23c2.316-.076 3.988-1.8 3.988-4.14 0-2.147-1.56-4.446-4.443-4.446m20.304 1.104h-1.16a.104.104 0 0 0-.103.103V9.91q0 .043.03.073.031.03.073.03h1.16c.707 0 1.228-.56 1.228-1.325 0-.766-.521-1.325-1.228-1.325m3.565 4.323c0 .355.299.552.818.552.707 0 1.125-.383 1.125-1.064v-.196l-1.059.056c-.558.027-.884.26-.884.652"
      />
      <path
        fill="#000"
        d="M53.88 4.189H38.288a1.94 1.94 0 0 0-1.377.573 1.95 1.95 0 0 0-.57 1.382v8.567a1.956 1.956 0 0 0 1.947 1.956H53.88a1.94 1.94 0 0 0 1.804-1.204c.098-.237.149-.492.15-.749V6.147a1.96 1.96 0 0 0-.572-1.387 1.95 1.95 0 0 0-1.382-.571m-12.1 6.785h-1.226a.103.103 0 0 0-.103.104v1.752a.104.104 0 0 1-.103.104h-.864a.105.105 0 0 1-.103-.104V6.51a.103.103 0 0 1 .103-.104h2.296c1.301 0 2.232.95 2.232 2.285s-.924 2.287-2.225 2.287zm6.462 1.855a.1.1 0 0 1-.063.097.1.1 0 0 1-.04.008h-.815a.1.1 0 0 1-.073-.031.1.1 0 0 1-.03-.074v-.19a.08.08 0 0 0-.049-.077.08.08 0 0 0-.088.024c-.244.266-.64.46-1.271.46-.93 0-1.544-.486-1.544-1.325a1.23 1.23 0 0 1 .512-1.055c.335-.252.855-.383 1.626-.414l.818-.027v-.24c0-.485-.325-.69-.846-.69s-.85.185-.926.487a.1.1 0 0 1-.1.072h-.806a.102.102 0 0 1-.103-.118c.12-.717.712-1.262 1.973-1.262 1.339 0 1.821.625 1.821 1.819zm5.08-4.101-1.815 4.859c-.413 1.128-1.135 1.418-1.925 1.418a1.5 1.5 0 0 1-.442-.054.11.11 0 0 1-.078-.102v-.738a.1.1 0 0 1 .038-.081.1.1 0 0 1 .086-.023q.186.036.378.036a.975.975 0 0 0 .986-.7l.053-.17a.1.1 0 0 0 0-.07L48.906 8.73a.1.1 0 0 1 .014-.094.1.1 0 0 1 .084-.044h.825a.105.105 0 0 1 .098.068l1.152 3.085a.11.11 0 0 0 .099.069.105.105 0 0 0 .099-.069l1-3.077a.1.1 0 0 1 .098-.072h.846a.105.105 0 0 1 .1.135z"
      />
    </svg>
  );
};
export default SvgShopPayMonochrome;
