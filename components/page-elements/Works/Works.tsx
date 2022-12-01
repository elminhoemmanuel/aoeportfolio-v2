import SectionHeader from '@/components/common/SectionHeader'
import { works } from '../../../data'
import React from 'react'
import css from './works.module.css'
import WorkCard from '@/components/common/WorkCard'

const Works = () => {
    return (
        <div id='Projects' className={css.worksContainer}>
            <SectionHeader hasLine text="Works" />
            <div className={css.works}>
                {
                    works.map((item)=>(
                        <WorkCard data={item}  />
                    ))
                }
            </div>
        </div>
    )
}

export default Works