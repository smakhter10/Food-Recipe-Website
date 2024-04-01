import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../UserContext";

const Login = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      setData(data);

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Logged In Successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex mt-10 items-center gap-5  h-auto w-[1100px] rounded-tl-3xl rounded-bl-3xl shadow-2xl ">
        <div className="flex flex-col items-center col-span-2 bg-red-400 md:w-[600px] rounded-2xl ">
          <img src="./images/login.png" alt="login" />
          <Link to="/signup" className="font-roboto semi-bold text-lg pb-10">
            Create an Account
          </Link>
        </div>

        <div className="flex flex-col gap-10 p-6  ">
          <h1 className="text-5xl font-bold font-roboto">Log In</h1>
          <form className="flex flex-col gap-10" onSubmit={handleLogIn}>
            <div className="flex gap-2 border-b-2 w-64">
              <label className="font-roboto font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter Your Valid Email..."
                className=" bg-transparent outline-none"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="flex gap-2 border-b-2 w-64">
              <label className="font-roboto font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password..."
                className="bg-transparent outline-none"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-32 h-14 rounded-3xl font-roboto font-semibold bg-slate-400 hover:scale-110 transition-all duration-300"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
