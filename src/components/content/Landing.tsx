import { useState, useEffect } from 'react';
import useStore from '../../store';
import assets from "../../assets/assets"
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const { setLandingVisible } = useStore();
    const backgroundImages = assets.png.background;
    const [isClicked, setIsClicked] = useState(false);
    const [inTransition, setInTransition] = useState(false);
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [backgroundIndexSub, setBackgroundIndexSub] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!inTransition) return;
        setTimeout(() => {
            if (isClicked) return;
            setBackgroundIndex(backgroundIndexSub);
            setInTransition(false);
        }, 2500);
    }, [inTransition, backgroundIndexSub]);

    useEffect(() => {
        if (isClicked || inTransition) return;
        setTimeout(() => {
            if (isClicked) return;
            let newIndex = backgroundIndex + 1;
            if (backgroundIndex >= backgroundImages.length - 1) newIndex = 0;
            setBackgroundIndexSub(newIndex);
            setInTransition(true);
        }, 3000);
    }, [backgroundIndex]);

    const handleOnClick = () => {
        setIsClicked(true);
        navigate('/quintaarquitectes/projects');
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
                style={{ backgroundImage: `url(${backgroundImages[backgroundIndexSub]})` }}
            />
            <div
                className={`landing-backgrounds ${inTransition ? "transition" : ""} ${isClicked ? "move-image" : ""}`}
                style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}
            />
            <img src={assets.png.quinta} alt="logo" className={`landing-logo ${isClicked ? "scaled" : ""}`}/>
        </div>
    )
}