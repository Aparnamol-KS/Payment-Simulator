export const Balance = ({ value }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-bold text-xl text-blue-400">Your Balance</div>
      <div className="font-semibold text-2xl text-green-400">₹ {value}</div>
    </div>
  );
};
