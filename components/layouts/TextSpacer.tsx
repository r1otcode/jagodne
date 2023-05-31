import classNames from "classnames";


const TextSpacer = ({ children }) => {
    const textSpacerClasses = classNames(
        'xs:py-5 xs:px-[30px]',
        'sm:py-5 sm:px-[40px]',
        'md:py-[30px] md:px-[50px]',
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
export default TextSpacer