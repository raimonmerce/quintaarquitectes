import { ProjectManager } from "../../data/ProjectManager"
import ProjectThumbnail from "../common/ProjectThumbnail";
import TextSpecial from "../common/TextSpecial";
import { useTranslation } from 'react-i18next'
import "./Projects.css"

export default function Projects() {
    const projectManager = ProjectManager.getInstance();
    const { t } = useTranslation();
    return (
        <>
            <h2 style={{margin: "0.5em"}}><TextSpecial text={t('header.project')}/></h2>
            <div className="project-grid">
                {(() => {
                    const projects = projectManager.getAllIDs();
                    return projects.map((item, num) => {
                        const projectItem = projectManager.getById(item);
                        if (!projectItem) return;
                        return (
                            <ProjectThumbnail key={num} project={projectItem} />
                        )
                    })
                })()}
            </div>
        </>
    )
}