import SectionHeader from '@/components/common/SectionHeader';
import React from 'react'
import css from './about.module.css'

type Props = {
    theme: string | null;
}

const About = ({ theme }: Props) => {
    const getStarUrl = () => theme === "dark" ? "whitestar" : "blackstar"
    return (
        <div className={css.about}>
            <div className={css.text}>
                <p>
                    Hello! I'm Emmanuel, a Frontend developer based in Abuja, Nigeria. I enjoy coding stuff,mostly those found on the internet whether that be websites, web applications, or anything in between.<br/><br/>
                    My goal is to always build products that provide pixel-perfect, performant experiences.
                </p>
                <img className={css.star} src={`/images/${getStarUrl()}.svg`} alt="star icon" />
            </div>

            <div className={css.skills}>
                <SectionHeader text='Skillset' />
                <SectionHeader text='Skillset' />
                <SectionHeader text='Skillset' />
                <SectionHeader text='Skillset' />
                <SectionHeader text='Skillset' />
                <SectionHeader text='Skillset' />
            </div>
        </div>
    )
}

export default About