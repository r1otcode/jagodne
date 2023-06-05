"use client"
import Paragraph from "@/components/Typography/Paragraph";
import HomepageHeader from "@/components/layouts/header/homepage";
import HowWeDoIt from "@/components/layouts/homepage/howWeDoIt";
import Cta from "@/components/layouts/Cta";
import {createContext, useContext, useState} from 'react';
import AnimationContext from '../context'





export default function Home() {
    

    return (


      <AnimationContext.Provider value={true}>

                  <HomepageHeader/>


                    <HowWeDoIt/>


                <Cta/>
      </AnimationContext.Provider>






  )
}
