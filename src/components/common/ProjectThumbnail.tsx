import { ProjectManager } from "../../data/ProjectManager"
import type { Project } from "../../types";
import { useNavigate } from 'react-router-dom';
import useStore from '../../store';

type ProjectThumbnailProps = {
    id: string
}

export default function ProjectThumbnail({id}: ProjectThumbnailProps) {
    const { setPage, setProject } = useStore();
    const projectManager = ProjectManager.getInstance();
    const project = projectManager.getById(id);
    const navigate = useNavigate();
    if (!project) return;

    const handleClick = (project: Project) => {
        setPage("none")
        setProject(project.key)
        navigate('/quintaarquitectes/projects/' + project.key)
    };

    return (
        <div className="header" onClick={() => handleClick(project)}>
            {project.name}
            <img src={project.thumbnail} alt="logo" className="header-logo"/>
        </div>
    )
}