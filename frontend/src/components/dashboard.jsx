import { Appbar } from "./appbar";
import { Balance } from "./balance";
import { Users } from "./users";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100 font-[Montserrat]">
      {/* Top appbar */}
      <Appbar />

      {/* Content wrapper with spacing */}
      <div className="px-8 py-8 space-y-8">
        {/* Balance Card */}
        <div className="backdrop-blur-lg bg-gray-900/60 border border-gray-700 rounded-2xl shadow-xl p-6">
          <Balance value={1200} />
        </div>

        {/* Users Card */}
        <div className="backdrop-blur-lg bg-gray-900/60 border border-gray-700 rounded-2xl shadow-xl p-6">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
