import classNames from "classnames";
import React, {ReactNode} from "react";
const titleClasses = classNames('text-light', 'font-normal', 'subpixel-antialiased',
    'xs:text-[13px] xs:leading-[19px]',
    'sm:text-[14px] sm:leading-[20px]',
    'md:text-[14px] md:leading-[20px]',
    'lg:text-[14px] lg:leading-[20px]',
    'xl:text-[15px] xl:leading-[21px]',
    '2xl:text-[14px] 2xl:leading-[20px]',
    '3xl:text-[15px] 3xl:leading-[21px]',
    '4xl:text-[15px] 4xl:leading-[21px]',


)
const VideoDescription:React.FC<{children:string | ReactNode}> = ({ children }) => {
    return (
        <p className={titleClasses}>{children}</p>
    )

}

export default VideoDescription;