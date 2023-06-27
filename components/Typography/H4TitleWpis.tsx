import classNames from "classnames";


const h4TitleClasses = classNames(
    'text-light',
    'font-black',
    
    
    'border-accent',
    'xs:text-[18px]',
    'sm:text-[20px]',
    'md:text-[20px]',
    'lg:text-[22px]',
    'xl:text-[18px]',
    '2xl:text-[18px]',
    '3xl:text-[18px]',
    '4xl:text-[18px]',



)
const H4TitleWpis = ({children}) => {
    return (
        <h4 className={h4TitleClasses}>{children}</h4>
    )
}

export default H4TitleWpis;