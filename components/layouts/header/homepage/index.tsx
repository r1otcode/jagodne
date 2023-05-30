import Logo from "@/components/logo";
import classNames from "classnames";

const homepageheader = classNames('relative', 'flex', 'justify-center', 'items-center', 'w-full',
    'xs:m-5',
    'sm:m-5',
    'md:m-[30px]',
    'lg:m-[30px]',
    'xl:m-5',
    '2xl:m-[30px]',
    '3xl:m-[40px]',
    '4xl:m-[40px]',
)
const HomepageHeader = () => {

    return (
        <div className={homepageheader}>
            <Logo />
        </div>
    )
}

export default HomepageHeader