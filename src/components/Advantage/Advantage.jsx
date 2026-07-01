import logo from "../../assets/images/logo.svg";
import TableRow from "./TableRow";
import { advantages } from "./advantageData";

function Advantage() {
  return (
    <section className="relative overflow-hidden bg-[#15181A] py-24">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-[1120px] px-6">

        {/* Heading */}
        <p className="mb-6 text-center text-4xl font-medium text-[#0B6DFF]">
          The Coding Ninjas advantage
        </p>

        {/* Table */}
        <div className="overflow-hidden rounded-[32px] border border-[#32363B] bg-[#171A1D]">

          {/* Header */}
          <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr] items-center px-10 py-9">

            <div />

            <div className="flex justify-center">
              <img
                src={logo}
                alt="Coding Ninjas"
                className="h-10"
              />
            </div>

            <div className="text-center text-[18px] text-[#D0D2D4]">
              Free resources
            </div>

            <div className="text-center text-[18px] text-[#D0D2D4]">
              Other courses
            </div>

          </div>

          {/* Rows */}
          {advantages.map((item, index) => (
            <TableRow
              key={item.id}
              {...item}
              dark={index % 2 === 1}
            />
          ))}

          {/* Bottom Branding */}

          <div className="border-t border-[#2C2F34]">

            {/* Coding Ninjas */}
            <div className="flex items-center justify-between px-10 py-8">

              <img
                src={logo}
                alt=""
                className="h-9"
              />

              <p className="font-medium bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Your dream role, faster and with confidence! ⚡
              </p>

            </div>

            <div className="mx-10 h-2 rounded-full bg-[#2D3138]">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300" />
            </div>

            {/* Others */}

            <div className="mt-10 flex items-center justify-between px-10">

              <h3 className="text-2xl font-semibold text-white">
                Others
              </h3>

              <span className="text-gray-400">
                Average role, under-confident
              </span>

            </div>

            <div className="mx-10 mt-5 mb-10 h-2 rounded-full bg-[#2D3138]">
              <div className="h-full w-[65%] rounded-full bg-gray-400" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Advantage;