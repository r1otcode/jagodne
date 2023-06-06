"use client";

import ProjektowanieHeader from "@/components/layouts/header/projektowanie";
import Content from "@/components/layouts/projektowanie/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import MemberImage from "@/components/layouts/team/teamMember/memberImage";
import MemberTitle from "@/components/layouts/team/teamMember/memberTitle";
import MemberPosition from "@/components/layouts/team/teamMember/memberPosition";
import TeamFlex from "@/components/layouts/team/teamFlex";




export default function Home() {
    return (
        <>
            <ProjektowanieHeader />

            <Content />

            <CtaNormal />
           <TeamFlex />
          </>
    );
}
