import React, {useEffect, useState} from 'react'
import classNames from "classnames";
interface LangSwitcherProps {
    mobile?: boolean
}
const LangSwitcher = ({mobile}: LangSwitcherProps ) => {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        if (isShown) {
            document.body.classList.add("cursor-pointer");
        } else {
            document.body.classList.remove("cursor-pointer");
        }
    }, [isShown]);
    const langSwitcherClasses = classNames('mr-[40px]',
    mobile ? 'xs:block sm:block md:block hidden' : 'xs:hidden sm:hidden md:hidden'
    )
    const currentLang = classNames('text-light opacity-30 text-[15px] font-medium z-[10] relative',
        mobile && 'xs:hidden sm:hidden md:hidden'


    )
    const nextLang = classNames('text-light font-medium z-[10] relative',
        mobile ? 'text-[14px]' : 'text-[15px]'

    )
    return (
        <div className={langSwitcherClasses}>
            <span  onMouseEnter={() => setIsShown(true)}
                   onMouseLeave={() => setIsShown(false)} className={currentLang}>Polski <span className={'mx-[5px]'}>•</span> </span>
            <span  onMouseEnter={() => setIsShown(true)}
                   onMouseLeave={() => setIsShown(false)} className={nextLang}> English</span>
        </div>
    )
}

export default LangSwitcher