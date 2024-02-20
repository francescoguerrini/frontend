import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/loginActions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {error && <p className="text-red-700 ">{error}</p>}
      {loading && <p className="animate-pulse">Loading...</p>}
      <div className="border-2 border-teal-300 p-6 rounded-xl my-auto">
        <form onSubmit={submitHandler} className="flex flex-col gap-8">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="bg-slate-50 border rounded-lg border-black hover:border-teal-400 p-[.2rem]"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-slate-50 border rounded-lg border-black hover:border-teal-400 p-[.2rem]"
          />

          <button
            type="submit"
            className="bg-teal-200 rounded-full mx-auto py-1 px-3 mt-4 hover:text-teal-200 hover:bg-black transition-all duration-500 "
          >
            Accedi
          </button>
        </form>
        <p className="mt-8 mb-6 font-bold">
          <span className="">Password dimenticata?</span>
          <span className="text-rose-700 pl-1">
            <Link to={"/"}>Contattaci</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
