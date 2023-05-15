



const Button = (props:any) => {
    return (
        <a className="flex justify-center w-max	 text-white bg-accent rounded-[50px] px-[33px] py-[20px]" href={props.href}>{props.children}</a>
    )
}
export default Button;