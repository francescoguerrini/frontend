import { Avatar, Link, Tooltip } from "@nextui-org/react";
import { useSelector } from "react-redux";
import anon_user from "../assets/anon_user.png";

const UserTooltip = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div>
      <div className="flex start items-center m-3">
        <Tooltip
          placement="right"
          content={userInfo?.username ? userInfo.username : "Anonymous"}
          color="#f5f5f5"
          offset={7}
        >
          <Link href="/profilo">
            <Avatar
              src={userInfo?.username ? anon_user : ""}
              size="lg"
              placement="bottom"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default UserTooltip;
