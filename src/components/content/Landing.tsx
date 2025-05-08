import { useState } from 'react';
import useStore from '../../store';
import assets from "../../assets/assets"

export default function Landing() {
    const { setLandingVisible } = useStore();
    const [isClicked, setIsClicked] = useState(false);

    const handleOnClick = () => {
        setIsClicked(true);

        setTimeout(() => {
            setLandingVisible(false);
        }, 2500);
    };

    return (
        <div 
            className={`landing-container ${isClicked ? "move-image" : ""}`}
            onClick={handleOnClick}
        >
            <div
                className={`landing-backgrounds ${isClicked ? "move-image" : ""}`}
            />
            <img src={assets.png.quinta} alt="logo" className={`landing-logo ${isClicked ? "scaled" : ""}`}/>
            <p>Clicka el logo</p>

        </div>
    )
}