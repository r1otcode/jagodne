import classNames from "classnames";


const MobileHeaderTitle = ({children}) => {
    const h3TitleClasses = classNames('text-light font-extrabold text-left',
        'xs:text-[18px] leading-[26px]  xs:mb-[30px] ',
        'sm:text-[18px] leading-[26px] sm:mb-[30px] ',
        'md:text-[18px] leading-[26px] md:mb-[40px] ',
        'lg:text-[20px] leading-[23px] lg:mb-[30px] lg:text-left lg:hidden',
        'xl:text-[17px] leading-[22px] xl:mb-[20px] xl:text-left xl:hidden',
        '2xl:text-[17px] leading-[23px] 2xl:mb-[20px] xl:text-left 2xl:hidden',
        '3xl:text-[18px] leading-[25px] 3xl:mb-[20px] 3xl:text-left 3xl:hidden',
        '4xl:text-[21px] leading-[29px] 4xl:mb-[30px] 4xl:text-left 4xl:hidden',
        )

    return (
        <h4 className={h3TitleClasses}>{children}</h4>
    )
}
export default MobileHeaderTitle;