import classNames from "classnames";
import React, {ReactNode} from "react";
const titleClasses = classNames('text-light', 'font-normal', 'subpixel-antialiased', 'underline',
    'xs:text-[14px] xs:leading-[20px]',
    'sm:text-[14px] sm:leading-[20px]',
    'md:text-[15px] md:leading-[21px]',
    'lg:text-[15px] lg:leading-[22px]',
    'xl:text-[14px] xl:leading-[17.98px]',
    '2xl:text-[15px] 2xl:leading-[22px]',
    '3xl:text-[15px] 3xl:leading-[22px]',
    '4xl:text-[18px] 4xl:leading-[27px] 4xl:font-light',


)
const LinkWpis:React.FC<{children:string | ReactNode, link: string}> = ({ children, link }) => {
    return (
        <a href={link} className={titleClasses}>{children}</a>
    )

}

export default LinkWpis;