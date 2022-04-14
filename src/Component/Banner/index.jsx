import React from "react";
import Typewriter from "typewriter-effect";
import Avatar from "../../assets/img/ava.png"
import fileCv from "../../assets/file/CV-TrinhTienPhat.pdf"
import {saveAs} from "file-saver"
const Banner = () => {
  const saveFile = () => {
    saveAs (fileCv)
  }
  return (
    <div style={{ backgroundColor: "#e6f4f1" }} className="xl:container px-10">
      <div className="xl:grid xl:grid-cols-2 xl:pt-40 pt-28 ">
        <div>
          <h1 style={{color: "#003134a6"}} className="text-xl font-semibold mb-10">Welcome!</h1>
          <div style={{color: "#003134a6"}} className="xl:text-7xl text-4xl xl:h-24 h-16 font-semibold">
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm a Front-end Developer!")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("Have A Good Day!")
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div className="xl:mt-24 mt-16">
            <p style={{color: "#003134a6"}} className="text-base font-medium xl:pr-24 xl:pb-0 pb-10">
              I'm passionate about coding, being patient and responsible for
              working help me implement completely assigned tasks and always
              keep concentrated on learning to improve my skills to become a
              Fullstack Developer.
            </p>
          </div>

          <div className="pt-16 ml-10">
            <button onClick={saveFile} className="px-4 py-2 border border-red-400 bg-red-400 rounded text-white shadow-xl animate-bounce">Download CV</button>
          </div>
        </div>
        <div >
          <img className="xl:mx-0 lg:mx-auto" src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
