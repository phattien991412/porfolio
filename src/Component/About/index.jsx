import React from "react";
import Avatar from "../../assets/img/ava2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faUser, faLocationPin, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'



const About = () => {
  
  return (
    <div id="about" className="relative">
      <div
        style={{
          backgroundColor: "#003134a6",
          clipPath: "ellipse(110% 60% at 0% 0%)"
        }}
        className="absolute inset-0 w-full"
      ></div>
      <div className="flex justify-center"  data-aos="fade-up" data-aos-duration="1000">
        <div style={{backgroundColor: "#e6f4f1"}}
          className="xl:container text-center border rounded xl:my-20 my-10 xl:w-3/4 md:w-4/5 z-20 shadow-lg shadow-black"
        >
          <h1 className="py-10 xl:text-5xl text-3xl">
            About <span className="text-yellow-500">Me</span>
          </h1>
          <div className="xl:grid xl:grid-cols-3 xl:py-10">
            <img
              className="w-full xl:mb-0 mb-20 xl:block hidden"
              style={{ borderRadius: "50%" }}
              src={Avatar}
              alt=""
            />
            <div className="col-span-2 ml-10">
              <ul className="text-left">
                <li className="mb-14 border-b-2 xl:w-9/12">
                  <span
                    style={{ backgroundColor: "#003134a6" }}
                    className="border text-lg xl:pr-10 pr-2 pl-2 py-1 xl:pl-4 xl:mr-4 md:mr-6 text-white"
                  >
                  <FontAwesomeIcon className="pr-2" icon={faUser}/>   Name:
                  </span>{" "}
                  <span style={{ color: "#003134" }} className="text-lg">
                    Trinh Tien Phat
                  </span>
                </li>
                <li className="mb-14 border-b-2 xl:w-9/12">
                  <span
                    style={{ backgroundColor: "#003134a6" }}
                    className="border text-lg xl:pr-6 pr-2 pl-2 py-1 xl:pl-4 xl:mr-4 md:mr-3 text-white"
                  >
                   <FontAwesomeIcon className="pr-2" icon={faLocationPin}/> Address:
                  </span>{" "}
                  <span style={{ color: "#003134" }} className="text-lg">
                    Ba Diem, Hoc Mon, TP.HCM
                  </span>
                </li>
                <li className="mb-14 border-b-2 xl:w-9/12">
                  <span
                    style={{ backgroundColor: "#003134a6" }}
                    className="border text-lg xl:pr-11 pr-2 pl-2 py-1 xl:pl-4 xl:mr-4 md:mr-7 text-white"
                  >
                  <FontAwesomeIcon className="pr-2" icon={faEnvelope}/>  Email:
                  </span>{" "}
                  <span style={{ color: "#003134" }} className="text-lg">
                    phattien991412@gmail.com
                  </span>
                </li>
                <li className="xl:mb-14 mb-10 border-b-2 xl:w-9/12">
                  <span
                    style={{ backgroundColor: "#003134a6" }}
                    className="border text-lg xl:pr-9 pr-2 pl-2 py-1 xl:pl-4 xl:mr-4 md:mr-5 text-white"
                  >
                  <FontAwesomeIcon className="pr-2" icon={faPhone}/>  Phone:
                  </span>{" "}
                  <span style={{ color: "#003134" }} className="text-lg">
                    0938068917
                  </span>
                </li>
              </ul>

              <div className="xl:pb-0 pb-8">
                <ul className="flex">
                  <li className="mx-4 md:mx-0 md:mr-4">
                    <a href="https://fb.com/phattien991412" target={"_blank"}>
                    <FontAwesomeIcon fontSize={32} icon={faFacebook} className="text-yellow-600 hover:text-blue-500 duration-300"/>
                    </a>
                  </li>
                  <li className="mx-4">
                    <a
                      href="https://github.com/phattien991412"
                      target={"_blank"}
                    >
                      <FontAwesomeIcon fontSize={32} icon={faGithub} className="text-yellow-600 hover:text-black  duration-300"/>
                    </a>
                  </li>
                  <li className="mx-4">
                    <a href="https://instargram.com" target={"_blank"}>
                    <FontAwesomeIcon fontSize={32} icon={faInstagram} className="text-yellow-600 hover:text-pink-600 duration-300"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
