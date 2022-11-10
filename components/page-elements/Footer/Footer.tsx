import React from 'react'
import Link from 'next/link'
import css from './footer.module.css'

const Footer = () => {
    return (
        <div className={css.footer}>
            <div>
                <p className={css.text}>© Emmanuel Amodu <br />All Rights Reserved</p>
            </div>
            <div>
                <Link href="#TopNav"><a className={css.text}>BACK TO THE TOP</a></Link>
            </div>
        </div>
    )
}

export default Footer