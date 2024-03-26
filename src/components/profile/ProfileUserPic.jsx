import { Image } from "@nextui-org/react";
// import anon_user from "../../assets/anon_user.png";
import rafael from "../../assets/rafael.png";

const ProfileUserPic = () => {
  return (
    <div>
      <div>
        <Image src={rafael} width={200} />
      </div>
    </div>
  );
};

export default ProfileUserPic;
