import { Check, X } from "lucide-react";

function TableRow({
  feature,
  codingNinjas,
  freeResources,
  otherCourses,
  dark,
}) {
  return (
    <div
      className={`grid grid-cols-[2.2fr_1fr_1fr_1fr] items-center px-10 py-8 ${
        dark ? "bg-[#151515]" : "bg-[#1B1F23]"
      }`}
    >
      {/* Feature */}
      <div className="text-[17px] font-medium text-white">
        {feature}
      </div>

      {/* Coding Ninjas */}
      <div className="flex justify-center">
        {codingNinjas ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9D86C]">
            <Check size={18} className="text-black" strokeWidth={3} />
          </div>
        ) : (
          <X size={26} className="text-[#C4C4C4]" strokeWidth={2.5} />
        )}
      </div>

      {/* Free Resources */}
      <div className="flex justify-center">
        {freeResources ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9D86C]">
            <Check size={18} className="text-black" strokeWidth={3} />
          </div>
        ) : (
          <X size={26} className="text-[#C4C4C4]" strokeWidth={2.5} />
        )}
      </div>

      {/* Other Courses */}
      <div className="flex justify-center">
        {otherCourses ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9D86C]">
            <Check size={18} className="text-black" strokeWidth={3} />
          </div>
        ) : (
          <X size={26} className="text-[#C4C4C4]" strokeWidth={2.5} />
        )}
      </div>
    </div>
  );
}

export default TableRow;