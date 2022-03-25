import React from "react";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Resume = () => {
  return (
    <div id="resume" className="xl:my-20 my-10">
      <h1 className="text-center xl:text-5xl text-3xl">
        My <span className="text-yellow-500">Resume</span>
      </h1>
      <div className="md:container lg:grid lg:grid-cols-8 xl:grid-cols-12 block mt-10">
        {/* Experience 1 */}
        <div data-aos="fade-right" data-aos-duration="1000" className="box-content xl:col-start-3 lg:col-span-4  lg:mr-8 lg:mb-8 xl:mb-0 border-2 border-dashed border-green-600 hover:bg-white hover:border-solid hover:shadow-lg duration-500">
          <div className="p-4">
            <h1 className="text-xl font-medium pb-2 ">
              California Fitness & Yoga
            </h1>
            <p className="text-green-700 ml-3 font-medium">
              Oct 2018 - Oct-2021{" "}
            </p>
            <ul className="list-disc ml-8">
              <li>Receptionist</li>
              <li>Working with CRM & Jira system</li>
              <li>Working with clients to sign contract, explain the rule</li>
              <li>Solving paper work with colleagues in many departments</li>
              <li>Achieve best staff in March 2019</li>
            </ul>
          </div>
        </div>

        {/* Edu 1 */}
        <div data-aos="fade-left" data-aos-duration="1000" className="box-content lg:col-span-4  lg:ml-8 lg:mb-8 xl:mb-0  border-2 border-dashed border-green-600 hover:bg-white hover:border-solid hover:shadow-lg duration-500">
          <div className="p-4">
            <h1 className="text-xl font-medium pb-2 ">
              University of Transport
            </h1>
            <p className="text-green-700 ml-3 font-medium">2017 - 2021 </p>
            <ul className="list-disc ml-8">
              <li>Major: Automotor Mechanic</li>
              <li>Automotive technical service industry</li>
              <li>
                Learn about mechanics, electricity, electronics, automation.
              </li>
              <li>Processing technology, machine manufacturing.</li>
            </ul>
          </div>
        </div>

        {/*  */}
        <div data-aos="fade-right" data-aos-duration="1000" className="xl:block hidden col-start-1 col-span-2 translate-x-7 translate-y-6">
          <h1 className="-rotate-90 text-5xl font-medium text-center text-gray-500 border-b-4">
            EXPERIENCE
          </h1>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000"  className="xl:block hidden col-start-11 col-span-2 -translate-x-7 -translate-y-5">
          <h1 className="rotate-90 text-5xl font-medium text-center text-gray-500 border-b-4">
            EDUCATION
          </h1>
        </div>
        {/*  */}
        {/* Exp 2 */}
        <div data-aos="fade-right" data-aos-duration="1000"  className="box-content xl:col-start-3 col-span-4 lg:mr-8 border-2 border-dashed border-green-600 hover:bg-white hover:border-solid hover:shadow-lg duration-500">
          <div className="p-4">
            <h1 className="text-xl font-medium pb-2">Personal Project</h1>
            <p className="text-green-700 ml-3 font-medium">
              Jan 2022 - Present{" "}
            </p>
            <ul className="list-disc ml-8">
              <li>Learning and practicing with many Front-end projects</li>
              <li>Working on my own projects with learned Front-end skills</li>
            </ul>
          </div>
        </div>

        {/* Edu 2 */}
        <div data-aos="fade-left" data-aos-duration="1000"  className="box-content  col-span-4 lg:ml-8 border-2 border-dashed border-green-600 hover:bg-white hover:border-solid hover:shadow-lg duration-500">
          <div className="p-4">
            <h1 className="text-xl font-medium pb-2 ">Cybersoft Academy</h1>
            <p className="text-green-700 ml-3 font-medium">
              March 2020 - Oct 2021
            </p>
            <ul className="list-disc ml-8">
              <li>Front-end Foundation Course</li>
              <li>Basic knowledge HTML/CSS, Javascript, SASS/SCSS</li>
              <li>Framework: ReactJs, Bootstrap 4, TailwindCss</li>
              <li>Library: MaterialUI, Antd</li>
              <li>Git: Github, Gitlab</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
