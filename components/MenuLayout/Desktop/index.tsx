import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";

import useStore from "@/context";
import { usePathname, useRouter } from "next/navigation";

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
  const router = usePathname();
  useEffect(() => {
    console.log("router", router);
  }, [router]);

  return (
    <>


      <div>
        <div className={menuGridClasses}>
          <Link
            href={"/"}
            className={'relative bg-dark border-grid border menu-bg border-b-0'}
          >
            <div  className={
              router == "/"
                  ? "active homepage hover:z-[50] hover:relative col-span-1  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                  : "homepage hover:z-[50] hover:relative col-span-1 lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"

            }></div>
            <div className={"absolute top-[0]"}>
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
          <Link
            href={"/projektowanie"}
            className={'relative border-grid border border-l-0 border-b-0'}
          >
            <div className={
              router == "/projektowanie"
                  ? "active projektowanie col-span-1 bg-dark  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                  : " projektowanie col-span-1 bg-dark  border-b-0 lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"

            }></div>
            <div className={"absolute top-[0]"}>
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

          <Link
            href={"/wykonawstwo"}
            className={'relative border-grid border border-l-0'}
          >
            <div className={
                            router == "/wykonawstwo"
                                ? "active wykonawstwo col-span-1 bg-dark  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                                : "wykonawstwo col-span-1 bg-dark  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"

                          }></div>
            <div className={"absolute top-[0]"}>
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Wykonawstwo
              </h3>
            </div>{" "}
          </Link>

          <Link
            href={"/generalny-patronat-projektowo-wykonawczy"}
            className={'relative border-grid border border-b-0'}
          >
            <div className={
              router == "/generalny-patronat-projektowo-wykonawczy"
                  ? "active generalny col-span-1 bg-dark  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                  : "generalny col-span-1 bg-dark  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
            }></div>
            <div className={"absolute top-[0]"}>
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Generalny patronat projektowo-wykonawczy
              </h3>
            </div>
          </Link>

          <Link
            href={"/obiekty-systemowe"}
            className={'relative border-grid border border-l-0 border-b-0'}
          >
            <div className={
              router == "/obiekty-systemowe"
                  ? "active obiekty col-span-1 bg-dark  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                  : "obiekty col-span-1 bg-dark lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"

            }></div>
            <div className={"absolute top-[0]"}>
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Obiekty systemowe
              </h3>
            </div>{" "}
          </Link>

          <Link
            href={"/konfigurator-obiektow-systemowych"}
            className={'relative border-grid border border-l-0  border-t-0'}
          >
           <div className={
             router == "/konfigurator-obiektow-systemowych"
                 ? "active konfigurator col-span-1 bg-dark  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                 : "konfigurator col-span-1 bg-dark lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
           }></div>
            <div className={"absolute top-[0]"}>
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Konfigurator obiektów systemowych
              </h3>
            </div>{" "}
          </Link>

          {/*<Link*/}
          {/*  href={"/aktualnosci"}*/}
          {/*  className={'relative'}*/}
          {/*>*/}
          {/*  <div className={*/}
          {/*    router == "/aktualnosci"*/}
          {/*        ? "active aktualnosci col-span-1 bg-dark border-grid border lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"*/}
          {/*        : "aktualnosci col-span-1 bg-dark border-grid border lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"*/}
          {/*  }></div>*/}
          {/*  <div className={"absolute top-[0]"}>*/}
          {/*    <h3*/}
          {/*      className={*/}
          {/*        "text-light px-[30px] py-[32px] font-light text-[21px]" +*/}
          {/*        menuItem*/}
          {/*      }*/}
          {/*    >*/}
          {/*      Aktualności*/}
          {/*    </h3>*/}
          {/*  </div>{" "}*/}
          {/*</Link>*/}

          <Link
            href={"/zespol"}
            className={'relative border-grid border '}
          ><div className={
                                     router == "/zespol"
                                         ? "active zespol col-span-1 bg-dark   lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                                         : "zespol col-span-1 bg-dark  lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                                   }></div>
            <div className={"absolute top-[0]"}>
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Zespół
              </h3>
            </div>{" "}
          </Link>

          <Link
            href={"/kontakt"}
            className={'relative'}
          >
            <div className={
              router == "/kontakt"
                  ? "active kontakt col-span-1 bg-dark border-grid border border-l-0 lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
                  : "kontakt col-span-1 bg-dark border-grid border border-l-0 lg:h-[268px] xl:h-[124px] 2xl:h-[128px] 3xl:h-[174px] 4xl:h-[217px]"
            }></div>
            <div className={"absolute top-[0]"}>
              <h3
                className={
                  "text-light px-[30px] py-[32px] font-light text-[21px]" +
                  menuItem
                }
              >
                Kontakt
              </h3>
            </div>{" "}
          </Link>
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

export default Desktop;
