import classNames from "classnames";
interface TextPaddingInterface {
    children: React.ReactNode;
}
const textPaddingClasses = classNames(
    'p-[40px]',
    '4xl:p-[50px]'
    )
const TextPadding = ({children} : TextPaddingInterface)  => {
  
    return <div className={textPaddingClasses}>{children}</div>

}
export default TextPadding;