import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import DocumentHeader from "../components/DocumentHeader";
import EditorToolbar from "../components/EditorToolbar";

function DocumentPage() {
  const { id } = useParams();

  const editorRef = useRef(null);

  const [title, setTitle] = useState(
    "Untitled document"
  );

  useEffect(() => {
    const savedTitle = localStorage.getItem(
      `document-title-${id}`
    );

    const savedContent =
      localStorage.getItem(
        `document-content-${id}`
      );

    if (savedTitle) {
      setTitle(savedTitle);
    }

    if (
      savedContent &&
      editorRef.current
    ) {
      editorRef.current.innerHTML =
        savedContent;
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(
      `document-title-${id}`,
      title
    );
  }, [title, id]);

  function handleEditorInput(event) {
    localStorage.setItem(
      `document-content-${id}`,
      event.currentTarget.innerHTML
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7F6]">

      <Sidebar />

      <main className="ml-[76px] min-h-screen">

        <DocumentHeader
          title={title}
          setTitle={setTitle}
        />

        <div className="px-10 pb-24 pt-10">

          <div className="mx-auto max-w-[920px]">

            <EditorToolbar />

            <div
              className="
                min-h-[800px]
                rounded-[26px]
                border
                border-zinc-200
                bg-white
                px-20
                py-16
                shadow-[0_15px_50px_rgba(34,40,49,0.05)]
              "
            >

              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                onInput={handleEditorInput}
                className="
                  min-h-[650px]
                  outline-none

                  text-[16px]
                  leading-8
                  text-[#393E46]

                  [&_h1]:mb-6
                  [&_h1]:text-4xl
                  [&_h1]:font-bold
                  [&_h1]:leading-tight
                  [&_h1]:text-[#222831]

                  [&_h2]:mb-4
                  [&_h2]:mt-8
                  [&_h2]:text-2xl
                  [&_h2]:font-semibold
                  [&_h2]:text-[#222831]

                  [&_p]:my-4

                  [&_ul]:my-4
                  [&_ul]:list-disc
                  [&_ul]:pl-7

                  [&_ol]:my-4
                  [&_ol]:list-decimal
                  [&_ol]:pl-7
                "
              />

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default DocumentPage;