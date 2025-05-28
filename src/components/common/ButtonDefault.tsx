import { useState } from 'react';
import Icon from './Icon';
import './Icon.css';

type ButtonDefaultProps = {
  onClick: () => void;
  svgPath?: string;
  text?: string;
};

const ButtonDefault = ({ onClick, svgPath, text}: ButtonDefaultProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className="button-default"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon svgPath={svgPath} hoverFather={hovered}/>
      {(svgPath && text) && <div style ={{width: "0.5em"}}/>}
      {text}
    </button>
  );
};

export default ButtonDefault;