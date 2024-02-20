import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/loginActions";
import { Link, Tooltip } from "@nextui-org/react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ToggleLog = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/logout/");
  };

  return (
    <div className="flex flex-col gap-2">
      {userInfo === null ? (
        <Tooltip
          content="Login"
          placement="right"
          className="bg-seventh text-[#0b1a2e]"
        >
          <Link
            href="/login/"
            className="flex items-center bg-seventh hover:drop-shadow-xl rounded-lg text-[#370c0f] text-xl p-1 transition-all duration-100 hover:ml-2"
          >
            <FiLogIn className="" />
          </Link>
        </Tooltip>
      ) : (
        <Tooltip
          content="Logout"
          placement="right"
          className="bg-seventh text-[#0b1a2e] lg:hidden"
        >
          <button
            onClick={handleLogout}
            className="lg:w-36 flex items-center justify-center lg:justify-start lg:pl-2 bg-[#efefef] rounded-lg text-rose-700 p-1 lg:p-0 hover:scale-110 lg:hover:scale-100 lg:hover:pl-6 transition-all duration-500"
          >
            <FiLogOut className="" />
            <span className="hidden lg:flex lg:text-[.7rem] lg:pl-2">
              Logout
            </span>
          </button>
        </Tooltip>
      )}
    </div>
  );
};

export default ToggleLog;
