import SectionHeader from '@/components/common/SectionHeader';
import React from 'react'
import css from './hero.module.css'

type Props = {
    theme: string | null;
}

const Hero = ({ theme }: Props) => {
    const getStarUrl = () => theme === "dark" ? "whitestar" : "blackstar"
    return (
        <div id='Hero' className={css.hero}>
            <h1 className={css.text}>Frontend engineer,</h1>
            <h1 className={css.text}>obsessed with building</h1>
            <h1 className={css.text}>cool web apps <img className={css.pattern} src="/images/pattern.png" alt="pattern" /></h1>

            <div className={css.info}>
                <p className={css.infotext}>Scroll down to learn more and<br /> view selected projects</p>
                <img className={css.star} src={`/images/${getStarUrl()}.svg`} alt="star icon" />
            </div>
        </div>
    )
}

export default Hero