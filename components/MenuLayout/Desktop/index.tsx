import React, {useEffect, useState} from "react";
import classNames from "classnames";
import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";
import CloseMenu from "@/components/MenuLayout/closeMenu";
import useStore from "@/context";

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

const menuItem = classNames(
  "lg:text-[14px] lg:font-normal lg:leading-[22px] lg:px-[15px] lg:py-[17px]",
  "xl:text-[14px] xl:font-normal xl:leading-[22px] xl:px-[15px] xl:py-[17px]",
  "2xl:text-[15px] 2xl:font-normal 2xl:leading-[22px] 2xl:px-[20px] 2xl:py-[22px]",
  "3xl:text-[17px] 3xl:font-normal 3xl:leading-[25px] 3xl:px-[25px] 3xl:py-[27px]",
  "4xl:text-[21px] 4xl:font-normal 4xl:leading-[31px] 4xl:px-[30px] 4xl:py-[32px]"
);

const menuHolder = classNames(
  "inline-flex  items-center justify-between w-full"
);

interface DesktopLayoutInterface {
  close: () => void;
  open: () => void;
  state: boolean;
}
const Desktop = ({ close, open, state }: DesktopLayoutInterface) => {
  const menuGridClasses =
    "grid grid-cols-3 gap-0 " +
    "lg:[&>div]:h-[268px] xl:[&>div]:h-[124px] 2xl:[&>div]:h-[138px] 3xl:[&>div]:h-[174px] 4xl:[&>div]:h-[217px] " +
    "lg:w-[598px] xl:w-[840px] 2xl:w-[1060px] 3xl:w-[1194px] 4xl:w-[1492px] mx-auto ";
  const mobileFooterClasses = classNames(
    "text-light font-regular  flex place-content-between ",

    "lg:py-[45px] xl:py-[47px] 2xl:py-[66px] 3xl:py-[74px] 4xl:py-[95px]"
  );
  const [isShown, setIsShown] = useState(false);

  // @ts-ignore
  const bears = useStore(store => store.loading)
  // @ts-ignore
  const setAnimation = useStore(state => state.setLoading)
  useEffect(() => {
    if (isShown) {
      document.body.classList.add("cursor-pointer");
    } else {
      document.body.classList.remove("cursor-pointer");
    }
  }, [isShown]);

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
          <Link onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)} href={"/"} className={'hover:z-[50] hover:relative col-span-1 bg-dark border-grid border menu-bg border-b-0'}>
          <div>

              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Strona główna
              </h3>


          </div>
          </Link>
          <Link href={"/projektowanie"} className={
            "col-span-1 bg-dark border-grid border border-l-0 border-b-0"
          }>
          <div

          >

              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Projektowanie
              </h3>

          </div>
          </Link>


            <Link href={"/wykonawstwo"} className={"col-span-1 bg-dark border-grid border border-l-0"}>
              <div >
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Wykonawstwo
              </h3>

          </div> </Link>


            <Link href={"/generalny-patronat-projektowo-wykonawczy"} className={"col-span-1 bg-dark border-grid border border-b-0"}>
              <div >
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Generalny patronat projektowo-wykonawczy
              </h3>

          </div></Link>


            <Link href={"/obiekty-systemowe"} className={
              "col-span-1 bg-dark border-grid border border-l-0 border-b-0"
            }>
               <div

              >
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Obiekty systemowe
              </h3>

          </div> </Link>


            <Link href={"/konfigurator-obiektow-systemowych"} className={
              "col-span-1 bg-dark border-grid border border-l-0 border-b-0 border-t-0"
            }>   <div

            >
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Konfigurator obiektów systemowych
              </h3>

          </div> </Link>


            <Link href={"/aktualnosci"} className={"col-span-1 bg-dark border-grid border "}>
              <div >
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Aktualności
              </h3>

          </div> </Link>


            <Link href={"/zespol"} className={"col-span-1 bg-dark border-grid border border-l-0"}>
              <div >
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Zespół
              </h3>

          </div> </Link>


            <Link href={"/kontakt"} className={"col-span-1 bg-dark border-grid border border-l-0"}>
              <div >
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Kontakt
              </h3>

          </div>   </Link>
        </div>

        <div className={mobileFooterClasses}>
          <span>
            © Jagodne{" "}
            <Link href={"/polityka-prywatnosci"} className={"ml-[40px] "}>
              Polityka prywatności
            </Link>
          </span>
          <img src={"./assets/madeBy.svg"} alt="Made by" />
        </div>
      </div>
    </>
  );
};

export default Desktop