import classNames from "classnames";


const h2TitleClasses = classNames(
    'text-light',
    'font-bold',
    'border-l-[10px]',
    'p-[20px]',
    'border-accent',
    'xs:text-[20px]',
    'sm:text-[22px]',
    'md:text-[24px]',
    'lg:text-[30px]',
    'xl:text-[30px]',
    '2xl:text-[30px]',
    '3xl:text-[30px]',
    '4xl:text-[30px]',


)
const H2TitleWpis = ({children}) => {
    return (
        <h2 className={h2TitleClasses}>{children}</h2>
    )
}

export default H2TitleWpis;