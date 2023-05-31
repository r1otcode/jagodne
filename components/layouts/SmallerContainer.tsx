import classNames from "classnames";


const SmallerContainer = ({children}) => {
    const smallerContainerClasses = classNames(
        'xs:w-full',
        'sm:w-full',
        'md:w-full',
        'lg:w-full',
        'xl:w-[42.8%]',
        '2xl:w-[42.8%]',
        '3xl:w-[42.8%]',
        '4xl:w-[42.8%]',

        );
    return (
        <div className={smallerContainerClasses}>
            {children}
        </div>
    );
}
export default SmallerContainer;