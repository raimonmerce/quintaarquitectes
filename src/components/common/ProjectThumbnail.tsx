import type { Project } from "../../types";
import { useNavigate } from 'react-router-dom';
import useStore from '../../store';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import "./ProjectThumbnail.css"

type ProjectThumbnailProps = {
    project: Project
}

export default function ProjectThumbnail({project}: ProjectThumbnailProps) {
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

    if (!project) return;

    const handleClick = (project: Project) => {
        setPage("none")
        setProject(project.key)
        navigate('/quintaarquitectes/projects/' + project.key)
    };

    return (
        <div
            ref={ref}
            className="container"
            onClick={() => handleClick(project)}
            style={{ 
                backgroundImage: `url(${project.thumbnail})`,
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={`filter ${(isHover || isCentered) ? 'hoverede' : ''}`}/>
            <div className={`overlay ${(isHover || isCentered) ? 'hoverede' : ''}`}>
                {t(project.name)}
            </div>
        </div>
    )
}