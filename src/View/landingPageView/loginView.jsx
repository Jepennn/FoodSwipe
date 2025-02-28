import styles from "./loginView.module.css";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginView({ onLoginUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginUser(email, password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Login</h1>
        <form className={styles.form}>
          <input
            type="email"
            className={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={styles.login_button}
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <div className={styles.signup_container}>
          Don&apos;t you have an account? <Link to={"/signup"}>Sign up</Link>
        </div>
        <div className={styles.social_account_container}>
          <div className={styles.title}></div>
          <div className={styles.social_accounts}>
            <button className={styles.social_button}>
              <FaApple />
            </button>
            <button className={styles.social_button}>
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
