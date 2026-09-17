import {
  Bold,
  Heading1,
  Heading2,
  Italic,
  List,
  ListOrdered,
  Redo2,
  Undo2,
} from "lucide-react";

function EditorToolbar() {

  function execute(command, value = null) {
    document.execCommand(
      command,
      false,
      value
    );
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
        onClick={() =>
          execute("bold")
        }
      >
        <Bold size={18} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() =>
          execute("italic")
        }
      >
        <Italic size={18} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton
        onClick={() =>
          execute(
            "formatBlock",
            "h1"
          )
        }
      >
        <Heading1 size={18} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() =>
          execute(
            "formatBlock",
            "h2"
          )
        }
      >
        <Heading2 size={18} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton
        onClick={() =>
          execute(
            "insertUnorderedList"
          )
        }
      >
        <List size={18} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() =>
          execute(
            "insertOrderedList"
          )
        }
      >
        <ListOrdered size={18} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton
        onClick={() =>
          execute("undo")
        }
      >
        <Undo2 size={18} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() =>
          execute("redo")
        }
      >
        <Redo2 size={18} />
      </ToolbarButton>

    </div>
  );
}

function ToolbarButton({
  children,
  onClick,
}) {
  return (
    <button
      onMouseDown={(event) => {
        event.preventDefault();
        onClick();
      }}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-lg
        text-zinc-500
        transition
        hover:bg-[#29A19C]/10
        hover:text-[#29A19C]
      "
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