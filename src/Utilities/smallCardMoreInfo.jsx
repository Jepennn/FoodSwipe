import styles from "./smallCardMoreInfo.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likedRecipeMoreInfo } from "../Redux/ReceipCollection/recipeSlice.js";

export function SmallCardMoreInfo({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Function to handle navigation to the liked recipe
  function handleClickRecipeCard() {
    navigate(`/liked-recipes/${data.id}`);
    dispatch(likedRecipeMoreInfo(data));
  }

  return (
    <div
      onClick={handleClickRecipeCard}
      className={styles.smallCardMoreInfo_container}
    >
      <img src={data.thumbnail} alt="" />
      <h5>{data.name}</h5>
    </div>
  );
}
