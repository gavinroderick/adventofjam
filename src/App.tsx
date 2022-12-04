import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import image1 from "./assets/img/jam/01.jpg";
import image2 from "./assets/img/jam/02.jpg";
import image3 from "./assets/img/jam/03.jpg";
import image4 from "./assets/img/jam/04.jpg";

function App() {
  const jamData: Calendar = {
    title: "Advent of Jam",
    year: 2022,
    windows: [
      { day: "1", title: "Strawberry", imageUrl: image1, rating: 10 },
      {
        day: "2",
        title: "Grapefruit & Dragonfruit",
        imageUrl: image2,
        rating: 8,
      },
      {
        day: "3",
        title: "Mirabelle Plum & Linden Jam",
        imageUrl: image3,
        rating: 6.5,
      },
      { day: "4", title: "Apricot & Bergamot", imageUrl: image4, rating: 2 },
    ],
  };
  return (
    <div className="App">
      {/* <Calendar
        title="Advent of CSS"
        year={cssData.year}
        windows={cssData.windows}
      /> */}
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
