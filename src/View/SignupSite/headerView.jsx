import styles from "./headerView.module.css";

export function HeaderView() {
  return (
    <div className={styles.header_container}>
      <h1>Foodswipe</h1>
      <button>Login</button>
    </div>
  );
}
