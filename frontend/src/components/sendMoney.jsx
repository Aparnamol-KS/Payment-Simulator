const SendMoney = () => {
  return (
    <div className="flex justify-center h-screen bg-gray-950 text-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border border-gray-700 max-w-md p-6 space-y-8 w-96 bg-gray-900 shadow-xl rounded-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-400">Send Money</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-2xl text-white">A</span>
            </div>
            <h3 className="text-xl font-semibold">Friend&apos;s Name</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-300"
              >
                Amount (in ₹)
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="justify-center rounded-md h-10 px-4 py-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-all">
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
