import { Image } from "@nextui-org/react";
import PropTypes from "prop-types";

export default function ComingSoon({ image_src, width }) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Image width={width} alt="NextUI hero Image" src={image_src} />
    </div>
  );
}
ComingSoon.propTypes = {
  image_src: PropTypes.object,
  width: PropTypes.string,
};
