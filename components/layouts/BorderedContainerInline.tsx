import React from "react";
import classNames from "classnames";


const BorderedContainerInline = ({children, right}) => {

    const borderdContainerClasses = classNames('border-grid', 'border', 'inline-flex',
        // 'xs:py-5 xs:px-[30px]',
        // 'sm:py-5 sm:px-[40px]',
        // 'md:py-[30px] md:px-[50px]',
        // 'lg:p-[50px]',
        // 'xl:p-[30px]',
        // '2xl:p-[30px]',
        // '3xl:p-[40px]',
        // '4xl:p-[60px]',
    'xs:w-full',
        'sm:w-full',
        'md:w-full',
        'lg:w-full',
        'xl:w-[57.2%]',
        '2xl:w-[57.2%]',
        '3xl:w-[57.2%]',
        '4xl:w-[57.2%]',

    right && 'xl:ml-[42.8%] 2xl:ml-[42.8%] 3xl:ml-[42.8%] 4xl:ml-[42.8%]'

        );
    return (
        <div className={borderdContainerClasses}>

            {children}

        </div>
    );

}
export default BorderedContainerInline;