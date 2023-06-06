import Image from "next/image"
import classNames from "classnames";


const memberTitleClasses = classNames(
    'text-light font-extrabold mb-[10px] text-center ',
    'xs:text-[14px] xs:leading-[20px]',
    'sm:text-[14px] sm:leading-[20px]',
    'md:text-[15px] md:leading-[22px]',
    'lg:text-[18px] lg:leading-[28px]',
    'xl:text-[18px] xl:leading-[28px]',
    '2xl:text-[18px] 2xl:leading-[28px]',
    '3xl:text-[20px] 3xl:leading-[30px]',
    '4xl:text-[20px] 4xl:leading-[30px]',



)
const MemberTitle: React.FC<{children: string}> = ({children}) => {
    return (
      <h4 className={memberTitleClasses}>{children}</h4>
        )
}
export default MemberTitle 