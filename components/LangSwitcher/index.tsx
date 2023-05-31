import React from 'react'
import classNames from "classnames";

const LangSwitcher = () => {
    const langSwitcherClasses = classNames('mr-[40px]')
    const currentLang = classNames('text-light')
    const nextLang = classNames('text-light')
    return (
        <div className={langSwitcherClasses}>
            <span className={currentLang}>Polski</span> •
            <span className={nextLang}>English</span>
        </div>
    )
}

export default LangSwitcher