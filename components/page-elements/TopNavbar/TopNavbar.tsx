import Link from 'next/link'
import React from 'react'
import css from './topNavbar.module.css'

type Props = {
    theme: string | null;
    toggleTheme: ()=>void;
}

const TopNavbar = ({theme, toggleTheme}: Props) => {

    const getToggleUrl = () => theme === "dark" ? "darktoggle" : "lighttoggle"

  return (
    <nav className={css.nav}>
        <Link href="#"><a><h1 className={css.logo}>&lt;/aguythatcodes&gt;</h1></a></Link>
        <button onClick={()=>toggleTheme()} className={css.themeSwitch}>
            <img src={`/images/${getToggleUrl()}.svg`} alt="Dark mode toggle image" />
        </button>
    </nav>
  )
}

export default TopNavbar