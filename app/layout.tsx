"use client"
import './globals.css'
import localFont from '@next/font/local'
import React from "react";
import MouseCross from "@/components/mouseCross";
import Footer from "@/components/layouts/Footer";
import {AnimatePresence} from "framer-motion";
import Head from "next/head";

const Axiforma = localFont({
  src: [
    {
      path: '../public/fonts/Kastelov-Axiforma-300Book.woff',
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
      path: '../public/fonts/Kastelov-Axiforma-800ExtraBold.woff',
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


  return (
 <AnimatePresence type='wait' initial={false}>
    <html lang="en" className={`${Axiforma.variable} font-sans bg-dark`}>
    <head>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.svg" />

    </head>

      <body>

      <MouseCross/>
      {children}
      <Footer />
      <div className="backdrop-animation"></div>
      </body>
    </html>
 </AnimatePresence>

  )
}
