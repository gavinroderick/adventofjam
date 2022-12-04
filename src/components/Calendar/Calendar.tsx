import AdventWindow from "../AdventWindow/AdventWindow";
import styles from "./Calendar.module.css";
type Calendar = {
  year: number;
  title: string;
  windows: AdventWindow[];
};

const Calendar = ({ year, title, windows }: Calendar) => {
  return (
    <div>
      <h1>
        {title} {year.toString()}
      </h1>
      <div className={styles.calendar}>
        {windows.map((window) => {
          return (
            <AdventWindow
              key={window.day}
              day={window.day}
              title={window.title}
              imageUrl={window.imageUrl}
              rating={window.rating}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Calendar;
