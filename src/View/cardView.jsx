import { useSelector } from "react-redux";

export function CardView({ foodImage, foodTitle }) {
  const recipeLoading = useSelector((state) => state.recipe.loading);

  return recipeLoading ? (
    <img src="/spinner.svg"></img>
  ) : (
    <>
      <img
        className="w-[85%] h-[85%] object-cover rounded-[1rem]"
        src={foodImage}
        alt="image of food"
      />
      <h1 className="text-2xl text-center my-6 text-[var(--text-color)]">
        {foodTitle}
      </h1>
    </>
  );
}
