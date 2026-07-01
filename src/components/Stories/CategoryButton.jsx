function CategoryButton({ text, active }) {
  return (
    <button
      className={`rounded-full px-6 py-3 transition
      ${
        active
          ? "bg-white text-black"
          : "bg-[#2B2B2B] text-gray-300 hover:bg-[#383838]"
      }`}
    >
      {text}
    </button>
  );
}

export default CategoryButton;