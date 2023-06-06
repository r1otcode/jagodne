import Image from "next/image"
import classNames from "classnames";


const memberPositionClasses = classNames(
    'text-light font-light text-center ',
    'xs:text-[13px] xs:leading-[19px]',
    'sm:text-[14px] sm:leading-[20px]',
    'md:text-[14px] md:leading-[20px]',
    'lg:text-[14px] lg:leading-[20px]',
    'xl:text-[14px] xl:leading-[20px]',
    '2xl:text-[14px] 2xl:leading-[20px]',
    '3xl:text-[14px] 3xl:leading-[20px]',
    '4xl:text-[14px] 4xl:leading-[20px]',



)
const MemberPosition: React.FC<{children: string}> = ({children}) => {
    return (
      <p className={memberPositionClasses}>{children}</p>
        )
}
export default MemberPosition 