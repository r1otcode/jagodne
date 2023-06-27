import React, {useEffect} from "react";
import Link from "next/link";
import classNames from "classnames";
import LangSwitcher from "@/components/LangSwitcher";
import CloseMenu from "@/components/MenuLayout/closeMenu";

interface MobileLayoutInterface {
  open: () => void;
  close: () => void;
  state: boolean;
}
const Mobile = ({ open, close, state }: MobileLayoutInterface) => {
  const Menu = classNames("px-[20px]");
  const menuItem = classNames(
    "text-light font-regular text-[15px]",
    "py-[20px] border-b border-grid hover:opacity-20 transition-all"
  );

  const layoutClasses = classNames("bg-dark");
  const mobileFooterClasses = classNames(
    "fixed w-[100vw] bottom-0 text-light font-regular px-[20px] pb-[20px] flex place-content-between max-w-[376px]"
  );
  const menuHolder = classNames(
      "inline-flex  items-center justify-between max-w-[376px] mobile_menu_holder"
  );
  useEffect(() => {
    console.log(open, close, state)
  },[open, close, state])
  return (
    <>
      <div className={layoutClasses}>

        <ul className={Menu}>
          <li className={menuItem}>
            <Link href={"/projektowanie"}>Projektowanie</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/wykonawstwo"}>Wykonawstwo</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/generalny-patronat-projektowo-wykonawczy"}>
              Generalny patronat projektowo-wykonawczy
            </Link>
          </li>
          <li className={menuItem}>
            <Link href={"/obiekty-systemowe"}>Obiekty systemowe</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/konfigurator-obiektow-systemowych"}>
              Konfigurator obiektów systemowych
            </Link>
          </li>
          <li className={menuItem}>
            <Link href={"/aktualnosci"}>Aktualności</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/zespol"}>Zespół</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/polityka-prywatnosci"}>Polityka Prywatności</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/zespol"}>Zespół</Link>
          </li>
        </ul>

        <div className={mobileFooterClasses}>
          <span className={"text-[13px]"}>© Jagodne</span>
          <img src={"./assets/madeBy.svg"} alt="Made by" />
        </div>
      </div>
    </>
  );
};

export default Mobile