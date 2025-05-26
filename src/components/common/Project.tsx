import { ProjectManager } from "../../data/ProjectManager"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type ProjectProps = {
    id: string;
}

export default function Project({id}: ProjectProps) {
    const projectManager = ProjectManager.getInstance();
    const project = projectManager.getById(id);
    const { t } = useTranslation();
    const navigate = useNavigate();
    if (!project) return;

    const handleClick = () => {
        navigate('/quintaarquitectes/projects')
    };

    return (
        <div className={""}>
            <button className="button-default" onClick={handleClick}>{t('back')}</button>
            <h1>{project.name}</h1>
            <h2>{project.location}</h2>
            <h2>{project.date}</h2>
            <h2>{project.type}</h2>
            <h2>{project.state}</h2>
            <p>{project.description}</p>
            <img src={project.thumbnail} alt="logo" className="header-logo"/>
        </div>
    )
}