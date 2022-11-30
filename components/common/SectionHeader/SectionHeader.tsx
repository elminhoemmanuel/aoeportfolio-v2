import React from 'react'
import css from './sectionHeader.module.css'

type Props = {
    text: string;
    hasLine: boolean;
}

const SectionHeader = ({ text, hasLine }: Props) => {
    const getClassName = () => hasLine ? css.headerLine : css.header;
    return (
        <div className={getClassName()}><p>&lt;/{text}&gt;</p></div>
    )
}

export default SectionHeader