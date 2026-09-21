import {
  FileText,
  Home,
  Settings,
  HelpCircle,
  Clock3,
  BarChart3,
  Sparkles,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome =
    location.pathname === "/";

  const isDocument =
    location.pathname.startsWith(
      "/document/"
    );

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50

        flex
        h-screen
        w-[64px]
        flex-col
        items-center

        border-r
        border-[#EAECF0]

        bg-white

        py-5
      "
    >
      {/* LOGO */}

      <button
        onClick={() => navigate("/")}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-xl

          bg-[#6377F1]

          text-sm
          font-bold
          text-white
        "
      >
        N
      </button>

      {/* MAIN NAV */}

      <nav className="mt-8 flex flex-col gap-2">

        <SidebarButton
          active={isHome}
          onClick={() =>
            navigate("/")
          }
        >
          <Home size={19} />
        </SidebarButton>

        <SidebarButton
          active={isDocument}
        >
          <FileText size={19} />
        </SidebarButton>

        <SidebarButton>
          <Clock3 size={19} />
        </SidebarButton>

        <SidebarButton>
          <BarChart3 size={19} />
        </SidebarButton>

        <SidebarButton>
          <Sparkles size={19} />
        </SidebarButton>

      </nav>

      {/* BOTTOM */}

      <div className="mt-auto flex flex-col gap-2">

        <SidebarButton>
          <HelpCircle size={19} />
        </SidebarButton>

        <SidebarButton>
          <Settings size={19} />
        </SidebarButton>

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
        h-10
        w-10
        items-center
        justify-center

        rounded-xl

        transition-all
        duration-200

        ${
          active
            ? `
              bg-[#EEF1FF]
              text-[#6377F1]
            `
            : `
              text-[#969BA5]

              hover:bg-[#F5F6F8]
              hover:text-[#202124]
            `
        }
      `}
    >
      {children}
    </button>
  );
}

export default Sidebar;