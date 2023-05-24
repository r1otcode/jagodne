import classNames from "classnames";
import React, {ReactNode} from "react";
const titleClasses = classNames('text-light', 'font-normal', 'subpixel-antialiased',
    'xs:text-[14px] xs:leading-[20px]',
    'sm:text-[14px] sm:leading-[20px]',
    'md:text-[15px] md:leading-[21px]',
    'lg:text-[15px] lg:leading-[22px]',
    'xl:text-[13px] xl:leading-[17.98px]',
    '2xl:text-[13px] 2xl:leading-[18px]',
    '3xl:text-[15px] 3xl:leading-[22px]',
    '4xl:text-[18px] 4xl:leading-[27px]',


)
const Paragraph = ({ children }: { children: ReactNode }) => {
    return (
        <p className={titleClasses}>{children}</p>
    )

}

export default Paragraph;