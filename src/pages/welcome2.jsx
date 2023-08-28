import React from "react";
import background from "../assets/images/welcome.jpeg";

import { ReactComponent as Wave } from "../assets/images/wave.svg";

export default function Welcome2() {
  return (
    <div
      className="relative items-start min-h-screen p-10 heroo bac animate__animated animate__fadeInUp "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="text-white mt-19 animate__backInUp">
        <Wave className="absolute left-0 bottom-" />
        <div
          className="absolute bottom-0 left-0 w-full p-5 wave-wrapper"
          style={{ backgroundColor: "#B4C5D5" }}
        >
          <div className="font-medium text-center">
            <h1>
              Dear Mr/Mrs/Ms, <br /> Family & Friends
            </h1>

            <p className="text-sm">
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
