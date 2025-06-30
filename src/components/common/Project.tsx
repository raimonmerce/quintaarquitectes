import { ProjectManager } from "../../data/ProjectManager"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ButtonDefault from "../common/ButtonDefault";
import assets from "../../assets/assets";
import ImageThumbnail from "./ImageThumbnail";
import "./Project.css"

type ProjectProps = {
    id: string;
}

export default function Project({id}: ProjectProps) {
    const projectManager = ProjectManager.getInstance();
    const project = projectManager.getById(id);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/quintaarquitectes/projects')
    };

    if (!project) return;

    return (
        <div className={"project-container"}>
            <div className={""}>
            <ButtonDefault
                onClick={handleClick}
                svgPath={assets.svg.backSVG}
                text={t('header.back')}
            />
            <h1>{t(project.name)}</h1>
            <h2>{t("common.location")} {t(project.location)}</h2>
            <h2>{t("common.date")} {project.date}</h2>
            <h2>{t("common.type")} {project.type}</h2>
            <h2>{t("common.state")} {project.state}</h2>
            <p>{t(project.description)}</p>
            </div>
            {project.images.map((img: string) => {
                console.log("img", img);
                return (
                    <ImageThumbnail src={img} text="AAA"/>
                )
            })}
        </div>
    )
}