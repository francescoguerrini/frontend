import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/loginActions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = "/dashboard";

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
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="border-2 border-rose-500 p-6 rounded-xl">
        <form onSubmit={submitHandler} className="flex flex-col gap-8">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="bg-slate-50 border rounded-lg border-slate-700 hover:border-rose-600 p-[.2rem]"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-slate-50 border rounded-lg border-slate-700 hover:border-rose-600 p-[.2rem]"
          />

          <button
            type="submit"
            className="bg-rose-600 text-white rounded-full mx-auto py-1 px-3 mt-4 hover:bg-slate-700 transition-all duration-500 "
          >
            Accedi
          </button>
        </form>
        <p className="mt-8 mb-6 pl-1 flex justify-center text-slate-700 hover:text-rose-600">
          <Link to={"/password-dimenticata"}>Password dimenticata?</Link>
        </p>
      </div>
      <div>
        {error && <p className="text-red-700 ">{error}</p>}
        {loading && <p className="animate-pulse">Loading...</p>}
      </div>
    </div>
  );
};

export default LoginForm;
