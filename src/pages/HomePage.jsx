import {
  FileText,
  MoreHorizontal,
  Plus,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const documents = [
  {
    id: "1",
    title: "Project proposal",
    updatedAt: "5 min ago",
    users: ["R", "A"],
  },
  {
    id: "2",
    title: "University notes",
    updatedAt: "2 hours ago",
    users: ["R"],
  },
  {
    id: "3",
    title: "Marketing ideas",
    updatedAt: "Yesterday",
    users: ["R", "M", "A"],
  },
];

function HomePage() {
  const navigate = useNavigate();

  function createDocument() {
    const id = Date.now();

    navigate(`/document/${id}`);
  }

  return (
    <div className="min-h-screen bg-[#F5F7F6]">

      <Sidebar />

      <main className="ml-[76px] px-12 py-12">

        <div className="mx-auto max-w-7xl">

          <header className="mb-12 flex items-end justify-between">

            <div>
              <p className="mb-2 text-sm font-medium text-[#29A19C]">
                Workspace
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-[#222831]">
                Your documents
              </h1>

              <p className="mt-3 text-sm text-zinc-500">
                Create, edit and collaborate with your team.
              </p>
            </div>

            <button
              onClick={createDocument}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#222831]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:-translate-y-0.5
                hover:bg-[#393E46]
                hover:shadow-lg
              "
            >
              <Plus size={18} />

              New document
            </button>

          </header>

          <section>

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-lg font-semibold text-[#222831]">
                Recent
              </h2>

              <button className="text-sm font-medium text-[#29A19C]">
                View all
              </button>

            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
                xl:grid-cols-3
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

          </section>

        </div>
      </main>

    </div>
  );
}

function DocumentCard({
  document,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        min-h-[210px]
        rounded-[24px]
        border
        border-zinc-200
        bg-white
        p-6
        text-left
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-[#29A19C]/40
        hover:shadow-[0_20px_45px_rgba(34,40,49,0.08)]
      "
    >

      <div className="flex items-start justify-between">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-[#29A19C]/10
            text-[#29A19C]
          "
        >
          <FileText size={22} />
        </div>

        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            text-zinc-400
            opacity-0
            transition
            group-hover:bg-zinc-100
            group-hover:opacity-100
          "
        >
          <MoreHorizontal size={18} />
        </div>

      </div>

      <div className="mt-10">

        <h3 className="text-base font-semibold text-[#222831]">
          {document.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Edited {document.updatedAt}
        </p>

      </div>

      <div className="mt-5 flex items-center">

        {document.users.map((user, index) => (
          <div
            key={index}
            className="
              -ml-1
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-[#A3F7BF]
              text-[10px]
              font-bold
              text-[#222831]
            "
          >
            {user}
          </div>
        ))}

      </div>

    </button>
  );
}

export default HomePage;