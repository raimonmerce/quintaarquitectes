
export type PageType = 'project' | 'contact' | 'about' | 'none';

export type ProjectState = 'Done' | 'In contruction' | 'Concurs';
 
export interface Project {
    key: string;
    name: string;
    description: string;
    thumbnail: string;
    images: string[];
    location: string;
    date: number;
    type: "Public" | "Privat";
    state: ProjectState;
}