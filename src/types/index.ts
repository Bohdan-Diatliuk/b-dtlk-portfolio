export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link?: string;
}

export interface Skill {
    name: string;
    level: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}