import classNames from "classnames";
import React, {ReactNode} from "react";
const titleClasses = classNames('text-light', 'font-normal', 'subpixel-antialiased', 'py-[24px]',
    'xs:text-[13px] xs:leading-[20px]',
    'sm:text-[13px] sm:leading-[20px]',
    'md:text-[14px] md:leading-[20px]',
    'lg:text-[15px] lg:leading-[22px]',
    'xl:text-[15px] xl:leading-[22px]',
    '2xl:text-[15px] 2xl:leading-[22px]',
    '3xl:text-[15px] 3xl:leading-[22px]',
    '4xl:text-[15px] 4xl:leading-[22px] 4xl:font-light',


)
const AddDate:React.FC<{children:string | ReactNode}> = ({ children }) => {
    return (
        <p className={titleClasses}>{children}</p>
    )

}

export default AddDate;