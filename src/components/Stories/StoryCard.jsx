import { ArrowRight } from "lucide-react";

function StoryCard({
  image,
  name,
  role,
  story,
  before,
  after,
}) {
  return (
    <div className="relative rounded-[28px] border border-[#2F3338] bg-[#1F2227] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="mx-auto -mt-16 h-24 w-24 rounded-full border-4 border-[#15181A] object-cover"
      />

      {/* Name */}
      <h3 className="mt-6 text-center text-[28px] font-bold text-white">
        {name}
      </h3>

      {/* Role */}
      <p className="mt-2 text-center text-sm text-gray-400">
        {role}
      </p>

      {/* Story */}
      <p className="mt-8 min-h-[180px] text-[16px] leading-8 text-gray-300">
        {story}
      </p>

      {/* Before / After */}
      <div className="mt-8 flex items-center justify-between border-t border-[#2F3338] pt-6">

        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Before
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            {before}
          </p>
        </div>

        <ArrowRight size={20} className="text-orange-400" />

        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            After
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            {after}
          </p>
        </div>

      </div>

    </div>
  );
}

export default StoryCard;