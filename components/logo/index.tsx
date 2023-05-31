
import classNames from "classnames";

const logoClasses = classNames( 'fixed',
    'xs:w-[130px]',
    'sm:w-[148px]',
    'md:w-[148px]',
    'lg:w-[148px]',
    'xl:w-[148px]',
    '2xl:w-[186px]',
    '3xl:w-[186px]',
    '4xl:w-[186px]',
    'xs:top-5',
    'sm:top-5',
    'md:top-[30px]',
    'lg:top-[30px]',
    'xl:top-5',
    '2xl:top-[30px]',
    '3xl:top-[40px]',
    '4xl:top-[40px]',
)
const Logo = () => {
    return (

        <img src="/assets/logo.svg" alt="JAGODNE" className={logoClasses} />

    )
}
export default Logo;