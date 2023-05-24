import React from 'react'
import classNames from 'classnames'

const buttonClasses = classNames(
    'flex justify-center',
    )

const Button = (props:any) => {
    return (
        <a className="flex justify-center w-max	 text-light bg-accent rounded-[50px] px-[33px] py-[20px]" href={props.href}>{props.children}</a>
    )
}
export default Button;