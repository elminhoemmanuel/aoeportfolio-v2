import SectionHeader from '@/components/common/SectionHeader';
import { experiences, resumeLink, technologies } from '../../../data';
import React from 'react';
import css from './skills.module.css';
import Button from '@/components/common/Button';
import { BsArrowUpRight } from 'react-icons/bs';
import Link from 'next/link';

const Skills = () => {
    return (
        <div className={css.skills}>
            <div>
                <SectionHeader hasLine text='Skillset' />
                <div>
                    {
                        technologies.map((item) => (
                            <p className={css.tech} key={item}>{item}</p>
                        ))
                    }
                </div>
            </div>
            <div>
                <SectionHeader hasLine text='Work Experience' />
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
                <Link href={resumeLink}>
                    <a target="_blank" className={css.btn}>
                        <p className={css.btnText}>DOWNLOAD RESUME</p>
                        <BsArrowUpRight className={css.downArrow} />
                    </a>
                </Link>
            </Button>
        </div>
    )
}

export default Skills