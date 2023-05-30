import React from 'react'
import classNames from "classnames";

const footerClasses = classNames( 'flex', 'justify-center', 'items-center', 'w-full', 'flex-col', 'pt-[80px]', 'pb-[40px]')
const Footer = () => {

    return (
        <div className={footerClasses}>
            <p className="font-light text-sm text-light pb-[40px]">© Jagodne</p>
            <img src={'/assets/tuv.svg'} alt="Jagodne" />
        </div>
    )
}
export default Footer
