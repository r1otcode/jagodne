import classNames from "classnames";


const BiggerContainer = ({children, right}) => {
    const smallerContainerClasses = classNames(
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
        <div className={smallerContainerClasses}>
            {children}
        </div>
    );
}
export default BiggerContainer;