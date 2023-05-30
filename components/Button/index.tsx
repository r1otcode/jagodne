"use client"
import React, {useEffect, useState} from 'react'
import classNames from 'classnames'

const buttonClasses = classNames(
    'flex justify-center',
    )

const Button = (props:any) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (isShown) {
            document.body.classList.add('cursor-pointer')
        } else {
            document.body.classList.remove('cursor-pointer')
        }

    }, [isShown])
    return (
        <a
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="flex justify-center w-max	 text-light bg-accent rounded-[50px] px-[33px] py-[20px] hover:z-50 hover:relative transition-control" href={props.href}>{props.children}</a>
    )
}
export default Button;