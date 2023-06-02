import React from 'react'
import classNames from "classnames";
interface LangSwitcherProps {
    mobile?: boolean
}
const LangSwitcher = ({mobile}: LangSwitcherProps ) => {
    const langSwitcherClasses = classNames('mr-[40px]',
    mobile ? 'xs:block sm:block md:block hidden' : 'xs:hidden sm:hidden md:hidden'
    )
    const currentLang = classNames('text-light opacity-30 text-[15px] font-medium',
        mobile && 'xs:hidden sm:hidden md:hidden'


    )
    const nextLang = classNames('text-light font-medium',
        mobile ? 'text-[14px]' : 'text-[15px]'

    )
    return (
        <div className={langSwitcherClasses}>
            <span className={currentLang}>Polski <span className={'mx-[5px]'}>•</span> </span>
            <span className={nextLang}> English</span>
        </div>
    )
}

export default LangSwitcher