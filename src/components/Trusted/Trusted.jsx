import {
  Star,
  Award,
  Globe,
} from "lucide-react";

function Trusted() {
  return (
    <section className="bg-[#15181A] py-24">

      <div className="mx-auto max-w-6xl px-8">

        <h2 className="text-center text-5xl font-bold text-white">
          Trusted by learners
        </h2>

        <p className="mt-4 text-center text-gray-400">
          1,00,000+ Coding Ninjas alumni from 1,100+ companies &
          4,400+ colleges working in top product companies
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">

          {/* Facebook */}

          <div className="flex items-center gap-4">

            <Globe className="h-10 w-10 text-blue-500" />

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">4.9</span>
                <Star className="fill-yellow-400 text-yellow-400" size={18} />
              </div>

              <p className="text-gray-400">
                700+ reviews
              </p>
            </div>

          </div>

          {/* Google */}

          <div className="flex items-center gap-4">

            <Award className="h-10 w-10 text-red-500" />

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">4.7</span>
                <Star className="fill-yellow-400 text-yellow-400" size={18} />
              </div>

              <p className="text-gray-400">
                2300+ reviews
              </p>
            </div>

          </div>

          {/* Coding Ninjas */}

          <div className="flex items-center gap-4">

            <Award className="h-10 w-10 text-orange-500" />

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">4.8</span>
                <Star className="fill-yellow-400 text-yellow-400" size={18} />
              </div>

              <p className="text-gray-400">
                Course rating
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Trusted;