import { Link } from "react-router-dom";
import { IoLogOut, IoHeart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export function SidebarView() {
  return (
    <div>
      <h1>FoodSwipe</h1>
      <img src="" alt="" />
      <div className="sidebar">
        <div>
          <Link to="/profile">
            <FaUser />
            Profile
          </Link>
        </div>
        <div>
          <Link to="/liked-receipes">
            <IoHeart />
            Liked receipes
          </Link>
        </div>
        <div>
          <button>
            <IoLogOut />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
