import classNames from "classnames";
interface TextPaddingInterface {
    children: React.ReactNode;
}
const textPaddingClasses = classNames(
    
    
    'xs:p-[20px]',
    'sm:p-[20px]',
    'md:p-[30px]',
    'lg:p-[30px]',
    '4xl:p-[50px]',

    )
const VideoPadding = ({children} : TextPaddingInterface)  => {
  
    return <div className={textPaddingClasses}>{children}</div>

}
export default VideoPadding;