import React from "react";
import background from "../assets/images/cover.jpeg";

export default function Cover() {
  return (
    <div
      className="items-start min-h-screen hero place-items-start text-amber-900 bg "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="min-h-screen bg-slate-400 opacity-30 hero-overlay"></div>
      <div className="p-10 cover ">
        <p className="tracking-widest animate__animated animate__fadeInUp ">
          THE WEEDING OF
        </p>
        <h1 className="text-6xl my-9 animate__animated animate__fadeInUp ">
          Nailal & Via
        </h1>
        <p className="italic tracking-widest animate__animated animate__fadeInUp   ">
          “And I knew exactly how old Walt Disney’s Cinderella felt when she{" "}
          <br />
          found her prince.”
          <br />— Elizabeth Young
        </p>
      </div>
    </div>
  );
}
