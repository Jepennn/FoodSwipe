import { IoLogOut, IoHeart } from "react-icons/io5";
import { MdSwipeRight } from "react-icons/md";
import { FaBrain } from "react-icons/fa";


export function SidebarView({
  sidebar,
  onClickLinkedRecipe,
  onClickProfile,
  onClickFoodSwipeHeader,
  onClickLogout,
  onClickAi,
}) {
  if (!sidebar) {
    return null;
  }

  if (sidebar) {
    return (
      <div className="flex flex-col flex-none basis-1/5 min-w-[225px] h-full p-6 border-r-2 border-gray-200 ">
        <h1
          onClick={onClickFoodSwipeHeader}
          className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent cursor-pointer mb-4"
        >
          FoodSwipe
        </h1>
        <div
          onClick={onClickProfile}
          className="flex items-center gap-2 text-lg hover:text-blue-500 cursor-pointer"
        >
          <MdSwipeRight size={22} />
          <span>inspiration</span>
        </div>
        <div
          onClick={onClickLinkedRecipe}
          className="flex items-center gap-2 text-lg hover:text-blue-500 cursor-pointer"
        >
          <IoHeart size={22} />
          <span>Liked recipes</span>
        </div>
        <div
          onClick={onClickAi}
          className="flex items-center gap-2 text-lg hover:text-blue-500 cursor-pointer"
        >
          <FaBrain size={22} />
          <span>RecipeAI</span>
        </div>
        <div
          onClick={onClickLogout}
          className="flex items-center gap-2 text-lg hover:text-blue-500 cursor-pointer"
        >
          <IoLogOut size={25} />
          <span>Log out</span>
        </div>
      </div>
    );
  }
}
