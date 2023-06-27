
"use client"
import Content from "@/components/layouts/aktualnosci/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import WpistHeader from "../../components/layouts/header/singlePostHeader";
import H2Title from "@/components/Typography/H2Title";
import SinglePostContent from "@/components/layouts/singlePost";

export default function Home() {
    return (
        <>
            <WpistHeader>
            H1 Aenean eu leo quam pellentesque ornare sem lacinia quam
            </WpistHeader>
            <SinglePostContent/>
            <CtaNormal />

        </>
    );
}
