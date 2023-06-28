// use client
import React, { useState } from "react";
import classNames from "classnames";
import TextSpacer from "../../TextSpacer";
import Paragraph from "@/components/Typography/Paragraph";


export default function PostsNavigation() {
    const PostsNavigationClasses = classNames('border-grid', 'border' , 'border-l-0 ','border-r-0 ',
    
    

    );
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
       'w-[60px]'
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
  return (
    <>
      <div className={PostsNavigationClasses}>
       
        <div className={NavWrapperClasses}>
            <div className="flex items-center gap-x-5"><img className={imgClasses} src="./assets/arrow_outline_left_circle.svg" /><Paragraph><span className="xs:hidden">Następny </span><span className={mobileDisplay}>wpis</span></Paragraph></div>
            <div className="flex items-center gap-x-5"> <Paragraph><span className="xs:hidden">Poprzedni</span> <span className={mobileDisplay}>wpis</span></Paragraph><img className={imgClasses} src="./assets/arrow_outline_right_circle.svg" /></div>
        </div>
      
       
      </div>
    </>
  );
}