import {
  ArrowLeft,
  Cloud,
  Share2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function DocumentHeader({
  title,
  setTitle,
}) {
  const navigate = useNavigate();

  return (
    <header
      className="
        flex
        h-[76px]
        items-center
        justify-between
        border-b
        border-zinc-200
        bg-[#F5F7F6]/90
        px-8
        backdrop-blur
      "
    >

      <div className="flex items-center gap-4">

        <button
          onClick={() => navigate("/")}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-zinc-500
            transition
            hover:bg-white
            hover:text-[#222831]
          "
        >
          <ArrowLeft size={19} />
        </button>

        <div>

          <input
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            className="
              w-[320px]
              bg-transparent
              text-[15px]
              font-semibold
              text-[#222831]
              outline-none
            "
          />

          <p className="mt-1 text-xs text-zinc-400">
            Personal workspace
          </p>

        </div>

      </div>

      <div className="flex items-center gap-5">

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-white
            px-3
            py-2
            text-xs
            font-medium
            text-zinc-500
          "
        >
          <Cloud
            size={14}
            className="text-[#29A19C]"
          />

          Saved
        </div>

        <div className="flex">

          <Participant color="bg-[#A3F7BF]">
            R
          </Participant>

          <Participant color="bg-orange-200">
            A
          </Participant>

          <Participant color="bg-purple-200">
            M
          </Participant>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#222831]
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-[#393E46]
          "
        >
          <Share2 size={16} />

          Share
        </button>

      </div>

    </header>
  );
}

function Participant({
  children,
  color,
}) {
  return (
    <div
      className={`
        -ml-2
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border-[3px]
        border-[#F5F7F6]
        text-[11px]
        font-bold
        text-[#222831]
        ${color}
      `}
    >
      {children}
    </div>
  );
}

export default DocumentHeader;