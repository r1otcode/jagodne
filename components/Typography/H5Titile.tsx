import classNames from "classnames";


const H5Title = ({children}) => {
    const h3TitleClasses = classNames('text-light font-light',
        'xs:text-[18px] leading-[26px]  xs:mb-[30px] xs:text-center',
        'sm:text-[18px] leading-[26px] sm:mb-[30px] sm:text-center',
        'md:text-[18px] leading-[26px] md:mb-[30px] md:text-center',
        'lg:text-[18px] leading-[21px] lg:mb-[30px] lg:text-center',
        'xl:text-[15px] leading-[21px] xl:mb-[20px] xl:text-left',
        '2xl:text-[16px] leading-[23px] 2xl:mb-[20px] xl:text-left',
        '3xl:text-[20px] leading-[28px] 3xl:mb-[20px] 3xl:text-left',
        '4xl:text-[23px] leading-[33px] 4xl:mb-[30px] 4xl:text-left',
        )

    return (
        <h4 className={h3TitleClasses}>{children}</h4>
    )
}
export default H5Title;