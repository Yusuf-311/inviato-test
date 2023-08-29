import React from "react";
import background from "../assets/images/welcome.jpeg";

import { ReactComponent as Wave } from "../assets/images/wave.svg";

export default function Welcome2() {
  return (
    <div
      className="relative items-start min-h-screen heroo bac animate__animated animate__fadeInUp "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="min-h-screen bg-slate-400 opacity-30 hero-overlay"></div>
      <div className="text-white absolute bottom-0 left-0 mt-19 ">
        <Wave className="" />
        <div
          className=" w-full wave-wrapper"
          style={{ backgroundColor: "#B4C5D5" }}
        >
          <div className=" text-center font-bold animate__animated animate__fadeInUp">
            <h1>
              Dear Mr/Mrs/Ms, <br /> Family & Friends
            </h1>

            <p className="text-sm pb-10 px-6 animate__animated animate__fadeInUp">
              We are pleased to announce and invite you to our wedding. We
              sincerely hope that you will be able to attend and pray directly
              on our wedding day. Your presence will mean a lot to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
