
export type PageType = 'project' | 'contact' | 'about';

export type ProjectState = 'Done' | 'In contruction' | 'Concurs';
 
export interface Project {
    name: string;
    description: string;
    thumbnail: string;
    images: string[];
    location: string;
    date: number;
    type: "Public" | "Privat";
    state: ProjectState;
}