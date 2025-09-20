export const Appbar = () => {
  return (
    <div className="h-20 flex justify-between items-center px-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 shadow-xl rounded-b-xl">
    
      <div className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 tracking-wide">
        PayTM
      </div>

      <div className="flex items-center space-x-3">
        <span className="text-md text-gray-300">Hello,</span>
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-blue-800 to-teal-600 flex justify-center items-center text-white font-semibold cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-200">
          U
        </div>
      </div>
    </div>
  );
};
