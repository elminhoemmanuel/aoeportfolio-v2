import React, { useState } from 'react'
import Link from "next/link"
import css from './navbar.module.css'

type Props = {
    theme: string | null;
}

const navItems = ["About", "Projects", "Contact"]

const Navbar = ({ theme }: Props) => {
    const [active, setActive] = useState("About");
    const handleClick = (val: string) => setActive(val);
    const getClassName = (val:string) => theme === "dark" ? (active === val ? css.navItemActiveBlack : css.navItemBlack) : (active === val ? css.navItemActiveWhite : css.navItemWhite);
    const getNavbarClassName = () => theme === "dark" ? css.navbarBlack : css.navbarWhite;
    return (
        <div className={css.navHolder}>
            <div className={`${getNavbarClassName()}`}>
                {
                    navItems.map((item) => (
                        <Link href={`#${item}`} key={item}>
                            <a onClick={() => handleClick(item)} className={`${getClassName(item)}`}>
                                {item}
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar