import type { Project } from "../../types";
import { useNavigate } from 'react-router-dom';
import useStore from '../../store';
import { useState } from 'react';
import "./ProjectThumbnail.css"

type ProjectThumbnailProps = {
    project: Project
}

export default function ProjectThumbnail({project}: ProjectThumbnailProps) {
    const { setPage, setProject } = useStore();
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    if (!project) return;

    const handleClick = (project: Project) => {
        setPage("none")
        setProject(project.key)
        navigate('/quintaarquitectes/projects/' + project.key)
    };

    return (
        <div
            className="container"
            onClick={() => handleClick(project)}
            style={{ backgroundImage: `url(${project.thumbnail})` }}
            onMouseEnter={() => {console.log("AA"); setIsHover(true)}}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="filter"/>
            <div className={`overlay ${isHover ? 'hoverede' : ''}`}>
                {project.name}
            </div>
        </div>
    )
}