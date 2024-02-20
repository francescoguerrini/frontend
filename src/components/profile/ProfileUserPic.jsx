import { Image } from "@nextui-org/react";
import anon_user from "../../assets/anon_user.png";

const ProfileUserPic = () => {
  return (
    <div>
      <div>
        <Image src={anon_user} width={200} />
      </div>
    </div>
  );
};

export default ProfileUserPic;
