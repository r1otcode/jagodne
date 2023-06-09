import React from 'react'
import classNames from "classnames";

type ContainerProps = {
    children: React.ReactNode
    center?: boolean

}


const Container = ({ children, center} : ContainerProps ) => {
    const containerClasses = classNames('mx-auto',

        'xs:max-w-[320px]',
        'sm:max-w-[350px]',
        'md:max-w-[420px]',
        'lg:max-w-[598px]',
        'xl:max-w-[796px]',
        '2xl:max-w-[1062px]',
        '3xl:max-w-[1194px]',
        '4xl:max-w-[1494px]',
        center && 'flex justify-center items-center h-[100vh]'
    )
    return (
        <div className={containerClasses}>
            {children}
        </div>
    )
}
export default Container