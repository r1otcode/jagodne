import classNames from "classnames";
import React, {ReactNode} from "react";
const titleClasses = classNames('font-sans','text-light', 'font-extrabold',
    'xs:text-[22px] xs:leading-[31px]',
    'sm:text-[34px] sm:leading-[45px]',
    'md:text-[40px] md:leading-[50px]',
    'lg:text-[45px] lg:leading-[58px]',
    'xl:text-[38px] xl:leading-[49px]',
    '2xl:text-[50px] 2xl:leading-[50px]',
    '3xl:text-[57px] 3xl:leading-[73px]',
    '4xl:text-[70px] 4xl:leading-[73px]',
)
const Prev = ({ src}: { src: string }) => {
    return (
        <img src={src} alt="Jagodne" className="w-[100vw] h-[100vh]"/>
    )

}

export default Prev;