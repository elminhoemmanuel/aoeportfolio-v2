import React from 'react'
import Link from 'next/link'
import css from './contact.module.css'
import SectionHeader from '@/components/common/SectionHeader'
import { socials } from '../../../data'

const Contact = () => {
    return (
        <div id='Contact' className={css.contact}>
            <div>
                <p className={css.question}>Got a project in mind?</p>
                <p className={css.email}>You can reach out to me at <Link href="mailto:amodue15@gmail.com"><a target="_blank">amodue15@gmail.com</a></Link></p>
                <img className={css.pattern} src="/images/pattern2.png" alt="pattern 2" />
            </div>

            <div>
                <SectionHeader text='Socials' />
                <div>
                    {
                        socials.map((item)=>(
                            <Link key={item.id} href={item.link}><a className={css.socialLink} target="_blank">{item.name}</a></Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact