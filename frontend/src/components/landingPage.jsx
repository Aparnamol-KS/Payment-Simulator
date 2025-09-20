import { useNavigate } from "react-router-dom";
import { Button } from "./button";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gray-950 flex flex-col font-[Montserrat] justify-center items-center text-center px-4">
      <h1 className="text-7xl font-extrabold text-blue-400 mb-4 font-[Merriweather]">
        Payment Simulator
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Send and receive money easily, securely, and instantly.
      </p>
      <div className="flex space-x-4 w-70">
        <Button label={"Sign In"} onClick={() => navigate("/signin")}/>
        <Button label={"Sign Up"} onClick={() => navigate("/signup")}/>

        
      </div>
    </div>
  );
};

export default LandingPage;
