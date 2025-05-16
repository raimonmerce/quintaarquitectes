import type { Project } from '../types';
import projectData from './ProjectsData';

export class ProjectManager {
    private static instance: ProjectManager | null = null;
    private videos: { [id: string]: Project };

    private constructor() {
        this.videos = this.loadVideos();
    }

    public static getInstance(): ProjectManager {
        if (this.instance === null) {
            this.instance = new ProjectManager();
        }
        return this.instance;
    }

    private loadVideos(): { [id: string]: Project } {
        return projectData;
    }

    getById(id: string): Project | null {
        return this.videos[id] || null;
    }

    public getAllIDs(): string[] {
        return Object.keys(this.videos);
    }
}