import styles from "./AdventWindow.module.css";

type AdventWindow = {
  day: string;
  title: string;
  imageUrl: string;
  rating: number;
};

const AdventWindow = ({ day, title, imageUrl, rating }: AdventWindow) => {
  return (
    <>
      <div className={styles.windowBox}>
        <img className={styles.thumbnail} src={imageUrl}></img>
        <div className={styles.day}>
          <h2>Day {day}</h2>
          <h4 className={styles.rating}>{rating} / 10</h4>
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </>
  );
};

export default AdventWindow;
