function QuickActionCard({
  icon: Icon,
  title,
  description,
  background,
  iconColor,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        min-h-[76px]
        items-center
        gap-4
        rounded-2xl
        border
        border-[#ECEEF2]
        bg-white
        px-4
        text-left
        transition
        hover:-translate-y-0.5
        hover:border-[#DDE1EA]
        hover:shadow-[0_8px_25px_rgba(40,50,70,0.06)]
      "
    >
      <div
        className={`
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          ${background}
          ${iconColor}
        `}
      >
        <Icon size={19} />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#25272B]">
          {title}
        </h3>

        <p className="mt-1 text-xs text-[#999DA5]">
          {description}
        </p>
      </div>
    </button>
  );
}

export default QuickActionCard;