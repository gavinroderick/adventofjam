import AdventWindow from "../AdventWindow";

type Calendar = {
  year: number;
  windows: AdventWindow[];
};

const Calendar = ({ year, windows }: Calendar) => {
  return (
    <div>
      <h1>Advent of CSS {year.toString()}</h1>
      <div className="calendar">
        {windows.map((window) => {
          return (
            <AdventWindow
              day={window.day}
              title={window.title}
              imageUrl={window.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Calendar;
