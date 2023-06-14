"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import useStore from "@/context";

const logoClasses = classNames(
  "fixed",
  "z-[10]",
  "hover:z-[50]",
  "xs:w-[130px]",
  "sm:w-[148px]",
  "md:w-[148px]",
  "lg:w-[148px]",
  "xl:w-[148px]",
  "2xl:w-[186px]",
  "3xl:w-[186px]",
  "4xl:w-[186px]",
  "xs:top-[30px]",
  "sm:top-[30px]",
  "md:top-[30px]",
  "lg:top-[30px]",
  "xl:top-[30px]",
  "2xl:top-[30px]",
  "3xl:top-[40px]",
  "4xl:top-[40px]"
);
const Logo = () => {
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
  const router = useRouter();
  const handleClick = (e:any) => {
    e.preventDefault();
    setIsShown(false)
    setAnimation()

    setTimeout(() => {
      router.push('/');
    }, 2340);
  };
  return (

    <img
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={handleClick}
      src="/assets/logo.svg"
      alt="JAGODNE"
      className={logoClasses}
    />
  );
};
export default Logo;