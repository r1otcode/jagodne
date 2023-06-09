"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";

const smallButtonClasses = classNames(
  "text-light leading-[11px] text-[15px]  font-medium py-[17px] px-[23px] bg-accent rounded-[33px] hover:z-50 hover:relative transition-control inline-block"
);
const SmallButton: React.FC<{children: string, link:string}> = ({ children, link }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (isShown) {
      document.body.classList.add("cursor-pointer");
    } else {
      document.body.classList.remove("cursor-pointer");
    }
  }, [isShown]);
  return (
    <Link
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      href={link}
      className={smallButtonClasses}
    >
      {children}
    </Link>
  );
};
export default SmallButton