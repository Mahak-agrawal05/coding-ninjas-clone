import { Quote } from "lucide-react";
import CategoryButton from "./CategoryButton";
import StoryCard from "./StoryCard";
import { categories, stories } from "./storiesData";

function Stories() {
  return (
    <section className="bg-[#15181A] py-20">

      <div className="mx-auto max-w-[1200px] px-6">

        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Quote size={24} />
            </div>

            <h2 className="text-[38px] font-bold leading-tight text-white">
              Stories from people like you
            </h2>

          </div>

          <a
            href="#"
            className="text-[15px] font-medium text-orange-500 hover:underline"
          >
            Read all success stories
          </a>

        </div>

        {/* Categories */}
        <div className="mb-14 flex flex-wrap justify-center gap-4">

          {categories.map((item, index) => (
            <CategoryButton
              key={item}
              text={item}
              active={index === 0}
            />
          ))}

        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">

          {stories.map((story) => (
            <StoryCard
              key={story.id}
              {...story}
            />
          ))}

        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">

          <button className="rounded-xl bg-[#FF6B3D] px-8 py-3.5 text-lg font-semibold text-white transition hover:bg-[#ff5a26]">
            Explore offerings
          </button>

        </div>

      </div>

    </section>
  );
}

export default Stories;