"use client"
import React, {useContext, useEffect, useState} from 'react'
import classNames from 'classnames'
import Link from "next/link";
import {useRouter} from "next/navigation";
import AnimationContext from '../../context'

const Button = (props:any) => {
    const buttonClasses = classNames(
        'flex justify-center w-max  text-light bg-accent rounded-[50px] px-[33px] py-[20px] hover:z-50 hover:relative transition-control',
    props.dark ? 'bg-dark border border-[#505050]' : 'bg-accent ',
        props.mobileHide && 'xs:hidden sm:hidden '
    )
    const [isShown, setIsShown] = useState(false);
    const animation = useContext(AnimationContext);

    useEffect(() => {
        if (isShown) {
            document.body.classList.add('cursor-pointer')
        } else {
            document.body.classList.remove('cursor-pointer')
        }

    }, [isShown])
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        setAnimation('true')

        setTimeout(() => {
            router.push(props.href);
        }, 3000);
    }
    useEffect(() => {
        console.log(animation)
    }, [animation])

    return (
        <Link
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={buttonClasses} href={props.href} onClick={handleClick}>{props.children}</Link>
    )
}
export default Button;