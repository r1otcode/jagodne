import classNames from "classnames";


const h3TitleClasses = classNames(
    'text-light font-light',
    'xs:text-[18px] xs:leading-[26px]  xs:mb-[0px]',
    'sm:text-[18px] sm:leading-[26px] sm:mb-[0px]',
    'md:text-[24px] md:leading-[36px] md:mb-[0px]',
    'lg:text-[26px] lg:leading-[39px] lg:mb-[0px]',
    'xl:text-[20px] xl:leading-[31px] xl:mb-[0px]',
    '2xl:text-[23px] 2xl:leading-[35px] 2xl:mb-[0px]',
    '3xl:text-[30px] 3xl:leading-[45px] 3xl:mb-[0px]',
    '4xl:text-[40px] 4xl:leading-[60px] 4xl:mb-[0px]',



)
const H4TitleNoMG = ({children}) => {
    return (
        <h3 className={h3TitleClasses}>{children}</h3>
    )
}

export default H4TitleNoMG;