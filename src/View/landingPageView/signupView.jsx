import styles from "./signupView.module.css";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

export function SignupView({ onClickCreateAccount }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [favoriteCuisine, setFavoriteCuisine] = useState("");

  function createAccountHandler(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      notify();
      return;
    }

    const userData = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      favoriteCuisine: favoriteCuisine,
    };

    onClickCreateAccount(userData);
  }

  function notify() {
    toast.error("Password do not match", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Get started</h1>
        <form className={styles.form}>
          <div className={styles.input_container}>
            <input
              className={styles.input_small}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input_small}
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              className={styles.input_small}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              value={favoriteCuisine}
              className={styles.input_small}
              placeholder="Favorite cuisine"
              onChange={(e) => setFavoriteCuisine(e.target.value)}
            />
          </div>
          <input
            type="password"
            value={password}
            placeholder="Password"
            className={styles.input}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            value={confirmPassword}
            placeholder="confirm password"
            className={styles.input}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button
            onClick={createAccountHandler}
            type="submit"
            className={styles.login_button}
          >
            Create account
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </form>
        <div className={styles.login_container}>
          Already have an account? <Link to={"/login"}>Login</Link>
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
