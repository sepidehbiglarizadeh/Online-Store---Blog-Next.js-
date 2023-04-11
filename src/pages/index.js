import { useSelector } from "react-redux";

const HomePage = () => {
  const userInfo = useSelector((state) => state.userSignin);
  const { user } = userInfo;

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
