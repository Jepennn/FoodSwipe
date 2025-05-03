import { useEffect, useRef } from "react";
import { FiThumbsDown, FiHeart } from "react-icons/fi";

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
    <div className="flex basis-[80%] grow-[2] justify-center items-center">
      <div className="w-[375px] h-[650px] [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-[1300ms] [transform-style:preserve-3d] ${isCardFlipped ? '[transform:rotateY(180deg)]' : ''}`}
          onClick={onClickFlipCard}
        >
          {/* Front of recipe card*/}
          <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col border-2 border-[var(--border-color)] rounded-[1.5rem] bg-gradient-to-r from-[rgba(106,17,203,0.2)] to-[rgba(37,117,252,0.2)] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <p className="text-[0.9rem] font-bold text-[var(--text-color)] text-right mt-[1.2rem] mr-4">Click me!</p>
            <div className="flex basis-[70%] flex-col justify-center items-center p-4 rounded-[1rem] mt-[0.8rem]">{children}</div>

            <div className="flex basis-[20%] justify-center items-center gap-4">
              <div
                onClick={onClickDislikedRecipe}
                className="flex justify-center items-center h-[6.5rem] w-[6.5rem] bg-[rgb(255,40,40)] rounded-full"
              >
                <FiThumbsDown size={55} />
              </div>
              <div
                onClick={onClickLikeRecipe}
                className="flex justify-center items-center h-[6.5rem] w-[6.5rem] bg-[rgb(4,175,4)] rounded-full"
              >
                <FiHeart size={55} />
              </div>
            </div>
          </div>

          {/* Back of recipe card*/}
          <div className="absolute w-full h-full [backface-visibility:hidden] border-2 border-[var(--border-color)] rounded-[1.5rem] p-[1.5rem] overflow-y-scroll bg-[var(--background-color)] shadow-[0_0_10px_rgba(0,0,0,0.3)] [transform:rotateY(180deg)]">
            <h1 className="text-[2rem] text-center m-[1.5rem]">{currentRecipe?.name}</h1>
            <p className="text-center font-normal m-[1.5rem] text-[var(--text-color)]">{currentRecipe?.description}</p>
            <div>
              <h2 className="text-[2rem] mt-[3rem] mr-[2rem] ml-[1.5rem] text-center">Instructions</h2>
              <ol className="m-4 ml-[2.5rem] mb-[3rem] text-[var(--text-color)]">
                {currentRecipe?.instructions?.map((instruction, index) => (
                  <li key={index}>{instruction.display_text}</li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col items-center mt-[2rem]">
              <video
                ref={videoRef}
                src={currentRecipe?.original_video_url}
                controls
                className="w-full max-w-[300px] rounded-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
