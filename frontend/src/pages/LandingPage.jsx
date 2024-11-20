import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import style from '../css/Home.css'

export const LandingPage = () => {
  const routeTo = useNavigate()
  useGSAP(() => {
    gsap.from(".loader", {
      opacity: 0,
      duration: 5,
    });
  });

  return (
    <div
      className="loader"
      style={{
        border: "2px solid white",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div className="head">
          <h1 >WELCOME TO LOOP </h1>
        </div>
        <br></br>
        <div style={{display:'flex', alignItems:"center", justifyContent:"center"}}>
          <button  className="homebtn"  onClick={()=>{routeTo("/home")}}>click</button>
        </div>
      </div>
    </div>
  );
};