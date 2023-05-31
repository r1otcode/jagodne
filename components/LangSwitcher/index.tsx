import React from 'react'
import classNames from "classnames";

const LangSwitcher = () => {
    const langSwitcherClasses = classNames('mr-[40px] xs:hidden sm:hidden md:hidden')
    const currentLang = classNames('text-light opacity-30 text-[15px] font-medium')
    const nextLang = classNames('text-light text-[15px] font-medium')
    return (
        <div className={langSwitcherClasses}>
            <span className={currentLang}>Polski <span className={'mx-[5px]'}>•</span> </span>
            <span className={nextLang}> English</span>
        </div>
    )
}

export default LangSwitcher