export function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full text-white bg-gradient-to-r from-blue-800 to-teal-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-200 shadow"
    >
      {label}
    </button>
  );
}
