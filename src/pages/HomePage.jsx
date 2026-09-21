import {
  Bell,
  FilePlus2,
  Files,
  LayoutGrid,
  List,
  Search,
  Share2,
  StickyNote,
  SlidersHorizontal,
  FileText
} from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import AppRail from "../components/Home/AppRail";
import DocumentsSidebar from "../components/Home/DocumentsSidebar";
import QuickActionCard from "../components/Home/QuickActionCard";
import DocumentCard from "../components/Home/DocumentCard";

const documents = [
  {
    id: "1",
    title: "Project proposal",
    category: "Product",
    updatedAt: "12 min ago",
    users: ["R", "A"],
  },
  {
    id: "2",
    title: "University notes",
    category: "Study",
    updatedAt: "25 min ago",
    users: ["R"],
  },
  {
    id: "3",
    title: "Marketing ideas",
    category: "Marketing",
    updatedAt: "1h ago",
    users: ["R", "M"],
  },
  {
    id: "4",
    title: "Product research",
    category: "Research",
    updatedAt: "Yesterday",
    users: ["R", "A"],
  },
  {
    id: "5",
    title: "Development plan",
    category: "Product",
    updatedAt: "Sep 18",
    users: ["R"],
  },
  {
    id: "6",
    title: "Meeting notes",
    category: "Operations",
    updatedAt: "Sep 17",
    users: ["R", "M", "A"],
  },
];

function HomePage() {
  const [viewMode, setViewMode] = useState("grid");

  const navigate = useNavigate();

  function createDocument() {
    const id = Date.now();

    navigate(`/document/${id}`);
  }

  return (
    <div className="min-h-screen bg-[#F4F6FA]">
      <AppRail />

      <DocumentsSidebar />

      <main
        className="
          min-h-screen
          pl-[314px]
        "
      >
        <div className="px-5 py-5">
          {/* TOPBAR */}

          <header
            className="
              flex
              h-[52px]
              items-center
              justify-between
            "
          >
            <div
              className="
                flex
                h-10
                w-[300px]
                items-center
                gap-3
                rounded-xl
                border
                border-[#E8EAF0]
                bg-white
                px-3
              "
            >
              <Search size={17} className="text-[#9EA2AA]" />

              <input
                placeholder="Search..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  text-sm
                  text-[#33363B]
                  outline-none
                  placeholder:text-[#A4A8B0]
                "
              />

              <div
                className="
                  rounded-md
                  bg-[#F4F5F7]
                  px-1.5
                  py-1
                  text-[10px]
                  text-[#7D828A]
                "
              >
                ⌘ F
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#E8EAF0]
                  bg-white
                  text-[#777C84]
                "
              >
                <Bell size={17} />

                <span
                  className="
                    absolute
                    right-2.5
                    top-2
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-red-500
                  "
                />
              </button>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#24272B]
                  text-xs
                  font-semibold
                  text-white
                "
              >
                R
              </div>
            </div>
          </header>

          {/* QUICK ACTIONS */}

          <section
            className="
              mt-5
              grid
              grid-cols-1
              gap-3
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            <QuickActionCard
              icon={FilePlus2}
              title="New Document"
              description="Start writing a new doc"
              background="bg-[#EEF1FF]"
              iconColor="text-[#6377F1]"
              onClick={createDocument}
            />

            <QuickActionCard
              icon={Share2}
              title="Shared"
              description="Documents shared with you"
              background="bg-[#EAF8E5]"
              iconColor="text-[#65A358]"
            />

            <QuickActionCard
              icon={Files}
              title="Recent"
              description="Continue recent work"
              background="bg-[#FFF2E7]"
              iconColor="text-[#E89545]"
            />

            <QuickActionCard
              icon={StickyNote}
              title="Quick Note"
              description="Capture a fast note"
              background="bg-[#F1EDFF]"
              iconColor="text-[#8469D8]"
              onClick={createDocument}
            />
          </section>

          {/* DOCUMENTS */}

          <section
            className="
              mt-5
              rounded-[24px]
              border
              border-[#ECEEF2]
              bg-[#F9FAFC]
              p-5
            "
          >
            <div
              className="
                mb-5
                flex
                items-center
                justify-between
              "
            >
              <div className="flex items-center gap-3">
                <h2
                  className="
                    text-lg
                    font-semibold
                    text-[#25272B]
                  "
                >
                  All Documents
                </h2>

                <span
                  className="
                    rounded-full
                    bg-[#EEF0F3]
                    px-2
                    py-1
                    text-[10px]
                    font-medium
                    text-[#81858D]
                  "
                >
                  {documents.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className="flex rounded-xl border border-[#E7E9EE] bg-white p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition
      ${
        viewMode === "grid"
          ? "bg-[#EEF1FF] text-[#6377F1]"
          : "text-[#A0A4AC] hover:bg-[#F5F6F8]"
      }
    `}
                  >
                    <LayoutGrid size={16} />
                  </button>

                  <button
                    onClick={() => setViewMode("list")}
                    className={`
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-lg
      transition

      ${
        viewMode === "list"
          ? "bg-[#EEF1FF] text-[#6377F1]"
          : "text-[#A0A4AC] hover:bg-[#F5F6F8]"
              }
                  `}
                  >
                    <List size={16} />
                  </button>
                </div>

                <button
                  className="
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#E7E9EE]
                    bg-white
                    px-3
                    text-xs
                    text-[#737881]
                  "
                >
                  <SlidersHorizontal size={15} />
                  Filter
                </button>
              </div>
            </div>

            {viewMode === "grid" ? (
  <div
    className="
      grid
      grid-cols-1
      gap-4
      md:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-4
    "
  >
    {documents.map((document) => (
      <DocumentCard
        key={document.id}
        document={document}
        onClick={() =>
          navigate(`/document/${document.id}`)
        }
      />
    ))}
  </div>
) : (
  <div className="space-y-2">
    {documents.map((document) => (
      <button
        key={document.id}
        onClick={() =>
          navigate(`/document/${document.id}`)
        }
        className="
          flex
          w-full
          items-center
          gap-4
          rounded-2xl
          border
          border-[#ECEEF2]
          bg-white
          px-4
          py-3
          text-left
          transition

          hover:border-[#6377F1]/30
          hover:shadow-sm
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#EEF1FF]
            text-[#6377F1]
          "
        >
          <FileText size={18} />
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className="
              truncate
              text-sm
              font-semibold
              text-[#25272B]
            "
          >
            {document.title}
          </h3>

          <p
            className="
              mt-1
              text-xs
              text-[#9A9EA6]
            "
          >
            {document.category}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {document.users?.map(
              (user, index) => (
                <div
                  key={index}
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white
                    bg-[#EAF8E5]
                    text-[9px]
                    font-semibold
                    text-[#4A6B45]
                  "
                >
                  {user}
                </div>
              )
            )}
          </div>

          <span
            className="
              w-[90px]
              text-right
              text-xs
              text-[#9A9EA6]
            "
          >
            {document.updatedAt}
          </span>
        </div>
      </button>
    ))}
  </div>
)}
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
