import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
        <div>
          <h1 style={{fontSize:"5rem"}}>WELCOME TO LOOP </h1>
        </div>
        <br></br>
        <div style={{display:'flex', alignItems:"center", justifyContent:"center"}}>
          <button  style={{
                  marginTop: "2.5%",
                  width: "10%",
                  backgroundColor: "black",
                  border: "none",
                  color: "white",
                  fontSize: "1rem",
                  borderRadius: "0.5rem",
                  fontFamily: "sans-serif",
                  height:"4vh",}}  onClick={()=>{routeTo("/home")}}>click</button>
        </div>
      </div>
    </div>
  );
};