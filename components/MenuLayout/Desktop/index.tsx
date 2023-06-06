import React from "react";
import classNames from "classnames";
import Link from "next/link";
import MenuLayout from "@/components/MenuLayout";
import LangSwitcher from "@/components/LangSwitcher";
import Logo from "@/components/logo";
import Menu from "@/components/menu";
import CloseMenu from "@/components/MenuLayout/closeMenu";

const menuHeader = classNames(
    "flex",
    "justify-center",
    "items-center",
    "w-full",
    // "xs:p-5",
    // "sm:p-5",
    // "md:p-[30px]",
    // "lg:p-[30px]",
    // "xl:p-5",
    // "2xl:p-[30px]",
    // "3xl:p-[40px]",
    // "4xl:p-[40px]"
);
const mainHeader = classNames(
    "w-full",
    "h-[100vh]",

    "xs:pt-[160px]",
    "sm:pt-[227px]",
    "md:pt-[225px]",
    "lg:pt-[324px]",
    "xl:pt-[187px]",
    "2xl:pt-[221px]",
    "3xl:pt-[270px]",
    "4xl:pt-[341px]"
);

const buttonsContainer = classNames(
    "flex",
    "gap-[10px]",
    "xs:mt-[30px]",
    "sm:mt-[40px]",
    "md:mt-[40px]",
    "lg:mt-[50px]",
    "xl:mt-[40px]",
    "2xl:mt-[60px]",
    "3xl:mt-[70px]",
    "4xl:mt-[100px]"
);
const menuButtonWrapper = classNames(
    "inline-flex",
    "items-center",
    "xs:top-[20px] xs:right-[36px]",
    "sm:top-[20px] sm:right-[36px]",
    "md:top-[20px] md:right-[36px] ",
    "lg:top-[30px] lg:right-[46px]",
    "xl:top-[30px] xl:right-[46px]",
    "2xl:top-[20px] 2xl:right-[36px]",
    "3xl:top-[30px] 3xl:right-[46px]",
    "4xl:top-[40px] 4xl:right-[56px]",
    "fixed",
    "hover:z-[50]"
);
const leftMenuWrapper = classNames(
    "inline-flex",
    "items-center",
    "xs:top-[41px] xs:left-[20px]",
    "sm:top-[34px] sm:left-[20px]",
    "md:top-[20px] md:left-[20px] ",
    "lg:top-[30px] lg:left-[30px]",
    "xl:top-[30px] xl:left-[30px]",
    "2xl:top-[20px] 2xl:left-[20px]",
    "3xl:top-[30px] 3xl:left-[30px]",
    "4xl:top-[40px] 4xl:left-[40px]",
    "fixed",
    "hover:z-[50]"
);
const menuHeaderClasses = classNames('fixed w-full right-0');
const menuHolder = classNames('inline-flex  items-center justify-between w-full');

const Desktop = ({close, open, state }) => {
    const menuGridClasses = "grid grid-cols-3 gap-0 " +
        "lg:[&>div]:h-[268px] xl:[&>div]:h-[124px] 2xl:[&>div]:h-[138px] 3xl:[&>div]:h-[174px] 4xl:[&>div]:h-[217px] " +
        "lg:w-[598px] xl:w-[596px] 2xl:w-[1060px] 3xl:w-[1194px] 4xl:w-[1492px] mx-auto "
    const layout = "lg:w-[598px] xl:w-[596px] 2xl:w-[1060px] 3xl:w-[1194px] 4xl:w-[1492px] mx-auto"
    const mobileFooterClasses = classNames('text-light font-regular  flex place-content-between',

        'lg:py-[45px] xl:py-[47px] 2xl:py-[66px] 3xl:py-[74px] 4xl:py-[95px]')

    return (
        <>

            <div className={menuButtonWrapper}>
                <div className={menuHolder}>
                    <LangSwitcher />
                    <CloseMenu close={close} open={open} state={state} />
                </div>

            </div>

        <div>



           <div className={menuGridClasses}>
                <div className={'col-span-1 bg-dark border-grid border menu-bg border-b-0' }>
                    <Link href={'/'}><h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Strona główna</h3></Link>
                </div>

               <div className={'col-span-1 bg-dark border-grid border border-l-0 border-b-0'}>
                <Link href={'/projektowanie'}><h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Projektowanie</h3></Link>
               </div>

               <div className={'col-span-1 bg-dark border-grid border border-l-0'}>
                <Link href={'/wykonawstwo'}> <h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Wykonawstwo</h3></Link>
               </div>

               <div className={'col-span-1 bg-dark border-grid border border-b-0'}>
                  <Link href={'/generalny-patronat-projektowo-wykonawczy'}> <h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Generalny patronat projektowo-wykonawczy</h3></Link>
               </div>

               <div className={'col-span-1 bg-dark border-grid border border-l-0 border-b-0'}>
                  <Link href={'/obiekty-systemowe'}> <h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Obiekty systemowe</h3></Link>
               </div>

               <div className={'col-span-1 bg-dark border-grid border border-l-0 border-b-0 border-t-0'}>
                   <Link href={'/konfigurator-obiektww-systemowych'}><h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Konfigurator obiektów systemowych</h3></Link>
               </div>

               <div className={'col-span-1 bg-dark border-grid border '}>
                <Link href={'Aktualnosci'}> <h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Aktualności</h3></Link>
               </div>

               <div className={'col-span-1 bg-dark border-grid border border-l-0'}>
                  <Link href={'/zespol'}><h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Zespół</h3></Link>
               </div>

               <div className={'col-span-1 bg-dark border-grid border border-l-0'}>
                   <Link href={'/kontakt'}><h3 className={'text-light px-[30px] py-[32px] font-light text-[21px]'}>Kontakt</h3></Link>
               </div>

           </div>



            <div className={mobileFooterClasses}>
                <span>© Jagodne   <Link href={'/polityka-prywatnosci'} className={'ml-[40px] '}>Polityka prywatności</Link></span>
                <img src={'./assets/madeBy.svg'} alt="Made by" />

            </div>
        </div>
        </>

    )
}

export default Desktop