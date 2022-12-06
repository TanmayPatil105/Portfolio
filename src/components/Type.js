import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <div className="text-success my-auto" style={{fontSize:props.size,fontFamily:"'M PLUS Code Latin', sans-serif"}} >
      <Typewriter
        options={{
          strings: [
            "Developer",
            "'Linux Enthusiast'",
            "DevOps",
            "Open-Source Contributor",
            "I love making CLI apps ;)",
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