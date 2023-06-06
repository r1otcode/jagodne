
import classNames from "classnames";


const memberImageClasses = classNames(
    'rounded-full aspect-square w-[100px] mb-[30px] mx-auto',
    'xs:w-[100px] ',
    'sm:w-[130px] ',
    'md:w-[160px] ',
    'lg:w-[160px] ',
    'xl:w-[160px] ',
    '2xl:w-[160px]',
    '3xl:w-[160px] ',
    '4xl:w-[160px] ',



)
const MemberImage: React.FC<{src: string, alt: string}> = ({src, alt}) => {
    return (
        <img className={memberImageClasses} src={src} alt={alt} />
        )
}
export default MemberImage 