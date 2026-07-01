import FeatureItem from "./FeatureItem";
import { features } from "./whyUsData";
import { VolumeX } from "lucide-react";

function WhyUs() {
  return (
    <section className="bg-[#15181A] py-20">

      <div className="mx-auto max-w-[1200px] px-6">

        {/* Watermark */}
        <h2 className="mb-14 text-center text-7xl font-bold tracking-tight text-[#34383D] lg:text-8xl">
          WHY US
        </h2>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#2C2F34] bg-[#202326] shadow-lg">

            <img
              src="https://picsum.photos/700/780?random=1"
              alt="mentor"
              className="h-full w-full object-cover"
            />

            <button className="absolute right-5 top-5 rounded-xl bg-[#2D3034] p-3">
              <VolumeX className="text-gray-300" size={20} />
            </button>

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">

              <h3 className="text-3xl font-bold text-orange-500">
                Ankush Singla
              </h3>

              <p className="mt-2 text-gray-300">
                Co-Founder, Coding Ninjas
              </p>

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-10">

            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                {...feature}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUs;