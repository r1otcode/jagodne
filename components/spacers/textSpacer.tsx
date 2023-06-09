import classNames from "classnames";


const TextSpacer = () => {
    const textSpacerClasses = classNames(
    'h-[40px]',
    '4xl:h-[50px]'
    )
    return <div className={textSpacerClasses}></div>

}
export default TextSpacer;