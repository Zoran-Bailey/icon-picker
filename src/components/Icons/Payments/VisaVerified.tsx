import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgVisaVerified = ({
  color = "currentColor",
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={37}
      height={20}
      fill="none"
      viewBox="0 0 37 20"
      className={cx("icon", size, className)}
      {...props}
    >
      <path
        fill="#2A2B6E"
        d="M5.545 7.91 4 3.32h.661l.74 2.258c.205.625.378 1.174.505 1.723h.015c.126-.534.332-1.114.536-1.71l.804-2.271h.662L6.221 7.91zm2.71-1.54c-.015.15.005.303.058.445s.137.273.248.382q.168.165.394.248c.148.055.308.078.466.069.325.007.647-.05.947-.168l.11.427a3 3 0 0 1-1.135.199 1.7 1.7 0 0 1-.673-.104 1.6 1.6 0 0 1-.565-.362 1.5 1.5 0 0 1-.354-.553 1.44 1.44 0 0 1-.079-.644c0-.99.599-1.784 1.591-1.784 1.12 0 1.403.946 1.403 1.555 0 .122-.016.214-.016.276zm1.813-.427a.8.8 0 0 0-.2-.676.9.9 0 0 0-.299-.219.9.9 0 0 0-.368-.08c-.257.02-.497.132-.673.312a.96.96 0 0 0-.273.663zm1.087-.305c0-.382 0-.717-.031-1.02h.536l.016.638h.031a.98.98 0 0 1 .35-.504c.17-.128.379-.203.596-.212a.6.6 0 0 1 .173.015v.565a.9.9 0 0 0-.772.217.82.82 0 0 0-.267.53q-.03.135-.033.275v1.753h-.613V5.637zm2.743-1.951a.34.34 0 0 1-.111.267.37.37 0 0 1-.284.099.4.4 0 0 1-.27-.108.36.36 0 0 1-.108-.258.35.35 0 0 1 .106-.273.4.4 0 0 1 .28-.115.4.4 0 0 1 .282.115.37.37 0 0 1 .105.273m-.694.93h.615v3.294h-.615zm1.435 3.293V5.074h-.473v-.457h.473v-.151c-.031-.42.11-.836.394-1.159.226-.2.525-.31.835-.305.182 0 .364.031.536.092l-.08.457a.9.9 0 0 0-.393-.076c-.52 0-.662.442-.662.961v.182h.82v.457h-.82v2.837zm2.726-4.223a.33.33 0 0 1-.109.269.37.37 0 0 1-.285.097.4.4 0 0 1-.27-.108.36.36 0 0 1-.108-.258.35.35 0 0 1 .11-.273.4.4 0 0 1 .284-.109.4.4 0 0 1 .278.11.35.35 0 0 1 .1.272m-.693.93h.614v3.294h-.612zM18.39 6.37c-.015.15.004.303.057.445s.138.273.249.382.245.193.393.248.308.078.467.069c.324.007.646-.05.945-.168l.11.427a3 3 0 0 1-1.134.199 1.7 1.7 0 0 1-.672-.104 1.6 1.6 0 0 1-.565-.362 1.5 1.5 0 0 1-.354-.553 1.44 1.44 0 0 1-.08-.644c0-.99.6-1.784 1.592-1.784 1.12 0 1.403.946 1.403 1.555 0 .122-.016.214-.016.276zm1.813-.427c0-.381-.159-.976-.867-.976a1.06 1.06 0 0 0-.673.313.96.96 0 0 0-.274.663zm4.034-2.867v3.981q-.01.428.032.855h-.552l-.032-.58h-.014c-.11.201-.279.369-.486.482a1.3 1.3 0 0 1-.682.158c-.82 0-1.45-.671-1.45-1.678 0-1.097.695-1.768 1.53-1.768.202-.01.403.032.583.12s.333.22.442.383h.015V3.076zm-.614 2.883a.7.7 0 0 0-.032-.26.87.87 0 0 0-.318-.503.95.95 0 0 0-.58-.2c-.647 0-1.024.549-1.024 1.281 0 .672.33 1.22 1.008 1.22a.98.98 0 0 0 .589-.206c.166-.13.28-.31.325-.51q.03-.128.031-.259zm2.9 1.952c.015-.229.031-.564.031-.854V3.076h.615V5.15h.015c.117-.194.287-.353.493-.461s.439-.16.673-.15c.851 0 1.451.687 1.435 1.678 0 1.174-.772 1.77-1.53 1.77a1.25 1.25 0 0 1-.665-.153 1.16 1.16 0 0 1-.469-.474h-.016l-.031.55zm.646-1.327a.91.91 0 0 0 .368.718 1 1 0 0 0 .593.2c.646 0 1.04-.519 1.04-1.266 0-.654-.347-1.22-1.008-1.22a1 1 0 0 0-.607.21.93.93 0 0 0-.34.521q-.03.12-.03.244v.595zm3.293-1.967.74 1.951c.079.214.16.473.22.672h.017c.063-.199.126-.458.22-.687l.679-1.936h.66l-.929 2.348c-.44 1.128-.74 1.71-1.166 2.059-.208.195-.47.327-.757.381l-.158-.502c.198-.059.38-.158.535-.29.228-.18.406-.411.52-.672a.34.34 0 0 0 .047-.137.5.5 0 0 0-.047-.15L29.782 4.62zm-16.186 5.536-1.876 4.59-.755-3.904a.8.8 0 0 0-.284-.49.87.87 0 0 0-.552-.196H7.735l-.046.199a8 8 0 0 1 1.78.579c.12.055.223.138.297.243a.7.7 0 0 1 .127.352l1.433 5.384h1.923l2.932-6.756zm2.68 0-1.498 6.756h1.813l1.48-6.756zm4.176 1.875c0-.244.252-.503.772-.564a3.5 3.5 0 0 1 1.78.304l.318-1.433a5 5 0 0 0-1.686-.305c-1.782 0-3.042.915-3.058 2.243-.015.975.899 1.508 1.576 1.829.71.336.946.534.93.84 0 .456-.567.653-1.071.653a3.96 3.96 0 0 1-1.86-.427l-.33 1.48a5.6 5.6 0 0 0 2 .352c1.892 0 3.136-.9 3.136-2.319.033-1.753-2.52-1.86-2.505-2.653m5.216 2.486.961-2.531.536 2.53zm.694-4.362a.86.86 0 0 0-.464.133.8.8 0 0 0-.308.355l-2.711 6.253h1.89l.378-1.005h2.318l.22 1.005h1.671l-1.45-6.756h-1.544z"
      />
    </svg>
  );
};
export default SvgVisaVerified;
