import styles from "./moreDetailsRecipe.module.css";
import { useRef, useEffect } from "react";

export function MoreDetailsRecipeView({ data }) {
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
    <div className={styles.moreDetail_container}>
      <div className={styles.video_container}>
        <video ref={videoRef} src={data.video} controls></video>
      </div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <div className={styles.instructions_container}>
        <h1>Instructions:</h1>
        <ol>
          {data.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
