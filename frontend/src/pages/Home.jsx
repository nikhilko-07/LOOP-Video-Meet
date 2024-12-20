import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from '../images/slider1.jpeg';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import  "../css/Home.css"
function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    
    navigate(`/${meetingCode}`);
  };

  const [randomString, setRandomString] = useState("");

  const generateRandomString = () => {
    const length = 40; // Length of the random string
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  const copyToClipboard = () => {
    const newString = generateRandomString();
    setRandomString(newString);
    navigator.clipboard
      .writeText(newString)
      .then(() => {
        alert("Copied to clipboard: " + newString);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  useGSAP(() => {
    gsap.from(".body", {
      opacity: 0,
      duration: 2,
    });
  });
  return (
    <>
      <div 
        className="container-fluid body"
        style={{ height: "100vh", width: "100%" }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <div
            className="col-6"
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
            }}
          >
            <div className="homeintro" >
              <div style={{ display: "flex", justifyContent: "start" }}>
                <h1>
                  Video calls and meetings benefit's <br></br>for everyone
                </h1>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  color: "gray",
                }}
              >
                <h4>
                  Celebrate from anywhere by connecting <br></br>with LOOP
                  MEET.
                </h4>
              </div>
              <div style={{ display: "flex", justifyContent: "start" }}>
                <button
                  className="button"
                  onClick={copyToClipboard}
                >
                  Code
                </button>
                {randomString && <p>Generated : {randomString}</p>}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "2.5%",
                }}
              >
                <input
                className="inp"
                  style={{
                    marginTop: "2.5%",
                    boxSizing: "border-box",
                    borderRadius: "0.2rem",
                    border: "2px solid gray",
                  }}
                  placeholder="Enter Code"
                  onChange={(e) => setMeetingCode(e.target.value)}
                />
                <button
                className="button"
                  onClick={handleJoinVideoCall}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-6"
            style={{
              height: "100%",
              alignItems: "center",
            }}
          >
            <div
              style={{
                gap: "2%",
                display: "flex",
                height: "10%",
                alignItems: "center",
                width: "100%",
                justifyContent: "end",
                height:"4vh",
              }}
            >
              <button
              className="button1"
              
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </button>
              <button
              className="button1"
          
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/auth");
                }}
              >
                LogOut
              </button>
            </div>
            <br></br>
            <div style={{ height:"50%", marginTop:"20%",width:"50%",marginLeft:"20%",}}>
                <img className="introimg" src={slider1}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);