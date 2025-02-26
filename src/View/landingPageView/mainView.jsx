import styles from "./mainView.module.css";

export function MainView({ onClickGetStarted }) {
  return (
    <div className={styles.mainView_container}>
      <h1 className={styles.mainView_title}>
        Explore and find your
        <br />
        next tasty dish...
      </h1>
      <div
        onClick={onClickGetStarted}
        className={styles.mainView_button_container}
      >
        <button className={styles.mainView_button}>Get started now...</button>
      </div>
    </div>
  );
}
