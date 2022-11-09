import SectionHeader from '@/components/common/SectionHeader';
import { experiences, resumeLink, technologies } from '../../../data';
import React from 'react'
import css from './skills.module.css'
import Button from '@/components/common/Button';
import Link from 'next/link';

const Skills = () => {
    return (
        <div className={css.skills}>
            <div>
                <SectionHeader text='Skillset' />
                <div>
                    {
                        technologies.map((item) => (
                            <p className={css.tech} key={item}>{item}</p>
                        ))
                    }
                </div>
            </div>
            <div>
                <SectionHeader text='Work Experience' />
                <div>
                    {
                        experiences.map((item) => (
                            <div className={css.experience} key={item.id}>
                                <p className={css.company}>{item.company},<span className={css.location}>{item.location}</span></p>
                                <p className={css.duration}>{item.duration}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Button>
                <Link target="_blank" href={resumeLink}>
                    <a className={css.btn}>
                        <p className={css.btnText}>DOWNLOAD RESUME</p>
                        <img className={css.downloadArrow} src="/images/downarrow.svg" alt='download arrow icon' />
                    </a>
                </Link>
            </Button>
        </div>
    )
}

export default Skills