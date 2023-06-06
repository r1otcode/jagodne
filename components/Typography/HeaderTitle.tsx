import classNames from "classnames";


const HeaderTitle = ({children}) => {
    const h3TitleClasses = classNames('text-light font-extrabold',
        'xs:text-[18px] leading-[26px]  xs:mb-[30px] xs:text-center xs:hidden',
        'sm:text-[18px] leading-[26px] sm:mb-[30px] sm:text-center sm:hidden',
        'md:text-[18px] leading-[26px] md:mb-[30px] md:text-center md:hidden',
        'lg:text-[20px] leading-[23px] lg:mb-[30px] lg:text-left ',
        'xl:text-[17px] leading-[22px] xl:mb-[20px] xl:text-left',
        '2xl:text-[17px] leading-[23px] 2xl:mb-[20px] xl:text-left',
        '3xl:text-[18px] leading-[25px] 3xl:mb-[20px] 3xl:text-left',
        '4xl:text-[21px] leading-[29px] 4xl:mb-[30px] 4xl:text-left',
        )

    return (
        <h4 className={h3TitleClasses}>{children}</h4>
    )
}
export default HeaderTitle;