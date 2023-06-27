import classNames from "classnames";
import React, {ReactNode} from "react";
const bttnClasses = classNames( 'bg-[#146EBE]', 'w-[60px]', 'h-[60px]', 'flex', 'items-center', 'justify-center rounded-full cursor-pointer'


)
const BackButton:React.FC = () => {
    return (
        <div className={bttnClasses}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4853 10L1.51473 10M1.51473 10L10 18.4853M1.51473 10L10 1.51472" stroke="#ECECEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
    )

}

export default BackButton;