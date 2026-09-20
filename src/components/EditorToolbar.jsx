import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Undo2,
  Redo2,
} from "lucide-react";

function EditorToolbar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div
      className="
        sticky
        top-5
        z-30
        mx-auto
        mb-6
        flex
        w-fit
        items-center
        gap-1
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-1.5
        shadow-[0_10px_35px_rgba(34,40,49,0.10)]
      "
    >
      <ToolbarButton
        active={editor.isActive("bold")}
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
      >
        <Bold size={18} />
      </ToolbarButton>

      <ToolbarButton
        active={editor.isActive("italic")}
        onClick={() =>
          editor.chain().focus().toggleItalic().run()
        }
      >
        <Italic size={18} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton
        active={editor.isActive("heading", {
          level: 1,
        })}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 1 })
            .run()
        }
      >
        <Heading1 size={18} />
      </ToolbarButton>

      <ToolbarButton
        active={editor.isActive("heading", {
          level: 2,
        })}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 2 })
            .run()
        }
      >
        <Heading2 size={18} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton
        active={editor.isActive("bulletList")}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleBulletList()
            .run()
        }
      >
        <List size={18} />
      </ToolbarButton>

      <ToolbarButton
        active={editor.isActive("orderedList")}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleOrderedList()
            .run()
        }
      >
        <ListOrdered size={18} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton
        onClick={() =>
          editor.chain().focus().undo().run()
        }
      >
        <Undo2 size={18} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() =>
          editor.chain().focus().redo().run()
        }
      >
        <Redo2 size={18} />
      </ToolbarButton>
    </div>
  );
}

function ToolbarButton({
  children,
  active = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-lg
        transition

        ${
          active
            ? "bg-[#29A19C]/10 text-[#29A19C]"
            : "text-zinc-500 hover:bg-zinc-100 hover:text-[#222831]"
        }
      `}
    >
      {children}
    </button>
  );
}

function Divider() {
  return (
    <div className="mx-1 h-6 w-px bg-zinc-200" />
  );
}

export default EditorToolbar;