import { useState } from "react";
import { Button } from "./button";

export const Users = () => {
  const [users] = useState([
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1,
    },
  ]);

  return (
    <>
      <div className="font-bold mt-6 text-lg text-gray-200">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-3 py-2 border rounded bg-gray-800 text-gray-200 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-3">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between items-center bg-gray-800/60 hover:bg-gray-800 transition rounded-xl p-4 shadow-md">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-gradient-to-tr from-blue-500 to-teal-400 flex justify-center items-center text-white text-lg font-bold mr-3">
          {user.firstName[0]}
        </div>
        <div className="text-gray-200">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className="w-32">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}

