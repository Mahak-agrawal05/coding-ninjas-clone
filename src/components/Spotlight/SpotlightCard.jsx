function SpotlightCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-[#E8E5E2] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Newspaper */}
      <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-500">
        Featured
      </p>

      {/* Title */}
      <h3 className="mb-4 text-[20px] font-bold leading-7 text-[#1A1A1A]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default SpotlightCard;