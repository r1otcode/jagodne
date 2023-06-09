"use client";

import ZespolHeader from "@/components/layouts/header/zespol";
import Content from "@/components/layouts/zespol/content";
import TeamFlex from "@/components/layouts/team/teamFlex";
import CtaZespol from "@/components/layouts/CtaZespol";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";




export default function Home() {
    return (
        <>
            <DefaultHeader title={'Zespół'} description={'Patrzymy tam, gdzie patrzy biznes. Planujemy na dziś i jutro. Przekształcamy wizje w zysk, który stoi na solidnych fundamentach.'}>
                Wszystkie kompetencje pod jednym dachem
            </DefaultHeader>


            <Content />
            <TeamFlex />
            <CtaZespol />
           
          </>
    );
}
