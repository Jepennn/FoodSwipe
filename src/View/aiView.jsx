import styles from "./aiView.module.css";

export function AiView() {
  return (
    <div className={styles.ai_container}>
      <h1>RecipeAI</h1>
      <div className={styles.ai_content}>
        <p>
          Get tasty recipes based on your liked ones and favorite ingridents
          with RecipeAI. Coming soon...
        </p>
      </div>
    </div>
  );
}
