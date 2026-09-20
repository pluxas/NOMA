import { useRef } from "react";

import {
  EditorContent,
  useEditor,
} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCaret from "@tiptap/extension-collaboration-caret";

import EditorToolbar from "./EditorToolbar";
import LivePointers from "./LivePointers";

function Editor({ ydoc, provider, user }) {
  const editorContainerRef = useRef(null);

  const editor = useEditor(
    {
      extensions: [
        StarterKit.configure({
          undoRedo: false,

          heading: {
            levels: [1, 2],
          },
        }),

        Collaboration.configure({
          document: ydoc,
        }),

        CollaborationCaret.configure({
          provider,
          user,
        }),
      ],
    },
    [ydoc, provider]
  );

  function handleMouseMove(event) {
    if (!editorContainerRef.current) {
      return;
    }

    const rect =
      editorContainerRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width;

    const y =
      (event.clientY - rect.top) /
      rect.height;

    provider.awareness.setLocalStateField(
      "mouse",
      {
        x,
        y,
        visible: true,
      }
    );
  }

  function handleMouseLeave() {
    provider.awareness.setLocalStateField(
      "mouse",
      {
        visible: false,
      }
    );
  }

  if (!editor) {
    return null;
  }

  return (
    <div>
      <EditorToolbar editor={editor} />

      <div
        ref={editorContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative
          min-h-[800px]
          rounded-[26px]
          border
          border-zinc-200
          bg-white
          px-12
          py-10
          shadow-[0_15px_50px_rgba(34,40,49,0.05)]
        "
      >
        <LivePointers
          provider={provider}
        />

        <EditorContent
          editor={editor}
          className="
            [&_.tiptap]:min-h-[650px]
            [&_.tiptap]:cursor-text
            [&_.tiptap]:outline-none

            [&_.tiptap]:text-[16px]
            [&_.tiptap]:leading-8
            [&_.tiptap]:text-[#393E46]

            [&_.tiptap_strong]:font-bold
            [&_.tiptap_em]:italic

            [&_.tiptap_h1]:mb-6
            [&_.tiptap_h1]:text-4xl
            [&_.tiptap_h1]:font-bold
            [&_.tiptap_h1]:leading-tight
            [&_.tiptap_h1]:text-[#222831]

            [&_.tiptap_h2]:mb-4
            [&_.tiptap_h2]:mt-8
            [&_.tiptap_h2]:text-2xl
            [&_.tiptap_h2]:font-semibold
            [&_.tiptap_h2]:text-[#222831]

            [&_.tiptap_p]:my-4

            [&_.tiptap_ul]:my-4
            [&_.tiptap_ul]:list-disc
            [&_.tiptap_ul]:pl-7

            [&_.tiptap_ol]:my-4
            [&_.tiptap_ol]:list-decimal
            [&_.tiptap_ol]:pl-7
          "
        />
      </div>
    </div>
  );
}

export default Editor;