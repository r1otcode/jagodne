"use client";

import ZespolHeader from "@/components/layouts/header/zespol";
import Content from "@/components/layouts/zespol/content";
import TeamFlex from "@/components/layouts/team/teamFlex";
import CtaZespol from "@/components/layouts/CtaZespol";




export default function Home() {
    return (
        <>
            <ZespolHeader />

            <Content />
            <TeamFlex />
            <CtaZespol />
           
          </>
    );
}
