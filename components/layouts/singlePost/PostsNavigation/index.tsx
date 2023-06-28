// use client
import React, { useState } from "react";
import classNames from "classnames";
import TextSpacer from "../../TextSpacer";
import Paragraph from "@/components/Typography/Paragraph";
import { useEffect } from "react";

export default function PostsNavigation() {
    const PostsNavigationClasses = classNames('border-grid', 'border', 'border-l-0 ', 'border-r-0 ',



    );

    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const NavWrapperClasses = classNames(
        'flex', 'justify-between', 'text-light',
        'xs:py-5 ',
        'sm:py-5 ',
        'md:py-[30px]',
        'lg:py-[50px]',
        'xl:py-[30px]',
        '2xl:py-[30px]',
        '3xl:py-[40px]',
        '4xl:py-[60px]',
    )
    const imgClasses = classNames(
        'w-[60px]',
        isShown ? 'z-[12]' : ''
    )
    const imgClasses2 = classNames(
        'w-[60px]',
        isShown2 ? 'z-[12]' : ''
    )
    const mobileDisplay = classNames(
        'inline',
        'xs:hidden',
        'sm:hidden',
        'md:hidden',
        'lg:hidden',
        'xl:inline',
        '2xl:inline',
        '3xl:inline',
        '4xl:inline',


    )
    useEffect(() => {

        if (isShown) {
            document.body.classList.add("cursor-pointer_post");
        } else {
            document.body.classList.remove("cursor-pointer_post");
        }
    }, [isShown]);
    useEffect(() => {

        if (isShown2) {
            document.body.classList.add("cursor-pointer_post");
        } else {
            document.body.classList.remove("cursor-pointer_post");
        }
    }, [isShown2]);
    return (
        <>
            <div className="overlay"></div>
            <div className={PostsNavigationClasses}>

                <div className={NavWrapperClasses}>
                    <div className="flex items-center gap-x-5 "> <img className={imgClasses} onMouseEnter={() => (setIsShown(true))} onMouseLeave={() => (setIsShown(false))} src="./assets/arrow_outline_left_circle.svg" />
                        <Paragraph><span className="xs:hidden">Następny </span><span className={mobileDisplay}>wpis</span></Paragraph></div>

                    <div className="flex items-center gap-x-5  ">
                        <Paragraph><span className="xs:hidden">Poprzedni</span> <span className={mobileDisplay}>wpis</span></Paragraph>
                        <img className={imgClasses2} onMouseEnter={() => (setIsShown2(true))} onMouseLeave={() => (setIsShown2(false))} src="./assets/arrow_outline_right_circle.svg" /></div>
                </div>


            </div>
        </>
    );
}