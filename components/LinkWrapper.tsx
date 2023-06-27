import Link from "next/link";
import {useEffect, useState} from "react";
import useStore from "@/context";
import {useRouter} from "next/navigation";


const LinkWrapper = ({ children, href, ...rest }) => {
    const [isShown, setIsShown] = useState(false);

    // @ts-ignore
    const bears = useStore(store => store.loading)
    // @ts-ignore
    const setAnimation = useStore(state => state.setLoading)
    useEffect(() => {
        if (isShown) {
            document.body.classList.add("cursor-pointer");
        } else {
            document.body.classList.remove("cursor-pointer");
        }
    }, [isShown]);
    const router = useRouter();

    const handleClick = (e:any) => {
        e.preventDefault();
        setIsShown(false)
        setAnimation()

        setTimeout(() => {
            router.push(href);
        }, 2340);
    };
    useEffect(() => {
        console.log(bears);
    }, [bears]);

    return (
        <Link  onMouseEnter={() => setIsShown(true)}
               onMouseLeave={() => setIsShown(false)}
               onClick={handleClick}
               href={href}>{children}</Link>
    )
}

export default LinkWrapper