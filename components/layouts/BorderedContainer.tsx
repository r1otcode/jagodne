import React from "react";
import classNames from "classnames";


const BorderedContainer = ({children, right, hideLeftBorder}) => {
    const smallerContainerClasses = classNames(


    );
    const borderdContainerClasses = classNames('border-grid', 'border',

        hideLeftBorder ? 'xs:border-t-0 sm:border-t-0 xs:border sm:border md:border lg:border border-l-0' : 'border',



        );
    return (
        <div className={borderdContainerClasses}>

            {children}

        </div>
    );

}
export default BorderedContainer;