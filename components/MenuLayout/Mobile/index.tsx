import React from 'react'
import Link from "next/link";
import classNames from "classnames";



const Mobile = ({}) => {
    const Menu = classNames('px-[20px]')
    const menuItem = classNames(
        'text-light font-regular text-[15px]',
        'py-[20px] border-b border-grid hover:opacity-20 transition-all');

    const layoutClasses = classNames('bg-dark');
    const mobileFooterClasses = classNames('text-light font-regular px-[20px] pb-[20px] flex place-content-between')
    return (
        <>
       <div className={layoutClasses}>


           <ul className={Menu}>
                <li className={menuItem}><Link href={'/test'}>Projektowanie</Link></li>
                <li className={menuItem}><Link href={'/'}>Wykonawstwo</Link></li>
                <li className={menuItem}><Link href={'/'}>Generalny patronat projektowo-wykonawczy</Link></li>
                <li className={menuItem}><Link href={'/'}>Obiekty systemowe</Link></li>
                <li className={menuItem}><Link href={'/'}>Konfigurator obiektów systemowych</Link></li>
                <li className={menuItem}><Link href={'/'}>Aktualności</Link></li>
                <li className={menuItem}><Link href={'/'}>Zespół</Link></li>
                <li className={menuItem}><Link href={'/'}>Polityka Prywatności</Link></li>
                <li className={menuItem}><Link href={'/'}>Zespół</Link></li>
           </ul>

           <div className={mobileFooterClasses}>
                  <span>© Jagodne</span>
               <img src={'./assets/madeBy.svg'} alt="Made by" />

           </div>

       </div></>
    )
}

export default Mobile