"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";


interface MenuProps {
  children?: React.ReactNode;
  close?: () => void;
  open?: () => void;
  state?: boolean;
}
const Menu = ({ children, close, open, state }: MenuProps) => {
  const [isShown, setIsShown] = useState(false);
  const menuButtonClasses = classNames(

      "xs:w-[50px]",
      "sm:w-[50px]",
      "md:w-[50px]",
      "lg:w-[50px]",
      "xl:w-[50px]",
      "2xl:w-[60px]",
      "3xl:w-[60px]",
      "4xl:w-[60px]",
      !state && "hover:z-[50]  hover:relative",

  );
  const menuCloseButtonClasses = classNames(
       'spin',
      "xs:w-[50px]",
      "sm:w-[50px]",
      "md:w-[50px]",
      "lg:w-[50px]",
      "xl:w-[50px]",
      "2xl:w-[60px]",
      "3xl:w-[60px]",
      "4xl:w-[60px]",

  );

  useEffect(() => {

    if (isShown) {
      document.body.classList.add("cursor-pointer");
    } else {
      document.body.classList.remove("cursor-pointer");
    }
  }, [isShown]);

  return (
    <div
      onMouseEnter={() => (!state && setIsShown(true) )}
      onMouseLeave={() => (!state && setIsShown(false) )}
      onClick={() => (state ? close() : open())}
      className={menuButtonClasses}
    >
      <AnimatePresence   mode="wait">
        {!state && (
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <rect width="50" height="50" rx="25" fill="#146EBE"/>
          <path className="long-line" d="M27.5 28.5H32.5" stroke="#ECECEC" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path className="short-line" d="M17.5 21.5H32.5" stroke="#ECECEC" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
            )}
        {state && (
        <img
            src={"/assets/close.svg"}
            alt="Menu Opener"
            className={menuCloseButtonClasses}
        /> )}

      </AnimatePresence>

    </div>
  );
};
export default Menu