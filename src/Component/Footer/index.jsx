import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCopyright} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {

  return (
    <>
      <div id="contact" style={{ backgroundColor: "#4c6e71" }} className="md:container py-10">
        <h1 className="text-white xl:text-5xl text-3xl text-center">
          Get In Touch With <span className="text-yellow-500">Me</span>
        </h1>
        <p className="text-white pt-10 xl:text-lg text-md text-center">
          Thank you to spend your time visiting my page! Please feel free to
          send me some messages, hope that we can have a chance to work
          together.
        </p>

        <div className="lg:grid lg:px-0 px-6 grid-cols-6 mt-14">
          <div className="xl:col-start-2 xl:col-span-2 lg:col-start-1 lg:col-span-3">
            <h1 className="text-yellow-500 text-2xl font-semibold">
              TRINH TIEN PHAT
            </h1>
            <ul className="ml-4">
              <li className="my-8">
                <span className="text-white text-lg pr-8">Location</span>{" "}
                <span className="text-yellow-500 text-lg">
                  Ba Diem, Hoc Mon, TPHCM
                </span>
              </li>
              <li className="my-8">
                <span className="text-white text-lg pr-12">Phone</span>{" "}
                <span className="text-yellow-500 text-lg">
                  <a href="tel:+84938068917">0938-068-917</a>
                </span>
              </li>
              <li className="my-8">
                <span className="text-white text-lg pr-5">Facebook</span>{" "}
                <span className="text-yellow-500 text-lg">
                  <a href="fb.com" target={"_blank"}>
                    @phattien
                  </a>
                </span>
              </li>
              <li className="my-8">
                <span className="text-white text-lg pr-14">Email</span>{" "}
                <span className="text-yellow-500 text-lg">
                  <a href="mailto:phattien991412@gmail.com">
                    phattien991412@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <form action="" className="xl:col-span-2 lg:col-span-3">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Fullname"
                className="lg:w-full rounded-md pl-4 py-2 w-4/5 outline-none"
              />
            </div>
            <div className="my-8">
              <input
                type="text"
                placeholder="Email"
                className="lg:w-full rounded-md pl-4 py-2 w-4/5 outline-none"
              />
            </div>
            <div className="my-8">
              <input
                type="text"
                placeholder="Subject"
                className="lg:w-full rounded-md pl-4 py-2 w-4/5 outline-none"
              />
            </div>
            <textarea
              cols="45"
              rows="5"
              placeholder="Message"
              className="lg:w-full w-4/5 rounded-md pl-4 py-2 outline-none"
            />
            <button type="submit" className="mt-4 border border-yellow-500 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:border-yellow-600 ">Send Message</button>
          </form>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(0, 49, 52, 0.85)" }} className="h-20">
        <p className="md:pl-24 pl-10 pt-8  text-white text-lg"><FontAwesomeIcon icon={faCopyright}/> Copyright 2022 by <span className="text-yellow-500">Trinh Tien Phat</span></p>
      </div>
    </>
  );
};

export default Footer;
