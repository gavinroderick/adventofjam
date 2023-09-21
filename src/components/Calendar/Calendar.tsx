import { useEffect, useState } from "react";
import AdventWindow from "../AdventWindow/AdventWindow";
import styles from "./Calendar.module.css";
type Calendar = {
  year: number;
  title: string;
  windows: AdventWindow[];
};

const Calendar = ({ year, title, windows }: Calendar) => {
  const [sortDateAscending, setSortDateAscending] = useState<boolean>(true);
  const [sortedWindows, setSortedWindows] = useState<AdventWindow[]>(windows);

  const sortWindows = (): AdventWindow[] => {
    if (sortDateAscending) {
      return sortedWindows.sort((a, b) => parseInt(a.day) - parseInt(b.day));
    }
    return sortedWindows.sort((a, b) => parseInt(b.day) - parseInt(a.day));
  };

  useEffect(() => {
    setSortedWindows(sortWindows());
  });
  return (
    <main className={styles.main}>
      <h1>
        {title} {year.toString()}
      </h1>
      <div className={styles.sortRow}>
        <h2>Sort by: </h2>
        <button onClick={() => setSortDateAscending(!sortDateAscending)}>
          {sortDateAscending ? "Date low to high" : "Date high to low"}
        </button>
      </div>
      <div className={styles.calendar}>
        {sortedWindows.map((window) => {
          return (
            <AdventWindow
              key={window.title}
              day={window.day}
              title={window.title}
              imageUrl={window.imageUrl}
              rating={window.rating}
            />
          );
        })}
      </div>
    </main>
  );
};
export default Calendar;
