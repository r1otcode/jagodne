import classNames from "classnames";


const CloseMenu = ({ close, open, state }) => {
    const menuButtonClasses = classNames(
        "hover:z-50  hover:relative",
        "xs:w-[50px]",
        "sm:w-[50px]",
        "md:w-[50px]",
        "lg:w-[50px]",
        "xl:w-[50px]",
        "2xl:w-[60px]",
        "3xl:w-[60px]",
        "4xl:w-[60px]",

    );
    return (
        <div

            onClick={() => (state ? close() : open())}
            className={menuButtonClasses}
        >
            <img
                src={"/assets/close.svg"}
                alt="Menu Opener"
                className={menuButtonClasses}
            />
        </div>
    )
}
export default CloseMenu