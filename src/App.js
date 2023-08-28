import React, { useState } from "react";
import "./App.css";
import "animate.css";
import background from "./assets/images/cover.jpeg";
import Welcome2 from "./pages/welcome2";
import Welcome from "./pages/welcome";
import Cover from "./pages/cover";

export default function App() {
  const [showWelcome2, setShowWelcome2] = useState(false);

  const handleClick = () => {
    setShowWelcome2(true);
  };

  return (
    <div
      className="relative bg-no-repeat bg-cover rounded-lg "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="md:flex md:flex-row me-2">
        {window.innerWidth > 500 ? (
          <Cover />
        ) : (
          <div className="bg-slate-600 md:basis-1/3 ">
            {showWelcome2 ? <Welcome2 /> : <Welcome onClick={handleClick} />}
          </div>
        )}

        <div className="bg-slate-600 md:basis-1/2 ">
          {showWelcome2 ? <Welcome2 /> : <Welcome onClick={handleClick} />}
        </div>
      </div>
    </div>
  );
}
