import Link from 'next/link';
import React from 'react'
import css from './workCard.module.css'
import { IoIosGlobe, IoIosGitBranch } from "react-icons/io"

type CardProps = {
    id: number;
    title: string;
    tech: string;
    brief: string;
    liveUrl: string;
    codeUrl: string;
    pattern: string;
    hasCode: boolean;
}

type WorkCardProps = {
    data: CardProps;
}

const WorkCard = ({data}: WorkCardProps) => {
    const { id, title, tech, brief, liveUrl, codeUrl, pattern, hasCode } = data;
    return (
        <div>
            <div className={css.card}>
                <p className={css.title}>{title}</p>
                <p className={css.tech}>{tech}</p>
                <p className={css.brief}>{brief}</p>
                <div className={css.links}>
                    <Link href={liveUrl}>
                        <a target="_blank" className={css.liveLink}>
                            <IoIosGlobe className={css.icon} />
                            <p>Visit Live site</p>
                        </a>
                    </Link>
                    {
                        hasCode ? <Link href={codeUrl}>
                            <a target="_blank" className={css.codeLink}>
                                <IoIosGitBranch className={css.icon} />
                                <p>Code</p>
                            </a>
                        </Link> : ''
                    }
                </div>
            </div>
            <div className={css.pattern}>
                <img src={`/images/${pattern}.png`} alt='Work Card pattern' />
            </div>
        </div>
    )
}

export default WorkCard