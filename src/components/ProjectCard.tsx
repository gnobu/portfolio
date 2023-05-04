import { useState } from 'react'
import { Link } from "react-router-dom"

import IconText from "./IconText"
import { githubIcon, outboxIcon } from "~/assets/icons"
import { IProject } from "~/utils/interfaces/IProject"
import { StringUtility } from '~/utils/stringUtility'
import useResposiveMode from '~/hooks/useRensponsiveMode'

export default function ProjectCard({ project, index }: { project: IProject, index: number }) {

    const [opened, setOpened] = useState(false)

    const { isMidMobile, isSmMobile } = useResposiveMode()
    const desc = isSmMobile ? StringUtility.showXWords(project.desc, 13) + '...' : project.desc

    const formattedIndex = index < 10 ? `0${index}` : index
    return (
        <article onClick={() => { setOpened(prev => !prev) }} className="project m-blk-2 p-blk-2 p-ln-2 pos-rel">
            <img className={`project-image ${opened ? 'opened' : ''}`} src={project.image}
                width={300} height={150}
                alt="project image" />
            {opened
                ? <div className="project-details p-blk-3 p-ln-3">
                    <div className="flex jst-btwn al-center">
                        <h3 className="m-blk-0">{project.title}</h3>
                        <span className="project-index stroke-text">{formattedIndex}</span>
                    </div>
                    <p className={`desc f-grow ${isMidMobile ? 'm-blk-1' : ''}`}>{desc}</p>
                    <ul className="no-list-pad no-list-style m-blk-2 flex f-wrap jst-end gap-p25">
                        {project.tools.map(tool => <li key={tool}>*{tool}</li>)}
                    </ul>
                    <div className="flex gap-p5 jst-end">
                        <Link onClick={e => { e.stopPropagation() }} to={project.links.github}
                            target='_blank' title="See the code">
                            <IconText src={githubIcon} classNames="f-s-6" />
                        </Link>
                        <Link onClick={e => { e.stopPropagation() }} to={project.links.live}
                            target='_blank' title="Live preview">
                            <IconText src={outboxIcon} classNames="f-s-6" />
                        </Link>
                    </div>
                </div>
                : null
            }
        </article>
    )
}
