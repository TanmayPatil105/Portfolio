import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-success my-auto" style={{fontSize:"50px",fontFamily:"'M PLUS Code Latin', sans-serif"}} >
      <Typewriter
        options={{
          strings: [
            "Developer",
            "Linux Enthusiast",
            "DevOps",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 60,
        }}
      />
    </div>
  );
}

export default Type;