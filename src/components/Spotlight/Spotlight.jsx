import { Sparkles, Play } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { spotlightNews } from "./spotlightData";

function Spotlight() {
  return (
    <section className="bg-[#F8F1EE] py-20">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Heading */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
            <Sparkles size={20} className="text-orange-500" />
          </div>

          <h2 className="text-[38px] font-bold text-[#1A1A1A]">
            Coding Ninjas in spotlight
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.4fr]">

          {/* Left TEDx Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

            <div className="flex h-[500px] flex-col items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-50">

              <h2 className="mb-3 text-6xl font-bold text-red-600">
                TEDx
              </h2>

              <p className="text-center text-2xl font-semibold text-gray-700">
                Demand, Supply, Run!
              </p>

              <p className="mt-2 text-lg text-gray-500">
                Ankush Singla
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-xl border-2 border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white">
                <Play size={18} />
                Play Video
              </button>

            </div>

          </div>

          {/* Right News Cards */}
          <div className="grid grid-cols-3 gap-4">

            {spotlightNews.map((item) => (
              <SpotlightCard
                key={item.id}
                {...item}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Spotlight;