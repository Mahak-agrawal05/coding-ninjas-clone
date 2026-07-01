function StatCard({
  icon: Icon,
  color,
  number,
  subtitle,
  isLast,
}) {
  return (
    <div className="flex flex-col items-center">

      {/* Icon */}
      <div
        className={`flex h-24 w-24 items-center justify-center rounded-3xl shadow-md ${color}`}
      >
        <Icon className="h-10 w-10 text-white" />
      </div>

      {/* Number */}
      <h2 className="mt-8 text-center text-[54px] font-bold leading-none text-white">
        {number}
      </h2>

      {/* Subtitle */}
      <p className="mt-3 max-w-xs text-center text-xl leading-8 text-gray-400">
        {subtitle}
      </p>

      {/* Timeline */}
      {!isLast && (
        <div className="my-10 h-24 w-[2px] rounded-full bg-[#35383E]" />
      )}

    </div>
  );
}

export default StatCard;