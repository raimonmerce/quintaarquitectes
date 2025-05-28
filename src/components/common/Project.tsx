import { ProjectManager } from "../../data/ProjectManager"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ButtonDefault from "../common/ButtonDefault";
import assets from "../../assets/assets";

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
            <ButtonDefault
                onClick={handleClick}
                svgPath={assets.svg.backSVG}
                text={t('back')}
            />
            <h1>{t(project.name)}</h1>
            <h2>{t(project.location)}</h2>
            <h2>{project.date}</h2>
            <h2>{project.type}</h2>
            <h2>{project.state}</h2>
            <p>{t(project.description)}</p>
            <img src={project.thumbnail} alt="logo" className="header-logo"/>
        </div>
    )
}