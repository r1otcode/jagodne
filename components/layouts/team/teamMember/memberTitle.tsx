import Image from "next/image"
import classNames from "classnames";


const memberTitleClasses = classNames(
    'text-light font-extrabold mb-[10px] text-center',
    'xs:text-[14px] leading-[20px]',
    'sm:text-[14px] leading-[20px]',
    'md:text-[15px] leading-[22px]',
    'lg:text-[18px] leading-[28px]',
    'xl:text-[18px] leading-[28px]',
    '2xl:text-[18px] leading-[28px]',
    '3xl:text-[20px] leading-[30px]',
    '4xl:text-[20px] leading-[30px]',



)
const MemberTitle: React.FC<{children: string}> = ({children}) => {
    return (
      <h4 className={memberTitleClasses}>{children}</h4>
        )
}
export default MemberTitle 