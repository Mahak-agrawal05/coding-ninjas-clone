function FeatureItem({ icon: Icon, title, color }) {
  return (
    <div className="flex items-center gap-6">

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2D3136] bg-[#23272B] shadow-sm">

        <Icon className={`h-8 w-8 ${color}`} />

      </div>

      {/* Title */}
      <h3 className="text-[26px] font-semibold leading-snug text-white">
        {title}
      </h3>

    </div>
  );
}

export default FeatureItem;