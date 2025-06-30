import type { Project } from "../../types";
import { useNavigate } from 'react-router-dom';
import useStore from '../../store';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import "./ImageThumbnail.css"

type ImageThumbnailProps = {
    src: string;
    text: string;
}

export default function ImageThumbnail({src, text}: ImageThumbnailProps) {
    const { setPage, setProject, isMobile } = useStore();
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [isCentered, setIsCentered] = useState(false);
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isMobile) return;
        const checkCenterIntersection = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const inX = centerX >= rect.left && centerX <= rect.right;
            const inY = centerY >= rect.top && centerY <= rect.bottom;

            setIsCentered(inX && inY);
        };

        window.addEventListener('scroll', checkCenterIntersection);
        window.addEventListener('resize', checkCenterIntersection);

        checkCenterIntersection();

        return () => {
            window.removeEventListener('scroll', checkCenterIntersection);
            window.removeEventListener('resize', checkCenterIntersection);
        };
    }, [isMobile]);


    const handleClick = () => {
        console.log("AAA")
    };

    return (
        <>
            <div
                className="img-container"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                ref={ref}
            >
                <img src={src} alt="img" className=""/>
                <div className={`overlay ${(isHover || isCentered) ? 'hoverede' : ''}`}>
                    {t(text)}
                </div>
            </div>

            {/* <div
                ref={ref}
                className="container"
                onClick={() => handleClick()}
                style={{ 
                    backgroundImage: `url(${src})`,
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <div className={`filter ${(isHover || isCentered) ? 'hoverede' : ''}`}/>
                <div className={`overlay ${(isHover || isCentered) ? 'hoverede' : ''}`}>
                    {t(text)}
                </div>
            </div> */}
        </>
    )
}