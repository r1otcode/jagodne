import classNames from "classnames";


const h2TitleClasses = classNames(
    'text-light',
    'font-thin',
    'xs:text-[26px]',
    'sm:text-[30px]',
    'md:text-[34px]',
    'lg:text-[37px]',
    'xl:text-[37px]',
    '2xl:text-[42px]',
    '3xl:text-[55px]',
    '4xl:text-[55px]',


)
const H2Title = ({children}) => {
    return (
        <h2 className={h2TitleClasses}>{children}</h2>
    )
}

export default H2Title;