"use client"
import {useEffect, useState} from "react";
import classNames from "classnames";

const menuButtonClasses = classNames('hover:z-50  hover:relative',
    'xs:w-[50px]',
    'sm:w-[50px]',
    'md:w-[50px]',
    'lg:w-[50px]',
    'xl:w-[50px]',
    '2xl:w-[60px]',
    '3xl:w-[60px]',
    '4xl:w-[60px]'

    )
interface MenuProps {
    children?: React.ReactNode
}
const Menu = ({ children } : MenuProps) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (isShown) {
            document.body.classList.add('cursor-pointer')
        } else {
            document.body.classList.remove('cursor-pointer')
        }

    }, [isShown])

    return (
        <div onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}
             onClick={()=>console.log('test')} className={menuButtonClasses}><img src={'/assets/menu-button.svg'} alt="Menu Opener" className={menuButtonClasses}/> </div>
    )
}
export default Menu