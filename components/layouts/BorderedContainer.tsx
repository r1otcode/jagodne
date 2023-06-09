import React from "react";
import classNames from "classnames";

interface BorderedContainerInterface {
    children: React.ReactNode;
    hideLeftBorder?: boolean;
    basis?: boolean;
    hideTopBorder?: boolean;
}
const BorderedContainer = ({children, hideLeftBorder, basis, hideTopBorder} : BorderedContainerInterface) => {

    const borderdContainerClasses = classNames('border-grid', 'border',

        hideLeftBorder ? 'xs:border-t-0 sm:border-t-0 xs:border sm:border md:border lg:border border-l-0' : 'border',
        hideTopBorder && 'border-t-0 ',
        basis && 'basis-0 grow'


        );
    return (
        <div className={borderdContainerClasses}>

            {children}

        </div>
    );

}
export default BorderedContainer;