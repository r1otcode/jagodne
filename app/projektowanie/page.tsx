"use client";

import ProjektowanieHeader from "@/components/layouts/header/projektowanie";
import Content from "@/components/layouts/projektowanie/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import MemberImage from "@/components/layouts/team/teamMember/memberImage";
import MemberTitle from "@/components/layouts/team/teamMember/memberTitle";
import MemberPosition from "@/components/layouts/team/teamMember/memberPosition";




export default function Home() {
    return (
        <>
            <ProjektowanieHeader />

            <Content />

            <CtaNormal />
            <MemberImage src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=1556&ch=690" alt="obraz"/>
            <MemberTitle children="Jacek Jackowski" />
            <MemberPosition children=" Prezes Zarządu" />
          </>
    );
}
