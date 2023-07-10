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
            <Link href={"/en/"}>Homepage</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/design"}>Design</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/contractorship"}>Contractorship</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/general-design-and-construction-supervision-services"}>
            General design and construction supervision services
            </Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/modular-system-buildings"}>Modular system buildings</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/modular-system-building-configurator"}>
            Modular system building configurator
            </Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/news"}>News</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/team"}>Team</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/privacy-policy"}>Privacy Policy</Link>
          </li>
          <li className={menuItem}>
            <Link href={"/en/contact-us"}>Contact us</Link>
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