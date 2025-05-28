import { useState } from 'react';
import './Icon.css';

type IconProps = {
  svgPath?: string;
  hoverFather?: boolean;
};

const Icon = ({ svgPath, hoverFather = false}: IconProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={svgPath}
        alt="icon"
        className={`icon-image ${(hovered || hoverFather) ? 'hovered' : ''}`}
      />
    </div>
  );
};

export default Icon;
