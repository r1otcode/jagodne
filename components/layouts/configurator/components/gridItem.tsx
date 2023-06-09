import classNames from "classnames";
import React from "react";

interface GridItemProps {
    information: string;
    value: string;
}
const GridItem: React.FC<GridItemProps> = ({ information, value }) => {

    const gridItem = classNames('border border-grid text-center text-light gridItemTech',
        'xs:py-[34px] xs:px-[30px]',
        'sm:py-[34px] sm:px-[30px]',
        'md:py-[58px] md:px-[30px]',
        'lg:py-[50px] lg:px-[30px]',
        'xl:py-[37px] xl:px-[30px]',
        '2xl:py-[30px] 2xl:px-[30px]',
        '3xl:py-[30px] 3xl:px-[30px]',
        '4xl:py-[30px] 4xl:px-[30px]',
        )
    const gridItemInformation = classNames('font-normal',
        'xs:text-[14px]',
        'sm:text-[14px]',
        'md:text-[14px]',
        'lg:text-[15px]',
        'xl:text-[15px]',
        '2xl:text-[15px]',
        '3xl:text-[15px]',
        '4xl:text-[18px]',
        )
    const gridItemValue = classNames('font-black',
        'xs:text-[27px] xs:mt-[20px]',
        'sm:text-[27px] sm:mt-[20px]',
        'md:text-[27px] md:mt-[20px]',
        'lg:text-[30px] lg:mt-[20px]',
        'xl:text-[30px] xl:mt-[20px]',
        '2xl:text-[30px] 2xl:mt-[20px]',
        '3xl:text-[30px] 3xl:mt-[20px]',
        '4xl:text-[30px] 4xl:mt-[20px]',
        )

    return (
        <div className={gridItem}>
            <div className={gridItemInformation}>{information}</div>
            <div className={gridItemValue}>{value}</div>
        </div>
    )
}
export default GridItem;