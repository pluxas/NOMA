import { MoreHorizontal } from "lucide-react";

function DocumentCard({
  document,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        group
        overflow-hidden
        rounded-[18px]
        border
        border-[#ECEEF2]
        bg-white
        p-3
        text-left
        transition-all
        hover:-translate-y-0.5
        hover:border-[#DCE0E8]
        hover:shadow-[0_12px_30px_rgba(40,50,70,0.07)]
      "
    >
      <div
        className="
          relative
          h-[115px]
          overflow-hidden
          rounded-xl
          bg-[#F3F4F6]
          p-4
        "
      >
        <div
          className="
            absolute
            left-3
            top-3
            rounded-md
            bg-white/90
            px-2
            py-1
            text-[9px]
            font-medium
            text-[#656A72]
          "
        >
          {document.category}
        </div>

        <div
          className="
            mx-auto
            mt-6
            h-[80px]
            w-[72%]
            rounded-md
            bg-white
            p-3
            shadow-sm
          "
        >
          <div className="h-1.5 w-[55%] rounded bg-[#D4D7DD]" />

          <div className="mt-3 space-y-2">
            <div className="h-1 w-full rounded bg-[#E5E7EB]" />
            <div className="h-1 w-[82%] rounded bg-[#E5E7EB]" />
            <div className="h-1 w-[92%] rounded bg-[#E5E7EB]" />
          </div>

          <div
            className="
              mt-3
              h-4
              w-[45%]
              rounded
              bg-[#EEF1FF]
            "
          />
        </div>
      </div>

      <div className="px-1 pb-1 pt-4">

        <div className="flex items-start justify-between gap-3">

          <h3
            className="
              truncate
              text-[14px]
              font-semibold
              text-[#25272B]
            "
          >
            {document.title}
          </h3>

          <MoreHorizontal
            size={16}
            className="
              shrink-0
              text-[#B0B4BB]
              opacity-0
              transition
              group-hover:opacity-100
            "
          />
        </div>

        <div className="mt-3 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#EEF1FF]
                text-[9px]
                font-semibold
                text-[#6377F1]
              "
            >
              R
            </div>

            <div>
              <p className="text-[11px] font-medium text-[#555961]">
                Ravshan
              </p>

              <p className="text-[10px] text-[#A0A4AC]">
                {document.updatedAt}
              </p>
            </div>

          </div>

          <div className="flex -space-x-2">
            {document.users.map(
              (user, index) => (
                <div
                  key={index}
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white
                    bg-[#EAF8E5]
                    text-[8px]
                    font-semibold
                    text-[#4A6B45]
                  "
                >
                  {user}
                </div>
              )
            )}
          </div>

        </div>
      </div>
    </button>
  );
}

export default DocumentCard;