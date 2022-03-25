import React, { useEffect } from "react";
import loadingImg from "../../assets/img/loading.gif";

const Loading = () => {
  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <div className="flex justify-center align-middle mx-auto bg-white z-50 fixed  w-full h-full">
      <img className="w-1/6" src={loadingImg} alt="loading" />
    </div>
  );
};

export default Loading;
