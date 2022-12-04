import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AdventWindow from "./components/AdventWindow";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const data: Calendar = {
    year: 2022,
    windows: [
      {
        title: "Pomodoro Timer",
        day: "1",
        imageUrl:
          "https://play-lh.googleusercontent.com/c8WFDV5n4Z_79ZqksOLUVOdMo_QxQNKCK22yoXdw-Dc03Nn0VltXNJfC1QpeBXvbBxNL",
      },
      {
        title: "Grapefruit & Dragonfruit",
        day: "2",
        imageUrl:
          "https://play-lh.googleusercontent.com/c8WFDV5n4Z_79ZqksOLUVOdMo_QxQNKCK22yoXdw-Dc03Nn0VltXNJfC1QpeBXvbBxNL",
      },
    ],
  };

  return (
    <div className="App">
      <Calendar year={data.year} windows={data.windows} />
    </div>
  );
}

export default App;
