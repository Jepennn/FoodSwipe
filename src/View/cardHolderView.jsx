import { useEffect, useRef } from "react";
import { FiThumbsDown, FiHeart } from "react-icons/fi";
import styles from "./cardHolder.module.css";

export function CardHolderView({
  children,
  onClickFlipCard,
  isCardFlipped,
  currentRecipe,
  onClickLikeRecipe,
  onClickDislikedRecipe,
}) {
  const videoRef = useRef(null);
  useEffect(() => {
    //Creates an observer to check if the video is in view and plays it if it is
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    //Cleans up the observer before the component unmounts
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.cardHolder_container}>
        <div
          className={`${styles.card} ${isCardFlipped ? styles.is_flipped : ""}`}
          onClick={onClickFlipCard}
        >
          {/* Front of recipe card*/}
          <div className={styles.card_front}>
            <p className={styles.clickMe_text}>Click me!</p>
            <div className={styles.card_content_front}>{children}</div>

            <div className={styles.button_container}>
              <div
                onClick={onClickDislikedRecipe}
                className={styles.div_button}
              >
                <FiThumbsDown size={55} />
              </div>
              <div
                onClick={onClickLikeRecipe}
                className={`${styles.div_button} ${styles.div_button_like}`}
              >
                <FiHeart size={55} />
              </div>
            </div>
          </div>

          {/* Back of recipe card*/}
          <div className={styles.card_back}>
            <h1>{currentRecipe?.name}</h1>
            <p>{currentRecipe?.description}</p>
            <div>
              <h2>Instructions</h2>
              <ol className={styles.instructions}>
                {currentRecipe?.instructions?.map((instruction, index) => (
                  <li key={index}>{instruction.display_text}</li>
                ))}
              </ol>
            </div>
            <div className={styles.video_container}>
              <video
                ref={videoRef}
                src={currentRecipe?.original_video_url}
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
