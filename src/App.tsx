import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Days from "./JamData";

function App() {
  const jamData: Calendar = {
    title: "Advent of Jam",
    year: 2022,
    windows: Days,
  };
  return (
    <div className="App">
      <Calendar
        title={jamData.title}
        year={jamData.year}
        windows={jamData.windows}
      />
      <footer>
        <p>
          made with ❤️ by <a>gav</a>
        </p>
        <p>📸 & taste tested by val</p>
      </footer>
    </div>
  );
}

export default App;
