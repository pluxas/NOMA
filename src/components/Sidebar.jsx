import {
  FileText,
  House,
  Settings,
  Users,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50
        flex
        h-screen
        w-[76px]
        flex-col
        items-center
        bg-[#222831]
        py-5
      "
    >
      <button
        onClick={() => navigate("/")}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-[#29A19C]
          text-lg
          font-bold
          text-white
        "
      >
        N
      </button>

      <nav className="mt-10 flex flex-col gap-2">

        <SidebarButton
          active={isHome}
          onClick={() => navigate("/")}
        >
          <House size={20} />
        </SidebarButton>

        <SidebarButton
          active={!isHome}
          onClick={() => navigate("/document/1")}
        >
          <FileText size={20} />
        </SidebarButton>

        <SidebarButton>
          <Users size={20} />
        </SidebarButton>

      </nav>

      <div className="mt-auto flex flex-col items-center gap-4">

        <SidebarButton>
          <Settings size={20} />
        </SidebarButton>

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#A3F7BF]
            text-sm
            font-bold
            text-[#222831]
          "
        >
          R
        </div>

      </div>
    </aside>
  );
}

function SidebarButton({
  children,
  active = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        transition-all

        ${
          active
            ? "bg-[#29A19C] text-white"
            : "text-zinc-400 hover:bg-[#393E46] hover:text-white"
        }
      `}
    >
      {children}
    </button>
  );
}

export default Sidebar;