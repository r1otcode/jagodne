import React from 'react'
import classNames from "classnames";

const footerClasses = classNames( 'flex', 'justify-center', 'items-center', 'w-full', 'flex-col',

    'xs:py-[80px]',
    'sm:py-[120px]',
    'md:py-[120px]',
    'lg:py-[130px]',
    'xl:py-[170px]',
    '2xl:py-[170px]',
    '3xl:py-[190px]',
    '4xl:py-[190px]',



    )
const Footer = () => {

    return (
        <div className={footerClasses}>
            <p className="font-light text-sm text-light pb-[40px]">© Jagodne</p>
            <img src={'/assets/tuv.svg'} alt="Jagodne" />
        </div>
    )
}
export default Footer
