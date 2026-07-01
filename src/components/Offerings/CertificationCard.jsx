function CertificationCard({
  image,
  collegeLogo,
  title,
  institute,
  techIcons,
  duration,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E8E8E8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Banner */}
      <div className="relative">

        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover"
        />

        {/* College Logo */}
        <div className="absolute -bottom-7 left-7 rounded-full border-4 border-white bg-white p-2 shadow-lg">

          <img
            src={collegeLogo}
            alt={institute}
            className="h-14 w-14 rounded-full object-cover"
          />

        </div>

      </div>

      {/* Content */}
      <div className="p-7 pt-12">

        <h3 className="mb-3 text-[26px] font-bold leading-snug text-[#1A1A1A]">
          {title}
        </h3>

        <p className="mb-8 text-gray-500">
          {institute}
        </p>

        <div className="flex items-center justify-between">

          <div className="flex gap-3">
            {techIcons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt=""
                className="h-7 w-7 object-contain"
              />
            ))}
          </div>

          <span className="rounded-full bg-[#F5F5F5] px-4 py-2 text-sm font-semibold text-gray-700">
            {duration}
          </span>

        </div>

      </div>

    </div>
  );
}

export default CertificationCard;