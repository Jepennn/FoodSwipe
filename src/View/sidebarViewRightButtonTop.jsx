import { FiSidebar } from "react-icons/fi";

export function SidebarViewRightButtonTop({ onToggleSidebar }) {
  return (
    <div className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 cursor-pointer">
      <FiSidebar onClick={onToggleSidebar} size={25} />
    </div>
  );
}
