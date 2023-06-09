import classNames from "classnames";
import React from "react";
import Container from "@/components/layouts/container";


const Grid: React.FC<{children: React.ReactNode}> = ({children}  ) => {
    const gridClasses = classNames('grid',
        'xs:grid-cols-1 xs:mb-[100px]',
        'sm:grid-cols-1 sm:mb-[100px]',
        'md:grid-cols-2 md:gap-[10px] md:mb-[100px]',
        'lg:grid-cols-3 lg:gap-[10px] lg:mb-[100px]',
        'xl:grid-cols-3 xl:gap-[20px] xl:mb-[140px]',
        '2xl:grid-cols-3 2xl:gap-[40px] 2xl:mb-[140px]',
        '3xl:grid-cols-3 3xl:gap-[40px] 3xl:mb-[140px]',
        '4xl:grid-cols-3 4xl:gap-[40px] 4xl:mb-[140px]',
        )
    return (

        <div className={gridClasses}>
            {children}
        </div>

    )
}
export default Grid