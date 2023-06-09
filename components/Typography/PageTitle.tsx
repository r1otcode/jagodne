import classNames from "classnames";
import React, {ReactNode} from "react";

const PageTitle = ({ children, maxW }: { children: ReactNode, maxW?: boolean }) => {
    const titleClasses = classNames('font-sans','text-light', 'font-extrabold',
        'xs:text-[22px] xs:leading-[31px] ',
        'sm:text-[34px] sm:leading-[45px]  ',
        'md:text-[40px] md:leading-[50px] ',
        'lg:text-[45px] lg:leading-[58px] ',
        'xl:text-[38px] xl:leading-[49px] ',
        '2xl:text-[50px] 2xl:leading-[50px] ',
        '3xl:text-[57px] 3xl:leading-[73px] ',
        '4xl:text-[70px] 4xl:leading-[73px] ',
        maxW && 'xs:max-w-[269px] sm:max-w-[326px] md:max-w-[400px] lg:max-w-[551px] xl:max-w-[465px] 2xl:max-w-[612px] 3xl:max-w-[698px] 4xl:max-w-[857px]'


    )
return (
        <h1 className={titleClasses}>{children}</h1>
    )

}

export default PageTitle;