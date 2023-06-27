import classNames from "classnames";


const h2TitleClasses = classNames(
    'text-light',
    'font-bold',
    'border-l-[2px]',
    'p-[20px]',
    'border-accent',
    'xs:text-[18px]',
    'sm:text-[20px]',
    'md:text-[20px]',
    'lg:text-[22px]',
    'xl:text-[22px]',
    '2xl:text-[22px]',
    '3xl:text-[22px]',
    '4xl:text-[22px]',



)
const H3TitleWpis = ({children}) => {
    return (
        <h3 className={h2TitleClasses}>{children}</h3>
    )
}

export default H3TitleWpis;