import Head from 'next/head'
import { useState, useEffect } from 'react';
import css from '@/styles/home.module.css';
import TopNavbar from '@/components/page-elements/TopNavbar';

export default function Home() {
    const [theme, setTheme] = useState<string | null>("dark");

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        const existingTheme = localStorage.getItem("theme");
        setTheme(existingTheme);
    }, [])

    return (
        <div >
            <Head>
                <title>aguythatcodes | Frontend Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div data-theme={theme} onClick={toggleTheme} className={css.container}>
                <TopNavbar />
                Hello John
            </div>

        </div>
    )
}
