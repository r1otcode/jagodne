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
      "hover:z-50  hover:relative",
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
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => (state ? close() : open())}
      className={menuButtonClasses}
    >
      <AnimatePresence   mode="wait">
      {!isShown && <motion.img
          src={"/assets/menu-button.svg"}
          alt="Menu Opener"
          className={menuButtonClasses}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
      />}

    {isShown &&  <motion.img
        src={"/assets/menu_open_hover.svg"}
        alt="Menu Opener"
        className={menuButtonClasses}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}

    />}
      </AnimatePresence>

    </div>
  );
};
export default Menu