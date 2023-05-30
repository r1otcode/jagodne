
import classNames from "classnames";

const logoClasses = classNames(
    'xs:w-[130px]',
    'sm:w-[148px]',
    'md:w-[148px]',
    'lg:w-[148px]',
    'xl:w-[148px]',
    '2xl:w-[186px]',
    '3xl:w-[186px]',
    '4xl:w-[186px]',
)
const Logo = () => {
    return (
        <div styles={{background: "rgba(50, 50, 52, 0.5)",
            backdropFilter:"blur(10.4307px)" }}>
        <img src="/assets/logo.svg" alt="JAGODNE" className={logoClasses} />
</div>
    )
}
export default Logo;