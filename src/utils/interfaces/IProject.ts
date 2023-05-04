export interface IProject {
    title: string;
    desc: string;
    tools: string[];
    links: {
        github: string;
        live: string;
    };
    image: string
}