import {
  Home,
  FileText,
  Clock3,
  BarChart3,
  Sparkles,
  Settings,
  HelpCircle,
} from "lucide-react";

function AppRail() {
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
      <div
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
      </div>

      <nav className="mt-8 flex flex-col gap-2">
        <RailButton>
          <Home size={19} />
        </RailButton>

        <RailButton active>
          <FileText size={19} />
        </RailButton>

        <RailButton>
          <Clock3 size={19} />
        </RailButton>

        <RailButton>
          <BarChart3 size={19} />
        </RailButton>

        <RailButton>
          <Sparkles size={19} />
        </RailButton>
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <RailButton>
          <HelpCircle size={19} />
        </RailButton>

        <RailButton>
          <Settings size={19} />
        </RailButton>
      </div>
    </aside>
  );
}

function RailButton({
  children,
  active = false,
}) {
  return (
    <button
      className={`
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        transition

        ${
          active
            ? "bg-[#EEF1FF] text-[#6377F1]"
            : "text-[#8E939C] hover:bg-[#F5F6F8] hover:text-[#202124]"
        }
      `}
    >
      {children}
    </button>
  );
}

export default AppRail;