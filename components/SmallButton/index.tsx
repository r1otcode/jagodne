"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import {useRouter} from "next/navigation";
import useStore from "../../context"

const SmallButton: React.FC<{ children: string; link: string, color?:string }> = ({
  children,
  link,
    color
}) => {
  const [isShown, setIsShown] = useState(false);
  const smallButtonClasses = classNames(

    " leading-[11px] text-[15px]  font-medium py-[17px] px-[23px] bg-accent rounded-[33px] hover:z-50 hover:relative transition-control inline-block",
  color === "light" ? "bg-light text-dark" : "bg-accent text-light"
  );
  useEffect(() => {
    if (isShown) {
      document.body.classList.add("cursor-pointer");
    } else {
      document.body.classList.remove("cursor-pointer");
    }
  }, [isShown]);
  // @ts-ignore
  const setAnimation = useStore(state => state.setLoading)
  const router = useRouter();
  const handleClick = (e:any) => {
    e.preventDefault();
    setIsShown(false)
    setAnimation()

    setTimeout(() => {
      router.push(link);
    }, 2340);
  };
  return (
    <Link
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      href={link}
      className={smallButtonClasses}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
export default SmallButton;
