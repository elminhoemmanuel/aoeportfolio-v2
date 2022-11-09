import React from 'react'
import css from './sectionHeader.module.css'

type Props = {
    text: string;
}

const SectionHeader = ({ text }: Props) => {
  return (
    <div className={css.header}><p>&lt;/{text}&gt;</p></div>
  )
}

export default SectionHeader