import StatCard from "./StatCard";
import { stats } from "./statsData";
import { ChevronUp } from "lucide-react";

function Stats() {
  return (
    <section className="bg-[#15181A] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Heading */}
        <h2 className="mb-20 text-center text-6xl font-bold leading-tight text-white lg:text-7xl">
          9 years of
          <br />
          transforming
          <br />
          tech careers
        </h2>

        {/* Timeline */}
        <div className="flex flex-col items-center">
          {stats.map((item, index) => (
            <StatCard
              key={item.id}
              {...item}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-3.5 text-lg font-semibold text-white transition hover:bg-orange-600">
            Explore Offerings
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Stats;