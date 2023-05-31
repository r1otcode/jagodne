import classNames from "classnames";


const h2TitleClasses = classNames(
    'text-light',
    'xs:text-[18px] xs:leading-[24px] xs:font-medium xs:mb-[20px]',
    'sm:text-[20px] sm:leading-[27px] sm:font-medium sm:mb-[20px]',
    'md:text-[23px] md:leading-[30px] md:font-black md:mb-[20px]',
    'lg:text-[23px] lg:leading-[30px] lg:font-black    lg:mb-[20px]',
    'xl:text-[20px] xl:leading-[27px] xl:font-medium xl:mb-[20px]',
    '2xl:text-[23px] 2xl:leading-[30px] 2xl:font-black  2xl:mb-[20px]',
    '3xl:text-[30px] 3xl:leading-[40px] 3xl:font-black  3xl:mb-[30px]',
    '4xl:text-[30px] 4xl:leading-[40px] 4xl:font-black 4xl:mb-[40px]',



)
const H3Title = ({children}) => {
    return (
        <h3 className={h2TitleClasses}>{children}</h3>
    )
}

export default H3Title;