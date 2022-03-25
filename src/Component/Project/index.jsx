import React from "react";
import Slider from "react-slick";
import projectImg1 from "../../assets/img/project1.PNG";
import projectImg2 from "../../assets/img/project2.PNG";

import "./index.css";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };
  return (
    <div id="project" className="xl:mt-10 xl:mb-24 mb-16">
      <h2 className="xl:text-5xl text-3xl text-center py-10">
        {" "}
        My <span className="text-yellow-500">Project</span>
      </h2>
      <Slider {...settings}>
        <div className="relative flex w-1/2" data-aos="flip-left" data-aos-duration="1500">
          <div>
            <img
              src={projectImg1}
              alt="img"
              className="xl:w-3/5 w-full mx-auto rounded-xl xl:shadow-2xl shadow-md"
            />
          </div>
          <div
            style={{ backgroundColor: "#e6f4f1" }}
            className="xl:w-1/2 lg:w-3/4 lg:h-auto md:h-20 md:block md:w-2/5 right-0 absolute xl:right-36 bottom-0 z-40 border-2 border-green-500 rounded-xl "
          >
            <div className="lg:p-4 p-2">
              <h2 className="md:text-xl lg:block hidden text-sm text-green-700 font-medium">
                Fiverr Website
              </h2>
              <ul className="list-disc pl-14 text-green-700 lg:block hidden">
                <li>
                  Description: A clone UI website of Fiverr with full
                  responsive, sign in/sign up page
                </li>
                <li>Responsibility: Developer</li>
                <li>
                  Technology: HTML/CSS, TailwindCss, Antd, JS, ReactJs, React
                  Hooks, Redux, Router,
                </li>
              </ul>
              <div className="lg:ml-0 md:ml-8">
                <button className="md:text-base text-xs px-2 py-1 md:mt-4 mr-4 border-2 border-red-400 rounded bg-red-400 text-white hover:bg-red-500"><a href="http://github.com/phattien991412/fiverr" target={"_blank"}>Link Github</a></button>
                <button className="md:text-base text-xs px-2 py-1 border-2 border-gray-400 rounded bg-gray-400 text-white hover:bg-gray-500"><a href="https://fiverr-b568b.web.app/" target={"_blank"}>Link Demo</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-1/2">
          <div>
            <img
              src={projectImg2}
              alt="img"
              className="xl:w-3/5 w-full mx-auto rounded-xl shadow-xl"
            />
          </div>
          <div
            style={{ backgroundColor: "#e6f4f1" }}
            className="xl:w-1/2 lg:w-3/4 lg:h-auto md:h-20 md:block md:w-2/5 right-0 absolute xl:right-36 bottom-0 z-40 border-2 border-green-500 rounded-xl "
          >
            <div className="lg:p-4 p-2">
              <h2 className="md:text-xl lg:block hidden text-sm text-green-700 font-medium">Porfolio</h2>
              <ul className="list-disc pl-14 text-green-700 lg:block hidden">
                <li>
                  Description: My porfolio where you can get my infomation and
                  my done project
                </li>
                <li>Responsibility: Developer</li>
                <li>Technology: HTML/CSS, TailwindCss, ReactJs, Aos</li>
              </ul>
              <div className="lg:ml-0 md:ml-8">
                <button className="md:text-base text-xs px-2 py-1 md:mt-4 mr-4 border-2 border-red-400 rounded bg-red-400 text-white hover:bg-red-500"><a href="http://github.com/phattien991412/porfolio" target={"_blank"}>Link Github</a></button>
                <button className="md:text-base text-xs px-2 py-1 border-2 border-gray-400 rounded bg-gray-400 text-white hover:bg-gray-500"><a href="https://porfolio47.netlify.app/" target={"_blank"}>Link Demo</a></button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Project;
