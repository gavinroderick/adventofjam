import styles from "./AdventWindow.module.css";

type AdventWindow = {
  day: string;
  title: string;
  imageUrl: string;
};

const AdventWindow = ({ day, title, imageUrl }: AdventWindow) => {
  return (
    <>
      <div className={styles.windowBox}>
        <img className={styles.thumbnail} src={imageUrl}></img>
        <h2 className={styles.day}>Day {day}</h2>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </>
  );
};

export default AdventWindow;
