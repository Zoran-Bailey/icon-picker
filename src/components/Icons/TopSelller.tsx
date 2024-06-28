import classNames from "classnames/bind";
// import styles from '~/components/Icons/Icons.module.css';
import { IconProps } from "~/components/Icons/Icons";
const cx = classNames.bind({});
const SvgTopSelller = ({
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
        fill={color}
        d="m16.596 10.904.53-.53zm0 9.192.53.53zm-9.192 0-.53.53zm0-9.192-.53-.53zM3.33 4.38l-.654.365zm3.15 7.174a.75.75 0 0 0 1.31-.732zM12 8.5l-.632.405a.75.75 0 0 0 1.264 0zM8.34 2.788l-.646.38.007.013.008.011zm-.729-.74-.23.714zm.358.205.499-.56zm-5.258.633.745.085zm.409-.697.438.608zM20.67 4.38l.654.365zm-4.46 6.442a.75.75 0 0 0 1.31.732zm-.55-8.035.631.404.008-.011.007-.012zm.729-.74.23.714zm-.358.205-.499-.56zm5.258.633.745-.086zm-.409-.697-.438.608zM10.084 13.376a.75.75 0 1 0 .832 1.248zM12 13h.75v-1.401l-1.166.777zm-.75 5a.75.75 0 0 0 1.5 0zm-.5-.75a.75.75 0 0 0 0 1.5zm2.5 1.5a.75.75 0 0 0 0-1.5zm2.816-7.316a5.75 5.75 0 0 1 0 8.132l1.06 1.06a7.25 7.25 0 0 0 0-10.253zm0 8.132a5.75 5.75 0 0 1-8.132 0l-1.06 1.06a7.25 7.25 0 0 0 10.253 0zm-8.132 0a5.75 5.75 0 0 1 0-8.132l-1.06-1.06a7.25 7.25 0 0 0 0 10.253zm0-8.132a5.75 5.75 0 0 1 8.132 0l1.06-1.06a7.25 7.25 0 0 0-10.253 0zM2.676 4.746l3.804 6.809 1.31-.732-3.805-6.808zM6.962 1.25H4.727v1.5h2.235zm5.67 6.845-3.66-5.712-1.263.81 3.66 5.712zM6.962 2.75c.175 0 .274 0 .35.005.066.004.076.01.07.007l.46-1.428c-.29-.093-.597-.084-.88-.084zm2.025-.343c-.144-.244-.293-.513-.52-.715l-.996 1.121c-.006-.005.005.002.042.057.042.062.092.148.181.299zm-1.606.355a.3.3 0 0 1 .09.051l.997-1.12a1.75 1.75 0 0 0-.627-.359zM3.985 4.015c-.226-.405-.37-.663-.457-.86-.089-.2-.067-.226-.072-.184L1.966 2.8c-.042.363.07.693.191.964.122.275.307.604.519.982zm.742-2.765c-.434 0-.81 0-1.11.027-.296.027-.639.09-.935.303l.876 1.217c-.035.025-.022-.007.196-.027.214-.02.51-.02.973-.02zM3.456 2.971a.25.25 0 0 1 .102-.174L2.682 1.58c-.4.288-.66.73-.716 1.22zm16.559 1.044-3.805 6.808 1.31.732 3.804-6.809zM17.038 2.75h2.235v-1.5h-2.235zm-4.406 6.155 1.83-2.856 1.83-2.857-1.264-.809-1.83 2.856-1.83 2.856zm4.406-7.655c-.283 0-.591-.009-.88.084l.46 1.428c-.006.002.004-.003.07-.007.076-.005.175-.005.35-.005zm-.732 1.919c.089-.151.14-.237.181-.3.037-.054.048-.06.042-.056l-.997-1.12c-.226.2-.375.47-.519.714zm-.147-1.835a1.75 1.75 0 0 0-.627.358l.997 1.121a.3.3 0 0 1 .09-.051zm5.165 3.412c.212-.378.397-.707.519-.982.12-.271.233-.6.191-.964l-1.49.171c-.005-.042.017-.016-.072.184a13 13 0 0 1-.457.86zM19.273 2.75c.463 0 .759 0 .973.02.218.02.23.052.196.027l.876-1.217c-.297-.214-.639-.276-.935-.303-.3-.028-.676-.027-1.11-.027zm2.761.05a1.75 1.75 0 0 0-.716-1.22l-.876 1.217a.25.25 0 0 1 .102.174zM10.916 14.624l1.5-1-.832-1.248-1.5 1zM11.25 13v5h1.5v-5zm-.5 5.75h2.5v-1.5h-2.5z"
      />
    </svg>
  );
};
export default SvgTopSelller;
