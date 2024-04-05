import PropTypes from "prop-types";
import { Tooltip, Avatar } from "@nextui-org/react";

const TooltipAvatar = ({
  src,
  size,
  color,
  tooltipContent,
  tooltipPlacement,
}) => {
  // Mostra l'avatar con l'immagine fornita o con l'immagine di default
  return (
    <div>
      <Tooltip content={tooltipContent} placement={tooltipPlacement}>
        <div>
          <Avatar size={size} src={src} isBordered color={color} />
        </div>
      </Tooltip>
    </div>
  );
};

// Definisci i tipi delle props
TooltipAvatar.propTypes = {
  src: PropTypes.string, // L'URL dell'immagine è opzionale e deve essere una stringa
  size: PropTypes.string,
  color: PropTypes.string,
  tooltipContent: PropTypes.string, // Contenuto del tooltip, opzionale e deve essere una stringa
  tooltipPlacement: PropTypes.string, // Posizionamento del tooltip, opzionale e deve essere una stringa
};

export default TooltipAvatar;
