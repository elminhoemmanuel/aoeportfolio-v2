import { about } from '../../../data';
import React from 'react'
import css from './about.module.css'
import Skills from '../Skills';

type Props = {
    theme: string | null;
}

const About = ({ theme }: Props) => {
    const getStarUrl = () => theme === "dark" ? "whitestar" : "blackstar"
    return (
        <div id='About' className={css.about}>
            <div className={css.text}>
                <p>
                    {about.topText}<br /><br />
                    {about.bottomText}
                </p>
                <img className={css.star} src={`/images/${getStarUrl()}.svg`} alt="star icon" />
            </div>

            <Skills />
        </div>
    )
}

export default About