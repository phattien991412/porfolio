import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faGithub,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";

const Skill = () => {
  return (
      
    <div id="skill" style={{backgroundColor: "#e6f4f1"}} className="pb-10">
      <h1 className="text-center xl:text-5xl text-3xl pt-10">
        My <span className="text-yellow-500">Skill</span>
      </h1>
      <div className="md:container grid grid-cols-5">
        <ul className="xl:col-start-2 xl:col-span-3 col-span-5 xl:text-2xl text-lg">
          <li
            style={{ borderColor: "#003134a6"}}
            className="border-2 rounded-r-full rounded-l-full pl-4 my-10 py-4 text-green-700"
          >
            <span className="xl:pr-7 pr-2">HTML/CSS</span>
            <span className="text-red-500 mx-3">
              <FontAwesomeIcon className="xl:text-4xl text-2xl" icon={faHtml5} />
            </span>
            <span className="text-blue-500 mx-3">
              <FontAwesomeIcon className="xl:text-4xl text-2xl" icon={faCss3} />
            </span>
            <span className="text-pink-500 mx-3">
              <FontAwesomeIcon className="xl:text-4xl text-2xl" icon={faSass} />
            </span>
            <span className="text-purple-500 mx-3">
              <FontAwesomeIcon className="xl:text-4xl text-2xl" icon={faBootstrap} />
            </span>
            <span className="mx-3 xl:text-xl xl:ml-0 text-md">Antd</span>
            <span className="mx-2 xl:text-xl text-lg md:inline-block hidden">Responsive</span>
          </li>
          <li
            style={{ borderColor: "#003134a6", backgroundColor: "#e6f4f1" }}
            className="border-2 border-black rounded-r-full rounded-l-full pl-4 my-10 py-4 text-green-700"
          >
            <span className="xl:pr-9 pr-3">Javascript</span>{" "}
            <span className="mx-2 text-xl">ES5/ES6</span>{" "}
            <span className="mx-2 text-xl">Axios</span>
          </li>
          <li
            style={{ borderColor: "#003134a6", backgroundColor: "#e6f4f1" }}
            className="border-2 border-black rounded-r-full rounded-l-full pl-4 my-10 py-4 text-green-700"
          >
            <span className="xl:pr-16 pr-7">ReactJs</span>{" "}
            <span className="xl:mx-2 mx-1 xl:text-xl text-md">Reactjs Basic</span>{" "}
            <span className="xl:mx-2 mx-1 xl:text-xl text-md">Router</span>{" "}
            <span className="xl:mx-2 mx-1 xl:text-xl md:ml-0 text-md ml-28">Redux</span>
            <span className="xl:mx-2 mx-1 xl:text-xl text-md">React Hooks</span>
          </li>
          <li
            style={{ borderColor: "#003134a6", backgroundColor: "#e6f4f1" }}
            className="border-2 border-black rounded-r-full rounded-l-full pl-4 my-10 py-4 text-green-700"
          >
            <span className="xl:pr-28 pr-14">Git</span>{" "}
            <span className="mx-2 xl:text-xl text-md">Git Basic</span>{" "}
            <span className="mx-2 xl:text-xl text-md">
              <FontAwesomeIcon className="text-black xl:text-4xl text-2xl" icon={faGithub} />
            </span>{" "}
            <span className="mx-2 text-xl">
              <FontAwesomeIcon className="text-yellow-600 xl:text-4xl text-2xl" icon={faGitlab} />
            </span>
          </li>
          <li
            style={{ borderColor: "#003134a6", backgroundColor: "#e6f4f1" }}
            className="border-2 border-black rounded-r-full rounded-l-full pl-4 my-10 py-4 text-green-700"
          >
            <span className="xl:pr-12 pr-4">Soft Skill</span>{" "}
            <span className="mx-2 xl:text-xl text-md">Team Workd</span>{" "}
            <span className="mx-2 xl:text-xl text-md">Self Study</span>
          </li>
          <li
            style={{ borderColor: "#003134a6", backgroundColor: "#e6f4f1" }}
            className="border-2 border-black rounded-r-full rounded-l-full pl-4 my-10 py-4 text-green-700"
          >
            <span className="xl:pr-10 pr-2">Language</span>{" "}
            <span className="mx-2 xl:text-xl text-md">English</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
