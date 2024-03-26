import { Image } from "@nextui-org/react";
import ProfileUserPic from "../components/profile/ProfileUserPic";
import ProfileInfo from "../components/profile/ProfileInfo";
// import ComingSoon from "../components/ComingSoon";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";

const BD_ProfiloUtente = () => {
  return (
    <div className="containerl ">
      <div className="flex flex-col lg:flex-row h-[100%] w-[100%] gap-2 p-2">
        <div
          id="box1"
          className="h-1/3 lg:w-1/3 lg:h-full rounded-xl shadow-lg"
        >
          <div className="bg-seventh flex lg:flex-col h-full w-full rounded-xl">
            <div className="w-1/3 lg:w-[100%] lg:h-1/2 ">
              <div className="h-full flex items-center justify-center lg:border-b ">
                <ProfileUserPic />
              </div>
            </div>
            <div className="flex-grow">
              <div className="h-full">
                <ProfileInfo />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow rounded-xl">
          <div className="flex h-full w-full lg:flex-col gap-1">
            <div className="w-1/2 lg:w-[100%] lg:h-1/2">
              <div className="flex flex-col lg:flex-row w-full h-full gap-1">
                <div className="w-full bg-seventh flex-grow border p-1 rounded-lg shadow-md flex items-center">
                  <Image width={750} alt="NextUI hero Image" src={image1} />
                </div>
                <div className="bg-seventh border rounded-lg p-1 shadow-md h-1/3 lg:h-full lg:w-1/3">
                  <Image width={190} alt="NextUI hero Image" src={image4} />
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col lg:flex-row h-full w-full gap-1">
                <div className="bg-seventh border rounded-lg p-1 shadow-md h-1/3 lg:h-full lg:w-1/3">
                  <Image width={170} alt="NextUI hero Image" src={image3} />
                </div>
                <div className="w-full bg-seventh border rounded-lg p-1 shadow-md flex-grow flex items-center">
                  <Image width={770} alt="NextUI hero Image" src={image2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BD_ProfiloUtente;
