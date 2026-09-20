import {
  ArrowLeft,
  Share2,
  CheckCircle2,
  WifiOff,
  Loader2,
  Circle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Participants from "./Participants";

function DocumentHeader({ title, setTitle, provider, connectionStatus}) {
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

        <ConnectionStatus status={connectionStatus} />

        <Participants provider={provider} />

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

function ConnectionStatus({ status }) {
  const configs = {
    synced: {
      text: "Synced",
      icon: CheckCircle2,
      className: "text-[#29A19C] bg-[#29A19C]/10",
    },

    syncing: {
      text: "Syncing",
      icon: Loader2,
      className: "text-blue-500 bg-blue-50",
    },

    connecting: {
      text: "Connecting",
      icon: Circle,
      className: "text-zinc-500 bg-zinc-100",
    },

    offline: {
      text: "Offline",
      icon: WifiOff,
      className: "text-orange-600 bg-orange-50",
    },
  };

  const config =
    configs[status] || configs.connecting;

  const Icon = config.icon;

  return (
    <div
      className={`
        flex
        items-center
        gap-2
        rounded-full
        px-3
        py-2
        text-xs
        font-medium
        ${config.className}
      `}
    >
      <Icon
        size={14}
        className={
          status === "syncing"
            ? "animate-spin"
            : ""
        }
      />

      {config.text}
    </div>
  );
}

export default DocumentHeader;