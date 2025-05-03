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
    <div className="flex flex-col justify-center items-center rounded-[1.5rem] p-10 text-white">
      <div className="flex flex-col items-center">
        <video ref={videoRef} src={data.video} controls className="w-full max-w-[400px] rounded-[1rem] mb-4"></video>
      </div>
      <h1 className="text-[1.8rem] mt-5 mb-2 text-white">{data.name}</h1>
      <p className="text-center">{data.description}</p>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold mb-2 text-white">Instructions:</h1>
        <ol className="ml-10 mb-12">
          {data.instructions.map((instruction, index) => (
            <li key={index} className="mt-1">{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
