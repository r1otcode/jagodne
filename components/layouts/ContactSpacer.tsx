import classNames from "classnames";


const ContactSpacer = ({ children }) => {
    const textSpacerClasses = classNames(
        'xs:pt-[20px] xs:pb-[40px] xs:px-[20px]',
        'sm:pt-[20px] sm:pb-[40px] sm:px-[20px]',
        'md:pt-[20px] md:pb-[40px] md:px-[20px]',
        'lg:pt-[20px] lg:pb-[40px] lg:px-[20px]',
        'xl:pt-[20px] xl:pb-[40px] xl:px-[20px]',
        '2xl:pt-[20px] 2xl:pb-[40px] 2xl:px-[20px]',
        '3xl:pt-[20px] 3xl:pb-[40px] 3xl:px-[20px]',
        '4xl:pt-[40px] 4xl:pb-[60px] 4xl:px-[20px]',
    )
    return (
        <div className={textSpacerClasses}>
            {children}
        </div>
    )
}
export default ContactSpacer