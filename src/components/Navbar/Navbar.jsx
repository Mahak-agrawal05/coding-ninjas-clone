import { ChevronDown } from "lucide-react";
import logo from "../../assets/images/logo.svg";

const navItems = [
  "Job Bootcamp",
  "IIT Certifications",
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Coding Ninjas"
            className="h-8 w-auto"
          />
        </a>

        {/* Navigation */}
        <ul className="flex items-center gap-10 text-[15px] font-medium text-[#1A1A1A]">

          {navItems.map((item) => (
            <li
              key={item}
              className="flex cursor-pointer items-center gap-1 transition hover:text-orange-500"
            >
              {item}
              <ChevronDown size={16} />
            </li>
          ))}

        </ul>

        {/* Login */}
        <button className="rounded-lg border border-orange-500 px-6 py-2.5 text-[15px] font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;