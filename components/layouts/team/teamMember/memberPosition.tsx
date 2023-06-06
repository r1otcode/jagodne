import Image from "next/image"
import classNames from "classnames";


const memberPositionClasses = classNames(
    'text-light font-light text-center text-[13px] leading-[19px]',
    'xs:text-[13px] leading-[19px]',
    'sm:text-[14px] leading-[20px]',
    'md:text-[14px] leading-[20px]',
    'lg:text-[14px] leading-[20px]',
    'xl:text-[14px] leading-[20px]',
    '2xl:text-[14px] leading-[20px]',
    '3xl:text-[14px] leading-[20px]',
    '4xl:text-[14px] leading-[20px]',



)
const MemberPosition: React.FC<{children: string}> = ({children}) => {
    return (
      <p className={memberPositionClasses}>{children}</p>
        )
}
export default MemberPosition 