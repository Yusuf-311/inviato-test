import React, { useState, useEffect } from "react";
import "./App.css";
import "animate.css";
import background from "./assets/images/cover.jpeg";
import Welcome2 from "./pages/welcome2";
import Welcome from "./pages/welcome";
import Cover from "./pages/cover";
import { IoMdMusicalNote } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import useSound from "use-sound";
import music from "./assets/media/sound.mp3";

export default function App() {
  const [showWelcome2, setShowWelcome2] = useState(false);
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 500);
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause }] = useSound(music);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 580);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    play();
    setIsPlaying(true);
    setShowWelcome2(true);
  };

  const handleMute = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  console.log(isPlaying);
  return (
    <div
      className="relative bg-no-repeat bg-cover rounded-lg "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="md:flex md:flex-row">
        {isScreenWide && (
          <div className=" md:basis-3/4 ">
            <Cover />
          </div>
        )}

        <div className=" md:basis-1/2 md:ms-2 ">
          {showWelcome2 ? <Welcome2 /> : <Welcome onClick={handleClick} />}
        </div>

        <div className="bottom-4 left-4 fixed">
          <button className="rounded-full  p-2">
            {" "}
            <AiOutlineMenu />
          </button>
          <button className="rounded-full  bg- p-2 mx-1">
            {" "}
            <IoMdMusicalNote onClick={handleMute} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
