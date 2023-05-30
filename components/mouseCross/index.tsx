"use client";
import {useEffect, useRef, useState} from "react";
import {useMousePosition} from "@/utils/useMousePosition";

const MouseCross = (props: any) => {
    const mouseCross = useMousePosition()
    const vt = useRef(null)
    const hl = useRef(null)
    useEffect(() => {
          if (vt.current && hl.current) {
                vt.current.style.left = `${mouseCross.x}px`
                hl.current.style.top = `${mouseCross.y}px`
            }

    }, [mouseCross])
    useEffect(() =>
    {
        document.body.classList.add("font-light");
        document.body.classList.add("text-gray-700");
    },[]);
    return (
        <div className="cursor">
            <div className="vt" ref={vt}></div>
            <div className="hl" ref={hl}></div>
        </div>
    );
    };
export default MouseCross;