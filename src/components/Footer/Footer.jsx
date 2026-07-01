import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1A1717] text-white">

      {/* Top */}
      <div className="mx-auto max-w-[1200px] px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Coding Ninjas */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Coding Ninjas
            </h3>

            <ul className="space-y-3 text-[15px] text-gray-400">
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">Privacy Policy</li>
              <li className="cursor-pointer hover:text-white">Terms & Conditions</li>
              <li className="cursor-pointer hover:text-white">Pricing & Refund Policy</li>
              <li className="cursor-pointer hover:text-white">Bug Bounty</li>
              <li className="cursor-pointer hover:text-white">Review</li>
              <li className="cursor-pointer hover:text-white">Press Release</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Products
            </h3>

            <ul className="space-y-3 text-[15px] text-gray-400">
              <li className="cursor-pointer hover:text-white">Job Bootcamp</li>
              <li className="cursor-pointer hover:text-white">Code 360</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Community
            </h3>

            <ul className="space-y-3 text-[15px] text-gray-400">
              <li className="cursor-pointer hover:text-white">10X Club</li>
              <li className="cursor-pointer hover:text-white">Student Chapters</li>
              <li className="cursor-pointer hover:text-white">Hire From Us</li>
            </ul>
          </div>

          {/* Social */}
          <div>

            <p className="mb-6 text-sm leading-7 text-gray-400">
              Copyright © Sunrise Mentors Pvt. Ltd.
            </p>

            <div className="flex gap-4 text-2xl text-gray-400">

              <FaInstagram className="cursor-pointer hover:text-white" />
              <FaFacebookF className="cursor-pointer hover:text-white" />
              <FaLinkedinIn className="cursor-pointer hover:text-white" />
              <FaTwitter className="cursor-pointer hover:text-white" />
              <FaYoutube className="cursor-pointer hover:text-white" />

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-[#343434]" />

      {/* Bottom */}
      <div className="mx-auto max-w-[1200px] px-6 py-16">

        <h2 className="mb-8 text-2xl font-bold">
          Important Links
        </h2>

        <div className="flex flex-wrap gap-3 text-[15px] text-gray-400">

          <span className="font-semibold text-white">
            Job Bootcamps
          </span>

          <span>|</span>

          <span className="hover:text-white cursor-pointer">
            MERN Stack
          </span>

          <span>|</span>

          <span className="hover:text-white cursor-pointer">
            Data Analytics
          </span>

          <span>|</span>

          <span className="hover:text-white cursor-pointer">
            Java Full Stack
          </span>

        </div>

        {/* Payments */}

        <div className="mt-12 flex flex-wrap items-center gap-3">

          <span className="mr-3 text-sm text-gray-400">
            We accept payments using
          </span>

          {["VISA","UPI","PayPal","EMI","Razorpay"].map((item)=>(
            <div
              key={item}
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

      {/* Watermark */}

      <div className="overflow-hidden">

        <h1 className="select-none text-center text-[230px] font-black leading-none tracking-tight text-white/[0.03]">
          Coding Ninjas
        </h1>

      </div>

    </footer>
  );
}

export default Footer;