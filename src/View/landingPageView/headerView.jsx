import styles from "./headerView.module.css";

export function HeaderView({ onClickLoginButton, onClickLogo }) {
  return (
    <div className={styles.header_container}>
      <h1 onClick={onClickLogo}>Foodswipe</h1>
      <div>
        <button onClick={onClickLoginButton} className={styles.login_button}>
          Login
        </button>
        <button className={styles.signup_button}>Sign up</button>
      </div>
    </div>
  );
}
