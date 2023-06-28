import classNames from "classnames";
interface TextPaddingInterface {
    children: React.ReactNode;
}
const textPaddingClasses = classNames(
    
    'font-light',
    'xs:p-[20px]',
    'sm:p-[20px]',
    'md:p-[30px]',
    'lg:p-[30px]',
    'lg:p-[30px]',
    'xl:p-[30px]',
    '2xl:p-[30px]',
    '3xl:p-[30px]',
    '4xl:p-[40px]',

    )
const VideoPadding = ({children} : TextPaddingInterface)  => {
  
    return <div className={textPaddingClasses}>{children}</div>

}
export default VideoPadding;