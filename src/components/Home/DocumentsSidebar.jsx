import {
  Archive,
  Bookmark,
  ChevronDown,
  Clock3,
  FileText,
  MoreHorizontal,
  Share2,
} from "lucide-react";

const recentDocuments = [
  "Project proposal",
  "University notes",
  "Marketing ideas",
  "Meeting notes",
  "Product research",
  "Development plan",
];

function DocumentsSidebar() {
  return (
    <aside
      className="
        fixed
        left-[64px]
        top-0
        z-40
        h-screen
        w-[250px]
        border-r
        border-[#EAECF0]
        bg-white
        px-5
        py-5
      "
    >
      <div
        className="
          flex
          h-10
          items-center
          justify-between
          rounded-xl
          bg-[#F7F8FA]
          px-3
        "
      >
        <div className="flex items-center gap-2">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-[#EEF1FF]
              text-xs
              font-semibold
              text-[#6377F1]
            "
          >
            R
          </div>

          <span className="text-sm font-medium text-[#202124]">
            Ravshan
          </span>
        </div>

        <ChevronDown
          size={15}
          className="text-[#9A9EA6]"
        />
      </div>

      <div className="mt-7 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#202124]">
          Documents
        </h1>

        <button
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-[#969AA2]
            hover:bg-[#F5F6F8]
          "
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="mt-7">

        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock3
              size={16}
              className="text-[#8A8F98]"
            />

            <span className="text-sm font-medium text-[#44484F]">
              Last updates
            </span>
          </div>

          <span
            className="
              rounded-full
              bg-[#F1F2F4]
              px-2
              py-0.5
              text-[10px]
              font-medium
              text-[#7D828B]
            "
          >
            6
          </span>
        </div>

        <div className="space-y-1">
          {recentDocuments.map(
            (document, index) => (
              <button
                key={document}
                className="
                  flex
                  w-full
                  items-center
                  gap-2
                  rounded-lg
                  px-2
                  py-2
                  text-left
                  transition
                  hover:bg-[#F7F8FA]
                "
              >
                <FileText
                  size={15}
                  className={
                    index === 0
                      ? "text-[#6377F1]"
                      : "text-[#B0B4BC]"
                  }
                />

                <span
                  className="
                    min-w-0
                    flex-1
                    truncate
                    text-[13px]
                    text-[#555961]
                  "
                >
                  {document}
                </span>
              </button>
            )
          )}
        </div>

      </div>

      <div
        className="
          mt-6
          border-t
          border-[#EEF0F3]
          pt-4
        "
      >
        <SidebarSection
          icon={Share2}
          title="Shared"
          count="3"
        />

        <SidebarSection
          icon={Bookmark}
          title="Saved"
          count="5"
        />

        <SidebarSection
          icon={Archive}
          title="Archived"
          count="8"
        />
      </div>
    </aside>
  );
}

function SidebarSection({
  icon: Icon,
  title,
  count,
}) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-lg
        px-2
        py-2.5
        text-[#555961]
        transition
        hover:bg-[#F7F8FA]
      "
    >
      <Icon
        size={16}
        className="text-[#969BA4]"
      />

      <span className="flex-1 text-left text-sm">
        {title}
      </span>

      <span
        className="
          rounded-full
          bg-[#F1F2F4]
          px-2
          py-0.5
          text-[10px]
          text-[#7D828B]
        "
      >
        {count}
      </span>
    </button>
  );
}

export default DocumentsSidebar;