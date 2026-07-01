import { ArrowRight } from "lucide-react";

function StoryCard({
  name,
  role,
  story,
  before,
  after,
}) {
  return (
    <div className="rounded-3xl bg-[#232323] p-8">

      {/* Avatar Placeholder */}
      <div className="mx-auto -mt-16 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl font-bold text-white">
        {name.charAt(0)}
      </div>

      <h3 className="mt-6 text-center text-3xl text-white">
        {name}
      </h3>

      <p className="text-center text-gray-400">
        {role}
      </p>

      <p className="mt-8 leading-8 text-gray-300">
        {story}
      </p>

      <div className="mt-10 flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            {before}
          </p>
        </div>

        <ArrowRight className="text-gray-400" />

        <div>
          <p className="text-sm text-gray-500">
            {after}
          </p>
        </div>

      </div>

    </div>
  );
}

export default StoryCard;