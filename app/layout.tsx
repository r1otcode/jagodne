"use client"
import './globals.css'
import localFont from '@next/font/local'
import React, {useEffect, useState} from "react";
import MouseCross from "@/components/mouseCross";
import Footer from "@/components/layouts/Footer";
import useStore from "@/context";
import {AnimatePresence, motion} from "framer-motion";
import {hasCookie, setCookie} from "cookies-next";



const Axiforma = localFont({
  src: [
    {
      path: '../public/fonts/axiforma/Axiforma-Thin.ttf',
      weight: '100'
    },
    {
      path: '../public/fonts/axiforma/Axiforma-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Kastelov-Axiforma-400Regular.woff',
      weight: '400'
    },
    {
      path: '../public/fonts/Kastelov-Axiforma-500Medium.woff',
      weight: '500'
    },
    {
      path: '../public/fonts/axiforma/Axiforma-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/axiforma/Axiforma-ExtraBold.ttf',
      weight: '800'
    },
    {
      path: '../public/fonts/Kastelov-Axiforma-900Black.woff',
      weight: '900'
    }
  ],
  variable: '--font-Axiforma'
})


// export const metadata = {
//   title: 'Jagodne',
//   description: 'Jagodne',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // @ts-ignore
  const loading = useStore((store) => store.loading);





  return (

    <html lang="en" className={`${Axiforma.variable} font-sans bg-dark`}>



    <head>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.svg" />
      <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
      <title>Jagodne</title>

    </head>

      <body className={'antialiased'}>

      <MouseCross/>

      {children}

      <Footer />
      <div className="backdrop-animation"></div>
      </body>
    </html>


  )
}
