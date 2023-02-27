import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto lg:max-w-screen-xl">
      <h1 className="text-2xl font-bold">
        سلام
        {user ? <span>{user.name} </span> : " "}
        به Next app خوش امدی !
      </h1>
    </div>
  );
};

export default HomePage;
