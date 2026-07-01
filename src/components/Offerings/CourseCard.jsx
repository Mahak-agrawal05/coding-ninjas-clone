function CourseCard({
  icon,
  title,
  hours,
  problems,
  learners,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E8E8E8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Top */}
      <div className="bg-[#EAF4FF] p-8">

        <div className="mb-5 text-5xl">
          {icon}
        </div>

        <h3 className="text-[28px] font-bold leading-snug text-[#1A1A1A]">
          {title}
        </h3>

      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between border-t border-gray-100 px-8 py-6">

        <div className="text-center">
          <p className="text-xl font-semibold text-[#1A1A1A]">
            {hours}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Duration
          </p>
        </div>

        <div className="h-10 w-px bg-gray-200"></div>

        <div className="text-center">
          <p className="text-xl font-semibold text-[#1A1A1A]">
            {problems}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Problems
          </p>
        </div>

        <div className="h-10 w-px bg-gray-200"></div>

        <div className="text-center">
          <p className="text-xl font-semibold text-[#1A1A1A]">
            {learners}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Learners
          </p>
        </div>

      </div>

    </div>
  );
}

export default CourseCard;