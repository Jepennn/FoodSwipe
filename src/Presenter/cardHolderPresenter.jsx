import { CardHolderView } from "../View/cardHolderView";
import { CardView } from "../View/cardView";
import { useDispatch, useSelector } from "react-redux";
import { toggleCardFlip } from "../Redux/Modal/modalSlice.js";

export function CardHolderPresenter() {
  const dispatch = useDispatch();
  const isCardFlipped = useSelector((state) => state.modal.isCardFlipped);

  const handleFlip = () => {
    dispatch(toggleCardFlip());
  };

  return (
    <CardHolderView onHandleFlip={handleFlip} isCardFlipped={isCardFlipped}>
      <CardView />
    </CardHolderView>
  );
}
