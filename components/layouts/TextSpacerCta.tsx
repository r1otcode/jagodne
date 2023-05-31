import classNames from "classnames";


const TextSpacerCta = ({ children }) => {
    const textSpacerClasses = classNames(
        'xs:py-[50px] xs:px-[30px]',
        'sm:py-[50px] sm:px-[30px]',
        'md:py-[50px] md:px-[50px]',
        'lg:p-[50px]',
        'xl:p-[30px]',
        '2xl:p-[30px]',
        '3xl:p-[40px]',
        '4xl:p-[60px]',
    )
    return (
        <div className={textSpacerClasses}>
            {children}
        </div>
    )
}
export default TextSpacerCta