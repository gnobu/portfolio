import { Link } from "react-router-dom"
import {
    githubIcon, linkedinIcon, locationPinIcon,
    mailIcon, phoneIcon, twitterIcon
} from "~/assets/icons"
import {
    expressIcon, javascriptIcon, mongodbIcon,
    nodejsIcon, projectImage, reactjsIcon, remixIcon,
    typescriptIcon
} from "~/assets/images"
import IconText from "~/components/IconText"
import ProjectCard from "~/components/ProjectCard"
import TechStackBox from "~/components/TechStackBox"
import "~/styles/portfolio.css"
import { IProject } from "~/utils/interfaces/IProject"

const techStack = {
    JavaScript: javascriptIcon,
    Reactjs: reactjsIcon,
    Nodejs: nodejsIcon,
    Expressjs: expressIcon,
    MongoDB: mongodbIcon,
    TypeScript: typescriptIcon,
    Remix: remixIcon,
}

const socials = [
    {
        title: 'Twitter',
        link: 'https://twitter.com/hedonist_ub',
        icon: twitterIcon
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/inyang-ubong/',
        icon: linkedinIcon
    },
    {
        title: 'GitHub',
        link: 'https://github.com/gnobu',
        icon: githubIcon
    },
    {
        title: 'Mail',
        link: 'mailto:inyangubong.portfolio@gmail.com',
        icon: mailIcon
    },
]

const projects: IProject[] = [
    {
        title: 'Project Title 1',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime a illo, nostrum sint assumenda ex. Ea consequatur fugit quod architecto.',
        tools: ['CSS', 'React', 'Node.js', 'MongoDB'],
        links: {
            github: '.',
            live: '.'
        },
        image: projectImage,
    },
    {
        title: 'Project Title 2',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime a illo, nostrum sint assumenda ex. Ea consequatur fugit quod architecto.',
        tools: ['CSS', 'React', 'Node.js', 'MongoDB'],
        links: {
            github: '.',
            live: '.'
        },
        image: projectImage,
    },
    {
        title: 'Project Title 3',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime a illo, nostrum sint assumenda ex. Ea consequatur fugit quod architecto.',
        tools: ['CSS', 'React', 'Node.js', 'MongoDB'],
        links: {
            github: '.',
            live: '.'
        },
        image: projectImage,
    },
]

export default function Portfolio() {
    return (
        <main>
            <section className="hero m-blk-6">
                <div className="container">
                    <div className="box outerBox m-ln-auto m-blk-5">
                        <div className="box innerBox">
                            <div className="imageBox"></div>
                        </div>
                    </div>
                    <div className="hero-text">
                        <h1>
                            <span className="blk f-s-3 m-blk-1">Hi, I am</span>
                            <span className="blk col-sec">Ubong Inyang.</span>
                            <span className="blk m-blk-2">
                                <span className="col-sec">Full-Stack Developer, </span>
                                based in Nigeria.
                            </span>
                            <span className="f-s-4">I'm seeking to blend technical expertise
                                and creative flair to develop captivating,
                                high-performing digital experiences.
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            <section id="skills" className="tech m-blk-6">
                <div className="container">
                    <h2 className="section-title col-sec">My Tech Stack</h2>
                    <div className="flex gap-1 f-wrap jst-center">
                        {Object.entries(techStack).map(([title, logo]) => (
                            <TechStackBox key={title} techLogo={logo} techTitle={title} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="m-blk-6">
                <div className="container">
                    <h2 className="section-title col-sec">My Featured Projects</h2>
                    <div className="projects">
                        {projects.map((project, idx) =>
                            <ProjectCard key={project.title} project={project} index={idx + 1} />
                        )}
                    </div>
                </div>
            </section>

            <section id="contact" className=" m-blk-6">
                <div className="container contact-grid">
                    <div className="m-blk-4">
                        <h2 className="section-title col-sec">Get in Touch</h2>
                        <p>I'm available to discuss concepts and project ideas.
                            Send me an email or a message on one of my social media pages.
                        </p>
                        <div className="flex gap-1 m-blk-4">
                            <IconText src={phoneIcon} text="+234 806 981 9992" />
                            <IconText src={locationPinIcon} text="Nigeria" />
                        </div>
                        <div className="flex gap-1 al-end">
                            {socials.map(social => (
                                <Link key={social.title} to={social.link} target="_blank"><IconText src={social.icon} classNames="f-s-6" /></Link>
                            ))}
                        </div>
                    </div>
                    <div className="m-blk-4">
                        <h3 className="col-sec centered-tex m-blk-0">Checkout My Blog</h3>
                        <p className="centered-tex">I enjoy writing about frontend and backend development.</p>
                        <div className="flex jst-cente">
                            <Link to={'/blog'} className="button outline">Learn with me</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
